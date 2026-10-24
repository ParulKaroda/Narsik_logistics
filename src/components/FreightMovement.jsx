import React from 'react'
// import "./FreightMovement.css"

export default function FreightMovement({
  icon,
  heading,
  para,
  link,
  search,
  bgColor = "bg-[#f8fafc]",
  height = "h-auto",
  width = "w-full" 
}) {

  return (
    <div className={` movement
  border
  border-slate-200
  rounded-[24px]
  p-9
  pt-6
  flex
  flex-col
  justify-between
  hover:border-blue-200 `}
      style={{
        backgroundColor: bgColor,
        minHeight: height ? undefined : height,
        width: width
      }}
    >

      <div className="mt-4">
        {icon}
      </div>

      <h3 className='text-[24px]
  font-semibold
  leading-tight
  mt-9'>{heading}</h3>

      <p className='text-[19px]
  mt-4
  max-w-[330px]'>{para}</p>

      <a href="#" className='mt-auto
  pt-8
  text-[18px]
  font-semibold
  flex
  items-center
  gap-3
  text-blue-600
  
  '>{search}</a>

    </div >
  )
}
