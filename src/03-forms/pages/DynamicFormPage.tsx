import { Form, Formik } from "formik";
import formJSON from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

const initialValues:{ [x:string]:any } = {};
const requiredFields:{ [x:string]:any } = {};

for (const input of formJSON) {
  initialValues[ input.name ] = input.value;

  if ( !input.validations ) continue;

  let schema = Yup.string()

  for (const rule of input.validations ) {
      if ( rule.type === 'required' ) {
          schema = schema.required('Este campo es requerido');
      }

      if ( rule.type === 'minLength' ) {
          schema = schema.min( (rule as any).value || 2, `Mínimo de ${ (rule as any).value || 2 } caracteres`);
      }

      if ( rule.type === 'email' ) {
          schema = schema.email( `Revise el formato del email`);
      }      
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
        <h1>Dynamic Form Page</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions)=>{
            console.log(values);
            
          }}
          validationSchema={validationSchema}
        >
          {(formik)=>(
            <Form noValidate>
              {formJSON.map(({type,label,name,placeholder,value,options})=>{

                if ( type === 'input' || type === 'password' || type === 'email') {
                  return <MyTextInput 
                    type={(type as any)} 
                    name={name} 
                    label={label} 
                    placeholder={placeholder} 
                    key={name}
                  />                 

                } else if ( type === 'select' ) {
                
                  return (
                    <MySelect
                      key={name}
                      name={name}
                      label={label}
                    >
                      <option value="">Select an option</option>
                      {
                        options?.map(({id,label})=>(
                          <option key={id} value={id}>{label}</option>
                        ))
                      }
                    </MySelect>
                  )
                }
                throw new Error(`El type: ${ type }, no es soportado`);
                
              })}
              <button type="submit">submit</button>
            </Form>

          )}
        </Formik>

    </div>
  )
}
