import React from 'react'
import { FieldArray } from 'formik'
import Button from '@material-ui/core/Button'

import TextField from '../../components/FormikMaterial/TextField'
import Form3 from './Form3'

export default function Form1({ name, value }) {
    return (
        <fieldset style={{borderColor: '#F00'}}>
            <legend>Form1</legend>
            <TextField
                showMessage
                name={`${name}.field0`}
                type="number"
                variant="outlined"
            />
             <FieldArray
                name={`${name}.form2`}>
                {({ move, swap, push, insert, unshift, pop, remove }) => (
                    <fieldset style={{borderColor: '#0F0'}}>                    
                        <legend>Form 2</legend>
                        {value.form2.map((friend, i) => (
                            <fieldset key={i} style={{borderColor: `#${i+i+i}`}}>
                                <legend>Array {i} </legend>
                                <TextField 
                                    showMessage
                                    name={`${name}.form2[${i}].field1`} 
                                    variant="outlined"
                                />
                                <TextField 
                                    showMessage
                                    name={`${name}.form2[${i}].field2`} 
                                    type="number"
                                    variant="outlined"
                                />
                                <TextField 
                                    showMessage
                                    name={`${name}.form2[${i}].field3`} 
                                    variant="outlined"
                                />
                                <Button 
                                    type="button" 
                                    color="secondary" 
                                    variant="outlined" 
                                    onClick={() => remove(i)}
                                >
                                    -
                                </Button>
                                <Form3 name={`${name}.form2[${i}].form3`}/>
                            </fieldset>
                        ))}
                        <Button
                            type="button"
                            color="primary"
                            variant="outlined"
                            onClick={() => push({
                                field1: '',
                                field2: 0,
                                field3: '',
                                form3: {
                                    field4: '',
                                    field5: 789,                    
                                }
                            })}
                        >
                            +
                        </Button>
                    </fieldset>
                )}
            </FieldArray>
        </fieldset>
    )
}
