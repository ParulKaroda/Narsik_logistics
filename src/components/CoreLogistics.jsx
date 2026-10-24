import React from 'react'
import FreightMovement from './FreightMovement'
import {Truck,Package, Warehouse, Thermometer , Route , Zap , ShoppingCart} from 'lucide-react'

export default function CoreLogistics() {
  return (
      <section className='bg-white'>
                  <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h5 className='text-blue-500 text-sm m-2 ml-6'>CORE LOGISTICS SERVICES</h5>
                    <h1 className='text-5xl font-semibold m-2 ml-6'>Freight & Logistics</h1>
                    <h1 className='text-blue-500 text-5xl m-2 font-semibold ml-6'>Services Across India</h1>
      
                    <div className="gap flex justify-between ml-6">
                      <p className='text-gray-600 m-2 leading-6'>NARSIK Logistics provides FTL, PTL, interstate freight, warehousing, cold chain, project<br />
                        cargo and last-mile logistics services for businesses moving goods across India</p>
                      <p className='text-gray-400 font-bold text-sm p-4'>Explore All Logistics Services ↗</p>
                    </div>
      
                    <div className="grid grid-cols-4 gap-6 p-8">
                      <FreightMovement 
                        icon = {<Truck size={40} className='bg-gray-200 p-1 rounded'/>}
                        heading="Full Truckload (FTL) Transport"
                        para ="Dedicated truck transportation for bulk and commercial freight moving across India."
                        search="View Service →" />
      
                      <FreightMovement 
                        icon = {<Package size={40} className='bg-gray-200 p-1 rounded'/>}
                        heading="Part Truckload (PTL) Transport"
                        para="Flexible part-load freight transportation for shipments that do not require a full truck."
                        search="View Service →" />
      
                      <FreightMovement 
                        icon = {<Warehouse size={40} className='bg-gray-200 p-1 rounded'/>}
                        heading="Warehousing & Storage"
                        para="Secure storage and warehousing support connected with your wider transport and distribution needs."
                        search="View Service →" />
      
                      <FreightMovement 
                        icon = {<Thermometer size={40} className='bg-gray-200 p-1 rounded'/>}
                        heading="Cold Chain Logistics"
                        para="Temperature-controlled transportation for pharmaceutical, food and other sensitive cargo."
                        search="View Service →" />
      
                      <FreightMovement 
                        icon = {<Package size={40} className='bg-gray-200 p-1 rounded'/>}
                        heading="Project Cargo Transport"
                        para="Specialized transportation for machinery, industrial equipment, heavy and complex cargo."
                        search="View Service →" />
      
                      <FreightMovement 
                        icon = {<Route size={40} className='bg-gray-200 p-1 rounded'/>}
                        heading="Interstate Transport Services"
                        para="Reliable freight movement between Rajasthan and major business destinations across India."
                        search="View Service →" />
      
                      <FreightMovement 
                        icon = {<Zap size={40} className='bg-gray-200 p-1 rounded'/>}
                        heading="Last Mile Delivery"
                        para="Final-mile transportation for businesses, retail networks and distribution operations."
                        search="View Service →" />
      
                      <FreightMovement 
                        icon = {<ShoppingCart size={40} className='bg-gray-200 p-1 rounded'/>}
                        heading="eCommerce Logistics"
                        para="Transportation and fulfilment support for online sellers, D2C brands and growing businesses."
                        search="View Service →" />
      
                    </div>
      <br/>
                    <div className="border border-stone-300 rounded-4xl bg-[#0F172B] mt-5 flex justify-around gap-8 p-6 ml-8 mr-8" >
                      <div>
                        <snap className='text-sm font-bold text-blue-500 leading-7'>Custom Freight Requirements</snap>
                        <div>
                        <h4 className='text-white text-3xl font-semibold'>Need the right transport solution for your cargo?</h4>
                        <p className='text-sm text-gray-400 mt-2 font-semibold'>Tell us your cargo type, pickup location, destination and shipment requirement. Our logistics team <br/> can help identify the most suitable movement option.</p>
                        </div>
                      </div>
                      <button className='cta-btns border-slate-600 border rounded-lg px-4 py-2 text-white text-sm font-bold bg-blue-600 m-6'> Discuss Your Requirement → </button>
                    </div>
      
                  </div>
                </section>
  )
}
