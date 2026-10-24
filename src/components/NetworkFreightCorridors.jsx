import React from 'react'
import { Link } from 'react-router-dom'

export default function NetworkFreightCorridors() {
    return (
        <section className='bg-[#F8FAFC]'>
            <br />
            <br />

            <div>

                <div>
                    <span className='m-6 text-blue-500 text-sm font-semibold'>NETWORK & FREIGHT CORRIDORS</span>
                    <h1 className='text-4xl font-bold leading-12 mx-4'>Moving Freight From <br /> Jaipur</h1>
                    <div className='flex justify-between mx-5'>
                        <h1 className='text-[#90A1B9] text-4xl font-bold leading-12'><i>Across India.</i></h1>
                        <p className='text-slate-600'>NARSIK provides freight transportation support from Jaipur across major <br />Indian business destinations, helping manufacturers, traders, distributors,<br />
                            retailers, and other businesses coordinate interstate cargo movement.</p>
                    </div>
                </div>

                <div className='flex'>
                    <div className='bg-[#0D1529] border rounded-4xl p-6 w-[65%] m-4'>
                        <span className='text-blue-400 text-sm font-semibold'>PRIMARY OPERATING BASE</span>
                        <h1 className='text-4xl font-bold leading-12 text-white'>Jaipur, Rajasthan</h1>
                        <br />
                        <br />

                        <div className='flex justify-between'>

                            <div className='border-[#90A1B9] rounded-2xl p-6 bg-[#1B2336]'>
                                <h4 className='text-white'>Interstate Freight</h4>
                                <span className='text-slate-500 text-sm'>Route-based cargo movement</span>
                            </div>

                            <div className='border-[#90A1B9] rounded-2xl p-6 bg-[#1B2336]'>
                                <h4 className='text-white'>FTL & PTL</h4>
                                <span className='text-slate-500 text-sm'>Full and part load transport</span>
                            </div>

                            <div className='border-[#90A1B9] rounded-2xl p-6 bg-[#1B2336]'>
                                <h4 className='text-white'>Pan-India Reach</h4>
                                <span className='text-slate-500 text-sm'>Business freight destinations</span>
                            </div>


                        </div>
                        <br />
                        <br />
                    </div>

                    <div className='border rounded-4xl p-6 w-[30%] bg-white m-3'>
                        <span className='text-[#A1AFC2] text-sm font-semibold'>SERVICE REACH</span>
                        <h1 className='text-3xl font-semibold leading-12 mb-2'>Rajasthan & Beyond</h1>
                        <p className='text-slate-600 mb-4'>Freight planning and transport support for <br />shipments moving between Jaipur, Rajasthan, <br /> and major commercial destinations across <br />India.</p>
                        <Link to="#" className='text-blue-500 text-sm font-bold'> INTERSTATE TRANSPORT</Link>
                    </div>
                </div>
            </div>

<div className='border rounded-4xl p-6 m-3 bg-white'>
        <div className="flex justify-between">
                <div>
                    <h6 className='text-blue-600 text-sm font-semibold'>FREIGHT ROUTES</h6>
                    <h3 className='text-2xl font-semibold leading-12 mb-2'>Key Freight Corridors</h3>
                </div>
                <p className='text-slate-600 mb-4 text-sm'>Representative routes for business freight movement. Actual service<br/>
                    availability depends on cargo, vehicle requirements, destination, and <br/>scheduling.</p>
        </div>

        <div>

            <div className='grid grid-cols-3'>
                <div className=" rounded-xl p-6 m-3 bg-[#FBFDFF]">
                    <h5 className='text-sm font-semibold'>Jaipur ↗ Delhi NCR</h5>
                    <p className='text-slate-600 text-sm'>Rajasthan ↔ Delhi NCR freight movement</p>
                </div>

                <div className=" rounded-xl p-6 m-3 bg-[#FBFDFF]">
                    <h5 className='text-sm font-semibold'>Jaipur ↗ Ahmedabad</h5>
                    <p className='text-slate-600 text-sm'>Rajasthan ↔ Gujarat business freight</p>
                </div>

                <div className=" rounded-xl p-6 m-3 bg-[#FBFDFF]">
                    <h5 className='text-sm font-semibold'>Jaipur ↗ Mumbai</h5>
                    <p className='text-slate-600 text-sm'>North-West India ↔ Mumbai movement</p>
                </div>

                <div className=" rounded-xl p-6 m-3 bg-[#FBFDFF]">
                    <h5 className='text-sm font-semibold'>Jaipur ↗ Agra</h5>
                    <p className='text-slate-600 text-sm'>Rajasthan ↔ Uttar Pradesh freight</p>
                </div>

                <div className=" rounded-xl p-6 m-3 bg-[#FBFDFF]">
                    <h5 className='text-sm font-semibold'>Jaipur ↗ Lucknow</h5>
                    <p className='text-slate-600 text-sm'>North India interstate transport</p>
                </div>

                <div className=" rounded-xl p-6 m-3 bg-[#FBFDFF]">
                    <h5 className='text-sm font-semibold'>Jaipur ↗ Bhopal</h5>
                    <p className='text-slate-600 text-sm'>Rajasthan ↔ Central India freight</p>
                </div>
            </div>
            
        </div>
        
</div>
<br/>
<br/>
<br/>

        </section>
    )
}
