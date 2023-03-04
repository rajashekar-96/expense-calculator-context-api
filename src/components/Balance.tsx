import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

    const {transcations} = useContext(GlobalContext);
    const amount = transcations.map(transcation => transcation.amount);
    const totol = amount.reduce((acc, item) => (acc += item),0);
    
  return (
    <div>
       <h4>Your Balance</h4>
      <h1 id="balance">${totol}</h1> 
    </div> 
    )
}
