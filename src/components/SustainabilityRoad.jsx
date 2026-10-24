import React from 'react'
import { Zap, Gauge, Wind, ShieldCheck } from 'lucide-react'

export default function SustainabilityRoad() {
    return (
        <section className='bg-[#080D1F] text-white'>
            <div className='bg-[#080D1F] bg-opacity-90'>
                <div className='flex justify-between px-8 py-10'>

                    <div className='w-[48%] pt-8'>
                        <span className='text-green-400 text-sm font-semibold'> SUSTAINABILITY & THE ROAD AHEAD </span>
                        <h1 className='text-7xl font-bold leading-16 mt-8'>SMARTER
                            <br />
                            <span className='text-green-400'> <i>FREIGHT</i> </span>
                            <br />
                            <span className='text-green-400'> <i>MOVEMENT.</i> </span>
                        </h1>

                        <p className='text-slate-400 text-lg leading-6 mt-10 w-[90%]'>
                            NARSIK is building toward a more efficient and sustainable
                            logistics network. Better route planning, smarter load
                            utilisation, and the gradual adoption of electric vehicles
                            where they make operational and economic sense can help
                            reduce unnecessary movement while keeping freight practical
                            and competitively priced.
                        </p>

                        <div className='grid grid-cols-2 gap-10 mt-10'>
                            <div>
                                <div className='flex items-center gap-3'>
                                    <Zap className='text-green-400' size={20}/>
                                    <h3 className='text-2xl font-semibold'> Smarter</h3>
                                </div>
                                <span className='text-slate-500 text-xs font-semibold'> ROUTE EFFICIENCY </span>
                            </div>

                            <div>
                                <div className='flex items-center gap-3'>
                                    <Gauge className='text-green-400' size={20}/>
                                    <h3 className='text-2xl font-semibold'> Optimised</h3>
                                </div>
                                <span className='text-slate-500 text-xs font-semibold'>LOAD UTILISATION </span>
                            </div>

                            <div>
                                <div className='flex items-center gap-3'>
                                    <Wind className='text-green-400' size={20}/>
                                    <h3 className='text-2xl font-semibold'> Growing</h3>
                                </div>
                                <span className='text-slate-500 text-xs font-semibold'>EV ADOPTION </span>
                            </div>

                            <div>
                                <div className='flex items-center gap-3'>
                                    <ShieldCheck className='text-green-400' size={20}/>
                                    <h3 className='text-2xl font-semibold'>
                                        Future Ready
                                    </h3>
                                </div>
                                <span className='text-slate-500 text-xs font-semibold'> OPERATING MODEL</span>
                            </div>
                        </div>
                    </div>


                    <div className='w-[42%] mt-10'>
                        <div className='border border-slate-700 rounded-[60px]'>
                            <img
                                className='w-full h-[600px] object-cover grayscale'
                                src="/images/sustainability-green-logistics.webp"
                                alt='Sustainable freight'/>

                            <div className='bg-[#17191F] border border-slate-800 rounded-3xl p-8 mx-10 -mt-44 relative'>
                                <span className='text-green-400 text-sm font-semibold'>THE ROAD AHEAD</span>

                                <p className='text-slate-300 text-base font-semibold leading-7 mt-4'>
                                    We believe the future of logistics is about combining
                                    better technology, smarter planning, and the right
                                    vehicles to make freight movement more efficient
                                    and sustainable.
                                </p>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}