import { Link, NavLink } from 'react-router-dom'; 
import { DownOutlined } from '@ant-design/icons';
import { FaWindows } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";
import { Dropdown, Space } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: <NavLink to='/wordpress'  className={({isActive})=> `block h-full ${isActive ? 'text-[#66C206]' : 'text-slate-800 hover:underline'} duration-200 border-b  decoration-2 underline-offset-8 decoration-[#66c206]`}>Wordpress Hosting</NavLink>,
    key: '0',
  },
  {
    label: <NavLink to='/cloud'  className={({isActive})=> `block h-full ${isActive ? 'text-[#66C206]' : 'text-slate-800 hover:underline'} duration-200 border-b  decoration-2 underline-offset-8 decoration-[#66c206]`}>Cloud Hosting</NavLink>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: <NavLink to='/vps'  className={({isActive})=> `block h-full ${isActive ? 'text-[#66C206]' : 'text-slate-800 hover:underline'} duration-200 border-b  decoration-2 underline-offset-8 decoration-[#66c206]`}>VPS Hosting</NavLink>,
    key: '3',
  },
  {
    label: <NavLink to='/dedicated'  className={({isActive})=> `block h-full ${isActive ? 'text-[#66C206]' : 'text-slate-800 hover:underline'} duration-200 border-b  decoration-2 underline-offset-8 decoration-[#66c206]`}>Dedicated Hosting</NavLink>,
    key: '4',
  },
  {
    label: <NavLink to='/semidedicated'  className={({isActive})=> `block h-full ${isActive ? 'text-[#66C206]' : 'text-slate-800 hover:underline'} duration-200 border-b`}>Semi Dedicated Hosting</NavLink>,
    key: '5',
  },
];


const navLinksList = [
    { name: 'Home', to: '/', },
    { name: 'Pricing', to: '/pricing', },
    { name: 'Domain', to: '/domain', },
    { name: 'Affiliates', to: '/affiliates', },
    { name: 'Company', to: '/company', },
]

export default function Header () {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <header className="w-full z-10 sticky top-0 py-2 bg-[#f8f9fa]">
            <nav className="sm:container xl:max-w-6xl mx-auto flex justify-between items-stretch lg:space-x-8 px-[15px]">
                <Link to="/" className=''>
                    <img src={'/src/assets/logo.png'} className='w-[175px] py-[5px] min-w-32' alt="logo" />
                </Link>
                <button 
                    className="lg:hidden block text-slate-800 focus:outline-none text-3xl" 
                    onClick={() => {setIsNavOpen((prev) => !prev)}}>
                        {isNavOpen ? <IoClose /> : <IoMenu />}
                </button>
                <ul className={`${isNavOpen ? 'opacity-1 max-h-[500px] py-4' : 'max-h-0 lg:max-h-full'} flex flex-col lg:flex-row font-medium gap-y-4 lg:gap-4 xl:gap-6 items-center lg:static absolute lg:bg-transparent bg-white px-4 top-[100%] left-0 w-full lg:w-auto lg:p-0 transition-all duration-500 ease-in-out overflow-hidden`}>   
                    <li key={navLinksList[0].to} className='flex justify-center'>
                        <NavLink to={navLinksList[0].to}  className={({isActive})=> `block h-full ${isActive ? 'text-[#66C206]' : 'text-slate-800 hover:underline'} duration-200  decoration underline-offset-8 decoration-[#66c206]`}>{navLinksList[0].name}</NavLink>
                    </li>                  
                    <li key={navLinksList[1].to} className='flex justify-center'>
                        <NavLink to={navLinksList[1].to}  className={({isActive})=> `block h-full ${isActive ? 'text-[#66C206]' : 'text-slate-800 hover:underline'} duration-200  decoration underline-offset-8 decoration-[#66c206]`}>{navLinksList[1].name}</NavLink>
                    </li>                  
                    <li className='flex justify-center'>
                        <Dropdown
                            menu={{
                            items,
                            }}
                            trigger={['click']}
                        >
                            <a onClick={(e) => e.preventDefault()} className='relative lg:static left-4 lg:left-0'>
                            <Space className='hover:underline  decoration underline-offset-8 decoration-[#66c206]'>
                                Hosting
                                <DownOutlined />
                            </Space>
                            </a>
                        </Dropdown>
                    </li>
                    <li key={navLinksList[2].to} className='flex justify-center'>
                        <NavLink to={navLinksList[2].to}  className={({isActive})=> `block h-full ${isActive ? 'text-[#66C206]' : 'text-slate-800 hover:underline'} duration-200  decoration underline-offset-8 decoration-[#66c206]`}>{navLinksList[2].name}</NavLink>
                    </li>                  
                    <li key={navLinksList[3].to} className='flex justify-center'>
                        <NavLink to={navLinksList[3].to}  className={({isActive})=> `block h-full ${isActive ? 'text-[#66C206]' : 'text-slate-800 hover:underline'} duration-200  decoration underline-offset-8 decoration-[#66c206]`}>{navLinksList[3].name}</NavLink>
                    </li>                  
                    <li key={navLinksList[4].to} className='flex justify-center'>
                        <NavLink to={navLinksList[4].to}  className={({isActive})=> `block h-full ${isActive ? 'text-[#66C206]' : 'text-slate-800 hover:underline'} duration-200  decoration underline-offset-8 decoration-[#66c206]`}>{navLinksList[4].name}</NavLink>
                    </li>                  
                    <ul className='flex flex-row font-medium space-x-2 items-stretch justify-center'>
                        <li>
                            <Link rel="stylesheet" href="https://us.cloudlogin.co/login/" className="flex bg-orange-400 text-white text-sm font-semibold hover:bg-orange-600 active:bg-orange-700 px-5 py-3 rounded-full transition duration-200 ease-in-out h-full items-center text-nowrap">Client Area</Link>
                        </li>
                        <li>
                            <Link rel="stylesheet" href="https://us.cloudlogin.co/login/" className="flex space-x-2 bg-blue-500 text-white text-sm leading-5 font-semibold hover:bg-blue-600 active:bg-blue-700 px-5 py-2 rounded-full transition duration-200 ease-in-out h-full items-center"><FaWindows className='inline text-xl'/> <span>Windows <br/> Hosting</span></Link>
                        </li>
                    </ul>
                </ul>
                
            </nav>
        </header>
    )
}