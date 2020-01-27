import React from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepLabel from '@material-ui/core/StepLabel';

export default function StepperBar({activeStep, steps, errors, setActiveStep, ...otherProps}) {
    return (
        <Stepper activeStep={activeStep} {...otherProps}>
            {steps.map((label, i) => (
                <Step 
                    key={label}
                >
                    <StepButton onClick={() => setActiveStep(i)}>
                        <StepLabel error={!!errors[i]}>{label}</StepLabel>
                    </StepButton>
                </Step>
            ))}
        </Stepper>
    )
}
