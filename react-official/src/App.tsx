//useReducerとuseReducerをReactからimport
import React, {useReducer,useEffect} from 'react'
import './App.css'
//axiosをimport
import axios from 'axios'

//initialStateを作成
const initialState = {
  isLoading: true,
  isError: '',
  post: {}
}

//reducerを作成、stateとactionを渡して、新しいstateを返すように実装
const dataFetchReducer = (dataState: any, action:any) =>{
  switch(action.type) {
    case 'FETCH_INIT':
    return {
      isLoading: true,
      post: {},
      isError: ''
    }
//データの取得に成功した場合
//成功なので、isErrorは''
//postにはactionで渡されるpayloadを代入
    case 'FETCH_SUCCESS':
    return {
      isLoading: false,
      isError: '',
      post: action.payload,
    }
//データの取得に失敗した場合
//失敗なので、isErrorにエラーメッセージを設定
    case 'FETCH_ERROR':
    return {
      isLoading: false,
      post: {},
      isError: '読み込みに失敗しました'
    }
//defaultではそのまま渡ってきたstateを返しておく
    default:
    return dataState
  }
}
const App = () => {
//initialStateとreducer関数をuseReducer()に読み、stateとdispatchの準備
  const [dataState, dispatch] = useReducer(dataFetchReducer, initialState)

  useEffect(()=>{
//http getリクエストをurlを書く
    axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
//リクエストに成功した場合
    .then(res =>{
//dispatch関数を呼び、type:には'FETCH_SUCCESS'、payloadには受け取ったデータを代入する
      dispatch({type:'FETCH_SUCCESS', payload: res.data})
    })
//リクエストに失敗した場合catchの中に入ってくる
    .catch(err => {
      dispatch({type: 'FETCH_ERROR'})
    })
  })
  return (
    <div className='App'>
{/* //Loadingが終わったら記事のタイトルを表示 */}
      <h3>{dataState.isLoading ? 'Loading...': dataState.post.title}</h3>
{/* //エラーがあった場合の処理 */}
      <p>{dataState.isError ? dataState.isError : null}</p>
    </div>
  )
}

export default App