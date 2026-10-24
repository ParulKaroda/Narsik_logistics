import React from 'react'
import FreightMovement from './FreightMovement'
import { Truck, Radar, MapPinHouse ,Clock, BadgeCheck, ShieldCheck } from 'lucide-react'

export default function WhyNarsik() {
  return (
      <section className='bg-white'>
                  <div>
                    <br/>
                    <br/>
                    <br/>
                    <p className='text-sm text-blue-500 ml-4'>WHY NARSIK</p>
                    <h2 className='text-3xl font-bold m-4'>A reliable logistics partner for businesses<br />
                      moving freight across India.</h2>
                    <p className='text-md text-gray-500 m-4'>NARSIK combines Jaipur-based operations with practical freight planning, shipment visibility, and<br />
                      transport coordination to help businesses move cargo with greater clarity and reliability.</p>
                  </div>
      
                  <div className='cards grid grid-cols-3 gap-6 p-6 text-center items-center'>
                    <FreightMovement 
                      icon = {<Truck size={40}  className='text-blue-500 bg-white p-1 rounded ml-40b'/>}
                      heading="Accountable Fleet Coordination"
                      para="NARSIK coordinates vehicle availability, pickup planning, routing, and delivery execution to keep freight movement organized and accountable." 
                      bgColor='#C6E7FC'/>
                    <FreightMovement
                      icon = {<Radar size={40} className='text-blue-500 bg-white p-1 rounded ml-40'/>}
                      heading="Real-Time Shipment Visibility"
                      para="Shipment updates help dispatch, accounts, and receiving teams stay aligned from pickup through delivery." 
                      bgColor='#E8D2FA'/>
                    <FreightMovement
                      icon = {<MapPinHouse size={40} className='text-blue-500 bg-white p-1 rounded ml-40'/>}
                      heading="Jaipur-Based, Pan-India Reach"
                      para="Local operational support from Jaipur with practical freight movement across Rajasthan and major Indian transport corridors."
                      bgColor='#C6E9E2' />
                    <FreightMovement 
                      icon = {<Clock size={40} className='text-blue-500 bg-white p-1 rounded ml-40'/>}
                      heading="Fast Quote & Planning"
                      para="Get practical freight planning around cargo type, vehicle requirements, route, shipment size, and delivery needs." 
                      bgColor='#F7E1CA'/>
                    <FreightMovement
                      icon = {<BadgeCheck  size={40} className='text-blue-500 bg-white p-1 rounded ml-40'/>}
                      heading="B2B Logistics Focus"
                      para="Built to support manufacturers, traders, distributors, retailers, eCommerce businesses, and other commercial shippers" 
                      bgColor='#F8D4DB'/>
                    <FreightMovement 
                      icon = {<ShieldCheck size={40} className='text-blue-500 bg-white p-1 rounded ml-40'/>}
                      heading="Cargo-Specific Planning"
                      para="FTL, PTL, cold chain, project cargo, warehousing, interstate freight, and last-mile requirements are planned around the shipment."
                      bgColor='#DAD8FC' />
      
                  </div>
                </section>
  )
}
