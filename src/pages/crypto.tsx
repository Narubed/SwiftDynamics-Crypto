/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import ChangeString from '../components/changeString'

import React, { useEffect, useState } from 'react'

interface Provider {
  id: number; name: string; coin: string; price: number, amount: number; profit: number; salary: number
}
export default function crypto2() {
  let isValue: { id: number; name: string; coin: string; price: number; amount: number; profit: number; salary: number; }[] = []
  const [isLastValue, setLastValue] = useState<{ id: number; name: string; coin: string; price: number; amount: number; profit: number; salary: number; }[]>([])

  const [isInput, setInput] = useState<Provider>({
    id: 0,
    name: '',
    coin: '',
    price: 0,
    amount: 0,
    profit: 0,
    salary: 0
  });
  const [isLastSummary, setLastSummary] = useState<number>(0)
  const onClickFuncChangeString = () => {
    const value = ChangeString()
    isValue = value
    setLastValue(isValue)
    funcCheckValue()
  }
  const onSubmitButton = () => {
    isValue.push({
      id: isValue.length + 1,
      name: isInput.name,
      coin: isInput.coin,
      price: isInput.price,
      amount: isInput.amount,
      profit: 0,
      salary: 0
    })
    setLastValue(isValue)
    setInput({
      id: 0,
      name: '',
      coin: '',
      price: 0,
      amount: 0,
      profit: 0,
      salary: 0
    })
  }
  const funcCheckValue = () => {
    let newArray: {
      id: number; name: string; coin: string; price:
      number; amount: number; profit: number; salary: number;
    }[] = []
    isValue.forEach((element) => {
      if (element.name === "B") {
        newArray.push({ ...element })
      } else {
        newArray.map((item, index) => {
          if (item.coin === element.coin && item.amount > 0 && element.amount > 0) {
            let numbers = newArray[index].amount - element.amount
            if (numbers < 0) {
              element.amount = Math.abs(numbers)
              newArray[index].profit = (element.price - newArray[index].price) * newArray[index].amount
              newArray[index].amount = 0
              const findData = newArray.find((item2 => item2.coin === element.coin && item2.amount > 0))
              if (!findData) {
                window.alert("หมดตัวหาแล้ว, ไม่สามารถขายได้เนื่องจากไม่มีเหรียญ" + element.coin);
              }
            } else {
              newArray[index].profit += (element.price - newArray[index].price) * (element.amount)
              element.amount = 0
              newArray[index].amount = numbers
            }
          }
        })
      }
    })
    const lastSummary = newArray.reduce((sum, item) => {
      let summary = 0
      summary += item.profit
      return sum + summary
    }, 0)
    setLastSummary(lastSummary)
  }
  return (
    <div>
      <button onClick={onClickFuncChangeString}> use Data </button> {isLastSummary}
      <br />
      <div> ID | B or S| name | price | amount</div>
      {isLastValue.map((item) => (
        <div> {item.id}| {item.name}| {item.coin} | {item.price} | {item.amount}</div>
      ))}
      Buy or Sale
      <input type="string" id='name' value={isInput.name} onChange={(e) => setInput({ ...isInput, name: e.target.value })} />
      <br />
      Name Coin
      <input type="string" id='coin' value={isInput.coin} onChange={(e) => setInput({ ...isInput, coin: e.target.value })} />
      <br />
      Price
      <input type="number" id='price' value={isInput.price} onChange={(e) => setInput({ ...isInput, price: parseFloat(e.target.value) })} />
      <br />
      Amount
      <input type="number" id='amount' value={isInput.amount} onChange={(e) => setInput({ ...isInput, amount: parseFloat(e.target.value) })} />
      <br />
      <button onClick={() => onSubmitButton()}>submit</button>
    </div>
  )
}

