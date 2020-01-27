import { useState } from 'react'

export default function useToggle(defaultValue){
    const [state, setState] = useState(defaultValue)
    
    const toggle = (value = null) => {
        if(value == null) 
            setState(!state)
        else 
            setState(!!value)
    }

    return [state, toggle]
}