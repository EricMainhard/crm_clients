import { useLoaderData } from 'react-router-dom'
import { Client } from '../components/Client'
import { getClients } from '../data/getClients'

export const loader = async () => {
    return getClients();
}

export const Home = () => {

    const data = useLoaderData();
    
    return(
        <>
            <h1 className="font-black text-4xl text-blue-900">Clients</h1>
            <p className="mt-3">Manage your clients</p>
            <div>
                {
                    data.length > 0 ? (
                        <table className='w-full bg-white shadow mt-5 table-auto'>
                            <thead className='bg-blue-800 text-white'>
                                <tr>
                                    <th className='p-2'>Client</th>
                                    <th className='p-2'>Contact</th>
                                    <th className='p-2'>Actions</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                            {data.map((client)=>{
                                return (
                                    <Client 
                                    key={client.id}
                                    client={client}/> 
                                )
                            })}
                            </tbody>
                        </table>
                    ) : (
                    <p>No clients yet</p>
                    )
                }
            </div>
        </>
    )
}