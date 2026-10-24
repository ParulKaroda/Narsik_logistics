import { Link } from 'react-router-dom'
import React from 'react'

export default function IndustriesServe() {
  return (
    <>
      <section className='bg-white'>
        <br/>
        <br/>
        <br/>
        <div className='flex justify-between'>
          <div className='grid grid-cols-2 w-390 text-center'>
            <Link to={'#'} className='p-5 border border-slate-50 rounded-3xl bg-blue-400/30 m-5'>
              <div className=' border border-black/10 p-5 w-16 rounded-lg bg-white ms-22 '>
                <i className="fa-sharp fa-regular fa-truck text-blue-600/80 "></i></div>
              <h4 >Manufacturing</h4>
              <p>Freight movement for manufacturers, industrial units, suppliers, and distributors.</p>
            </Link>
            <Link to={'#'} className='p-5 border border-slate-50 rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-400/20 m-5'>
              <div className=' border border-black/10 p-5 w-16 rounded-lg bg-white ms-22 '>
                <i className="fa-sharp fa-regular fa-truck text-blue-600/80 "></i></div>
              <h4>E-commerce</h4>
              <p>Transport and fulfilment support for D2C brands, online sellers, and marketplace businesses.</p>
            </Link>
            <Link to={'#'} className='p-5 border border-slate-50 rounded-3xl bg-gradient-to-br from-emerald-600/20 to-teal-400/20 m-5'>
              <div className=' border border-black/10 p-5 w-16 rounded-lg bg-white ms-22 '>
                <i className="fa-sharp fa-regular fa-truck text-blue-600/80 "></i></div>
              <h4>Healthcare</h4>
              <p>Logistics support for pharmaceutical, medical, healthcare, and temperature-sensitive cargo.</p>
            </Link>
            <Link to={'#'} className='p-5 border border-slate-50 rounded-3xl bg-gradient-to-br from-amber-600/20 to-orange-400/20 m-5'>
              <div className=' border border-black/10 p-5 w-16 rounded-lg bg-white ms-22 '>
                <i className="fa-sharp fa-regular fa-truck text-blue-600/80 "></i></div>
              <h4>Agriculture</h4>
              <p>Cargo transportation support for agricultural businesses, suppliers, traders, and food-related
                freight.</p>
            </Link>
          </div>
          
          <div className='ml-10'>
            <p className='text-blue-600 font-semibold uppercase text-xs mt-2 leading-7'>INDUSTRIES WE SERVE</p>
            <h2 className='font-bold text-5xl w-2xl '>Logistics Solutions for
              <span className='text-black/30 italic'> Growing Businesses.</span>
            </h2>
            <p className='text-black/60 text-lg me-10 mt-10'>NARSIK provides freight transportation and logistics support for manufacturers, eCommerce businesses,
              healthcare suppliers, agriculture businesses, traders, distributors, and other commercial shippers
              across India.</p>

            <ul className='mt-10 list-disc gap-2'>
              <li className='p-4'>FTL &amp; PTL Freight Transportation</li>
              <li className='p-4'>Interstate Cargo Movement</li>
              <li className='p-4'>Cargo-Specific Transport Planning</li>
              <li className='p-4'>Warehousing &amp; Logistics Support</li>
            </ul>
            
          </div>
        </div>
      </section>

    </>
  )
}
