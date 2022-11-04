import {BaseTest} from './basetest';
import * as types from '../src/types';

describe('Distribution Tests', () => {
    let timeOut = 9999;
    describe('Query', () => {
        test(
            'query Params',
            async () => {
                try {
                    const res = await BaseTest.getClient().distribution.queryParams()
                    if(res) {
                        console.log("res.data",res);
                        
                    } else {
                        console.log("something went wrong");                        
                    }
                } catch (error) {
                    if (error.response) {
                        // client received an error response (5xx, 4xx)
                        console.log("error.response",error.response);
                        console.log("error.data",error.data.message);
                        
                      } else if (error.request) {
                        // client never received a response, or request never left
                      } else {
                        // anything else
                      }
                }
            }
        );

        test(
            'query Validator Outstanding Rewards',
            async () => {
                await BaseTest.getClient().distribution
                    .queryValidatorOutstandingRewards('kynnovaloper1glxa8cl3shzk33586h0ydthfen59m4zk2pspsq')
                    .then(res => {
                        console.log('query Validator Outstanding Rewards',JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log('query Validator Outstanding Rewards',error);
                    });
            }
        );

        test(
            'query Validator Commission',
            async () => {
                await BaseTest.getClient().distribution
                    .queryValidatorCommission('kynnovaloper1glxa8cl3shzk33586h0ydthfen59m4zk2pspsq')
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Validator Slashes',
            async () => {
                await BaseTest.getClient().distribution
                    .queryValidatorSlashes(
                        'kynnovaloper1glxa8cl3shzk33586h0ydthfen59m4zk2pspsq',

                    )
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Delegation Rewards',
            async () => {
                await BaseTest.getClient().distribution
                    .queryDelegationRewards(
                        'kynnovaloper1glxa8cl3shzk33586h0ydthfen59m4zk2pspsq',
                        'kynno16yky9s6tjmv3kvvrxtnnrcn7x42ngs5wzjcywt'
                    )
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Delegation Total Rewards',
            async () => {
                await BaseTest.getClient().distribution
                    .queryDelegationTotalRewards(
                        'kynno1hxey68h286z7504psv9nh9x4fjn3ntsfd373zj'
                    )
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Delegator Validators',
            async () => {
                await BaseTest.getClient().distribution
                    .queryDelegatorValidators(
                        'kynno1glxa8cl3shzk33586h0ydthfen59m4zky6r6rg'
                    )
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Delegator Withdraw Address',
            async () => {
                await BaseTest.getClient().distribution
                    .queryDelegatorWithdrawAddress(
                        'kynno1hxey68h286z7504psv9nh9x4fjn3ntsfd373zj'
                    )
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Community Pool',
            async () => {
                await BaseTest.getClient().distribution
                    .queryCommunityPool()
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );
        
    });

    describe('withdraw Validator Commission', () => {
        test(
            'withdraw Validator Commission',
            async () => {
                await BaseTest.getClient().distribution
                    .withdrawValidatorCommission('kynnovaloper1glxa8cl3shzk33586h0ydthfen59m4zk2pspsq', BaseTest.baseTx)
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );
    });

    describe('fund Community Pool', () => {
        test(
            'fund Community Pool',
            async () => {
                const amount: types.Coin[] = [
                    {
                        denom: 'stake',
                        amount: '1',
                    },
                ];
                await BaseTest.getClient().distribution
                    .fundCommunityPool(amount, BaseTest.baseTx)
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );
    });

    describe('Set Withdraw Address', () => {
        test(
            'set withdraw address',
            async () => {
                await BaseTest.getClient().distribution
                    .setWithdrawAddr('kynno16yky9s6tjmv3kvvrxtnnrcn7x42ngs5wzjcywt', BaseTest.baseTx)
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error.json());
                    });
            },
            timeOut
        );
    });

    describe('Withdraw Rewards', () => {
        test(
            'withdraw delegation rewards from a specified validator',
            async () => {

                await BaseTest.getClient()
                    .distribution.withdrawRewards(
                        'kynnovaloper1glxa8cl3shzk33586h0ydthfen59m4zk2pspsq',
                        BaseTest.baseTx,
                    )
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            timeOut
        );
    });
});
