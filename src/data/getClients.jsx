import { redirect } from 'react-router-dom'

export const getClients = async () => {
    const data = await fetch(import.meta.env.VITE_API_URL);
    const res = await data.json();
    return res;
}

export const getSingleClient = async (id) => {
    const data = await fetch(`${import.meta.env.VITE_API_URL}?id=${id}`);
    const res = await data.json();
    return res;
}

export const addClient = async (client) => {
    try{
        const res = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(client),
            headers:{
              'Content-Type': 'application/json'
            }
        });
        return await res.json()
    } catch(e){
        console.log(e);
    }
}

export const editClient = async (id, client) => {
    try{
        const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(client),
            headers:{
              'Content-Type': 'application/json'
            }
        });
        return await res.json()
    } catch(e){
        console.log(e);
    }
}

export const deleteClient = async (id) => {
        if (confirm('Are you sure you want to delete this client?')){
            try{
                const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
                    method: 'DELETE'
                })
                await res.json();
                return redirect('/');
            } catch(e){
                console.log(e);
            }
        }
}