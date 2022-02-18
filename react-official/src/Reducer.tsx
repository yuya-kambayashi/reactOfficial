export const reducerFuncLetters = (letterState:any, action: {type: ActionMode, target: string, index?: number}) => {
    switch (action.type){
      case ActionMode.CONCAT:
        return {...letterState, letters: letterState.letters.concat(action.target), letterUsage: letterState.letterUsage.concat("unused")};
      case ActionMode.SPLICE:
        const newArray = letterState.letters.slice();
        newArray.splice(action.index, 1, action.target);
  
        const newArrayUsage = letterState.letterUsage.slice();
        newArrayUsage.splice(action.index, 1, "used");
  
        return {...letterState, letters: newArray, letterUsage: newArrayUsage};
      default:
        return letterState
    }
  }

  export enum ActionMode {
    CONCAT = "concat",
    SPLICE = "splice",
  }