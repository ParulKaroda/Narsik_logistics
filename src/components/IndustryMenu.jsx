import React from 'react'
import {BriefcaseBusiness,ShoppingBag,Activity, Box,Truck } from 'lucide-react'

export default function IndustryMenu({ f }) {
  return (
    <div
      className="fixed z-[9] w-5xl h-auto border border-slate-200 rounded-lg mx-40 bg-white px-4 py-6 "
       onMouseLeave={f} >

      <div className="flex gap-12 h-full">

        <div className="flex-1">

          <p className="text-blue-600 font-semibold text-sm uppercase"> INDUSTRIES WE SERVE </p>

          <h2 className="text-[#111827] font-bold text-2xl mt-2">
            Freight aligned to your sector.
          </h2>

          <p className="text-[#60769A] text-md mt-2"> Freight and logistics planning aligned with industry-specific requirements.</p>

          <div className="grid grid-cols-2 gap-3 mt-6">

            <IndustryCard icon={BriefcaseBusiness} title="Manufacturing" />

            <IndustryCard icon={ShoppingBag} title="eCommerce" />

            <IndustryCard icon={Activity} title="Healthcare & Pharma" />

            <IndustryCard icon={Box} title="Agriculture & Food" />

            <IndustryCard icon={Truck} title="Construction & Infrastructure" />

          </div>
        </div>


        <div
          className="w-100 h-auto rounded-[24px] overflow-hidden relative bg-slate-800 ">

          <img src="/images/truck.jpg" alt="Truck transportation" className="absolute inset-0 w-full h-full object-cover"/>

          <div className="absolute inset-0 bg-black/45"></div>

          <div className="absolute bottom-10 left-9 right-8 text-white">

            <p className="text-blue-300 font-semibold tracking-[2px] text-sm uppercase"> SECTOR EXPERTISE </p>

            <h3 className="font-semibold text-2xl leading-tight mt-2">
              Built for the realities of your industry.
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}


function IndustryCard({ icon: Icon, title }) {
  return (
    <div className="border border-slate-200 rounded-2xl h-auto p-2 flex items-center gap-5 px-5 hover:border-blue-200 hover:shadow-sm transition " >

      <div
        className="h-[50px] w-[50px] flex-shrink-0 rounded-xl bg-slate-100 flex items-center justify-center text-blue-600">
        <Icon size={22} strokeWidth={2}/>
      </div>

      <h3 className="text-[#111827] font-semibold text-lg">
        {title}
      </h3>

    </div>
  )
}