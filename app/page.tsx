/* eslint-disable @next/next/no-img-element */
import Button from './components/ui/Button';

export default function Home() {
  return (
    <section id="overview">
      <div className="flex flex-col items-center justify-center w-full mx-auto mt-[30%] lg:flex-row">
        <div className="flex items-center justify-center w-full gap-[2px] lg:flex-row">
          <div className="w-[8%] h-[80px] border-t-1 border-b-1 border-oliveBlack/40 border-dashed mobile-md:h-[185px] mobile-lg:h-[170px]"></div>
          <div className="flex items-end justify-end w-[84%] h-[80px] border-1 border-oliveBlack/40 border-dashed">
            <div className="w-full h-[39px] flex items-center justify-start gap-[5px] bg-linear-to-r from-eucalyptusGreen/20 to-chineseBlack rounded-full pl-[10px] mb-[20px]">
              <div className="flex items-center justify-center w-[10px] h-[10px] rounded-full bg-mountainGreen/20">
                <div className="w-[6px] h-[6px] rounded-full bg-crayolaGreen"></div>
              </div>
              <p className="text-white text-xs">Orchestrating experiences at <span className="font-medium">AITINDO</span></p>
            </div>
          </div>
          <div className="w-[8%] h-[80px] border-t-1 border-b-1 border-oliveBlack/40 border-dashed mobile-md:h-[185px] mobile-lg:h-[170px]"></div>
        </div>

        <div className="flex items-center justify-center w-full gap-[2px] lg:flex-row">
          <div className="w-[8%] h-[205px] border-t-1 border-b-1 border-oliveBlack/40 border-dashed mobile-md:h-[185px] mobile-lg:h-[170px]"></div>
          <div className="flex flex-col items-start justify-start gap-1 w-[84%] h-[205px] border-1 border-oliveBlack/40 border-dashed pt-2 pb-5 px-5 mobile-md:h-[185px] mobile-lg:h-[170px]">
            <h1 className="font-semibold text-white text-[32px] lg:text-[52px]">
              Hello! I&apos;m <span className="text-crayolaGreen">Yudha</span>
            </h1>
            <p className="text-seashell text-xs leading-[18px]">
              Yudha is a detail-oriented and creative Developer with 3 years of experience,
              specializing in building responsive and dynamic web applications. He&apos;s passionate
              about web standards, clean code, and delivering user experiences that drive real impact.
            </p>
          </div>
          <div className="w-[8%] h-[205px] border-t-1 border-b-1 border-oliveBlack/40 border-dashed mobile-md:h-[185px] mobile-lg:h-[170px]"></div>
        </div>

        <div className="flex items-center justify-center w-full gap-[2px] lg:flex-row">
          <div className="w-[8%] h-[120px] border-b-1 border-oliveBlack/40 border-dashed mobile-md:h-[185px] mobile-lg:h-[170px]"></div>
          <div className="flex flex-col items-start justify-start gap-1 w-[84%] h-[120px] border-1 border-t-0 border-oliveBlack/40 border-dashed pt-5 pb-5 px-5 mobile-md:h-[185px] mobile-lg:h-[170px]">
            <div className='flex items-center justify-center gap-2'>
              <Button variant='highlight'>Let&apos;s Talk</Button>
              <Button variant='basic'>View Projects</Button>
            </div>
          </div>
          <div className="w-[8%] h-[120px] border-b-1 border-oliveBlack/40 border-dashed mobile-md:h-[185px] mobile-lg:h-[170px]"></div>
        </div>

        <div className="flex items-center justify-center w-full gap-[2px]">
          <div className="w-[8%] h-[350px] border-b-1 border-oliveBlack/40 border-dashed"></div>
          <div className="flex flex-col items-center justify-center gap-1 w-[84%] h-[350px] border-1 border-t-0 border-oliveBlack/40 border-dashed pt-5 pb-5 px-5"
              style={{
                backgroundImage: 'radial-gradient(circle, #3A3B3C 1px, transparent 1px)',
                backgroundSize: '12px 12px'
              }}>
            <div className="w-[208px] h-[294px] bg-aeroBlue/10 rounded-[10px]">
              <img src="/images/pictures.png" alt="" className="w-[208px] h-[294px] rounded-[10px] animate-float3d" />
            </div>
          </div>
          <div className="w-[8%] h-[350px] border-b-1 border-oliveBlack/40 border-dashed"></div>
        </div>
      </div>
    </section>
  );
}
