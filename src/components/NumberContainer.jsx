import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNumber } from '../redux/actions'

const NumberContainer = () => {
    const num = useSelector(state => state.number)
    const dispatch = useDispatch()
    return (
        <header className="App-header">
            <h1>{num}</h1>
            <button onClick={() => dispatch(addNumber())}>Chnage Number</button>
        </header>
    )
}

export default NumberContainer