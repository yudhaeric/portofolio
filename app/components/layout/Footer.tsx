import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className='flex flex-col items-center justify-center w-full mb-1'>
        <div className='w-[600px] h-[0.5px] bg-linear-to-r from-charlestonGreen from-13% via-[#E4E4E4]/55 via-50% to-charlestonGreen to-87%'></div>
        <p className='font-semibold text-[12px] text-sonicSilver py-5'>
          Copyright ©2025 Yudha Eric Pamungkas. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
