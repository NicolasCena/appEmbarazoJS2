import React, { useState } from 'react'

export const useValidatorRegister = () => {

    const [ nameText, setNameText ] = useState('');
    const [ emailText, setEmailText ] = useState('');
    const [ newEmailText, setNewEmailText ] = useState('');
    const [ passwordText, setPasswordText ] = useState('');
    const [ newPasswordText, setNewPasswordText ] = useState('');
    const [ requirementsStatus, setRequirementsStatus ] = useState(false);
    const [ requirementsObject, setRequirementsObject ] = useState({ uppercase: false, lowercase: false, caracter: false, length: false, number: false, samePass: false, });

    // This function check each variable of requirementsObject.
    const CheckStatusRequirements = () => {
        requirementsObject.uppercase = (/[A-Z]/).test(passwordText);
        requirementsObject.lowercase = (/[a-z]/).test(passwordText);
        requirementsObject.caracter = (/[!@#$%^&*]/).test(passwordText); 
        requirementsObject.length = (/^.{4,12}$/).test(passwordText);
        requirementsObject.number = (/[0-9]/).test(passwordText);
        (newPasswordText === passwordText && newPasswordText !== '') ? setRequirementsObject({...requirementsObject, samePass: true}) : setRequirementsObject({...requirementsObject, samePass: false});
    };
    
    // This function checks that each element of requirementsObject is true, 
    const ControlRequirementsStatus = () => { 
        const booleanArray = [];
    
        for(const key in requirementsObject){
          booleanArray.push(requirementsObject[key])
        };

        let controlStatus = booleanArray.every((item) => item === true);
        setRequirementsStatus(controlStatus);
    };
    
    // In this variable is the color for the email input.
    let statusColorEmail = ( newEmailText === '') 
    ? 'black' 
    : ( newEmailText !== '' && newEmailText === emailText ) 
      ? 'green' 
      : 'red'

    // In this variable is the color for the newpassword input.
    let statusColorPassword = ( newPasswordText === '') 
    ? 'black' 
    : ( newPasswordText !== '' && newPasswordText === passwordText && requirementsStatus ) 
        ? 'green' 
        : 'red'

    return {
        passwordText,
        newPasswordText,
        requirementsObject,
        statusColorPassword,
        statusColorEmail,
        nameText,
        emailText,
        newEmailText,
        requirementsStatus,
        setNewEmailText,
        setNameText,
        setEmailText,
        CheckStatusRequirements,
        ControlRequirementsStatus,
        setNewPasswordText,
        setPasswordText,
    }
}

