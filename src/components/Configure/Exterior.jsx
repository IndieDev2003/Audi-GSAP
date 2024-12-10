import React from 'react'
import sideView from '../../assets/configure/exterior.png'
import innerView from '../../assets/configure/interior.png'
import { color1, color4, color5, color2,color3,color6,color7 ,seat1, seat2, seat3, seat4, seat5} from '../../assets/configure/configure.js'

function Exterior() {
  return (
      <div className='px-2 sm:px-10 mt-5'>
          <div>
              <h2 className='text-2xl'>Exterior</h2>
              <img src={sideView} alt="" />
              <h3 className='text-xl mb-2'>Exterior Colors</h3>
              <div className='overflow-scroll flex flex-nowrap gap-3'>
                  <img src={color1} className='border border-black rounded-lg h-14 object-cover' alt="exterior-color" />
                  <img src={color2} className='border border-black rounded-lg h-14 object-cover' alt="exterior-color" />
                  <img src={color3} className='border border-black rounded-lg h-14 object-cover' alt="exterior-color" />
                  <img src={color4} className='border border-black rounded-lg h-14 object-cover' alt="exterior-color" />
                  <img src={color5} className='border border-black rounded-lg h-14 object-cover' alt="exterior-color" />
                  <img src={color6} className='border border-black rounded-lg h-14 object-cover' alt="exterior-color" />
                  <img src={color7} className='border border-black rounded-lg h-14 object-cover' alt="exterior-color" />
              </div>
              <img src={innerView} className='my-5 rounded-lg object-cover' alt="interior" />
              <p className='text-sm'>Seats: Black, Dashboard: Black, Carpet: Black, Headliner: Black</p>
              <div className='overflow-scroll flex flex-nowrap gap-3 mt-1'>
                  <img src={seat1} className=' border-black h-14 object-cover' alt="" />
                  <img src={seat2} className=' border-black h-14 object-cover' alt="" />
                  <img src={seat3} className=' border-black h-14 object-cover' alt="" />
                  <img src={seat4} className=' border-black h-14 object-cover' alt="" />
                  <img src={seat5} className=' border-black h-14 object-cover' alt="" />
              </div>
          </div>
    </div>
  )
}

export default Exterior