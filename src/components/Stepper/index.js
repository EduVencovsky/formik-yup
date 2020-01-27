import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import StepperBar from './StepperBar'
import ArrowStepper from './StepperArrow'

const useStyles = makeStyles(theme => ({
    content: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
    },
}));
  

export default function CustomStepper({children, stepsLabel, onFinish, errors}) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    
    return (
        <Box bgcolor="background.paper">
            <StepperBar 
                setActiveStep={setActiveStep}
                errors={errors}
                activeStep={activeStep} 
                steps={stepsLabel} 
                alternativeLabel 
            />
            <Box className={classes.content}>
                {children[activeStep]}
            </Box>
            <ArrowStepper 
                index={activeStep} 
                setNextIndex={setActiveStep} 
                length={stepsLabel.length}
                onFinish={onFinish}
            />
        </Box>
    );
}
