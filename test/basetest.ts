import * as kynno from '../src';
import { Client } from '../src/client';

export class Consts {
  static timeout = 10000;
  static keyName = 'madou';
  static keyPassword = 'madou@131213';
}

/** Test KeyDAO */
export class TestKeyDAO implements kynno.KeyDAO {
  keyMap: { [key: string]: kynno.types.Wallet } = {};
  write(name: string, key: kynno.types.Wallet) {
    this.keyMap[name] = key;
  }
  read(name: string): kynno.types.Wallet {
    return this.keyMap[name];
  }
  delete(name: string) {
    delete this.keyMap[name];
  }
}

export class BaseTest {
  static baseTx: kynno.types.BaseTx = {
    from: Consts.keyName,
    password: Consts.keyPassword,
    mode: kynno.types.BroadcastMode.Commit,
    // pubkeyType:types.PubkeyType.sm2
  };

  static getClient(): Client {
    let config = {
        api :'http://127.0.0.1:1317',
        node: 'http://127.0.0.1:26657',
        chainNetwork: kynno.types.ChainNetwork.Kynno,
        chainId: 'kynno_9700-1',
        gas: '20000000',
        fee: { denom: 'akynno', amount: '200' },
    };
    let privateKey = 'AFEE388E14C70319E397566866FF68D8E5D43D93942B7FEAAD4CE9B377036193'

    // let config = {
    //     node: 'http://34.80.22.255:26657',
    //     network: kynno.types.Network.Mainnet,
    //     chainId: 'bifrost-1',
    //     gas: '200000',
    //     fee: { denom: 'ubif', amount: '5000' },
    // };
    // let privateKey = '80A69946ADD77EF0C17F43E72E759164F6F0A2A7E9D5D3E0966A3BCA8DE3D177'

    const client = kynno
      .newClient(config)
      .withKeyDAO(new TestKeyDAO())
      .withRpcConfig({ timeout: Consts.timeout });

    /*client.keys.recover(
      Consts.keyName,
      Consts.keyPassword,
      'best theme crime grain measure claim fence thumb armor note token milk repeat crystal fiction fringe exile risk globe portion congress cross celery exchange'
    );*/

    client.keys.importPrivateKey(
       Consts.keyName,
       Consts.keyPassword,
       privateKey
    );
    return client;
  }
}
