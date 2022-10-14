export const FormComponent = ({client}) => {
 
    return (
        <>
         <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="name"    
            > Name: </label>
            <input 
                type="text"
                name="name" 
                id="name"
                placeholder="Client's name"
                className="mt-2 block w-full p-3 bg-gray-50"
                defaultValue={client?.name}
            />
         </div>
         <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="company"    
            > Company: </label>
            <input 
                type="text"
                name="company" 
                id="company"
                placeholder="Client's Company"
                className="mt-2 block w-full p-3 bg-gray-50"
                defaultValue={client?.company}
            />
         </div>
         <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="email"    
            > Email: </label>
            <input 
                type="email"
                name="email" 
                id="email"
                placeholder="Client's email"
                className="mt-2 block w-full p-3 bg-gray-50"
                defaultValue={client?.email}
            />
         </div>
         <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="phone"    
            > Phone: </label>
            <input 
                type="tel"
                name="phone" 
                id="phone"
                placeholder="Client's phone"
                className="mt-2 block w-full p-3 bg-gray-50"
                defaultValue={client?.phone}
            />
         </div>
         <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="notes"    
            > Notes: </label>
            <textarea
                as="textarea" 
                type="text"
                name="notes" 
                id="notes"
                placeholder="Client's notes"
                className="mt-2 block w-full p-3 bg-gray-50 align-self"
                defaultValue={client?.notes}
            />
         </div>
        </>
    )
}