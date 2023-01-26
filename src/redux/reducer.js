import { ADD_NUMBER, CHANGE_USER } from "./actionTypes"

const initialState = {
    number: 10,
    name: 'aviral',
    email: 'xyz@z.com',
    age: 99,
    student: true,
}


const reducer = (_state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER:
          return  {
            ..._state,
            number: _state.number + 1
          }
          case CHANGE_USER: 
            return {
                ..._state,
                name: 'Abhishek',
                email: 'abc@d.com',
            }
        default: return _state
      }
}

export default reducer

//store ==> holds the state of application
// to update store we have to dispatch(action)
// registers listeners vis subscribe(listerner)

//pseudo code
// const store = createStore(reducer);
// store.subscribe()
// store.dispatch(addNumber())
// store.dispatch(changeUser())



// const initialState = {count: 0};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//     </>
//   );
// }