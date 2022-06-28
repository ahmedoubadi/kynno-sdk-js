import { Client } from '../client';
import * as mathjs from 'mathjs';
import { ethToKynno, kynnoToEth } from '../utils';

/**
 * Utils for the KYNNO SDK
 * @category Modules
 * @since v0.17
 */
export class Utils {
  /** @hidden */
  private client: Client;
  /** @hidden */
  private mathConfig = {
    number: 'BigNumber', // Choose 'number' (default), 'BigNumber', or 'Fraction'
    precision: 64, // 64 by default, only applicable for BigNumbers
  };
  /** @hidden */
  private math: Partial<mathjs.MathJsStatic>;

  /** @hidden */
  constructor(client: Client) {
    this.client = client;
    this.math = mathjs.create(mathjs.all, this.mathConfig);
  }
  toKynno(address:string){
    return ethToKynno(address)
  }
  toEth(address:string){
    return kynnoToEth(address)
  }

}
