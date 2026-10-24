import React from 'react'
import { Link } from "react-router-dom";

export default function TalkLogisticTeam() {
    return (
        <section className='bg-white'>
            <br />
            <br />
            <div className='bg-[#020619] border rounded-4xl mx-6 flex flex-between gap-16'>

                <div className='m-8 w-[40%]'>
                    <br />
                    <h6 className='text-sm text-blue-500 font-semibold tracking-wider mb-6'>TALK TO OUR LOGISTICS TEAM</h6>
                    <h1 className='text-5xl text-white font-semibold leading-tight mb-8'>Plan Your Next Freight Movement<br />
                        <i className='text-4xl text-gray-500 font-semibold'>With NARSIK.</i></h1>
                    <p className='text-lg text-slate-500 font-semibold'>Tell us where your cargo needs to move, what you are shipping, and what your transport requirement
                        looks like. Our team can help you evaluate the appropriate freight and logistics option.</p>

                    <div className='flex justify-between mt-8'>
                        <div className='bg-[#1C1F30] border rounded-3xl items-center p-6'>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-6 w-6" aria-hidden="true"></svg> */}
                            <h5 className='text-white font-semibold tracking-wider'>DIRECT LINE</h5>
                            <p className='text-gray-400 font-semibold'>+91 9929031702</p>
                            <Link to="#" className='text-blue-500 text-sm'>CALL NOW ↗</Link>
                        </div>

                        <div className='bg-[#1C1F30] border rounded-3xl items-center p-6'>
                            <h5 className='text-white font-semibold tracking-wider'>EMAIL US</h5>
                            <p className='text-gray-400 font-semibold'>info@narsiklogistics.com</p>
                            <Link to="#" className='text-blue-500 text-sm'>EMAIL US ↗</Link>
                        </div>
                    </div>
                </div>

                <div className='m-8 w-[40%] border bg-white rounded-4xl p-10'>

                    <h3 className='text-2xl font-semibold'>Request a Freight Quote</h3>
                    <p className='text-slate-600 text-sm mt-2'>Share your shipment requirement and our logistics team will review the details.</p>
                    <br />
                    <form>
                        <div className='flex gap-6'>

                            <div>
                                <label className='text-sm text-slate-500 font-semibold'>FULL NAME </label>
                                <div>
                                    <input className="bg-[#F8FAFC] rounded-lg text-sm font-semibold p-3" type="text" placeholder="John Doe" name="name" required />
                                </div>
                            </div>

                            <div>
                                <label className='text-sm text-slate-500 font-semibold'>MOBILE </label>
                                <div>
                                    <input className="bg-[#F8FAFC] rounded-lg text-sm font-semibold p-3" type="tel" placeholder="+91 9999999999" name="mobile" required />
                                </div>
                            </div>

                        </div>

                        <br />

                        <div className='flex gap-6'>

                            <div>
                                <label className='text-sm text-slate-500 font-semibold'>Work Email </label>
                                <div>
                                    <input className="bg-[#F8FAFC] rounded-lg text-sm font-semibold p-3" type="email" placeholder="you@company.com" name="email" required />
                                </div>
                            </div>

                            <div>
                                <label className='text-sm text-slate-500 font-semibold'>Primary Route</label>
                                <div>
                                    <input className="bg-[#F8FAFC] rounded-lg text-sm font-semibold p-3" type="text" placeholder="e.g., Jaipur to Mumbai" name="route" />
                                </div>
                            </div>

                        </div>

 <br />

                        <div>
                            <label className='text-sm text-slate-500 font-semibold'>Freight Requirement</label>
                            <div>
                            <textarea name="message" rows="3" cols="50" placeholder="Tell us aboutyour cargo, approximate
                            shipment volume, preffered vehicle type,  delivery requirements etc." 
                            className="bg-[#F8FAFC] rounded-lg text-sm font-semibold p-3"></textarea>
                            </div>
                        </div>
<br/>
                        <button  className="bg-blue-600 rounded-lg text-sm font-bold p-3 text-white w-[100%] tracking-widest"  type="submit">Request Freight Quote</button>
                        <br/>
                        <span className='text-sm text-slate-400 tracking-tighter text-center'>By submitting this form, you agree to our
                            <Link className = "text-black" to=""> Privacy Policy </Link>
                            and
                            <Link className = "text-black" to=""> Terms. </Link>
                             <br/>No spam — just logistics.
                        </span>

                    </form>
                </div>
            </div>
        </section>
    )
}
