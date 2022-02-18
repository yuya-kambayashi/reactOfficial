export enum ActionType {
CONCAT = "concat",
SPLICE = "splice",
}

export const reducerFuncLetters = (letterState:any, action: ActionDetail) => {
    switch (action.type){
      case ActionType.CONCAT:
        return {...letterState, letters: letterState.letters.concat(action.target), letterUsage: letterState.letterUsage.concat("unused")};
      case ActionType.SPLICE:
        const newArray = letterState.letters.slice();
        newArray.splice(action.index, 1, action.target);
  
        const newArrayUsage = letterState.letterUsage.slice();
        newArrayUsage.splice(action.index, 1, "used");
  
        return {...letterState, letters: newArray, letterUsage: newArrayUsage};
      default:
        return letterState
    }
  }


  export type ActionDetail = {
      type: ActionType,
      target: string,
      index?: number
  }