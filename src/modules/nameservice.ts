import { Client } from '../client';
import * as types from '../types';
import { ethers } from 'ethers';
import { nameserviceabi } from '../helper/abi';
import { TransactionReceipt, TransactionResponse } from '@ethersproject/abstract-provider';
/**
 * This module implements NFT related functions
 *
 * @category Modules
 * @since v0.1
 */
export class NameService {
  /** @hidden */
  private client: Client;

  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * create Name
   * @param name string
   * @param value string
   * @returns
   * @since v1.0.0
   */
    async createName(
      name:string,
      value:string
    ): Promise<types.TxMessage> {
        const signer  = this.client.config.provider.getSigner()
        const address = this.client.config.nameContractAddress
        const contract = new ethers.Contract(address, nameserviceabi, signer)
        const tx = await contract.createName(name,value);
        const receipt = await tx.wait();
        if (receipt && receipt.blockNumber && receipt.status === 1) {
            return {
                txHash:receipt.transactionHash,
                success:true
            }
        } else if (receipt && receipt.blockNumber && receipt.status === 0) {
            return {
                txHash:receipt.transactionHash,
                success:false,
                message:"Your name has been failed to create, check your balance and try again"
            }
        } else {
            return {
                txHash:receipt.transactionHash,
                success:false,
                message:"Your name has been failed to create, check your balance and try again"
            }
        }
    }

    /**
   * resolve Name data
   * @param name string
   * @returns
   * @since v1.0.0
   */
    async resolve(name:string):Promise<types.NameData>{
        const signer  = this.client.config.provider.getSigner()
        const address = this.client.config.nameContractAddress
        const contract = new ethers.Contract(address, nameserviceabi, signer)
        const nameData = await contract.resolve(name);
        return nameData
    }
    async ownerOf(name:string):Promise<string>{
        const signer  = this.client.config.provider.getSigner()
        const address = this.client.config.nameContractAddress
        const contract = new ethers.Contract(address, nameserviceabi, signer)
        const owner = await contract.ownerOf(name);
        return owner
    }

    /**
        * transfer ownership of the name
        * @param from string
        * @param to string
        * @param name string
        * @returns
        * @since v1.0.0
    */
    async transfer(
        from:string,
        to:string,
        name:string
    ): Promise<types.TxMessage> {
        const signer  = this.client.config.provider.getSigner()
        
        const address = this.client.config.nameContractAddress
        const contract = new ethers.Contract(address, nameserviceabi, signer)
        const tx:TransactionResponse = await contract.transfer(from,to,name);
        const receipt:TransactionReceipt = await tx.wait();
        
        if (receipt && receipt.blockNumber && receipt.status === 1) {
            return {
                txHash:receipt.transactionHash,
                success:true
            }
        } else if (receipt && receipt.blockNumber && receipt.status === 0) {
            return {
                txHash:receipt.transactionHash,
                success:false,
                message:"Your name has been failed to transfer, check your balance and try again"
            }
        } else {
            
            return {
                txHash:receipt.transactionHash,
                success:false,
                message:"Your name has been failed to transfer, check your balance and try again"
            }
        }
    }

    /**
        * deleting the name
        * @param name string
        * @returns
        * @since v1.0.0
    */
    async burn(
        name:string,
    ): Promise<types.TxMessage> {
        const signer  = this.client.config.provider.getSigner()
        
        const address = this.client.config.nameContractAddress
        const contract = new ethers.Contract(address, nameserviceabi, signer)
        const tx:TransactionResponse = await contract.burn(name);
        const receipt:TransactionReceipt = await tx.wait();
        
        if (receipt && receipt.blockNumber && receipt.status === 1) {
            return {
                txHash:receipt.transactionHash,
                success:true
            }
        } else if (receipt && receipt.blockNumber && receipt.status === 0) {
            return {
                txHash:receipt.transactionHash,
                success:false,
                message:"Your name has been failed to burn, check your balance and try again"
            }
        } else {
            return {
                txHash:receipt.transactionHash,
                success:false,
                message:"Your name has been failed to burn, check your balance and try again"
            }
        }
    }

    /**
        * Changing the value of a name
        * @param name string
        * @param value string
        * @returns
        * @since v1.0.0
    */
     async setValue(
        name:string,
        value:string,
    ): Promise<types.TxMessage> {
        const signer  = this.client.config.provider.getSigner()
        const address = this.client.config.nameContractAddress
        const contract = new ethers.Contract(address, nameserviceabi, signer)
        const tx:TransactionResponse = await contract.setValue(name,value);
        const receipt:TransactionReceipt = await tx.wait();
        
        if (receipt && receipt.blockNumber && receipt.status === 1) {
            return {
                txHash:receipt.transactionHash,
                success:true
            }
        } else if (receipt && receipt.blockNumber && receipt.status === 0) {
            return {
                txHash:receipt.transactionHash,
                success:false,
                message:"Your name has been failed to change, check your balance and try again"
            }
        } else {
            return {
                txHash:receipt.transactionHash,
                success:false,
                message:"Your name has been failed to change, check your balance and try again"
            }
        }
    }
}
