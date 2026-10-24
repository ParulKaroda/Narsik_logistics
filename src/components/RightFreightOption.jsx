import React from 'react'
import FreightMovement from './FreightMovement'
import { Truck,Box,Snowflake,Package, Package2 } from 'lucide-react'

export default function RightFreightOption() {
  return (
      <section className='bg-white p-6'>
            <div>
              <p className='text-sm text-blue-500 mb-4'>FIND THE RIGHT FREIGHT OPTION</p>
              <h2 className='text-4xl font-semibold mb-4'>Choose the right transport solution for your cargo.</h2>
              <p className='text-md text-gray-600 '>From full truckload and part truckload transportation to specialized cargo and
                warehousing support,<br />
                NARSIK helps businesses match their shipment requirements with the right logistics solution.</p>
            </div>

            <div className='grid grid-cols-4 gap-4 p-8'>
              <FreightMovement 
                icon={<Truck size={40} className='bg-gray-200 p-1 rounded'/>}
                heading="Full Truckload (FTL)"
                para="Dedicated truck transportation for larger consignments, bulk freight, and time-sensitive business shipments."
                search="Explore Option ->" 
                bgColor='#fbfbfb'/>
              <FreightMovement 
                icon={<Box size={40} className='bg-gray-200 p-1 rounded'/>}
                heading="Part Truckload (PTL)"
                para="Flexible part-load transportation for shipments that do not require a full truck, helping optimize freight costs."
                search="Explore Option ->"
                bgColor='#fbfbfb' />
              <FreightMovement 
                icon={<Snowflake size={40} className='bg-gray-200 p-1 rounded'/>}
                heading="Specialized Cargo"
                para="Transport planning for temperature-sensitive, project, industrial, heavy, or other cargo with specific handling needs."
                search="Explore Option ->" 
                bgColor='#fbfbfb'/>
              <FreightMovement 
                icon={<Package size={40} className='bg-gray-200 p-1 rounded'/>} 
                heading="Warehousing & Storage"
                para="Storage and logistics support for businesses that need cargo held, managed, or coordinated with transportation."
                search="Explore Option ->" 
                bgColor='#fbfbfb'/>
            </div>

            <div className="border border-stone-300 rounded-4xl bg-[#0F172B] mt-5 flex justify-between gap-8 p-6 m-6" >
              <div>
                <snap className='text-sm text-blue-500 m-2'>NOT SURE WHAT YOU NEED?</snap>
                <h4 className='text-white text-2xl font-bold m-2'>Tell us about your shipment.</h4>
                <p className='text-md text-gray-400 m-2'>Share your cargo, pickup location, destination, approximate weight, and delivery <br/>requirement. Our team can help identify the appropriate freight solution.</p>
              </div>
              <button className='cta-btns border-slate-600 border rounded-lg px-4 py-2 text-white text-sm font-bold bg-blue-600 m-8'> Get a Freight Quote → </button>
            </div>

          </section>
  )
}
