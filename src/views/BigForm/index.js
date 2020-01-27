import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import Button from '@material-ui/core/Button'

import TextField from '../../components/FormikMaterial/TextField'
import Debug from '../../components/Formik/Debug'
import Form1 from './Form1'

const initialValues = {
    username: '',
    password: '',
    form1: {
        field0: 123,
        form2: [
            {
                field1: '',
                field2: 456,
                field3: '',
                form3: {
                    field4: '',
                    field5: 789,                    
                }
            }
        ]
    }
}


const validationSchema = Yup.object().shape({
    username: Yup.string().email('Invalid Email').required('Username Field is Required'),
    password: Yup.string().min(5, 'Password Field Length should be > 5').required('Password Field is Required'),
    form1:  Yup.object().shape({
        field0: Yup.number().required('Field 0 is Required'),
        form2: Yup.array().of(Yup.object().shape({
                field1: Yup.string()
                    .required('Field 1 is Required'),
                field2: Yup.number()
                    .min(10, 'Field 2 should be > 10')
                    .max(9999, 'Field 2 should be < 9999')
                    .required('Field 2 is Required'),
                field3: Yup.string()
                    .required('Field 3 is Required'),
                form3: Yup.object().shape({
                    field4: Yup.string()
                        .required('Field 4 is Required'),
                    field5: Yup.number()
                        .required('Field 5 is Required'),
                })                
            })
        )
    })
})

export default function BigForm() {
    return (
        <fieldset>
            <legend>Form 0</legend>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => alert(JSON.stringify(values, null, 2))}
            >
                {({values}) => (
                    <Form>
                        <TextField
                            showMessage
                            name="username"
                            type="text"
                            variant="outlined"
                        />
                        <TextField
                            showMessage
                            name="password"
                            type="password"
                            variant="outlined"
                        />
                        <Form1 name="form1" value={values.form1} />
                        <Button type="submit">Save</Button>
                        <Debug />
                    </Form>
                )}
            </Formik>
        </fieldset>
    )
}
