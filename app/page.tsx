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
      <div className='pt-[50%] mx-[5%] desktop:mx-[10%] desktop:pt-[24px]'>
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
        <div className='mt-7'>
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
      <div className='mt-[70%] mx-[5%]'>
        <hr className='bg-[#9C9C9C] h-[1px]'></hr>
        <div className='mt-3'>
          <h3 className='font-anton uppercase text-[16px] text-[#9C9C9C]'>About Me</h3>
          <h1 className='font-anton uppercase text-[30px] leading-9'>Exploring <br/> The <span className='text-[#18A3DF]'>Coder&apos;s</span> Identity</h1>
          <div className='flex justify-center mt-5'>
            <Image
              src="/images/icons/shape-bg.png"
              alt="shape"
              width={100}
              height={128}
            />
            <Image
              className='absolute mt-7'
              src="/images/picture.png"
              alt="pictures"
              width={93}
              height={127}
            />
          </div>
          <p className='text-[12px] mt-5 font-monaRegular'>
            Hi there 👋 my full name is <span className='text-[#18A3DF] font-monaMedium'>Yudha Eric Pamungkas, </span>
            with over one years, I&apos;ve evolved into a dedicated and 
            <span className='font-monaMedium'> passionate web developer</span>. My commitment to 
            staying up-to-date with the <span className='font-monaMedium'> latest web trends</span> and 
            technologies, ensures that the websites I create 
            are not only visually appealing but also 
            <span className='font-monaMedium'> highly functional </span> and <span className='font-monaMedium'>responsive.</span>
          </p>
          <div className='flex gap-52'>
            <div className='flex items-center mt-[-5px] ml-[-10px]'>
              <p className='text-[8px] border border-[#1E1E1E] rounded-full px-[10px] py-[3px]'>6 Projects Done</p>
              <Image
                className='absolute mt-[-35px] left-[85px]'
                src="/images/icons/arrow.png"
                alt="pictures"
                width={24}
                height={15}
              />
            </div>
            <a href="mailto:yudhaericpamungkas@gmail.com" target='_blank'>
              <div className='flex flex-col items-center mt-[-5px]'>
                <Image
                  src="/images/icons/contact-arrow.png"
                  alt="Contact"
                  width={35}
                  height={35}
                />
                <h3 className='text-[12px] font-monaMedium mt-[4px]'>Let&apos;s Talk!</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='mt-[50%]'></div>
      <footer className='w-full bg-[#18A3DF]'>
        <div className='flex justify-between py-5 mx-[5%]'>
          <div className='px-4 py-1 rounded-full border border-[#FFF5EA] text-[#FFF5EA]'>
            <p className='text-[10px] font-monaMedium'>Portofolio</p>
          </div>
          <div className='px-4 py-1 rounded-full border border-[#FFF5EA] text-[#FFF5EA]'>
            <p className='text-[10px] font-monaMedium'>Last Update: November 2023</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
