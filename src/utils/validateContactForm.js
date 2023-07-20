export const validateContactForm = (values) => {
    const errors ={};

    if(!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
        errors.firstName= 'Must be atleast 2 charectors.';
    } else if (values.firstName.length > 15 ) {
        errors.firstName = 'Must be 15 charectors or less';
    }

    if(!values.lastName) {
        errors.lastName= 'Required';
    } else if (values.lastName.length < 2) {
        errors.lastName= 'Must be atleast 2 charectors.';
    } else if (values.lastName.length > 15 ) {
        errors.lastName = 'Must be 15 charectors or less';
    }

    const reg = /^\d+$/;
    if(!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should only contain only numbers.';
    }
    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }
    return errors;
};

