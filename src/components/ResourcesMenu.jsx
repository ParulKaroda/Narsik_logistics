import React from 'react'
import { BookOpen, Settings, Truck, BriefcaseBusiness } from 'lucide-react'

export default function ResourcesMenu({ f }) {
  return (
    <div className="fixed z-[9] w-250 h-auto bg-white rounded-lg mx-50 border border-slate-200 p-6 " onMouseLeave={f}>
      <div className="flex items-stretch gap-12">

        <div className="flex-1">

          <p className="text-sm font-semibold text-blue-600 tracking-[2px] uppercase">RESOURCES</p>
          <h2 className="text-xl font-semibold text-[#111827] mt-2">Make better freight decisions.</h2>
          <p className="text-sm font-semibold text-[#60769A] mt-2">Tools, guides, and practical resources for freight decision-making.</p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <ResourceCard icon={BookOpen} title="Resources Hub" description="Explore logistics resources and helpful information." />
            <ResourceCard icon={Settings} title="Freight Calculator" description="Estimate freight requirements and planning inputs." />
            <ResourceCard icon={Truck} title="Find the Best Freight Option" description="Compare freight options based on your shipment needs." />
            <ResourceCard icon={BriefcaseBusiness} title="Case Studies" description="Review documented operational examples when available." />
          </div>

        </div>


        <div className="relative w-90 h-auto flex-shrink-0 rounded-[24px] overflow-hidden bg-slate-800 ">
         
          <img src="/images/shipment_img.jpeg" alt="Freight container truck" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030718] via-black/30 to-black/10"></div>
          <div className="absolute bottom-10 left-9 right-8 text-white">
            <p className="text-sm font-semibold text-blue-300 tracking-[2px] uppercase">FREIGHT INTELLIGENCE</p>
            <h2 className="text-xl font-semibold mt-3">Plan your next shipment with confidence.</h2>
       
          </div>
        </div>
      </div>
    </div>
  )
}


function ResourceCard({ icon: Icon, title, description }) {
  return (
    <div className="h-40 border border-slate-200 rounded-[24px] p-4 hover:border-blue-200 hover:shadow-sm transition-all">

      <Icon size={22} strokeWidth={2} className="text-blue-600 mb-2" />
      <h3 className="text-xl font-semibold text-[#111827]">{title}</h3>
      <p className="text-sm font-semibold text-[#60769A] mt-1">{description}</p>

    </div>
  )
}