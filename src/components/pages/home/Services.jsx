const services = [
    {iconUrl: 'src/assets/rocket2tone2.svg', name: 'Faster Loading Speed', text: 'You create your website, we take care of the rest. This is the promise of OVHcloud flexibility and performance.'},
    {iconUrl: 'src/assets/phone2tone.svg', name: 'Our Dedicated Support', text: 'You create your website, we take care of the rest. This is the promise of OVHcloud flexibility and performance.'},
    {iconUrl: 'src/assets/dollarbadge2tone.svg', name: '99.9 % Uptime Guarantee', text: 'You create your website, we take care of the rest. This is the promise of OVHcloud flexibility and performance.'},
]

export default function Services() {
    return (
        <section className="w-full py-20 px-6 bg-green-600">
            <div className="sm:container xl:max-w-5xl mx-auto flex flex-col items-center">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
                    {
                        services.map((service, index) => (
                            <div className="relative py-10 px-6 flex flex-col rounded-xl shadow-lg justify-center gap-4 sm:max-md:w-2/3 bg-white backdrop-opacity-35" key={index}>
                                <img src={service.iconUrl} alt="" className="self-start size-12 mb-4"/>
                                <img src={service.iconUrl} alt="" className="absolute top-[10%] right-[10%] size-24 opacity-40"/>
                                <h4 className="text-[1.4rem] leading-[1.9rem] capitalize">{service.name}</h4>
                                <p className="text-sm text-slate-700">{service.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}