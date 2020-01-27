import React from 'react'

import TextField from '../../components/FormikMaterial/TextField'

export default function Form3({ name }) {
    return (
        <fieldset style={{borderColor: '#00F'}}>
            <legend>Form 3</legend>
            <TextField 
                showMessage
                name={`${name}.field4`} 
                variant="outlined"
            />
            <TextField 
                showMessage
                name={`${name}.field5`} 
                type="number"
                variant="outlined"
            />
        </fieldset>
    )
}
