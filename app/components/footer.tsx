/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer className='w-full'>
      {/* <div className='flex justify-between py-5 mx-[5%]'>
        <div className='px-4 py-1 rounded-full border border-[#FFF5EA] text-[#FFF5EA]'>
          <p className='text-[10px] font-monaMedium'>Portofolio</p>
        </div>
        <div className='px-4 py-1 rounded-full border border-[#FFF5EA] text-[#FFF5EA]'>
          <p className='text-[10px] font-monaMedium'>Last Update: November 2023</p>
        </div>
      </div> */}
      <div>
        <h4 className="text-center mb-2">Reach me out</h4>
        <div className="flex justify-center items-center gap-5">
          <a href="mailto:yudhaericpamungkas@gmail.com" target='_blank' className="desktop:hover:trasition-all desktop:hover:duration-300 desktop:hover:scale-110">
            <img
              className='desktop:w-30 desktop:h-30'
              src="/images/icons/gmail.png"
              alt="gmail"
              width={33}
              height={33}
            />
          </a>
          <a href="https://www.linkedin.com/in/yudha-eric-pamungkas-90a85a209/" target='_blank' className="desktop:hover:trasition-all desktop:hover:duration-300 desktop:hover:scale-110">
            <img
              src="/images/icons/linkedin.png"
              alt="linkedin"  
              width={30}
              height={30}
            />
          </a>
          <a href="https://github.com/yudhaeric" target='_blank' className="desktop:hover:trasition-all desktop:hover:duration-300 desktop:hover:scale-110">
            <img
              className='desktop:w-30 desktop:h-30'
              src="/images/icons/github.png"
              alt="github"
              width={26}
              height={26}
            />
          </a>
        </div>
      </div>
      <div className='flex justify-center items-center pt-6 pb-2'>
        <p className='text-[10px] font-monaMedium desktop:text-base'>&copy; Yudha Eric Pamungkas 2024</p>
      </div>
    </footer>
  )
}
