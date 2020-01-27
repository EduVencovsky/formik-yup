import React from 'react'
import { Formik } from 'formik'
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
                {({ values, errors, touched, handleSubmit, handleBlur, handleChange }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                name="username"
                                type="text"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.username && touched.username ? 
                                (
                                    <div>{errors.username}</div>
                                ) 
                                : null
                            }
                        </div>
                        <div>
                            <input
                                name="password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.password && touched.password ? 
                                (
                                    <div>{errors.password}</div>
                                ) 
                                : null
                            }
                        </div>
                        <button type="submit">Save</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}
