import React, { useContext } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { AuthContext } from '../../context/AuthContext'
import TextInput from '../../components/Formik/FormikInput'

const validationSchema = Yup.object().shape({
    username: Yup.string().required("Campo requerido"),
    password: Yup.string().required("Campo requerido")
})

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {

    const classes = useStyles()
    const { login } = useContext(AuthContext)
    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{ username: 'admin', password: 'admin' }}
            onSubmit={(values, actions) => {
                login()
            }}
        >
            {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
                <div className={classes.paper}>
                    <CssBaseline />
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" color="textPrimary">
                        Sign in
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextInput
                            fullWidth
                            required
                            name="username"
                            label="Username"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextInput
                            fullWidth
                            required
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            )}
        </Formik>
    )
}
