import { BaseTest } from './basetest';
import { ethers } from 'ethers';
import { fromHexString, signatureToPubkey} from '@hanchon/signature-to-pubkey';
const timeout = 999999;

function randomStr(length:number):string{
  let random = '';
  let lexicon = 'abcdefghijklmnopqrstuvwxyz'
  for (let i=0; i<length; i++) {
    let randomIndex = Math.floor(Math.random()*1000)%lexicon.length;
    random += lexicon.substr(randomIndex,1);
  }
  return random;
}
const getPubKey=async(address:string,signer:ethers.Wallet)=>{
  
  const messageToSign = 'Generate pub key'
  const signature = await signer.signMessage(messageToSign)

  const msgHash = ethers.utils.hashMessage(messageToSign);
  console.log("msgHash",msgHash);
  const msgHashBytes = ethers.utils.arrayify(msgHash);
  console.log("msgHashBytes",msgHashBytes);
  const msg = Buffer.from(messageToSign, 'utf8')
  // @ts-ignore
  let pubkey = signatureToPubkey(signature,msgHashBytes)
  // Now you have the digest,
  const recoveredPubKey = ethers.utils.recoverPublicKey(msgHashBytes, signature);
  const recoveredAddress = ethers.utils.recoverAddress(msgHashBytes, signature);
  console.log("recoveredPubKey",recoveredPubKey);
  //console.log('pubkey',pubkey);
  console.log("recoveredAddress",recoveredAddress);
  console.log("recoveredAddress kynno",BaseTest.getClient().utils.toKynno(recoveredAddress))
  return pubkey
}
const queryAccount=async(address:string,signer:ethers.Wallet)=>{
  const accountObj = await BaseTest.getClient()
          .account.queryAccount(BaseTest.getClient().utils.toKynno(address))
  let pubkey=""
  if(!accountObj.account.base_account.pub_key){
    pubkey = await getPubKey(address,signer)
  } else {
    pubkey =accountObj.account.base_account.pub_key.key
  }
  
  console.log("pubkey/*/*/*/",pubkey);
  const sender = {
      accountAddress: accountObj.account.base_account.address,
      sequence: parseInt(accountObj.account.base_account.sequence),
      accountNumber: parseInt(accountObj.account.base_account.account_number),
      pubkey
  }
  return sender
}
describe('Nft Tests', () => {
  describe('nft tx', () => {
    test(
      'nft tx',
      
      async () => {
        let denom_id = "frorkofkvor";
        let denom_name = "madou";
        let denom_schema = randomStr(10);
        var url = 'http://localhost:8545';
        let privKey = "218cb033f4dbca3950182b57fb33bb4dad5ad878e1f5e9e1ef203e095b21b11f"
        var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
        const signer = new ethers.Wallet(privKey, customHttpProvider);
        const address = await signer.getAddress()
        const sender = await queryAccount(address,signer)
        console.log("sender",sender);
        const chain = {
          chainId: 9700,
          cosmosChainId: 'kynno_9700-1',
        }
        const fee = {
          amount: '20',
          denom: 'akynno',
          gas: '200000',
        }
      
        const memo = ''
      
        const params = {
          id:denom_id,
          name:denom_name,
          schema:denom_schema
        }
        try {
          const msg = BaseTest.getClient().transaction._createTxMsgIssueDenom(
            chain,sender,fee,memo,params
          )
          console.log("msg",msg.eipToSign);
          let signature = await signer._signTypedData(
            msg.eipToSign.domain,
            msg.eipToSign.types,
            msg.eipToSign.message
          )
          let extension = BaseTest.getClient().transaction._signatureToWeb3Extension(chain, sender, signature)
          let rawTx = BaseTest.getClient().transaction._createTxRawEIP712(msg.legacyAmino.body, msg.legacyAmino.authInfo, extension)    
          // broadcats transaction
          let response = await BaseTest.getClient().transaction._broadcastTx(rawTx)
          console.log("response",response);
        } catch (error) {
          console.log("issueDenom error ",JSON.stringify(error));
        }
        
      },
      timeout
    );
  });

  describe('query nft', () => {
    test(
      'query Supply',
      async () => {
        await BaseTest.getClient()
        .nft.querySupply('madou','kynno1krjc2zs8uyzfdxm0cj2z428hm3ju2nfnymktrj')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
      },
      timeout
    );

    test(
      'query Owner',
      async () => {
        await BaseTest.getClient()
        .nft.queryOwner('kynno16yky9s6tjmv3kvvrxtnnrcn7x42ngs5wzjcywt','frorkofkvor')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
      },
      timeout
    );

    test(
      'query Collection',
      async () => {
        await BaseTest.getClient()
        .nft.queryCollection('madou')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
      },
      timeout
    );

    test(
      'query Denom',
      async () => {
        await BaseTest.getClient()
        .nft.queryDenom('0xscd5cd4ffv')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
      },
      timeout
    );
    
    test(
      'query Denoms',
      async () => {
        await BaseTest.getClient()
        .nft.queryDenoms()
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
      },
      timeout
    );

    test(
      'query NFT',
      async () => {
        await BaseTest.getClient()
        .nft.queryNFT('frorkofkvor','0xscd5cd4ffv')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
      },
      timeout
    );
  });
});
