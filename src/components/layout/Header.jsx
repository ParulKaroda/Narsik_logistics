import { ChevronDown } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import ServicesMenu from '../ServicesMenu'
import ServicesMenu from '../Servicemenu'
import SolutionMenu from '../SolutionMenu'
import IndustryMenu from '../IndustryMenu'
import CompanyMenu from '../CompanyMenu'
import ResourcesMenu from '../ResourcesMenu'


const ServiceMenu = ({ f }) => {
  return <>
    <div className='w-6xl h-[380px] z-3  border rounded-lg mx-auto mt-[80px]' onMouseLeave={() => f('service')} ><ServicesMenu/></div>
  </>
}
const SolutionMenuWrap = ({ f }) => {
  return <>
    <div className='w-3xl h-[300px] z-3 border rounded-b-lg mx-auto mt-[80px]' onMouseLeave={() => f('solution')} ><SolutionMenu/></div>
  </>
}
const IndustryMenuWrap = ({ f }) => {
  return <>
    <div className='w-3xl h-[300px] z-3 border rounded-b-lg mx-auto mt-[80px]' onMouseLeave={() => f('industry')} ><IndustryMenu/></div>
  </>
}
const CompanyMenuWrap = ({ f }) => {
    return <>
    <div className='w-3xl h-[300px] z-3 border rounded-b-lg mx-auto mt-[80px]' onMouseLeave={() => f('company')} ><CompanyMenu/></div>
    </>
}
const ResoucesMenuWrap = ({ f }) => {
    return <>
    <div className='w-3xl h-[300px] z-3 border rounded-b-lg mx-auto mt-[80px]' onMouseLeave={() => f('resource')} ><ResourcesMenu/></div>
    </>
}

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleClick = (activemenu) => {
    setActiveMenu(activemenu)
  }
  const handleHide = (activemenu) => {
    activemenu === activeMenu ? setActiveMenu(null) : setActiveMenu(activemenu)
  }

  const MegaMenu = {
    service: <ServiceMenu f={handleHide} />,
    solution: <SolutionMenuWrap f={handleHide} />,
    industry: <IndustryMenuWrap f={handleHide} />,
    company: <CompanyMenuWrap f={handleHide} />,
    resource: <ResoucesMenuWrap f={handleHide} />
  }
  return (
    <div className='absolute z-2'>
    <nav className='header'>
        <div className='logo'> <Link> <img src="/images/favicon-w.webp" alt="logo-narsik" height={44} width={44}/></Link></div>
       <div className='brand-name'> <span id='main-name'>NARSI<span style={{color:"#2463EB"}}>K </span></span>
        <span id='brand-type'>logistics</span>
        </div>
         
         <div className='nav-items'>
            <Link to={"#"} className='nav-link group' onMouseEnter={() => handleClick('service')} > <div className='flex'>Services<span className='text-sm group-hover:rotate-180 p-2 '><ChevronDown size={16} strokeWidth={2.5}/></span> </div></Link>
            <Link to={'#'} className='nav-link group' onMouseEnter={() => handleClick('solution')} > <div className='flex'>Solutions<span className='text-sm group-hover:rotate-180 p-2 '><ChevronDown size={16} strokeWidth={2.5}/></span></div></Link>
            <Link to={'#'} className='nav-link group'onMouseEnter={() => handleClick('industry')} ><div className='flex'>Industries<span className='text-sm group-hover:rotate-180 p-2 '><ChevronDown size={16} strokeWidth={2.5}/></span></div></Link>
            <Link to={'#'} className='nav-link'>Blogs</Link>
            <Link to={'#'} className='nav-link group' onMouseEnter={() => handleClick('company')}><div className='flex'>Company<span className='text-sm group-hover:rotate-180 p-2 '><ChevronDown size={16} strokeWidth={2.5}/></span></div></Link>
            <Link to={'#'} className='nav-link group' onMouseEnter={() => handleClick('resource')}><div className='flex'>Resource<span className='text-sm group-hover:rotate-180 p-2 '><ChevronDown size={16} strokeWidth={2.5}/></span></div></Link>
            <div className='cta-btn'>
                <button id='login-btn'> Customer Login </button>
                <button id='main-btn'>Get a Freight Quote </button>
            </div>
         </div>     
    </nav>
      {activeMenu ? MegaMenu[activeMenu] : null}
</div>
  )
}