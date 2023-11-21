import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <header className='w-full fixed bg-[#FFF5EA] z-50'>
        <div className='h-[70px] flex justify-between items-center mx-[5%] desktop:mx-[10%]'>
          <h1 className='pt-2 font-jomhuria text-[50px] desktop:text-[64px]'>Yudha<span className='text-[#18A3DF]'>.</span></h1>
          <div className='flex gap-5 items-center desktop:gap-10'>
            <a href="mailto:yudhaericpamungkas@gmail.com" target='_blank'>
              <Image
                className='desktop:w-30 desktop:h-30'
                src="/images/icons/gmail.png"
                alt="gmail"
                width={33}
                height={33}
              />
            </a>
            <a href="https://www.linkedin.com/in/yudha-eric-pamungkas-90a85a209/" target='_blank'>
              <Image
                src="/images/icons/linkedin.png"
                alt="linkedin"  
                width={30}
                height={30}
              />
            </a>
            <a href="https://github.com/yudhaeric" target='_blank'>
              <Image
                className='desktop:w-30 desktop:h-30'
                src="/images/icons/github.png"
                alt="github"
                width={26}
                height={26}
              />
            </a>
          </div>
        </div>
      </header>
      <div className='pt-24 mx-[5%] desktop:mx-[10%]'>
        <div className='absolute right-[-100px] top-[-50px] desktop:inline mobile:hidden'>
          <Image
            className='animate-spin-slow'
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
        <div className='mt-5'>
          <Image
            className='animate-spin-slow desktop:hidden'
            src="/images/icons/welcome.png"
            alt="welcome"
            width={105}
            height={107}
          />
          <Image
            className='animate-spin-slow desktop:inline mobile:hidden'
            src="/images/icons/welcome.png"
            alt="welcome"
            width={125}
            height={127}
          />
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </main>
  )
}
