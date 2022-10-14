import { useNavigate, Form, redirect } from 'react-router-dom'
import { deleteClient } from '../data/getClients'

export const action = async ({params}) => {
    await deleteClient(params.id);
    return redirect('/');
}

export const Client = ({client}) => {

    
    const navigate = useNavigate();

    return (
        <tr className="border-b">
            <td className='p-6 space-y-2'>
                <p className="text-2xl text-gray-800 ">{client.name}</p>
                <p>{client.company.name}</p>
            </td>
            <td className="p-6">
                <p className="text-gray-600">
                    Email: <span className="text-gray-800 uppercase font-bold">{client.email}</span>
                </p>
                <p className="text-gray-600">
                    Phone: <span className="text-gray-800 uppercase font-bold">{client.phone}</span>
                </p>
            </td>
            <td className="p-6 flex gap-x-5">
                <button 
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={()=>navigate(`/clients/${client.id}/edit`)}
                >
                    Edit
                </button>
                <Form
                    method='POST'
                    action={`/clients/${client.id}/delete`}>
                    <button 
                        type="submit"
                        className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                    >
                        Delete
                    </button>
                </Form>
            </td>
        </tr>
    )
}