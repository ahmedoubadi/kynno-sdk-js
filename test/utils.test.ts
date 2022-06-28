import { BaseTest } from './basetest';

const timeout = 10000;

describe('Utils Tests', () => {
  test(
    'to min coin',
    async () => {
      await BaseTest.getClient()
        .utils.toMinCoin({
          denom: 'akynno',
          amount: '1',
        })
        .then(coin => {
          console.log(JSON.stringify(coin));
        })
        .catch(err => {
          console.log(JSON.stringify(err));
        });
    },
    timeout
  );
});
