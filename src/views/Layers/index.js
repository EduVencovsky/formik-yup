import React from 'react';
import { Formik, connect, getIn } from 'formik'
import * as Yup from 'yup'

import Stepper from '../../components/Stepper'
import LayerType from './LayerType'
import LayerTheme from './LayerTheme'
import LayerConfiguration from './LayerConfiguration'
import Debug from '../../components/Formik/Debug'
import { getObjectError, getArrayOfErrors } from '../../utils/formikUtils'

const stepsLabel = ['Layer Type', 'Configurations', 'Themes']

const validationSchema = Yup.object().shape({
    layerType: Yup.object().shape({
        type: Yup.number().min(0).required()
    }),
    layerConfiguarion: Yup.object().shape({
        name: Yup.string().required("String is required"),
        type: Yup.number().min(0).required(),
        config: Yup.number().min(0).required(),
    }),
    // layerThemes: Yup.object().shape({
    //     theme: Yup.array().required()
    // })
})

const initialValues = {
    layerType: {
        type: -1
    },
    layerConfiguarion: {
        name: '',
        type: -1,
        config: -1,
    },
    layerThemes: {
        themes: [],
    }
}

function Layers({ children, history, formik }) {

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2))
                    history.push("Home")
                }}
            >
                {({ handleSubmit, errors, touched }) => (
                    <>
                        <Stepper
                            errors={getArrayOfErrors(['layerType', 'layerConfiguarion', 'layerThemes'], errors, touched)}
                            stepsLabel={stepsLabel}
                            onFinish={handleSubmit}
                        >
                            <LayerType key="LayerType" />
                            <LayerConfiguration key="LayerConfiguration" />
                            <LayerTheme key="LayerTheme" />
                        </Stepper>
                        <Debug />
                    </>
                )}
            </Formik>
        </div>
    );
}

export default connect(Layers)