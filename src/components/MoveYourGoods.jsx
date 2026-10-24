import { CircleCheck } from 'lucide-react'
import React from 'react'

export default function MoveYourGoods() {
    return (
        <>
            <section className='bg-slate-900 text-center text-white p-5'>
                <div>
                    <p className='text-blue-600 font-semibold uppercase text-xs mt-2'>HOW WE MOVE YOUR GOODS</p>
                    <h2 className='font-bold text-3xl w-7xl mx-auto leading-12'>A Clear Process From Pickup to <br /> Delivery</h2>
                    <p className='w-7xl text-sm text-slate-400'>From the first freight requirement to final delivery, NARSIK coordinates each stagee of your shipment <br />
                        with clear communication and practical transport planning.</p>
                </div>
                <div className='grid grid-cols-6 m-10'>
                    <div className='text-center group w-44 '>
                        <div className=" z-auto w-24 h-24 rounded-[2rem] ms-7 bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500 relative z-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-text w-8 h-8" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg><div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white shadow-xl">01</div></div>
                        <h4 className='font-bold group-hover:text-blue-600 uppercase'>Share Shipment Details</h4>
                        <p className='text-xs text-white/90'>Share your pickup location, delivery destination, cargo details, approximate weight, and
                            transport requirements.</p>
                        <div className='mt-5 uppercase text-xs font-semibold border border-slate-600 rounded-2xl bg-slate-800 flex gap-2 p-1'>
                            <span className='text-xs text-green-600'><CircleCheck /></span> <p>Shipment Stage</p>
                        </div>
                    </div>
                    <div className='text-center group w-44 '>
                        <div className=" z-auto w-24 h-24 rounded-[2rem] ms-11 bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500 relative z-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-receipt w-8 h-8" aria-hidden="true"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg><div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white shadow-xl">02</div></div>
                        <h4 className='font-bold group-hover:text-blue-600 uppercase'>Get a Freight Quote</h4>
                        <p className='text-xs text-white/90'>Our team reviews your shipment requirements and provides a quotation based on the route, cargo,
                            and transport needs.</p>
                        <div className='mt-5 uppercase text-xs font-semibold border border-slate-600 rounded-2xl bg-slate-800 flex gap-2 p-1 '>
                            <span className='text-xs text-green-600'><CircleCheck /></span> <p>Shipment Stage</p>
                        </div>
                    </div>
                    <div className='text-center group w-44 '>
                        <div className=" z-auto w-24 h-24 rounded-[2rem] ms-11 bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500 relative z-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-check w-8 h-8" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg><div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white shadow-xl">03</div></div>
                        <h4 className='font-bold group-hover:text-blue-600 uppercase'>Confirm Booking</h4>
                        <p className='text-xs text-white/90'>Approve the quotation and confirm the shipment schedule with our logistics coordination team.</p>
                        <div className='mt-5 uppercase text-xs font-semibold border border-slate-600 rounded-2xl bg-slate-800 flex gap-2 p-1 '>
                            <span className='text-xs text-green-600'><CircleCheck /></span> <p>Shipment Stage</p>
                        </div>
                    </div>
                    <div className='text-center group w-44 '>
                        <div className=" z-auto w-24 h-24 rounded-[2rem] ms-11 bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500 relative z-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-truck w-8 h-8" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg><div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white shadow-xl">04</div></div>
                        <h4 className='font-bold group-hover:text-blue-600 uppercase'>Pickup &amp; Loading</h4>
                        <p className='text-xs text-white/90'>The shipment is scheduled for pickup and prepared for safe loading and onward transportation.</p>
                        <div className='mt-5 uppercase text-xs font-semibold border border-slate-600 rounded-2xl bg-slate-800 flex gap-2 p-1 '>
                            <span className='text-xs text-green-600'><CircleCheck /></span> <p>Shipment Stage</p>
                        </div>
                    </div>
                    <div className='text-center group w-44 '>
                        <div className=" z-auto w-24 h-24 rounded-[2rem] ms-11 bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500 relative z-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pinned w-8 h-8" aria-hidden="true"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path><circle cx="12" cy="8" r="2"></circle><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path></svg><div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white shadow-xl">05</div></div>
                        <h4 className='font-bold group-hover:text-blue-600 uppercase'>Freight Movement</h4>
                        <p className='text-xs text-white/90'>Your cargo moves toward its destination with shipment updates and coordination throughout the
                            journey.</p>
                        <div className='mt-5 uppercase text-xs font-semibold border border-slate-600 rounded-2xl bg-slate-800 flex gap-2 p-1 '>
                            <span className='text-xs text-green-600'><CircleCheck /></span> <p>Shipment Stage</p>
                        </div>
                    </div>
                    <div className='text-center group w-44 '>
                        <div className="z-auto w-24 h-24 rounded-[2rem] ms-11 bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500 relative z-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-package-check w-8 h-8" aria-hidden="true"><path d="m16 16 2 2 4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg><div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white shadow-xl">06</div></div>
                        <h4 className='font-bold group-hover:text-blue-600 uppercase'>Delivery &amp; Confirmation</h4>
                        <p className='text-xs text-white/90'>Cargo reaches the destination and delivery is completed with shipment confirmation and required
                            documentation</p>
                        <div className='mt-5 uppercase text-xs font-semibold border border-slate-600 rounded-2xl bg-slate-800 flex gap-2 p-1'>
                            <span className='text-xs text-green-600'><CircleCheck /></span> <p>Shipment Stage</p>
                        </div>
                    </div>
                </div>
                <div><button type="button" className='bg-white text-black p-5 rounded-2xl font-semibold' >Start Your Shipment →</button>
                    <p className='text-sm text-slate-500 mt-4'>Share your freight requirement and speak with our logistics team.</p>
                </div>
            </section>

        </>
    )
}
