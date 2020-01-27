import { getIn } from 'formik'

export const getObjectError = (name, errors = {}, touched = {}) => {
    const er = getIn(errors, name) || {}
    const tc = getIn(touched, name) || {}
    return Object.keys(tc).find(touch => er[touch])
}

export const getArrayOfErrors = (names, errors, touched) =>
    names.map(name => getObjectError(name, errors, touched))