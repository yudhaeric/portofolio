/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section id='main-banner'>
        <div className='pt-[50%] mx-[5%] desktop:mx-[10%] desktop:pt-[75px]'>
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
      </section>
      <section id='about'>
        <div className='mt-[70%] mx-[5%] desktop:mx-[10%] desktop:mt-20'>
          <hr className='bg-[#9C9C9C] h-[1px] desktop:h-[2px]'></hr>
          <div className='flex gap-5'>
            <div className='desktop:w-[70%] mt-3'>
              <h3 className='font-anton uppercase text-[16px] text-[#9C9C9C] desktop:text-[34px]'>About Me</h3>
              <h1 className='font-anton uppercase text-[30px] leading-9 desktop:text-[72px] desktop:leading-[80px]'>Exploring <br/> The <span className='text-[#18A3DF]'>Coder&apos;s</span> Identity</h1>
              <div className='flex justify-center mt-5 desktop:hidden'>
                <Image
                  src="/images/icons/shape-bg.png"
                  alt="shape"
                  width={100}
                  height={128}
                />
                <img
                  className='absolute mt-7 rounded-b-full'
                  src="/images/picture.png"
                  alt="pictures"
                  width={93}
                  height={127}
                />
              </div>
              <div className='text-[12px] mt-5 font-monaRegular desktop:text-[18px] desktop:w-[90%]'>
                <p>
                  Hi there 👋, I&apos;m <span className='text-[#18A3DF] font-monaMedium'>Yudha! </span>
                </p>
                <p>
                  A <span className='font-monaMedium'>detail-oriented</span> and 
                  <span className='font-monaMedium'> creative Front-End Developer</span> with two years of experience, 
                  specializing in <span className='font-monaMedium'>building responsive </span> and
                  <span className='font-monaMedium'> dynamic web applications </span> using
                  <span className='font-monaMedium'> modern frameworks. </span> Passionate about
                  <span className='font-monaMedium'> web standards </span> and staying up-to-date with the
                  <span className='font-monaMedium'> latest trends in technology, </span>
                  I ensure the websites I create are not only <span className='font-monaMedium'> visually appealing </span>
                  but also <span className='font-monaMedium'> highly functional </span> and
                  <span className='font-monaMedium'> responsive</span>.
                </p>
              </div>
              <div className='flex gap-52 desktop:gap-[520px]'>
                <div className='relative flex items-center mt-[-5px] ml-[-10px] desktop:mt-3'>
                  <p className='text-[8px] border border-[#1E1E1E] rounded-full px-[10px] py-[3px] desktop:text-[10px]'>6 Projects Done</p>
                  <Image
                    className='absolute mt-[-35px] left-[85px] desktop:w-[24px] desktop:h-[28.57px] desktop:left-24 desktop:mt-[-40px]'
                    src="/images/icons/arrow.png"
                    alt="pictures"
                    width={24}
                    height={15}
                  />
                </div>
                <a href="mailto:yudhaericpamungkas@gmail.com" target='_blank' className='desktop:-mt-10'>
                  <div className='flex flex-col items-center mt-[-5px]'>
                    <Image
                      className='desktop:w-[60px] desktop:h-[60px]'
                      src="/images/icons/contact-arrow.png"
                      alt="Contact"
                      width={35}
                      height={35}
                    />
                    <h3 className='text-[12px] font-monaMedium mt-[4px] desktop:text-[18px]'>Let&apos;s Talk!</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className='desktop:flex items-center desktop:w-[30%] justify-center mt-5 hidden'>
              <Image
                src="/images/icons/shape-bg.png"
                alt="shape"
                width={230}
                height={420}
              />
              <img
                className='absolute mt-7 rounded-b-full'
                src="/images/picture.png"
                alt="pictures"
                width={215}
                height={301.64}
              />
            </div>
          </div>
        </div>
      </section>
      <div className='mt-[40%]'></div>
    </main>
  )
}
