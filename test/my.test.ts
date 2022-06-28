import { ethers } from 'ethers';
import { BaseTest } from './basetest';
import { TypedDataUtils } from 'ethers-eip712'
const timeout = 10000;

describe('TX', () => {

  describe('msgsend', () => {
    test(
      'send Account',
      async () => {
        try {
          let privateKey = '034C5553B67FCB6114AEC55308A4A74A70DA86C4F500EA4EC2B67AEF6C0A5D86'
          let wallet = new ethers.Wallet(privateKey, BaseTest.getClient().config.provider);
          const senderaddress = await wallet.getAddress()
          const accountObj = await BaseTest.getClient()
            .account.queryAccount(BaseTest.getClient().utils.toKynno(senderaddress))
            console.log("accountObj",JSON.stringify(accountObj));
            
            const chain = {
              chainId: 9700,
              cosmosChainId: 'kynno_9700-1',
            }
            
            const sender = {
                accountAddress: accountObj.account.base_account.address,
                sequence: parseInt(accountObj.account.base_account.sequence),
                accountNumber: parseInt(accountObj.account.base_account.account_number),
                pubkey: accountObj.account.base_account.pub_key?accountObj.account.base_account.pub_key.key:"",
            }
            
            const fee = {
                amount: '20',
                denom: 'akynno',
                gas: '200000',
            }
            
            const memo = ''
            
            const params = {
                destinationAddress: 'kynno1krjc2zs8uyzfdxm0cj2z428hm3ju2nfnymktrj',
                amount: '1000000',
                denom: 'akynno',
            }
            const msg = BaseTest.getClient().transaction._createMessageSend(
              chain,sender,fee,memo,params
            )
            
            console.log("msg",JSON.stringify(msg.eipToSign));
            
            const digest = TypedDataUtils.encodeDigest(msg.eipToSign)
            console.log("digest",digest);
            
            const digestHex = ethers.utils.hexlify(digest)
            console.log("digestHex",digestHex);
            
            const signature = await wallet.signMessage(digest)
            console.log("signature",signature)
            let extension = BaseTest.getClient().transaction._signatureToWeb3Extension(chain, sender, signature)

          // Create the txRaw
          let rawTx = BaseTest.getClient().transaction._createTxRawEIP712(msg.legacyAmino.body, msg.legacyAmino.authInfo, extension)    
          // broadcats transaction
          let response = await BaseTest.getClient().transaction._broadcastTx(rawTx)
          console.log("response",response);
          
        } catch (error) {
          console.log("error",error);
        }
      },
      timeout
    );
    test(
      'stack denom',
      async () => {
        try {
          let privateKey = '034C5553B67FCB6114AEC55308A4A74A70DA86C4F500EA4EC2B67AEF6C0A5D86'
          let wallet = new ethers.Wallet(privateKey, BaseTest.getClient().config.provider);
          const senderaddress = await wallet.getAddress()
          const accountObj = await BaseTest.getClient()
            .account.queryAccount(BaseTest.getClient().utils.toKynno(senderaddress))
            console.log("accountObj",JSON.stringify(accountObj));
            
            const chain = {
              chainId: 9700,
              cosmosChainId: 'kynno_9700-1',
            }
            
            const sender = {
                accountAddress: accountObj.account.base_account.address,
                sequence: parseInt(accountObj.account.base_account.sequence),
                accountNumber: parseInt(accountObj.account.base_account.account_number),
                pubkey: accountObj.account.base_account.pub_key?accountObj.account.base_account.pub_key.key:"",
            }
            
            const fee = {
                amount: '20',
                denom: 'akynno',
                gas: '200000',
            }
            
            const memo = ''
            
            const params = {
              validatorAddress: "kynnovaloper1krjc2zs8uyzfdxm0cj2z428hm3ju2nfn2q9ss6",
              amount: "1000000000",
              denom: "akynno"
            }
            const msg = BaseTest.getClient().transaction._createTxMsgDelegate(
              chain,sender,fee,memo,params
            )
            
            console.log("msg",JSON.stringify(msg.eipToSign));
            
            const digest = TypedDataUtils.encodeDigest(msg.eipToSign)
            console.log("digest",digest);
            
            const digestHex = ethers.utils.hexlify(digest)
            console.log("digestHex",digestHex);
            
            const signature = await wallet.signMessage(digest)
            console.log("signature",signature)
            let extension = BaseTest.getClient().transaction._signatureToWeb3Extension(chain, sender, signature)

          // Create the txRaw
          let rawTx = BaseTest.getClient().transaction._createTxRawEIP712(msg.legacyAmino.body, msg.legacyAmino.authInfo, extension)    
          // broadcats transaction
          let response = await BaseTest.getClient().transaction._broadcastTx(rawTx)
          console.log("response",response);
          
        } catch (error) {
          console.log("error",error);
        }
      },
      timeout
    );
    test(
      'query Params',
      async () => {
        await BaseTest.getClient()
        .auth.queryParams()
        .then(res => {
          console.log('query Params',JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
      },
      timeout
    );
  });
});
