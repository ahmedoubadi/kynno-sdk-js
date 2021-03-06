export declare const MSG_DELEGATE_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
    TypeAmount: {
        name: string;
        type: string;
    }[];
};
export declare function createMsgDelegate(delegatorAddress: string, validatorAddress: string, amount: string, denom: string): {
    type: string;
    value: {
        amount: {
            amount: string;
            denom: string;
        };
        delegator_address: string;
        validator_address: string;
    };
};
export declare const MSG_BEGIN_REDELEGATE_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
    TypeAmount: {
        name: string;
        type: string;
    }[];
};
export declare function createMsgBeginRedelegate(delegatorAddress: string, validatorSrcAddress: string, validatorDstAddress: string, amount: string, denom: string): {
    type: string;
    value: {
        amount: {
            amount: string;
            denom: string;
        };
        delegator_address: string;
        validator_src_address: string;
        validator_dst_address: string;
    };
};
export declare const MSG_UNDELEGATE_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
    TypeAmount: {
        name: string;
        type: string;
    }[];
};
export declare function createMsgUndelegate(delegatorAddress: string, validatorAddress: string, amount: string, denom: string): {
    type: string;
    value: {
        amount: {
            amount: string;
            denom: string;
        };
        delegator_address: string;
        validator_address: string;
    };
};
export declare const MSG_WITHDRAW_DELEGATOR_REWARD_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
};
export interface MsgWithdrawDelegatorRewardInterface {
    type: string;
    value: {
        delegator_address: string;
        validator_address: string;
    };
}
export declare function createMsgWithdrawDelegatorReward(delegatorAddress: string, validatorAddress: string): {
    type: string;
    value: {
        delegator_address: string;
        validator_address: string;
    };
};
