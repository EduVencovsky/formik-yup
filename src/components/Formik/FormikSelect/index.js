import React from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select';
import { Field, getIn } from 'formik'

export function FormikSelectField({ field: { name, value, onChange, onBlur },
    form: { touched, errors },
    children,
    ...props }) {

    const touchedValue = getIn(touched, name)
    const errorsValue = getIn(errors, name)

    return (
        <Select
            error={!!(touchedValue && errorsValue)}
            {...{ name, value, onChange, onBlur }}
            {...props}
        >
            {children}
        </Select>
    )
}

FormikSelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
}

export default function MUIFormikTextInput(props) {
    return <Field
        type="select"
        component={FormikSelectField}
        {...props}
    />
}

MUIFormikTextInput.propTypes = {
    name: PropTypes.string.isRequired
}
