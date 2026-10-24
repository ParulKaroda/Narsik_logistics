import React from 'react'
import FreightMovement from './FreightMovement'
import { Factory,Boxes,PackageCheck,Snowflake,FlaskConical,Leaf,Building2,Microchip } from 'lucide-react'

export default function RightMovement() {
    return (
        <div className='bg-white'>
            <section className="bg-white px-2 py-2">
                <br/>
                <br/>
                <br/>
                <h5 className='text-center text-blue-500 text-md '>FIND THE RIGHT MOVEMENT</h5>
                <h1 className='font-bold text-4xl text-center mt-3'>What are you moving?</h1>
                <p className='text-center text-lg text-gray-500 mt-4 mb-4'>Every shipment has different requirements. Choose the type of freight you handle and <br />
                    explore the transport approach that fits your business.</p>
                <div className='grid grid-cols-4 gap-6 mt-12 p-8'>
                    <FreightMovement 
                        icon = {<Factory size={40} className='text-blue-500 bg-white p-1 rounded'/>}
                        heading="Industrial & Machinery"
                        para="Equipment, machinery, components and industrial cargo requiring planned movement."
                        search ="Explore →"
                        bgColor='#f5f8fb' />
                    <FreightMovement 
                        icon = {<Boxes size={40} className='text-blue-500 bg-white p-1 rounded'/>}
                        heading="General Business Freight"
                        para="Regular commercial shipments, cartons, pallets and business-to-business cargo."
                        search="Explore →" 
                        bgColor='#f5f8fb'/>
                    <FreightMovement 
                        icon = {<PackageCheck size={40} className='text-blue-500 bg-white p-1 rounded'/>}
                        heading="eCommerce & Parcels"
                        para="Business shipments and distribution requirements for growing commerce operations."
                        search="Explore →"
                        bgColor='#f5f8fb' />
                    <FreightMovement 
                        icon = {<Snowflake size={40} className='text-blue-500 bg-white p-1 rounded'/>}
                        heading="Temperature-Sensitive"
                        para="Cargo requiring controlled handling and temperature-conscious transportation."
                        search="Explore →" 
                        bgColor='#f5f8fb'/>
                    <FreightMovement 
                        icon = {<FlaskConical size={40} className='text-blue-500 bg-white p-1 rounded'/>}
                        heading="Pharma & Healthcare"
                        para="Healthcare-related shipments where handling, timing and transport conditions matter."
                        search="Explore →" 
                        height='220px'
                        width = '100%' 
                        bgColor='#f5f8fb'/>
                    <FreightMovement 
                        icon = {<Leaf size={40} className='text-blue-500 bg-white p-1 rounded'/>}
                        heading="Agriculture & Food"
                        para="Agricultural and food-related cargo requiring dependable movement across routes."
                        search="Explore →"
                        bgColor='#f5f8fb' />
                    <FreightMovement 
                        icon = {<Building2 size={40} className='text-blue-500 bg-white p-1 rounded'/>}
                        heading="Construction & Infrastructure"
                        para="Materials, equipment and project cargo supporting construction and infrastructure."
                        search="Explore →"
                        bgColor='#f5f8fb' />
                    <FreightMovement 
                        icon = {<Microchip size={40} className='text-blue-500 bg-white p-1 rounded'/>}
                        heading="Other Specialized Cargo"
                        para="Have a different requirement? Tell us what you need to move and we'll assess it."
                        search="Explore →"
                        bgColor='#f5f8fb' />
                </div>
            </section>

            <div>
                <div className="border border-stone-300 rounded-xl bg-[#020618] mt-5 flex justify-between gap-8 p-4 text-white p-6 ml-10 mr-10" >
                    <div>
                        <h4 className='text-md font-semibold'>Not sure which transport solution fits?</h4>
                        <p className='text-sm text-gray-400'>Share your route and cargo requirement with our team.</p>
                    </div>
                    <button className='cta-btns border-slate-600 border rounded-lg px-4 py-2 text-sm font-bold bg-blue-600'> Discuss Your Requirement → </button>
                </div>
            </div>

        </div>
    )
}
