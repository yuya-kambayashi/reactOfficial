import React, {useState, useRef, useEffect, useReducer} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './styles.css';
import { reducerFuncLetters, ActionMode } from './Reducer'

    // countの初期値として、1~10までのランダムな数値を生成
    const initialState = Math.floor(Math.random() * 10) + 1;

const reducerFunc = (countState:any, action: any) => {
  switch (action){
    case 'increment':
      return countState + 1
    case 'decrement':
      return countState - 1
    case 'reset':
      return initialState
    default:
      return countState
  }
}

const initialLetterState = {
  letters: ["A", "B", "C"],
  letterUsage: Array(3).fill("unused"),
}



const Counter = () => {

    // count という名前の state 変数を宣言、初期値 initialState をセット
    const [count, setCount] = useState<number>(initialState)
    // open という名前の state 変数を宣言、初期値 true をセット
    const [open, setOpen] = useState<boolean>(true)
    // toggleの関数を宣言
    const toggle = () => setOpen(!open)

    const initialArray = ["A", "B", "C"];
    const [letters, setLetters] = useState<string[]>(initialArray);
    const addLetter = (letter: string) => {
        setLetters(prevState => prevState.concat("B"));
    }

    const exchangeLetter = () => {
        const newArray = letters.slice();
        newArray.splice(0, 1, "E");
        console.log(newArray);
        setLetters(newArray);
    }

    const [count2, dispatch] = useReducer(reducerFunc, initialState)

    const [letters2, dispatchLetter] = useReducer(reducerFuncLetters, initialLetterState);

  
    return (
      <>
        <button onClick={toggle}>{open ? 'close' : 'open'}</button>
        <div className={open ? 'isOpen' : 'isClose'}>
          <p>現在の数字は{count}です</p>
          {/* setCount()は、countを更新するための関数。countを引数で受け取ることも出来る */}
          <button onClick={() => setCount(prevState => prevState + 1)}>
            + 1
          </button>
          <button onClick={() => setCount(count - 1)}>- 1A</button>
          <button onClick={() => setCount(prevState => prevState - 1)}>- 1B</button>
          <button onClick={() => setCount(0)}>０</button>
          <button onClick={() => setCount(initialState)}>最初の数値に戻す</button>
        </div>

        <div className={open ? 'isOpen' : 'isClose'}>
        <h2>カウント：{count2}</h2>
          <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={()=>dispatch('increment')}>increment</Button>
          <Button onClick={()=>dispatch('decrement')}>decrement</Button>
          <Button onClick={()=>dispatch('reset')}>reset</Button>
        </ButtonGroup>
        </div>

        <div className={open ? 'isOpen' : 'isClose'}>
          <p>現在の文字列は{letters}です</p>
          <button onClick={() => setLetters( prevState => prevState.concat("B"))}>文字を追加する</button>
          <button onClick={exchangeLetter}>文字を置き換える1</button>
          <button onClick={
              () => setLetters( prevState => {
                                const newArray = prevState.slice();
                                newArray.splice(0, 1, "F");
                                return newArray;
                            })}>
            文字を置き換える2
            </button>
        </div>
        <div className={open ? 'isOpen' : 'isClose'}>
          <p>現在の文字列は{letters2.letters}です</p>
          <p>現在の文字の状態は{letters2.letterUsage}です</p>
          <button onClick={() => dispatchLetter({type: ActionMode.CONCAT, target:'B'})}>Bを追加する</button>
          <button onClick={() => dispatchLetter({type: ActionMode.CONCAT, target:'C'})}>Cを追加する</button>
          <button onClick={() => dispatchLetter({type: ActionMode.SPLICE, target:'W', index: 0})}>0番目の要素をWに置き換える</button>
          <button onClick={() => dispatchLetter({type: ActionMode.SPLICE, target:'Z', index: 1})}>1番目の要素をZに置き換える</button>
        </div>
      </>
    )
  }
  

export default Counter;