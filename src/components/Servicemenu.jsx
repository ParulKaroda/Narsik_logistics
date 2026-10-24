import React from 'react'

export default function ServicesMenu() {
  return (
    <>
    <div className='flex bg-white rounded-lg fixed m-0 '>

<div className='w-72 mt-6 bg-slate-900 m-5 p-5 rounded-lg'>
    <span className='eyebrow font-bold uppercase inline-flex gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 md:mb-2 text-xs text-blue-300'>Freight services</span>
    <h3 className='text-white font-bold text-2xl '>Move your freight with clarity.</h3>
    <p className='text-slate-600'>Freight movement and transport execution for businesses across India.</p>
                <button className='cta-freeQuote  bg-blue-600 text-white rounded-lg font-bold flex justify-between gap-2 hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 p-1 w-40 align center ps-3 pt-2 text-center mt-20 text-left flex '><div> Get Free Quote</div> <div className='rotate-45'><i class="fa-solid fa-arrow-up-long fa-rotate-by" ></i></div> </button>

</div>
<div className='grid grid-cols-2 m-3 p-3'>
  <div className='border border-slate-200 p-5 rounded-lg m-2 w-75 '>
    <h3 className='font-bold'>FTL Transport</h3>
    <p className='text-slate-600 text-sm'>Dedicated truckload movement for larger consignments.</p>
  </div>
  <div className='border border-slate-200 p-5 rounded-lg m-2 w-75 '>
    <h3 className='font-bold'>PTL Transport</h3>
    <p className='text-slate-600 text-sm'>Flexible part-load freight for shared capacity.</p>
  </div>
  <div className='border border-slate-200 p-5 rounded-lg m-2 w-75 '>
    <h3 className='font-bold'>Interstate Transport</h3>
    <p className='text-slate-600 text-sm'>Reliable movement between states and freight corridors.</p>
  </div>
  <div className='border border-slate-200 p-5 rounded-lg m-2 w-75 '>
    <h3 className='font-bold'>Project Cargo</h3>
    <p className='text-slate-600 text-sm'>Planned movement of machinery and specialized cargo.</p>
  </div>
  <div className='border border-slate-200 p-5 rounded-lg m-2'>
    <h3 className='font-bold'>Cold Chain Logistics</h3>
    <p className='text-slate-600 text-sm'>Temperature-sensitive transportation planning.</p>
  </div>
  <div className='border border-slate-200 p-5 rounded-lg m-2 w-75 '>
    <h3 className='font-bold'>Cargo Transportation</h3>
    <p className='text-slate-600 text-sm'>Business cargo movement for varied shipment needs.</p>
  </div>
</div>
  </div>
    </>
  )
}