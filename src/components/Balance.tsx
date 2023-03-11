import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const totol = amount.reduce((acc, item) => (acc += item),0);
    
  return (
    <div>
       <h4>Your Balance</h4>
      <h1 id="balance">${totol}</h1> 
    </div> 
    )
}
