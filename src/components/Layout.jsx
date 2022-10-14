import { Outlet, useLocation, Link } from 'react-router-dom'

export const Layout = () => {

    const {pathname} = useLocation();

    return(
        <div className='md:flex md:min-h-screen'>
            <aside className='md:w-1/4 bg-blue-600 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white md:text-2xl'>
                    CRM - Clients
                </h2>
                <nav className='mt-10'>
                    <Link to="/" className={`${(pathname) === ("/")?'text-blue-300':'text-white'} text-2xl block mt-2 hover:text-blue-300`}> Home </Link>
                    <Link to="/clients/new" className={`${pathname === ("/clients/new")?'text-blue-300':'text-white'} text-2xl block mt-2 hover:text-blue-300 text-white`}> Clients </Link>
                </nav>
            </aside>
            <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet/>
            </main>
        </div>
    )
}