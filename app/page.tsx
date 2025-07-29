/* eslint-disable @next/next/no-img-element */
import Button from './components/ui/Button';

export default function Home() {
  const socialMedias = [
    { id: 1, url: "https://wa.me/62895330028942", icon: "/icons/WhatsApp.svg"},
    { id: 2, url: "https://www.linkedin.com/in/yudha-eric-pamungkas/", icon: "/icons/LinkedIn.svg"},
    { id: 3, url: "https://github.com/yudhaeric", icon: "/icons/Github.svg"},
    { id: 4, url: "https://www.instagram.com/yudhapmksss/", icon: "/icons/Instagram.svg"},
    { id: 5, url: "https://drive.google.com/file/d/1-Jiw5CyA9SzDEL2IWx3qQz-rW9eQOwZ1/view?usp=sharing", icon: "/icons/Resume.svg"},
  ];

  return (
    <section id="overview">
      <div className="flex flex-col items-center justify-center w-[320px] mx-auto mt-[130px] lg:flex-row lg:gap-[1px] lg:items-start lg:justify-start lg:w-[1050px] lg:h-[500px] lg:mt-[6%] dmd:mt-[7%]">
        <div id='outer-left-grid' className='hidden lg:block'>
          <div className='flex flex-col items-center justify-center w-[40px] h-[85.5px] border-t-1 border-b-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed mt-[40px] dmd:h-[85px]'></div>
          <div className='flex flex-col items-center justify-center w-[40px] h-[200px] border-b-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed'></div>
          <div className='flex flex-col items-center justify-center w-[40px] h-[134.5px] border-b-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed dmd:h-[135px] 2xl:h-[137px]'></div>
        </div>
        {/* Summary */}
        <div className='flex flex-col items-center justify-center w-full mx-auto lg:w-[58%] lg:border-l-1 lg:border-r-1 lg:border-oliveBlack/40 lg:border-dashed'>
          <div className="flex items-center justify-center w-full">
            <div className='w-full lg:w-full lg:h-[40px]'></div>
          </div>

          <div className="flex items-center justify-center w-full lg:flex-row">
            <div className='w-full border-1 border-b-0 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed lg:w-full lg:h-[85px] lg:border-0 lg:border-t-1 lg:border-b-1'>
              <div className="flex items-end justify-end w-full h-[80px] px-2 lg:w-[390px] lg:px-4">
                <div className="w-full h-[39px] flex items-center justify-start gap-[5px] bg-linear-to-r from-eucalyptusGreen/20 to-raisinBlack/1 rounded-full pl-[10px] mb-[20px]">
                  <div className="relative flex items-center justify-center w-[10px] h-[10px]">
                    <span className='absolute w-[8px] h-[8px] rounded-full bg-mountainGreen/40 animate-ping'></span>
                    <span className="relative w-[6px] h-[6px] rounded-full bg-crayolaGreen"></span>
                  </div>
                  <p className="text-white text-xs lg:text-sm">Orchestrating experiences at <span className="font-medium">AITINDO</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full lg:flex-row">
            <div className="flex flex-col items-start justify-start gap-1 w-full h-[205px] border-1 border-b-0 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed pt-2 pb-5 px-3 lg:w-full lg:h-[200px] lg:border-0 lg:border-b-1 lg:px-5">
              <h1 className="font-semibold text-white text-[36px] lg:text-[52px]">
                Hello! I&apos;m <span className="text-crayolaGreen">Yudha</span>
              </h1>
              <p className="text-seashell text-sm leading-[18px] lg:text-base lg:leading-[20px]">
                Yudha is a detail-oriented and creative Developer with 3 years of experience,
                specializing in building responsive and dynamic web applications. He&apos;s passionate
                about web standards, clean code, and delivering user experiences that drive real impact.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full lg:flex-row">
            <div className="flex flex-col items-start justify-start gap-8 w-full h-[150px] border-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed pt-5 pb-5 px-3 lg:gap-[30px] lg:w-full lg:h-full lg:border-0 lg:border-b-1 lg:px-5">
              <div className='flex items-center justify-between w-full lg:w-auto lg:gap-2 lg:justify-center'>
                <Button variant='highlight'>Let&apos;s Talk</Button>
                <Button variant='basic'>View Projects</Button>
              </div>
              <div className='flex items-center justify-center gap-[13px] mb-[6px] lg:gap-[10px]'>
                {socialMedias.map((social) => {
                  return (
                    <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.id} className='scale-icon w-6 h-6 lg:w-[18px] lg:h-[18px] 2xl:w-[20px] 2xl:h-[20px]'>
                      <img src={social.icon} alt="" className='w-full h-full'/>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full">
            <div className='w-full lg:w-full lg:h-[40px]'></div>
          </div>
        </div>
        {/* Picture */}
        <div className="flex flex-col items-center justify-center w-[320px] lg:w-[38%] lg:h-[500px] 2xl:h-[502px] dlg:h-[501.5px]">
          <div className="mobile-sm:hidden lg:flex items-center justify-center w-full h-[40px] 2xl:h-[40.5px] dlg:h-[40px]">
            <div className='w-full border-r-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed lg:w-full lg:h-full'></div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 w-full border-1 border-t-0 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed py-14 lg:gap-0 lg:w-full lg:h-[420px] lg:border-t-1 lg:border-l-0 2xl:h-[425px]"
            style={{
              backgroundImage: 'radial-gradient(circle, #3A3B3C 1px, transparent 1px)',
              backgroundSize: '10px 10px'
            }}
          >
            <div className="bg-aeroBlue/10 rounded-[10px] w-[208px] h-[294px]">
              <img src="/images/pictures.png" alt="" className="w-full h-full rounded-[10px] animate-float3d" />
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-[40px]">
            <div className='w-full border-r-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed lg:w-full lg:h-full'></div>
          </div>
        </div>
        <div id='outer-right-grid' className='hidden lg:flex'>
          <div className='flex flex-col items-center justify-center w-[40px] h-[420px] border-t-1 border-b-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed mt-[40px] lg:w-[40px] lg:h-[420px] 2xl:h-[422px]'></div>
        </div>
      </div>
    </section>
  );
}
