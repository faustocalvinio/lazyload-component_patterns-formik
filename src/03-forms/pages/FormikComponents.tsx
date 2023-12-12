import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../styles/styles.css';

export const FormikComponents = () => {    
       

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik 
                initialValues={{ 
                    firstName: '', 
                    lastName: '', 
                    email: '' ,
                    terms: false,
                    jobType:'',
                }}
                onSubmit={ (values) => {
                    console.log(values);                
                }}
                validationSchema={ Yup.object({
                    firstName: Yup.string().max(15, 'Must be 15 characters or less').required('First Name Required'),
                    lastName: Yup.string().max(10, 'Must be 10 characters or less').required('Last Name Required'),
                    email: Yup.string().email('Invalid email address').required('Email Required'),
                    terms: Yup.boolean().oneOf([true], 'Terms and conditions must be accepted'),
                    jobType: Yup.string().notOneOf(['it-junior'],"opcion JR no permitida").required('Job Type Required'),
                })}
            >
                { formik => (
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="span"/>

                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="span" />                       

                        <label htmlFor="email">Email Address</label>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component="span"/>  
                        
                        <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">It-Senior</option>
                            <option value="it-junior">It-Junior</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span"/> 

                        <label>
                            Terminos y condiciones
                            <Field type="checkbox" name="terms"/>
                            </label>
                        <ErrorMessage name="terms" component="span"/>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

            
        </div>
    )
}
