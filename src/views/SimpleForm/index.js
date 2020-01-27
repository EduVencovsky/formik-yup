import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    username: '',
    password: ''
}

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username Field is Required'),
    password: Yup.string().required('Password Field is Required')
})

export default function SimpleForm() {
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => alert(JSON.stringify(values, null, 2))}
            >
                {() => (
                    <Form>
                        <div>
                            <Field
                                name="username"
                                type="text"
                            />
                            <ErrorMessage name="username" />
                        </div>
                        <div>
                            <Field
                                name="password"
                                type="password"
                            />
                            <ErrorMessage name="password" />
                        </div>
                        <button type="submit">Save</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
