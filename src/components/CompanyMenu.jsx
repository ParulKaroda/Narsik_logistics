import React from 'react'
import { UsersRound, CircleCheck, Globe, ArrowUpRight } from 'lucide-react'

export default function CompanyMenu({ f }) {
  return (
    <div className="fixed z-[9] w-6xl h-auto bg-white rounded-lg border border-slate-200 p-7 mx-30" onMouseLeave={f}>

      <div className="flex items-stretch gap-12">


        <div className="w-68 h-80 flex-shrink-0 bg-[#03091F] rounded-[24px] p-3 flex flex-col justify-center">
          <p className="text-blue-300 font-semibold tracking-[2px] text-sm">NARSIK LOGISTICS</p>

          <h2 className="text-white font-semibold text-4xl mt-2">Freight <br/>movement, <br/>engineered for <br/>India.</h2>

          <p className="text-slate-300 text-sm leading-8 mt-3">Learn about our approach to practical, accountable B2B logistics.</p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-x-10 gap-y-12 py-1">

          <CompanyLink icon={UsersRound} title="About NARSIK" description="Our positioning, approach, and logistics focus." />

          <CompanyLink icon={CircleCheck} title="How We Work" description="A clear process from shipment enquiry to delivery." />

          <CompanyLink icon={Globe} title="Sustainability" description="Efficiency-first logistics and gradual EV adoption." />

          <CompanyLink icon={ArrowUpRight} title="Contact" description="Connect with the NARSIK logistics team." />

        </div>


        <div className="w-68 h-80 flex-shrink-0 bg-slate-50 border border-slate-100 rounded-[24px] p-7">
          <p className="text-slate-400 font-semibold tracking-[3px] text-sm">NEED ASSISTANCE?</p>

          <h3 className="text-[#111827] font-semibold text-2xl leading-[1.5] mt-3">Let’s discuss your freight requirement.</h3>

          <p className="text-[#60769A] text-md leading-[1.7] mt-4">Share your shipment details and connect with the team.</p>

          <button className="text-blue-600 font-semibold text-md flex items-center gap-3 mt-5 hover:text-blue-700 transition-colors">
            Contact NARSIK <ArrowUpRight size={20} />
          </button>
        </div>

      </div>
    </div>
  )
}


function CompanyLink({ icon: Icon, title, description }) {
  return (
    <div className="cursor-pointer">
      <Icon size={22} strokeWidth={2} className="text-blue-600 mb-3 " />
      <h3 className="text-[#111827] font-semibold text-xl">{title}</h3>
      <p className="text-[#60769A] text-md leading-8 mt-1">{description}</p>
    </div>
  )
}