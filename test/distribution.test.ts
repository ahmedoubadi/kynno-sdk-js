import {BaseTest} from './basetest';
import * as types from '../src/types';

describe('Distribution Tests', () => {
    let timeOut = 9999;
    describe('Query', () => {
        test(
            'query Params',
            async () => {
                await BaseTest.getClient().distribution
                    .queryParams()
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Validator Outstanding Rewards',
            async () => {
                await BaseTest.getClient().distribution
                    .queryValidatorOutstandingRewards('kynnovaloper1krjc2zs8uyzfdxm0cj2z428hm3ju2nfn2q9ss6')
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Validator Commission',
            async () => {
                await BaseTest.getClient().distribution
                    .queryValidatorCommission('kynnovaloper1krjc2zs8uyzfdxm0cj2z428hm3ju2nfn2q9ss6')
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
                        'kynnovaloper1krjc2zs8uyzfdxm0cj2z428hm3ju2nfn2q9ss6',

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
                        'kynnovaloper1krjc2zs8uyzfdxm0cj2z428hm3ju2nfn2q9ss6',
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
                        'kynno16yky9s6tjmv3kvvrxtnnrcn7x42ngs5wzjcywt'
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
            'query Delegator Withdraw Address',
            async () => {
                await BaseTest.getClient().distribution
                    .queryDelegatorWithdrawAddress(
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
                    .withdrawValidatorCommission('kynnovaloper1krjc2zs8uyzfdxm0cj2z428hm3ju2nfn2q9ss6', BaseTest.baseTx)
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
                        console.log(error);
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
                        'kynnovaloper1krjc2zs8uyzfdxm0cj2z428hm3ju2nfn2q9ss6',
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
