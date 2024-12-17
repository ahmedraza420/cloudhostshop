import { Carousel, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

const sliderContents = [
    {
        list: ['Unmetered Sub Domains, Accounts', '99% Money-Back Guarantee', '45-Day Money-Back Guarantee'],
        oldPrice: 10.99,
        currentPrice: 6.58,
    },
    {
        list: ['Industry-leading Performance & Speed', 'Free & Effortless Migration', 'Free SSL Certificates For ALL Websites', '99.9% Uptime Guarantee', '30-day Money-back Guarantee'],
        oldPrice: 14.99,
        currentPrice: 7.99,
    },
    {
        list: ['24/7 fully managed support', 'Industry-leading performance & load speed', 'Robust control panel & advanced security', '99.9% Uptime Guarantee'],
        oldPrice: 16.99,
        currentPrice: 8.99,
    },
]


export default function Slider() {
    return (
        <ConfigProvider  theme={{
            components: {
              Carousel: {
                dotOffset: 15,
                dotHeight: 8,
                dotActiveColor: '#66C206', // Custom color for active dot
                dotColor: '#A0AEC0',
              },
            },
          }}>
            <Carousel autoplay autoplaySpeed='80' className='text-sm md:text-base'>
                <div className="h-[85svh] py-8 md:py-16 text-white bg-slate-500 bg-[url('/src/assets/home-slider1.png')] bg-center bg-cover bg-no-repeat">
                    <div className="sm:container xl:max-w-6xl h-full     mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-[30px]">
                        <div className="slider-content">
                            <h6 className='text-lg md:text-xl'>Reliable hosting to make any website</h6>
                            <h2 className='text-3xl sm:text-[35px] md:text-[43px] leading-[39px] md:leading-[50px] py-2'>We Offer Shared Hosting Fast, Secure & Easy To Manage</h2>

                            <ul className='flex flex-col gap-3 py-3 pl-7 text-xs sm:text-sm'>
                                {
                                    sliderContents[0].list.map((item, index) => (
                                        <li key={index} className='list-image-[url("/src/assets/list-style-1.svg")]'><span className='relative -top-1'>{item}</span></li>
                                    ))
                                }
                            </ul>

                            <p className='py-3'>Get all the essentials features Starting at $2.59/mo</p>
                            <Link className="inline-block py-2 px-4 text-white bg-orange-500 rounded-md text-xs">Get Started Now</Link>
                        </div>  
                        <div className="flex items-center justify-center slider-image">
                                <div className="relative inline-flex items-center justify-center current-price p-3 size-auto sm:size-[170px] md:size-[300px] text-6xl sm:text-8xl md:text-[140px] bg-green-600 rounded-2xl sm:rounded-full">
                                    <h1 className='inline-flex place-items-end leading-none'><sup className="-top-12 md:-top-28 text-[37.5%]">$</sup>{Math.floor(sliderContents[0].currentPrice)} <sub className='-top-2 md:-top-6 text-[18%]'>.{(sliderContents[0].currentPrice % 1).toFixed(2).split('.')[1]}/mo</sub></h1>
                                    <div className="absolute left-2/3 bottom-2/4 shadow-lg bg-white rounded-lg sm:rounded-full inline-flex flex-col items-center justify-center p-2 size-auto sm:size-[90px] md:size-[150px] text-green-600 text-[21.5%]"><span className="line-through">${sliderContents[0].oldPrice}*</span><span className='text-xs md:text-base text-slate-900 sm:absolute bottom-[20%] text-nowrap'>Regular price</span></div>
                                </div>
                        </div>   
                    </div>
                </div>
                <div className="h-[85svh] py-8 md:py-16 text-white bg-slate-500 bg-[url('/src/assets/home-slider2.png')] bg-center bg-cover bg-no-repeat">
                    <div className="sm:container xl:max-w-6xl h-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-[30px]">
                        <div className="slider-content">
                            <h6 className='text-lg md:text-xl'>Trusted by 700,500 Website Owners</h6>
                            <h2 className='text-3xl sm:text-[35px] md:text-[43px] leading-[39px] md:leading-[50px] py-2'>Your Websites Deserve Faster, Secure & Reliable Hosting</h2>

                            <ul className='flex flex-col gap-3 py-3 pl-7 text-xs sm:text-sm'>
                                {
                                    sliderContents[1].list.map((item, index) => (
                                        <li key={index} className='list-image-[url("/src/assets/list-style-1.svg")]'><span className='relative -top-1'>{item}</span></li>
                                    ))
                                }
                            </ul>
                            <Link className="inline-block py-2 px-4 text-white bg-orange-500 rounded-md text-xs">Get Started Now</Link>
                        </div>  
                        <div className="flex items-center justify-center slider-image">
                                <div className="relative inline-flex items-center justify-center current-price p-3 size-auto sm:size-[170px] md:size-[300px] text-6xl sm:text-8xl md:text-[140px] bg-green-600 rounded-2xl sm:rounded-full">
                                    <h1 className='inline-flex place-items-end leading-none'><sup className="-top-12 md:-top-28 text-[37.5%]">$</sup>{Math.floor(sliderContents[1].currentPrice)} <sub className='-top-2 md:-top-6 text-[18%]'>.{(sliderContents[1].currentPrice % 1).toFixed(2).split('.')[1]}/mo</sub></h1>
                                    <div className="absolute left-2/3 bottom-2/4 shadow-lg bg-white rounded-lg sm:rounded-full inline-flex flex-col items-center justify-center p-2 size-auto sm:size-[90px] md:size-[150px] text-green-600 text-[21.5%]"><span className="line-through">${sliderContents[1].oldPrice}*</span><span className='text-xs md:text-base text-slate-900 sm:absolute bottom-[20%] text-nowrap'>Regular price</span></div>
                                </div>
                        </div>   
                    </div>
                </div>
                <div className="h-[85svh] py-8 md:py-16 text-white bg-slate-500 bg-[url('/src/assets/home-slider3.png')] bg-center bg-cover bg-no-repeat">
                    <div className="sm:container xl:max-w-6xl h-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-[30px]">
                        <div className="slider-content">
                            <h6 className='text-lg md:text-xl'>Build your own website</h6>
                            <h2 className='text-3xl sm:text-[35px] md:text-[43px] leading-[39px] md:leading-[50px] py-2'>Own VPS, Fully Managed by Experts, Simple, Affordable</h2>

                            <ul className='flex flex-col gap-3 py-3 pl-7 text-xs sm:text-sm'>
                                {
                                    sliderContents[2].list.map((item, index) => (
                                        <li key={index} className='list-image-[url("/src/assets/list-style-1.svg")]'><span className='relative -top-1'>{item}</span></li>
                                    ))
                                }
                            </ul>
                            <Link className="inline-block py-2 px-4 text-white bg-orange-500 rounded-md text-xs">Get Started Now</Link>
                        </div>  
                        <div className="flex items-center justify-center slider-image">
                                <div className="relative inline-flex items-center justify-center current-price p-3 size-auto sm:size-[170px] md:size-[300px] text-6xl sm:text-8xl md:text-[140px] bg-green-600 rounded-2xl sm:rounded-full">
                                    <h1 className='inline-flex place-items-end leading-none'><sup className="-top-12 md:-top-28 text-[37.5%]">$</sup>{Math.floor(sliderContents[2].currentPrice)} <sub className='-top-2 md:-top-6 text-[18%]'>.{(sliderContents[2].currentPrice % 1).toFixed(2).split('.')[1]}/mo</sub></h1>
                                    <div className="absolute left-2/3 bottom-2/4 shadow-lg bg-white rounded-lg sm:rounded-full inline-flex flex-col items-center justify-center p-2 size-auto sm:size-[90px] md:size-[150px] text-green-600 text-[21.5%]"><span className="line-through">${sliderContents[2].oldPrice}*</span><span className='text-xs md:text-base text-slate-900 sm:absolute bottom-[20%] text-nowrap'>Regular price</span></div>
                                </div>
                        </div>   
                    </div>
                </div>
            </Carousel>
        </ConfigProvider>
    )
}