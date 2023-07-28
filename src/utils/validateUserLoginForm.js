

export const validateUserLoginForm = (values) => {
    const errors = {};

    if(!values.username) {
        errors.username = 'Required';
    } else if (values.username.length < 6) {
        errors.username = 'Must be atleast 6 charectors';
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 charectors or less';
    }

    if(!values.password) {
        errors.password = 'Please enter your password';
    } else if (values.password.length < 8){
        errors.password = 'Must be atleast 8 charectors'
    }
    return errors;
};