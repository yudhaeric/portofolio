import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className='flex flex-col items-center justify-center w-full mb-1'>
        <div className='w-[90%] h-[1px] bg-linear-to-r from-charlestonGreen from-13% via-[#E4E4E4]/55 via-50% to-charlestonGreen to-87% lg:w-[700px]'></div>
        <p className='font-semibold text-[12px] text-center text-sonicSilver py-5'>
          <span className='block mobile-xl:inline'>Copyright ©2025 Yudha Eric Pamungkas.</span> All rights reserved.
        </p>
      </div>
    </footer>
  )
}
