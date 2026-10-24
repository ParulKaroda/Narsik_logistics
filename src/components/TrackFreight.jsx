import React from 'react'

export default function TrackFreight() {
    return (
        <div>
            <section className='bg-white'>
                <div className='flex justify-around'>
                    <div className='w-140 mt-20 ml-4'>
                        <div>
                            <p className='text-blue-600 font-semibold text-xs mt-2 mb-2'>TRACK YOUR FREIGHT</p>
                            <h2 className='font-semibold text-5xl mb-6'>Track Your Shipment From Pickup to Delivery</h2>
                            <p className='text-md text-gray-600 mt-3'>Stay informed about your freight movement with shipment tracking support from NARSIK Logistics.
                                Monitor cargo progress from pickup through transit and delivery with better visibility for your
                                business operations.</p>
                            <div className='m-12 border-2 border-slate-100 flex justify-between rounded-2xl p-2 bg-white'>
                                <input type="search" placeholder="Enter your Shipment ID" />
                                <button className='text-blue-600 border-2 border-slate-100 bg-blue-600 text-white font-bold rounded-xl p-2'>Track</button>
                            </div>
                            <ul className='flex justify-between list-disc ml-4'>
                                <li>Shipment Updates</li>
                                <li>Freight Visibility</li>
                                <li>Delivery Monitoring</li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className='m-5 ms-16 w-120 text-white gap-3'>
                        <div className="inset-0 rounded-2xl p-3 opacity-90 bg-[url('/assets/images/tracking-network-bg.png')] bg-cover bg-center"> 
                        <div>
                            <img className='bg-cover bg-center ' src='/images/tracking-network-bg.png'></img>
                            <div className='flex justify-between mbe-10'>
                                <div>
                                    <p className='text-blue-600 font-bold text-sm mt-2'>Tracking Preview</p>
                                    <h4 className='font-bold text-lg '>Shipment Status</h4>
                                </div><span className='text-end text-xs'>IN TRANSIT</span>
                                 </div>  </div>
                            <div>
                                <div className='flex justify-between opacity-50 mbe-10'>
                                    <div>
                                        <h4>Freight Received at Hub</h4>
                                        <p>Transit Hub</p></div>
                                    <div><span>LATEST</span></div>
                                </div>
                                <div className='flex justify-between mbe-10'>
                                    <div>
                                        <h4>Freight In Transit</h4>
                                        <p>Transport Route</p></div>
                                    <div><span>IN TRANSIT</span></div>
                                </div>
                                <div className='flex justify-between opacity-50 mbe-10'>
                                    <div>
                                        <h4>Cargo Processed at Warehouse</h4>
                                        <p>Distribution Center</p></div>
                                    <div><span>PROCESSED</span></div>
                                </div>
                                <div className='flex justify-between opacity-50 mbe-10'>
                                    <div>
                                        <h4>Shipment Booking Confirmed</h4>
                                        <p>NARSIK Logistics</p></div>
                                    <div><span>CONFIRMED</span></div>
                                </div>
                            </div>
                            <div className='flex justify-between opacity-50 mbe-10 border-2 border-slate-100 rounded-xl p-4'>
                                <div>
                                    <h4 className='font-bold'>Logistics Support Team</h4>
                                    <p className='text-blue-500'>Shipment Assistance</p></div>
                                <div><button className='border-1 border-slate-100 rounded-xl p-2 bg-[#464D5B]'>+91 9929031702 <br /><span className='text-blue-500'>NEED SUPPORT?</span></button></div>
                            </div>
                        </div>
                    </div> */}

                    <div className='bg-[#0D1529] border rounded-4xl p-6'>
                        <article className='flex justify-between w-120'>
                            <div>
                                <span className='text-blue-500 text-sm font-semibold'>TRACKING PREVIEW</span>
                                <h4 className='text-lg font-semibold text-white'>Shipment Status</h4>
                            </div>
                            <span className='border bg-[#112342] rounded-2xl text-blue-400 m-5 p-1 text-sm'>IN TRANSIT</span>
                        </article>

                        <br />
                        <br />

                        <div>

                            <div className='flex justify-between'>
                                <div>
                                    <span className='text-[#5D7796] font-semibold'>Freight Received at Hub</span>
                                    <p className='text-slate-600 text-sm'>Transit Hub</p>
                                </div>
                                <span className='text-slate-600'>LATEST</span>
                            </div>

                            <br />
                            <br />

                            <div className='flex justify-between'>
                                <div>
                                    <span className='text-white font-semibold'>Freight In Transit</span>
                                    <p className='text-slate-600 text-sm'>Transport Route</p>
                                </div>
                                <span className='text-slate-600'>IN TRANSIT</span>
                            </div>

                            <br />
                            <br />

                            <div className='flex justify-between'>
                                <div>
                                    <span className='text-[#5D7796] font-semibold'>Cargo Processed at Warehouse</span>
                                    <p className='text-slate-600 text-sm'>Distribution Center</p>
                                </div>
                                <span className='text-slate-600'>PROCESSED</span>
                            </div>

                            <br />
                            <br />

                            <div className='flex justify-between'>
                                <div>
                                    <span className='text-[#5D7796] font-semibold'>Shipment Booking Confirmed</span>
                                    <p className='text-slate-600 text-sm'>NARSIK Logistics</p>
                                </div>
                                <span className='text-slate-600'>CONFIRMED</span>
                            </div>
                          
                        </div>
                        <br/>
                        <div className='flex text-white justify-between border rounded-lg p-4'>
                            <div>
                                <span>LOGISTICS SUPPPORT TEAM</span>
                                <p>Shipment Assistance</p>
                            </div>
                            <div className='border rounded-lg p-2 bg-[#474D5C]'>
                                <p>+91 9929031702</p>
                                <p className='text-blue-400'>NEED SUPPORT</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
