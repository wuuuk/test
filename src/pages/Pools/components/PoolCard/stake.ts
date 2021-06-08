import { useState } from 'react'
import { numToWei } from 'utils/useBigNumber';
import { Contract } from 'web3-eth-contract';

export interface supplyContractParams {
  contract: Contract;
  amount: number;
  account: string;
  decimals: number;
}

export interface InterfaceUnStake { contract: Contract; account: string; amount: number }
const knsStake = ({ contract, account, amount, decimals }: supplyContractParams) => {
  return contract.methods.deposit(numToWei(amount)).send({ from: account })
}
export const knsUnStake = ({ contract, account, amount }: InterfaceUnStake) => {
  return contract.methods.withdraw(numToWei(amount)).send({ from: account })
}

export default knsStake