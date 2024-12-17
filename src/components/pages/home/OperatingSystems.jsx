
const OSItems = [
    {operatingSystem: 'CentOS 7 (64 bit)', iconURL: '/src/assets/centos.svg', alt:'centos image'},
    {operatingSystem: 'AlmaLinux 8 (64 bit)', iconURL: '/src/assets/debian.svg', alt:'debian image'},
    {operatingSystem: 'Rocky Linux 8 (64 bit)', iconURL: '/src/assets/cpanel.svg', alt:'cpanel image'},
    {operatingSystem: 'Debian 11.0 (64 bit)', iconURL: '/src/assets/fedora.svg', alt:'fedora image'},
    {operatingSystem: 'Debian 10.0 (64 bit)', iconURL: '/src/assets/plesk.svg', alt:'plesk image'},
    {operatingSystem: 'Ubuntu 20.04 LTS (64 bit)', iconURL: '/src/assets/opensuse.svg', alt:'opensuse image'},
]

export default function OperatingSystems() {
    return (
        <section className="w-full py-20 px-6 bg-slate-100">
            <div className="sm:container xl:max-w-5xl mx-auto flex flex-col items-center">
                <h2 className="text-h2-2 capitalize text-center font-normal mt-0">Available Operating Systems With Maximum Speed</h2>
                <p className="mb-12 text-xl/8 text-center text-slate-700 w-4/5">Our web hosting platform has been fully optimised to offer outstanding performance for your web applications, delivering speeds of up to16x faster.</p>
                <div className="w-full grid grid-cols-2 sm:px-4 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                    {
                        OSItems.map((item, index) => (
                            <div className="flex-col p-4 rounded-2xl shadow-[0_0_2rem_rgba(0,0,0,0.2)]" key={index}>
                                <img src={item.iconURL} alt={item.alt} className="w-full"/>
                                <p className="text-slate-600 text-center pt-4">{item.operatingSystem}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}