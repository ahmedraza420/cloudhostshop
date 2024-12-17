
const domainsList = ['com', 'net', 'org', 'info', 'biz', 'tv', 'we.bs', 'us', 'co.uk', 'ca', 'eu'];

export default function BuyDomain() {
    return (
        <section className="w-full py-8 px-6 bg-[url('/src/assets/buydomainbg.png')] bg-cover bg-center">
            <div className="sm:container xl:max-w-5xl mx-auto flex flex-col md:grid md:grid-cols-2">
                <div className="pt-8 md:pt-24 md:pb-7">
                    <h2 className="text-[37px] text-white capitalize font-normal">Choose your Domain Today!</h2>
                        <form className="flex items-stretch w-full text-xs md:text-sm lg:text-base">
                            <input type="text" className="rounded-s-full py-3 px-3 flex-1 min-w-24" placeholder="Search Domain Name"/>
                            <select defaultValue=".com" className="px-2 max-h-20 bg-slate-100 border-2 border-bg-slate-900 hover:bg-slate-200">
                                {
                            
                                    domainsList.map((domain,index) => (
                                        <option key={index} value={domain}>.{domain}</option>
                                    ))
                                }
                            </select>
                            <button className="bg-gradient-to-r from-[#FF0A66] to-[#FF7E5D] hover:to-[#FF0A66] px-4 rounded-e-full">Submit</button>
                        </form>
                        <div className="grid grid-cols-5 lg:grid-cols-7 md:w-10/12 mx-auto pt-4 items-end gap-2">
                            <img src="src/assets/dotcom.png" alt="dot com domain $2.44 per year"/>
                            <img src="src/assets/dotinfo.png" alt="dot info domain $3.44 per year"/>
                            <img src="src/assets/dotorg.png" alt="dot org domain $2.55 per year"/>
                            <img src="src/assets/dotbiz.png" alt="dot biz domain $1.90 per year"/>
                            <img src="src/assets/dotxyz.png" alt="dot xyz domain $0.99 per year"/>
                        </div>
                </div>
                <div className="flex items-center order-first md:order-1">
                    <img src="src/assets/domainslaptop.png" alt="" className="sm:w-4/6 lg:w-8/12 mx-auto  lg:ml-auto"/>
                </div>
            </div>
        </section>
    )
}