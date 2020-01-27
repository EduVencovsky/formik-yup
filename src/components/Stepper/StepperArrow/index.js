import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
}));

export default function ArrowStepper({index, setNextIndex, length, onFinish}) {

    const classes = useStyles();
    const isLeftButtonDisabled = !(index > 0)

    return (
        <Box display="flex" p={1}>
            <Box p={1} flexGrow={1}>
                <Button
                    size="medium"
                    disabled={isLeftButtonDisabled}
                    disableFocusRipple={isLeftButtonDisabled}
                    disableRipple={isLeftButtonDisabled}
                    onClick={() => setNextIndex(prevActiveStep => prevActiveStep - 1)}
                >
                    <ChevronLeftIcon className={classes.leftIcon} />            
                    Previous
                </Button>
            </Box>
            <Box p={1}>
                { index !== length - 1 ? 
                    <Button
                        size="medium"                        
                        onClick={() => setNextIndex(prevActiveStep => prevActiveStep + 1)}
                    >
                        Next
                        <ChevronRightIcon className={classes.rightIcon} />
                    </Button>
                    :
                    <Button
                        size="medium"                        
                        onClick={onFinish}
                    >
                        Save
                        <CheckCircleIcon className={classes.rightIcon} />
                    </Button>
                }
            </Box>
        </Box>
    )
}
