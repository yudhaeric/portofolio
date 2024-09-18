import Image from 'next/image'

export default function Navbar() {
  return (
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
  )
}
