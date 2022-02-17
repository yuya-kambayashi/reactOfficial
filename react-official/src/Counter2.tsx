//useReducerをimport
import React, {useReducer} from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

//counterの初期値を0に設定
const initialState = {
    firstCounter: 0,
    secondCounter: 100,
}

//reducer関数を作成
//countStateとactionを渡して、新しいcountStateを返すように実装する
const reducerFunc = (countState:any, action:any)=> {
//reducer関数にincrement、increment、reset処理を書く
//どの処理を渡すかはactionを渡すことによって判断する
switch (action.type){
    case 'increment1':
      return {...countState, firstCounter: countState.firstCounter + action.value + action.value2}
    case 'decrement1':
      return {...countState, firstCounter: countState.firstCounter - action.value}
    case 'increment2':
      return {...countState, secondCounter: countState.secondCounter + action.value}
    case 'decrement2':
      return {...countState, secondCounter: countState.secondCounter - action.value}
    case 'reset1':
      return {...countState, firstCounter: initialState.firstCounter}
    case 'reset2':
      return {...countState, secondCounter: initialState.secondCounter}
    default:
      return countState
  }
}
const Counter = () => {
    //作成したreducerFunc関数とcountStateをuseReducerに渡す
    //useReducerはcountStateとdispatchをペアで返すので、それぞれを分割代入
      const [count, dispatch] = useReducer(reducerFunc, initialState)
    //カウント数とそれぞれのactionを実行する<Button/>を設置する
    //dispatchで渡しているactionをオブジェクトに変更して、typeとvalueを設定
      return (
        <>
          <h2>カウント：{count.firstCounter}</h2>
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button onClick={()=>dispatch({type: 'increment1', value: 1, value2: 10})}>increment1</Button>
            <Button onClick={()=>dispatch({type: 'decrement1', value: 1})}>decrement1</Button>
            <Button onClick={()=>dispatch({type: 'reset1'})}>reset</Button>
          </ButtonGroup>
          <h2>カウント2：{count.secondCounter}</h2>
          <ButtonGroup color="secondary" aria-label="outlined primary button group">
            <Button onClick={()=>dispatch({type: 'increment2', value: 100})}>increment2</Button>
            <Button onClick={()=>dispatch({type: 'decrement2', value: 100})}>decrement2</Button>
            <Button onClick={()=>dispatch({type: 'reset2'})}>reset</Button>
          </ButtonGroup>
        </>
      )
    }

export default Counter