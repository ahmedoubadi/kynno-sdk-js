import { BaseTest } from './basetest';

const timeout = 10000;

describe('Nft Tests', () => {

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
