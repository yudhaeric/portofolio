/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export default function Banner() {
  return (
    <div className='pt-[50%] mx-[5%] desktop:mx-[10%] desktop:pt-[75px]'>
      <div className='absolute right-[-100px] top-[-50px] desktop:inline mobile:hidden'>
        <Image
          className='animate-spinSlow'
          src="/images/icons/shape.png"
          alt="line"
          width={250}
          height={261}
        />
      </div>
      <h1 className='font-anton uppercase leading-[50px] text-[41px] desktop:hidden'>
        where <span className='text-[#18A3DF]'>code </span> <br/>
        meets <span className='text-[#18A3DF]'>creativity </span> <br/>
        dreams come to life<span className='text-[#18A3DF]'>!</span>
      </h1>
      <h1 className='font-anton uppercase leading-[95px] text-[90px] desktop:inline mobile:hidden'>
        where <span className='text-[#18A3DF]'>code </span> <br/>
        meets <span className='text-[#18A3DF]'>creativity </span> <br/>
        dreams come to life<span className='text-[#18A3DF]'>!</span>
      </h1>
      <div className='ml-36 desktop:hidden'>
        <Image
          src="/images/icons/line-mobile.png"
          alt="line"
          width={228}
          height={11}
        />
      </div>
      <div className='desktop:inline mobile:hidden'>
        <Image
          className='ml-[350px] mt-[-5px]'
          src="/images/icons/line.png"
          alt="line"
          width={459}
          height={22}
        />
      </div>
      <div className='mt-7'>
        <Image
          className='animate-spinSlow desktop:hidden'
          src="/images/icons/welcome.png"
          alt="welcome"
          width={105}
          height={107}
        />
        <Image
          className='animate-spinSlow desktop:inline mobile:hidden'
          src="/images/icons/welcome.png"
          alt="welcome"
          width={125}
          height={127}
        />
      </div>
    </div>
  )
}