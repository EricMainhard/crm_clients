import { useRouteError } from 'react-router-dom'

export const Error = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div className='space-y-8'>
            <h1 className='text-center text-4xl font-extrabold mt-20 text-blue-900'>
                CRM - Clients
            </h1>
            <p className='text-center'>
                There was an error:
            </p>
            <p className='text-center uppercase'>
                {error.message}
            </p>
        </div>
    )
}