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
  
  const projects = [
    { 
      id: 1, image: "/images/obhc-preview.png",
      title: "OBH Combi",
      url: "https://obhcombi.co.id/",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      tech: "NextJS 15 - JQuery - Redux - Tailwind CSS - Laravel"
    },
    { 
      id: 2,
      image: "/images/parkserpong-preview.png",
      title: "Park Serpong",
      url: "https://parkserpong.com/",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      tech: "Umbraco CMS - C# - JQuery - Tailwind CSS"
    },
    { 
      id: 3,
      image: "/images/combiphar-preview.png",
      title: "Combiphar",
      url: "https://www.combiphar.com/id",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      tech: "NextJS 14 - JQuery - Tailwind CSS - Laravel"
    },
  ];

  return (
    <main>
      <section id="overview">
        <div className="flex items-start justify-start w-full mt-[60px] lg:items-start lg:justify-start lg:w-[1050px] lg:mx-auto lg:h-[500px] lg:mt-[8%] dmd:mt-[7%]">
          <div id='outer-left-grid'>
            <div className='hidden lg:flex flex-col items-center justify-center w-[40px] h-[85.5px] border-t-1 border-b-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed lg:mt-[40px] dmd:h-[85px] 2xl:mt-[39px]'></div>
            <div className='hidden lg:flex flex-col items-center justify-center w-[40px] h-[200px] border-b-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed'></div>
            <div className='hidden lg:flex flex-col items-center justify-center w-[40px] h-[134.5px] border-b-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed dmd:h-[135px] 2xl:h-[137px]'></div>
          </div>
          <div className='flex flex-col items-center justify-center gap-[1px] w-full h-full lg:flex-row lg:justify-between'>
            <div id='top-grid-mobile' className="w-[90%] h-[40px] border-l-1 border-r-1 border-oliveBlack/70 border-dashed lg:hidden"></div>
            {/* Summary */}
            <div className='flex flex-col items-center justify-center w-full lg:w-[60%] lg:border-l-1 lg:border-r-1 lg:border-oliveBlack/40 lg:border-dashed'>
              <div className="flex items-center justify-center w-full">
                <div className='w-full lg:w-full lg:h-[40px]'></div>
              </div>
              <div className="flex items-center justify-center w-full border-t-1 border-oliveBlack/70 border-dashed lg:flex-row lg:border-0">
                <div className='w-[90%] border-1 border-t-0 border-b-0 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed lg:w-full lg:h-[85px] lg:border-0 lg:border-t-1 lg:border-b-1'>
                  <div className="flex items-end justify-end w-full h-[80px] px-2 mobile-xl:w-[90%] sm:w-[60%] md:w-[50%] lg:w-[390px] lg:px-4">
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
              <div className="flex items-center justify-center w-full border-t-1 border-oliveBlack/70 border-dashed lg:flex-row lg:border-0">
                <div className="flex flex-col items-start justify-start gap-1 w-[90%] h-auto border-1 border-t-0 border-b-0 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed pt-2 pb-5 px-3 lg:w-full lg:h-[200px] lg:border-0 lg:border-b-1 lg:px-5">
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
              <div className="flex items-center justify-center w-full border-t-1 border-oliveBlack/70 border-dashed lg:flex-row lg:border-0">
                <div className="flex flex-col items-start justify-start gap-8 w-[90%] h-[150px] border-1 border-t-0 border-b-0 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed pt-5 pb-5 px-3 lg:gap-[30px] lg:w-full lg:h-full lg:border-0 lg:border-b-1 lg:px-5">
                  <div className='flex items-center justify-start gap-4 w-full lg:w-auto lg:gap-3 lg:justify-center mobile-md:gap-2'>
                    <Button variant='highlight'>Let&apos;s Talk</Button>
                    <Button variant='basic'>View Projects</Button>
                  </div>
                  <div className='flex items-center justify-center gap-[13px] mb-[6px] lg:gap-[10px]'>
                    {socialMedias.map((social) => {
                      return (
                        <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.id} className='scale-icon w-[22px] h-[22px] lg:w-[18px] lg:h-[18px] 2xl:w-[20px] 2xl:h-[20px]'>
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
            <div className='w-full h-[370px] flex flex-col items-center justify-center border-b-1 border-t-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed lg:flex-row lg:w-[41%] lg:h-[500px] lg:border-0 2xl:h-[502px] dlg:h-[501.5px]'>
              <div className="flex flex-col items-center justify-center w-[90%] h-[370px] lg:w-full lg:h-full">
                <div className="mobile-sm:hidden lg:flex items-center justify-center w-full h-[40px] 2xl:h-[40.5px] dlg:h-[40px]">
                  <div className='w-full border-r-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed lg:w-full lg:h-full'></div>
                </div>
                
                <div className="flex flex-col items-center justify-center gap-1 w-full h-[370px] border-l-1 border-r-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed lg:gap-0 lg:w-full lg:h-[420px] lg:border-t-1 lg:border-l-0 lg:border-b-1 2xl:h-[425px]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #3A3B3C 1px, transparent 1px)',
                    backgroundSize: '10px 10px'
                  }}
                >
                  <div className="bg-aeroBlue/10 rounded-[10px] w-[208px] h-[294px]">
                    <img src="/images/pictures.png" alt="" className="w-full h-full rounded-[10px] animate-float3d" />
                  </div>
                </div>

                <div id='bottom-grid-desktop' className="mobile-sm:hidden lg:flex items-center justify-center w-full lg:h-[40px] border-r-1 border-oliveBlack/40 border-dashed"></div>
              </div>
            </div>
            <div id='bottom-grid-mobile' className="w-[90%] h-[60px] border-l-1 border-r-1 border-oliveBlack/70 border-dashed lg:hidden"></div>
          </div>
          <div id='outer-right-grid'>
            <div className='hidden lg:flex flex-col items-center justify-center w-[40px] h-[420px] border-t-1 border-b-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed mt-[40px] lg:w-[40px] lg:h-[420px] 2xl:h-[422px] 2xl:mt-[39px]'></div>
          </div>
        </div>
      </section>

      <section id="featured-projects">
        <div className="w-[90%] mx-auto mt-[200px] lg:w-[1050px]">
          <div className='flex flex-col items-start justify-start gap-5 w-[90%] mx-auto lg:gap-[43px]'>
            <div className='flex flex-col items-start justify-start'>
              <h1 className="font-semibold text-white text-[42px]">Featured Projects</h1>
              <p className='font-semibold text-sonicSilver text-[10px]'>A glimpse into the projects I&apos;ve built and contributed to.</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-[30px]'>
              {projects.map((project) => {
                return ( 
                  <div key={project.id} className='flex flex-col items-center justify-center w-full gap-5 lg:flex-row'>
                    <div className={`${project.id % 2 === 0 ? 'order-2' : 'order-1'} flex items-center justify-center w-[305px] h-[250px] bg-raisinBlack bg-line-shape bg-no-repeat bg-cover rounded-[10px]`}>
                      <img src={project.image} alt={project.title} className='w-[285px] h-[210px]' />
                    </div>
                    <div className={`${project.id % 2 === 0 ? 'order-1' : 'order-2'} flex flex-col items-start justify-start w-[630px] h-[250px] text-white border-1 border-oliveBlack/70 border-dashed rounded-[10px] p-5`}>
                      <h2 className='font-bold text-2xl mb-[5px]'>{project.title}</h2>
                      <p className='text-[12px] mb-[30px]'>{project.desc}</p>
                      <div className='flex flex-col gap-1 text-xs'>
                        <p className='font-bold'>Tech Stack</p>
                        <p>{project.tech}</p>
                      </div>
                      <div className='flex items-end justify-end w-full h-[36px] mt-5'>
                        <Button variant='basic'>Open Website</Button>
                      </div>
                    </div>
                  </div>
                )
              })};
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
