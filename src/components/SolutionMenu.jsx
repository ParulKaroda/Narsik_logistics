import React from 'react'
import { ArrowUpRight, House, MapPin, ShoppingBag, Activity } from 'lucide-react'

export default function SolutionMenu({ f }) {
  return (
    <div className="fixed z-[9] w-3xl h-auto border border-slate-200 rounded-lg mx-80 bg-white px-4 py-4 " 
    onMouseLeave={f} >
      <div className="flex items-start justify-between">

        <div>
          <p className="text-blue-600 font-semibold tracking-[1px] text-sm">SOLUTIONS</p>
          <h2 className="text-[#111827] font-semibold text-2xl mt-1">Smart logistics, configured for you.</h2>
        </div>

        <button className="text-blue-600 font-semibold text-sm flex items-center gap-2 mt-1">
          <span>View all</span> <ArrowUpRight size={18} strokeWidth={2} />
        </button>

      </div>

      <div className="grid grid-cols-2 gap-x-16 gap-y-10 mt-8 px-4">

        <SolutionCard
          icon={House}
          title="Warehousing & Storage"
          description="Storage support for inventory and distribution planning."/>

        <SolutionCard
          icon={MapPin}
          title="Last-Mile Delivery"
          description="Delivery support for final-mile distribution requirements." />

        <SolutionCard
          icon={ShoppingBag}
          title="eCommerce Fulfilment"
          description="Order handling, dispatch, and fulfilment support." />

        <SolutionCard
          icon={Activity}
          title="Specialized Logistics"
          description="Flexible planning for cargo with specific handling needs."/>

      </div>

    </div>
  )
}


function SolutionCard({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-5">
      <div
        className="h-[50px] w-[50px] flex-shrink-0 rounded-2xl bg-slate-100 flex items-center justify-center text-blue-600">
        <Icon size={22} strokeWidth={2} />
      </div>
      <div className="pt-1">

        <h3 className="text-[#111827] text-md font-bold"> {title} </h3>
        <p className="text-[#60769A] text-sm font-semibold leading-7 mt-1 max-w-[390px]">{description} </p>

      </div>

    </div>
  )
}