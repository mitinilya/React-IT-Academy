import React from "react"

export const List = ({listWords}) => {

    return (
        <div>
             <textarea value = {listWords.join('\n')} readOnly rows = "10" cols = "15"/>
        </div>
    )

}