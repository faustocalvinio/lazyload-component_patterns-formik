import '../styles/styles.css';
import { useForm } from '../hooks/useForm';
import { FormEvent } from 'react';

export const RegisterFormikPage = () => {

    const { 
        formData , email , name , isValidEmail ,password1 , password2 , onChange , resetForm
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });
    

    function onSubmit( event : FormEvent<HTMLFormElement> ) {
        event.preventDefault();
        console.log(formData);        
    };

    return (
        <div>
            <h1>Register Formik Page</h1>
            <form noValidate onSubmit={ onSubmit }>
                <input
                    name="name" 
                    type="text" 
                    placeholder="Name"
                    value={name}
                    onChange={ onChange }
                    className={`${name.trim().length<= 0 && 'has-error'}`}
                />
                { name.trim().length<= 0 && <span>Este campo es necesario</span> }
                <input
                    name="email" 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={ onChange }
                    className={` ${!isValidEmail(email) && 'has-error'} `}
                />
                { !isValidEmail(email) && <span>Este email no es valido</span> }
                <input
                    name="password1" 
                    type="password" 
                    placeholder="Password1"
                    value={password1}
                    onChange={ onChange }
                />
                { password1.trim().length<=0 && <span>Este campo es necesario</span> }
                { password1.trim().length<6 && password1.trim().length>0 && <span>La contrasenia tiene que tener 6 caracteres</span> }

                <input
                    name="password2" 
                    type="password" 
                    placeholder="Repeat PW"
                    value={password2}
                    onChange={ onChange }
                />
                { password2.trim().length<= 0 && <span>Este campo es necesario</span> }
                { password2.trim().length > 0 && password1!==password2 && <span>Las contrasenias deben coincidir</span> }
                <button type="submit" >Create</button>
                <button type='button' onClick={ resetForm }>Reset Form</button>
            </form>
        </div>
    )
}
