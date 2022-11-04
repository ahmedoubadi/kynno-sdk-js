import { BaseTest } from './basetest';
import { ethers } from 'ethers';
import { signatureToPubkey } from '@hanchon/signature-to-pubkey';
const timeout = 10000;
const baseTx = {
    from: 'name1',
    password: "kynno@131213",
}

const getPubKey=async(pk:string)=>{
    const provider = new ethers.providers.JsonRpcProvider(
        "https://testnet.kynno.dev"
    )
    const signer = new ethers.Wallet(pk,provider)
    const messageToSign = 'Generate pub key'
    const signature = await signer.signMessage(messageToSign)
  
    const msgHash = ethers.utils.hashMessage(messageToSign);
    const msgHashBytes = ethers.utils.arrayify(msgHash);
    // @ts-ignore
    let pubkey = signatureToPubkey(signature,msgHashBytes)
    return pubkey
  }
describe('Build tx', () => {
  test(
    'sign transaction',
    async () => {
        
        const wallet = BaseTest.getClient().keys.add(baseTx.from, baseTx.password);
        let pk = BaseTest.getClient().config.keyDAO.decrypt!(wallet.privateKey!,baseTx.password);
        const chain = {
            chainId: 9700,
            cosmosChainId: 'kynno_9700-1',
        }
        
        
        const {account} = await BaseTest.getClient().account.queryAccount(wallet.address)
        let sender = {
            "accountAddress": account.base_account.address,
            "sequence": parseInt(account.base_account.sequence),
            "accountNumber": parseInt(account.base_account.account_number),
            "pubkey": account.base_account.pub_key?.key||""
        }
        if(!account.base_account.pub_key){
            
            let key = await getPubKey(pk)
            sender.pubkey = key
        } else {
            sender.pubkey =account.base_account.pub_key.key
        }
        
        const fee = {
            amount: '20',
            denom: 'akynno',
            gas: '200000',
        }
        
        const memo = ''
        
        const params = {
            destinationAddress: 'kynno1m63tc4gflpgx904fu2vmekdex652tp4vvvhdqy',
            amount: (1*(10**18)).toString(),
            denom: 'akynno',
        }
        const msg = BaseTest.getClient().transaction._createMessageSend(
          chain,sender,fee,memo,params
        )
        const signature = BaseTest.getClient().transaction._signTypedData(
            // @ts-ignore
            { privateKey:Buffer.from(pk,'hex'), data:msg.eipToSign, version:'V4'}
        )
        const recovrSig = BaseTest.getClient().transaction._recoverTypedSignature(
            // @ts-ignore
            {data:msg.eipToSign,signature, version:'V4', }
        )
        expect(recovrSig).toBe(
            BaseTest.getClient().utils.toEth(sender.accountAddress)
        );
    },
    timeout
  );
});