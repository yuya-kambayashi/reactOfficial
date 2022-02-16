import React, {useState} from 'react';
import './styles.css';

const Counter = () => {
    // countの初期値として、1~10までのランダムな数値を生成
    const initialState = Math.floor(Math.random() * 10) + 1
    // count という名前の state 変数を宣言、初期値 initialState をセット
    const [count, setCount] = useState<number>(initialState)
    // open という名前の state 変数を宣言、初期値 true をセット
    const [open, setOpen] = useState<boolean>(true)
    // toggleの関数を宣言
    const toggle = () => setOpen(!open)

    const initialArray = Array(3).fill("A");
    const [letters, setLetters] = useState<string[]>(initialArray);
    const addLetter = (letter: string) => {
        setLetters(prevState => prevState.concat("B"));
    }

  
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
          <p>現在の文字列は{letters}です</p>
          <button onClick={() => setLetters( prevState => prevState.concat("B"))}>文字を追加する</button>
        </div>
      </>
    )
  }
  

export default Counter;