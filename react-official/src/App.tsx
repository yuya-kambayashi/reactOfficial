// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Counter from './Counter'
// import EffectClass from './EffectClass'
// import EffectFunc from './EffectFunc'

// function App() {
//   return (
//     <div className="App">
//           {/* <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//               Edit <code>src/App.tsx</code> and save to reload.
//             </p>
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               https://qiita.com/seira/items/fccdf4e73c59c491558d
//             </a>
//           </header> */}
//           <Counter />
//           <EffectClass />
//           <EffectFunc />
//     </div>
//   );
// }

// export default App;
// ReactからcreateContextとuseStateをimport
import React, {createContext, useState} from 'react'
import './App.css';
import Context from './components/ContextSample/ContextA'

//createContextを使ってUserContextとHobbyContextを作成
export const UserContext = createContext({name: '', age: ''})
export const HobbyContext = createContext<string>("")

function App() {
//useStateを使ってuserを作成
  const [user, setUser] = useState({
    name: 'セイラ',
    age: '17'
  })
//useStateを使ってhobbyを作成
  const [hobby, setHobby] = useState('キャンプ')
  return (
    <div className='App'>
      <UserContext.Provider value={user}>
        <HobbyContext.Provider value={hobby}>
          <Context/>
        </HobbyContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App