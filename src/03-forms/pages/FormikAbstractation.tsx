import { Formik, Form } from "formik";
import * as Yup from "yup";
import '../styles/styles.css';
import { MyTextInput, MyCheckbox, MySelect } from "../components";

export const FormikAbstractation = () => {    
       
    return (
        <div>
            <h1>Formik Abstractation</h1>

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
                        <MyTextInput label={"First Name"} name={"firstName"} placeholder="Fausto"                            
                        />                        
                        <MyTextInput label={"Last Name"} name={"lastName"} placeholder="Calvino"                  
                        />                                                  

                        <MyTextInput label={"Email Address"} name={"email"} placeholder="fausto@me.com" type="email"                       
                        /> 

                        <MySelect name="jobType" label="Job Type">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">It-Senior</option>
                            <option value="it-junior">It-Junior</option>
                        </MySelect>

                        <MyCheckbox label="Terms and conditions" name="terms" />                       

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

            
        </div>
    )
}
