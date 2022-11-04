import { BaseTest } from './basetest';
const timeout = 10000;

describe('Websocket', () => {
  test(
    'check Connection to websocket',
    async () => {
        const client = BaseTest.getClient();
        const ws = client.wsClient
        await ws.connect()
        ws.send("eth_gasPrice",1)
    },
    timeout
  );
});