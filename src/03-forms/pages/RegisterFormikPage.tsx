import '../styles/styles.css';
import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';
import * as Yup from 'yup';
export const RegisterFormikPage = () => {

    
    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    username:'',
                    email:'',
                    password1:'',
                    password2:''
                }}
                onSubmit={ (values, actions) => {
                    console.log(values); 
                    actions.resetForm();                   
                }}
                validationSchema={Yup.object({
                    username: Yup.string().min(2,'Min 2 chars').max(15, 'Must be 15 characters or less').required('First Name Required'),
                    email: Yup.string().email('Invalid email address').required('Email Required'),
                    password1: Yup.string().min(6, 'Min 6 chars').required('Password Required'),
                    password2: Yup.string().oneOf([Yup.ref('password1')], 'Passwords must match')
                })}
            >
                {
                    formik => (
                        <Form>
                            <MyTextInput name='username' label={'UserName'} />

                            <MyTextInput label={"Email Address"} name={"email"} placeholder="fausto@me.com" type="email"                       
                            /> 

                            <MyTextInput label={"Password"} name={"password1"} placeholder="*********" type="password" />

                            <MyTextInput label={"Password"} name={"password2"} placeholder="*********" type="password" />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
