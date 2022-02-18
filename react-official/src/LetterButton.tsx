import React, {useState, useRef, useEffect, useReducer} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './styles.css';
import { reducerFuncLetters, ActionType, ActionDetail } from './Reducer'

type Props = {
    dispatchLetter: (action: ActionDetail) => void;
}

const actionDetailE : ActionDetail = {
    type: ActionType.CONCAT,
    target: "E",
  };

const LetterButton: React.FC<Props> = ({dispatchLetter}) => {
    return (
      <>
        <div>
          <Button onClick={() => dispatchLetter(actionDetailE)}>Eを追加する</Button>
        </div>
      </>
    )
  }
  

export default LetterButton;