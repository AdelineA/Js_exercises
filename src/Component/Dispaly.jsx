import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addNumber, subNumber} from '../Redux/Countredux'

export default function Dispaly() {
    const dispatch = useDispatch()
    const count = useSelector((state)=> state.myStore.counter)
    console.log("gasangwa", count)
  return (
    <div>
      <h2>Counter App</h2>
      <p>{count}</p>
      <button onClick={()=> dispatch(addNumber())}>ADD</button>
      <button onClick={()=>dispatch(subNumber())}>SUBSTRACT</button>
    </div>
  )
}
