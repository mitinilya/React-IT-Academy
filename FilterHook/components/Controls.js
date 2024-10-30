import React from "react"

export const Controls = ({textFiltered, checkBox, cbTextInput, cbCheckBoxChange, cbClickReset}) => {
    const textInput = eo => {
        cbTextInput (eo.target.value)
    }
    return (
        <div>
            <input type = "text" value = {textFiltered} onChange = {textInput}/>
            <input type = "checkbox" checked = {checkBox} onChange = {cbCheckBoxChange}/>
            <input type = "button" value = "Сброс" onClick = {cbClickReset}/>
        </div>
    )

}