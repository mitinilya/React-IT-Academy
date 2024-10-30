import React, { useState, useMemo, useContext} from 'react';
import {Controls} from "./Controls"
import {List} from "./List"


export const Filter = ({words}) => {
  const [textFiltered, setTextFiltered] = useState ("");
  const [checkBox, setCheckBox] = useState (false);

  const textFilteredMemoizeed=useMemo(
    () => {
    let a = words.filter(word=>word.includes(textFiltered));
    if (checkBox){
      a.sort();
    }
    return a;
  },
    [textFiltered, checkBox, words]
  );

  const clickReset = () => {
    setTextFiltered (""),
    setCheckBox (false)
  }

  return (
    <div>
      <Controls
        textFiltered = {textFiltered}
        checkBox = {checkBox}
        cbTextInput = {setTextFiltered}
        cbCheckBoxChange = {()=>setCheckBox(prev => !prev)}
        cbClickReset = {clickReset}
      />
      <List
        listWords = {textFilteredMemoizeed}/>
    </div>
  )
}
