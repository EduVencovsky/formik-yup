import React, { useState } from 'react'
import { FieldArray, connect } from 'formik'
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'

import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import Typography from '@material-ui/core/Typography';

import TextInput from '../../../components/Formik/FormikInput'

const layerType = [
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
}));

function LayerTheme({ formik }) {

    const [selectedType, setSelectedType] = useState(0)
    const [selectedId, setSelectedId] = useState(-1)
    const classes = useStyles()

    const { values } = formik
    const { themes } = values.layerThemes

    const getLayerTypeData = id => layerType.find(x => x.id === id)

    const getIndexById = id => themes.findIndex(x => x.id === id)

    const editingTheme = themes.find(x => x.id === selectedId)
    const editingThemeIndex = editingTheme ? getIndexById(editingTheme.id) : -1

    return (
        <div>
            <Grid container spacing={3} >
                <Grid item sm={6} lg={3} xs={2}>
                    <FieldArray
                        name="layerThemes.themes"
                    >
                        {({ insert, remove }) => (
                            <Paper
                                className={classes.paper}
                                elevation={10}
                            >
                                <Grid // This could be another component 
                                    container
                                    direction="row"
                                >
                                    <Select
                                        className={classes.selectInput}
                                        value={selectedType}
                                        onChange={e => setSelectedType(e.target.value)}
                                    >
                                        {
                                            layerType.map(type => (
                                                <MenuItem
                                                    key={type.id}
                                                    value={type.id}
                                                >
                                                    {type.label}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                    <IconButton
                                        onClick={() => insert(themes.length, getLayerTypeData(selectedType))}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </Grid>
                                <Divider />
                                <Grid // This could be another component
                                    container
                                >
                                    {themes && themes.length > 0 &&
                                        themes.map(theme => (
                                            <ListItem
                                                button
                                                key={theme.id}
                                                onClick={() => setSelectedId(theme.id)}
                                            >
                                                <Typography className={classes.listItemLabel}>
                                                    {theme.label}
                                                </Typography>
                                                <IconButton
                                                    onClick={() => remove(getIndexById(theme.id))}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </ListItem>
                                        ))
                                    }
                                </Grid>
                            </Paper>
                        )}
                    </FieldArray>
                </Grid>
                <Grid item sm={6} lg={9} xs={10}>
                    <Paper
                        className={classes.paper}
                        elevation={10}
                    >
                        {editingTheme && ( // This should be another component with a switch for forms
                            <>
                                <TextInput
                                    fullWidth
                                    required
                                    name={`layerThemes.themes[${editingThemeIndex}].${editingTheme.id === 2 ? 'type' : 'name'}`}
                                    label={editingTheme.id === 2 ? 'Type' : 'Name'}
                                    variant="outlined"
                                    margin="normal"
                                />
                                {editingTheme.id === 0 && (
                                    <TextInput
                                        fullWidth
                                        required
                                        name={`layerThemes.themes[${editingThemeIndex}].description`}
                                        label="Description"
                                        variant="outlined"
                                        margin="normal"
                                    />
                                )}
                            </>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default connect(LayerTheme)