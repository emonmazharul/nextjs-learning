import React,{useState} from 'react'

export default function Counter() {
  const [count,setCount] = useState(0);
  return <>
    <div>Current count is {count}</div>
    <button onClick={() =>setCount(count + 1)}>increment</button>
    <br/>
    <button onClick={() =>setCount(count -1)}>decrement</button>
  </>
}