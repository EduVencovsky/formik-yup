import React, { useEffect } from 'react'
import { connect } from 'formik'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import TextInput from "../../../components/Formik/FormikInput"
import Select from "../../../components/Formik/FormikSelect"
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        height: '400px'
    },
    listItemLabel: {
        flexGrow: 1,
    },
    selectInput: {
        flexGrow: 1,
    },
}))

const typeOptions = [
    {
        id: 0,
        label: 'Default',
        name: '',
        description: ''
    },
    {
        id: 1,
        label: 'Bubble',
        name: '',
    },
    {
        id: 2,
        label: 'HeatMap',
        type: ''
    },
]

function LayerType({ formik }) {

    const classes = useStyles()
    const { values } = formik
    const { layerConfiguarion } = values
    const { type } = layerConfiguarion

    useEffect(() => {
        console.log(type)
    }, [type])

    return (
        <Paper
            className={classes.paper}
            elevation={10}
            padding={10}
        >
            <TextInput
                fullWidth
                required
                name="layerConfiguarion.name"
                label="Name"
                variant="outlined"
                margin="normal"
            />
            <Select
                fullWidth
                className={classes.selectInput}
                name="layerConfiguarion.type"
            >
                {
                    typeOptions.map(type => (
                        <MenuItem
                            key={type.id}
                            value={type.id}
                        >
                            {type.label}
                        </MenuItem>
                    ))
                }
            </Select>
            <Divider />
            <Select
                fullWidth
                className={classes.selectInput}
                name="layerConfiguarion.config"
            >
                {
                    typeOptions.map(type => (
                        <MenuItem
                            key={type.id}
                            value={type.id}
                        >
                            {type.label}
                        </MenuItem>
                    ))
                }
            </Select>
        </Paper>
    )
}

export default connect(LayerType)