const hostingFeatures = [
    {iconUrl: '/src/assets/sslcert.svg', name: 'SSL Certificates', text: 'Our intuitive control panel gives you admin access to all of your DreamHost products easily.'},
    {iconUrl: '/src/assets/cdn.svg', name: 'CDN Included', text: 'Tech veterans, geeks, and nerds are all standing by to optimize your experience whether.'},
    {iconUrl: '/src/assets/litespeed.svg', name: 'LiteSpeed Memcached', text: 'No need to dig into a bunch of documentation. Simply install web apps like WordPress, Joomla!.'},
    {iconUrl: '/src/assets/uptimeguarantee.svg', name: '100% Uptime Guarantee', text: 'With multiple datacenter locations, redundant cooling, emergency generators and monitoring.'},
    {iconUrl: '/src/assets/ssd.svg', name: 'Solid State Drives (SSD)', text: 'With SSDs, your website, caching, and database queries are faster by our calculations.'},
    {iconUrl: '/src/assets/unlimitedstorage.svg', name: 'Unlimited Storage', text: 'No question is too simple, or too complex for our team of experts. Synergistically synergize.'},
]

export default function HostingFeatures() {
    return (
        <section className="w-full py-14 px-6">
            <div className="sm:container xl:max-w-5xl mx-auto flex flex-col items-center">
                <h2 className="text-h2-2 capitalize text-center font-normal">Best Hosting Features For You</h2>
                <p className="mb-12 text-base/8 text-center text-slate-700 w-4/5">These features come standard in all of our hosting plans. Dynamically extend imperatives through open-source quickly niche markets.</p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center">
                    {
                        hostingFeatures.map((hostingFeature, index) => (
                            <div className="border-2 rounded-2xl sm:max-md:w-2/3 p-10 flex flex-col items-center gap-4 text-center justify-between" key={index}>
                                <img src={hostingFeature.iconUrl} alt="" className="size-10 md:size-14" />
                                <h5 className="text-xl capitalize">{hostingFeature.name}</h5>
                                <p className="mt-auto">{hostingFeature.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}