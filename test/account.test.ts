import { BaseTest } from './basetest';

const timeout = 10000;

describe('account Tests', () => {

  describe('query', () => {
    test(
      'query Account',
      async () => {
        await BaseTest.getClient()
        .account.queryAccount('kynno16yky9s6tjmv3kvvrxtnnrcn7x42ngs5wzjcywt')
        .then(res => {
          console.log('query Account',JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
      },
      timeout
    );
    test(
      'query eth Account',
      async () => {
        await BaseTest.getClient()
        .account.queryAccount('0xD12C42c34b96D91b318332E731e27e355534428E')
        .then(res => {
          const account = res.account
          console.log('query Account',account);
          const ethAddress = BaseTest.getClient().utils.toEth(account.base_account.address)
         
         console.log("ethAddress",ethAddress);
         
        })
        .catch(error => {
          console.log(error);
        });
      },
      timeout
    );
  });
});
