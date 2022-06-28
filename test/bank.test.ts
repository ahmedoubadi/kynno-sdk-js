import * as types from '../src/types';
import { BaseTest } from './basetest';

const timeout = 10000;

describe('Bank Tests', () => {
  describe('Send', () => {
    test(
      'send coins',
      async () => {
        const amount: types.Coin[] = [
          {
            denom: 'akynno',
            amount: '1',
          },
        ];

        await BaseTest.getClient()
          .bank.send(
            'kynno16yky9s6tjmv3kvvrxtnnrcn7x42ngs5wzjcywt',
            amount,
            BaseTest.baseTx
          )
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
  });

  describe('multiSend', () => {
    test(
      'multiSend coins',
      async () => {
        const amount: types.Coin[] = [
          {
            denom: 'akynno',
            amount: '1',
          },
        ];

        await BaseTest.getClient()
          .bank.multiSend(
            'kynno16yky9s6tjmv3kvvrxtnnrcn7x42ngs5wzjcywt',
            amount,
            BaseTest.baseTx
          )
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

  describe('Queries', () => {
    test(
      'query Balance',
      async () => {
        await BaseTest.getClient()
          .bank.queryBalance('kynno16yky9s6tjmv3kvvrxtnnrcn7x42ngs5wzjcywt','akynno')
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
      'query All Balances',
      async () => {
        await BaseTest.getClient()
          .bank.queryAllBalances('kynno16yky9s6tjmv3kvvrxtnnrcn7x42ngs5wzjcywt')
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
      'query All Balances by Height',
      async () => {
        await BaseTest.getClient()
          .bank.queryAllBalances('kynno16yky9s6tjmv3kvvrxtnnrcn7x42ngs5wzjcywt','1000')
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
      'query Total Supply',
      async () => {
        await BaseTest.getClient()
          .bank.queryTotalSupply()
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
      'query Supply Of',
      async () => {
        await BaseTest.getClient()
          .bank.querySupplyOf('akynno')
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
      'query All Balances',
      async () => {
        await BaseTest.getClient()
          .bank.queryParams()
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
