import React from 'react'
import { Link } from 'react-router-dom'



export default function Footer() {
  return (
    <section className='bg-white p-8 '>
      <div className='bg-[#030716] p-10 rounded-4xl'>
        <div className='bg-[#0B142D] items-center rounded-4xl p-10'>
          <div className='relative h-24 w-20 md:h-34 md:w-28 '>
            <img src='/images/logo-w.webp'
              className='absolute h-[100%] w-[100%] mx-120' />
          </div>
          <br />
          <h1 className='text-5xl text-white font-bold text-center'><span>Freight Movement,</span></h1>
          <h1 className='text-5xl text-white font-bold text-center'><span>Engineered for India.</span></h1>
          <p className='ps-65 pe-75 mt-5 text-slate-400 text-center'> NARSIK Logistics provides B2B freight and transport solutions including FTL, PTL, interstate
            transportation, warehousing, and specialized cargo movement from Jaipur across India.</p> <br />
          <p className='text-sm font-semibold text-center text-slate-300'>NARSIK Logistics, Jaipur, Rajasthan, India · +91-9929031702 · info@narsiklogistics.com </p>
        </div>
        <br />

        <div>
          <hr className='text-slate-700' />
          <div className='flex justify-between p-20'>
            <div className='leading-9'>
              <h4 className='text-center font-extrabold text-blue-400 uppercase text-sm'>S e r v i c e s</h4>
              <ul className='text-center text-white/60'>
                <li><Link to >FTL transport</Link></li>
                <li><Link to>PTL/Part Load</Link></li>
                <li><Link to>Cold Chain</Link></li>
                <li><Link to>Container Transport</Link></li>
                <li><Link to>Project Cargo</Link></li>
              </ul>
            </div>

            <div className='leading-9'>
              <h4 className='text-center font-extrabold text-blue-400 uppercase text-sm'>S o l u t i o n s</h4>
              <ul className='text-center text-white/60'>
                <li><Link to>Warehousing</Link></li>
                <li><Link to>Reverse Logistics</Link></li>
                <li><Link to>eCommerce Fulfilment</Link></li>
                <li><Link to>Last Mile Delivery</Link></li>
              </ul>
            </div>

            <div className='leading-9'>
              <h4 className='text-center font-extrabold text-blue-400 uppercase text-sm'>C o m p a n y</h4>
              <ul className='text-center text-white/60'>
                <li><Link to>About</Link></li>
                <li><Link to>Fleet</Link></li>
                <li><Link to>Careers</Link></li>
                <li><Link to>Contact</Link></li>
                <li><Link to>Blog</Link></li>
                <li><Link to>FAQ</Link></li>
              </ul>
            </div>

            <div className='leading-9'>
              <h4 className='text-center font-extrabold text-blue-400 uppercase text-sm'>L e g a l</h4>
              <ul className='text-center text-white/60'>
                <li><Link to>Pricing</Link></li>
                <li><Link to>Privacy</Link></li>
                <li><Link to>Terms</Link></li>
                <li><Link to>Insurance</Link></li>
                <li><Link to>Tracking</Link></li>
                <li><Link to>Booking</Link></li>
                <li><Link to>Sitemap</Link></li>
              </ul>
            </div>
            <hr className='text-slate-700' />
          </div>
          
          <div className='flex justify-around'>
            <p className='text-slate-400'>© SINCE 2026 NARSIK LOGISTICS.| ALL RIGHTS RESEVERD</p>
            
            <div className='flex items-center gap-4'>

              <div className='flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/50 p-2'>
                <i className='fa-solid fa-shield text-blue-500 text-lg'></i>
                <span className='text-slate-400 text-sm font-semibold tracking-[1px]'>
                  UDYAM REGISTERED
                </span>
              </div>

              <div className='flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/50 p-2'>
                <i className='fa-solid fa-globe text-blue-500 text-lg'></i>
                <span className='text-slate-400 text-sm font-semibold tracking-[1px]'>
                  ISO CERTIFIED
                </span>
              </div>

              <div className='flex h-14 w-14 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50'>
                <i className='fa-brands fa-linkedin-in text-slate-400 text-xl'></i>
              </div>

              <div className='flex h-14 w-14 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50'>
                <i className='fa-brands fa-twitter text-slate-400 text-xl'></i>
              </div>

            </div>
          </div>
          <div className="text-[82px] font-black uppercase leading-none tracking-[-0.05em] text-white/[0.085] aligns-center sm:text-[145px] md:text-[230px] lg:text-[305px] ">
            NARSIK
          </div>
        </div>
      </div>
    </section>
  )
}




