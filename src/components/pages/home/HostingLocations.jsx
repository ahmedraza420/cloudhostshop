import { Link } from "react-router-dom"

const dataLocations = [
    {iconUrl: '/src/assets/usdata.svg', name: 'US Hosting', location: 'SteadFast/Chicago, United States', link: 'https://cloudhostshop.com/us-hosting'},
    {iconUrl: '/src/assets/ukdata.svg', name: 'UK Hosting', location: 'Pulsant/London, United Kingdom', link: 'https://cloudhostshop.com/uk-hosting'},
    {iconUrl: '/src/assets/audata.svg', name: 'AU Hosting', location: 'Amaze/Sydney, Australia', link: 'https://cloudhostshop.com/au-hosting'},
    {iconUrl: '/src/assets/bgdata.svg', name: 'BG Hosting', location: 'TelePoint/Sofia, Bulgaria', link: 'https://cloudhostshop.com/bulgaria-hosting'},
    {iconUrl: '/src/assets/fndata.svg', name: 'FN Hosting', location: 'Ficolo/Pori, Finland', link: 'https://cloudhostshop.com/finland-hosting'},
]

export default function HostingLocations() {
    return(
        <section className="w-full pt-5 pb-16 px-6">
            <h2 className="text-h2 capitalize text-center font-normal mt-0 mb-10">Multiple center Locations</h2>
            <img src="/src/assets/hostinglocations.svg" alt="" className="md:w-full lg:w-8/12 mx-auto"/>
            <div className="w-10/12 flex flex-wrap justify-evenly gap-10 mx-auto pt-10">
                {
                    dataLocations.map((dataLocation, index) => (
                        <Link to={dataLocation.link} key={index} className="flex items-center justify-center w-full text-center gap-3 basis-full sm:basis-2/5 md:basis-3/12 hover:text-green-700 transition duration-200">
                            <img src={dataLocation.iconUrl} alt="hosting location image"/>
                            <div className="flex flex-col gap-3">
                                <p className="text-base">{dataLocation.name}</p>
                                <p className="text-xs">{dataLocation.location}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}