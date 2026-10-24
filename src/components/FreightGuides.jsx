import React from 'react'
import { Link } from 'react-router-dom'
import { UserRound, Clock, ArrowRight } from 'lucide-react'

export default function FreightGuides() {
    return (
        <section className='bg-white'>
            <div className='mx-6 py-10'>

                <div className='flex justify-between items-center'>
                    <div>
                        <span className='text-blue-600 text-sm font-semibold'> FREIGHT GUIDES </span>
                        <h1 className='text-4xl font-bold leading-10 mt-6'> Logistics Insights & <br />
                            <span className='text-[#90A1B9]'> Transport Guides. </span>
                        </h1>

                        <p className='text-slate-600 text-md mt-6'>Practical insights on freight transportation, FTL and PTL logistics, supply chain planning,<br />
                            warehousing, and moving goods across India.</p>
                    </div>

                    <Link to='#' className='bg-[#0D1529] text-white rounded-xl px-8 py-3 font-semibold'>
                        Explore All Topics ↗ </Link>
                </div>

                <div className='grid grid-cols-3 gap-8 mt-20'>

                    <div>
                        <div className='relative'>
                            <img
                                src='/images/logistics-company.webp'
                                alt='E-way Bill Guide'
                                className='w-full h-[290px] object-cover rounded-3xl'/>
                        </div>

                        <div className='flex items-center gap-3 mt-6 text-[#90A1B9] text-xs font-semibold'>
                            <div className='flex items-center gap-2'>
                                <UserRound size={14}/> NARSIK LOGISTICS OPERATIONS DESK</div>

                            <div className='flex items-center gap-2'>
                                <Clock size={14}/> JULY 10, 2026 </div>
                        </div>
                        <h2 className='text-xl font-bold mt-5'> E-Way Bill Guide for Transporters in India </h2>
                        <p className='text-slate-500 text-md leading-7 mt-5'> A practical e-way bill guide for transporters, dispatch
                            teams, and businesses moving goods across Jaipur,... </p>

                        <Link to='#' className='flex gap-2 mt-8 text-sm font-bold tracking-wider'>
                            READ ARTICLE <ArrowRight size={18}/> </Link>
                    </div>

                    <div>
                        <div className='relative'>
                            <img
                                src='/images/jaipur-logistics.webp'
                                alt='Logistics Cost Guide'
                                className='w-full h-[290px] object-cover rounded-3xl'/>
                        </div>

                        <div className='flex items-center gap-3 mt-6 text-[#90A1B9] text-xs font-semibold'>
                            <div className='flex items-center gap-2'> <UserRound size={14} />NARSIK LOGISTICS OPERATIONS DESK </div>
                            <div className='flex items-center gap-2'> <Clock size={14} />JULY 9, 2026 </div>
                        </div>

                        <h2 className='text-xl font-bold mt-5'> How to Reduce Logistics Costs for Small Businesses</h2>
                        <p className='text-slate-500 text-md leading-7 mt-5'>
                            Learn practical ways small businesses can reduce logistics
                            costs with better FTL/PTL selection, route planning,... </p>

                        <Link to='#' className='flex gap-2 mt-8 text-sm font-bold tracking-wider'>
                            READ ARTICLE <ArrowRight size={18}/> </Link>
                    </div>

                    <div>
                        <div className='relative'>
                            <img
                                src='/images/fleet-cold-chain.webp'
                                alt='Cold Chain Transport'
                                className='w-full h-[290px] object-cover rounded-3xl'/>
                        </div>

                        <div className='flex items-center gap-3 mt-6 text-[#90A1B9] text-xs font-semibold'>
                            <div className='flex items-center gap-2'> <UserRound size={14}/> NARSIK LOGISTICS OPERATIONS DESK</div>

                            <div className='flex items-center gap-2'> <Clock size={14}/> JULY 8, 2026 </div>
                        </div>

                        <h2 className='text-xl font-bold mt-5'>Cold Chain Best Practices in India</h2>
                        <p className='text-slate-500 text-md leading-7 mt-5'>
                            Cold chain best practices for pharma, food, agriculture,
                            and healthcare teams planning temperature-sensitive transpo...</p>
                        <Link to='#' className='flex gap-2 mt-8 text-sm font-bold tracking-wider' > READ ARTICLE <ArrowRight size={18} /> </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}