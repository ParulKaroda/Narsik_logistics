import React from 'react'

export default function Hero() {
  return (
    <section className=' relative overflow'>
      <div id='hero absolute '>
            <img src="/images/narsik-bg.jpeg" alt='background-image' className='w-screen h-screen bg-cover bg-center bg-no-repeat'/>
            <div className="content">
              <span className='eyebrow border border-blue-500 bg-blue-500 rounded-full px-4 mt-0'> B2B FREIGHT LOGISTICS</span>
              <h1 className='hero-main text-white text-[46px] '><b>Freight Movement,<br />
                Engineered for<br />
                India.</b></h1>
              <h2 className='supporting-text text-blue-500 text-[28px]'>Shipping Made Safe. Reliable. Fast.</h2>
              <p className='main-para text-white mt-2 mb-6'>NARSIK Logistics helps businesses move commercial cargo with
                the right transport mode, vehicle and route - from FTL and PTL
                to interstate freight, warehousing and specialized logistics.</p>

              <div id="cta-herobtns">
                <button type="button" class="free-quotebtn">Get Free Quote →</button>
                <button type="button" class="track-btn"> ▶︎ Track Shipment</button>
              </div>

              <section id="sect1">
                <div className='stats mt-6'>
                  <h3><b>5000+</b></h3>
                  <span className='stats-desc text-sm'>Shipments Handled</span>
                </div>

                <div className='stats mt-6'>
                  <h3><b>10+</b></h3>
                  <span className='stats-desc text-sm'>Fleet Access</span>
                </div>

                <div className='stats mt-6'>
                  <h3><b>B2B</b></h3>
                  <span className='stats-desc text-sm'>Customer-Focused Operations</span>
                </div>

                <div className='stats mt-6'>
                  <h3><b>Pan India</b></h3>
                  <span className='stats-desc text-sm'>Service Reach</span>
                </div>

              </section>
            </div>
          </div>
    </section>
  )
}
