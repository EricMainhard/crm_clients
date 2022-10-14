import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import { FormComponent } from '../components/Form'
import { addClient } from '../data/getClients'

export const action = async ({request}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const email = formData.get('email');
    const regExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

    const errors = [];
    if (Object.values(data).includes('')){
        errors.push('All fields are required')
    } 

    if (email != '' & !regExp.test(email)){
        errors.push('Email is not valid')
    }

    if (errors.length){
        return errors;
    } else {
        await addClient(data);
        return redirect('/');
    }
}

export const NewClient = () => {

    const errors = useActionData()
    const navigate = useNavigate();

    return(
        <>
            <h1 className="font-black text-4xl text-blue-900">New Client</h1>
            <p className="mt-3">Register a new client</p>
            <div className="flex justify-end">
                <button 
                    className="bg-blue-800 text-white font-bold uppercase px-3 py-1"
                    onClick={() => navigate('/')}
                >
                    
                    Back
                </button>
            </div>
            <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
                <Form
                    method='POST'
                    noValidate
                >
                    <FormComponent/>
                {errors && errors.map((err)=>(
                    <p className='text-center bg-red-500 p-3 text-white uppercase font-bold mt-2'>
                        {err}
                    </p>
                ))
                }
                <input
                    type="submit"
                    className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
                    value="Add client"
                />
                </Form>  
            </div>  
        </>
    )
}