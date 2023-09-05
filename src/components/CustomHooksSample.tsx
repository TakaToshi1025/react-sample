import React, { useState, useCallback, useDebugValue } from "react";

const useInput = () => {
    const [state, setState] = useState('')
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    },[])

    useDebugValue(`input: ${state}`)

    return [state, onChange] as const
}

export const Input = () => {
    const [text, onChangeText] = useInput()
    return (
        <div>
            <input type="text" value={text} onChange={onChangeText}></input>
            <p>Input: {text}</p>
        </div>
    )
}