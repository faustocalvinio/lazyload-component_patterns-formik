import { FormikErrors, useFormik } from "formik";

import '../styles/styles.css';

interface FormValues {    
    firstName: string;
    lastName: string;
    email: string;    
}

export const FormikBasicPage = () => {

    const validate = ( { email,firstName,lastName }:FormValues ) => {
        const errors:FormikErrors<FormValues> = {};

        if( !firstName ) {
            errors.firstName = 'Required!'
        } else if( firstName.length > 15 ) {
            errors.firstName = 'Must be 15 characters or less'        
        }

        return 
    }

    const { handleChange, values, handleSubmit } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',        
        },
        onSubmit: (values) => {
            console.log(values);            
        }
    });

    

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>
            <form noValidate onSubmit={ handleSubmit }>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    name='firstName'
                    onChange={ handleChange }
                    value={ values.firstName }
                />
                <span>First Name is required</span>

                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name='lastName'
                    onChange={ handleChange }
                    value={ values.lastName }
                />
                <span>Last Name is required</span>

                <label htmlFor="email">Email Address</label>
                <input 
                    type="email" 
                    name='email'
                    onChange={ handleChange }
                    value={ values.email }
                />

                <span>Email is required</span>
                <span>Check for an valid email format</span>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
