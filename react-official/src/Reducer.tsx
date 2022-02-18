export const reducerFuncLetters = (letterState:any, action: any) => {
    switch (action.type){
      case 'concat':
        return {...letterState, letters: letterState.letters.concat(action.target), letterUsage: letterState.letterUsage.concat("unused")};
      case 'splice':
        const newArray = letterState.letters.slice();
        newArray.splice(action.index, 1, action.target);
  
        const newArrayUsage = letterState.letterUsage.slice();
        newArrayUsage.splice(action.index, 1, "used");
  
        return {...letterState, letters: newArray, letterUsage: newArrayUsage};
      default:
        return letterState
    }
  }
  