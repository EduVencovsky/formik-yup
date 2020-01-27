import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import { Field, getIn } from 'formik'

export function FormikTextField({field: { name, value, onChange, onBlur },
    form: { touched, errors },
    ...props}) {
    
    const touchedValue = getIn(touched, name)
    const errorsValue = getIn(errors, name)

    return (
        <TextField 
            error={!!(touchedValue && errorsValue)}
            {...{ name, value, onChange, onBlur }}
            {...props}
        />
    )
}

FormikTextField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
}

export default function MUIFormikTextInput(props){
    return <Field 
        {...props}
        component={FormikTextField}
    />
}

MUIFormikTextInput.propTypes = {
    name: PropTypes.string.isRequired
}
