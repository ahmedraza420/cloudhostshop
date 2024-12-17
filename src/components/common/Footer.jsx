import { FaWindows, FaSquareFacebook, FaLinkedin, FaSkype } from "react-icons/fa6";
import { Link } from "react-router-dom";

const footerLinkColumns = [
    {
        title: 'about',
        items: [['About Us', 'Contacts', 'Why Us', 'Website Migration', 'Hosting Platform', 'Service Guarantees', 'Legal'],
                ['https://cloudhostshop.com/about-us', 'https://cloudhostshop.com/contact-us', 'https://cloudhostshop.com/why-choose-us', 'https://cloudhostshop.com/website-migration', 'https://cloudhostshop.com/hosting-platform', 'https://cloudhostshop.com/service-guarantees', 'https://cloudhostshop.com/terms']],
    },
    {
        title: 'control panel',
        items: [['Web Hosting Control Panel', 'Hepsia vs cPanel', 'Web Accelerators', 'Free Themes', 'Domain Names Manager', 'File Manager', 'Hepsia Email Manager', 'Stats Manager', 'Database Manager', 'Site Builder Instrument', 'Website Installer', '1 Click Framework Installer', 'Marketing Tools', 'Advanced Tools'],
                ['https://cloudhostshop.com/web-hosting-control-panel', 'https://cloudhostshop.com/hepsia-vs-cpanel', 'https://cloudhostshop.com/web-accelerators', 'https://cloudhostshop.com/free-themes', 'https://cloudhostshop.com/domain-names-manager', 'https://cloudhostshop.com/file-manager', 'https://cloudhostshop.com/hepsia-email-manager', 'https://cloudhostshop.com/stats-manager', 'https://cloudhostshop.com/database-manager', 'https://cloudhostshop.com/site-builder-instrument', 'https://cloudhostshop.com/website-installer', 'https://cloudhostshop.com/one-click-framework-installer', 'https://cloudhostshop.com/marketing-tools', 'https://cloudhostshop.com/advanced-tools']],
    },
    {
        title: 'support',
        items: [['Support', 'Web Hosting Support', 'VPS Support Support', 'Semi-dedicated Hosting Support Status', 'Dedicated Hosting Support Services', 'Dedicated Administration Services', 'VPS Administration Services'],
                ['https://cloudhostshop.com/support', 'https://cloudhostshop.com/web-hosting-support', 'https://cloudhostshop.com/vps-support', 'https://cloudhostshop.com/semi-dedicated-hosting-support-service', 'https://cloudhostshop.com/dedicated-hosting-support-service', 'https://cloudhostshop.com/dedicated-administration-service', 'https://cloudhostshop.com/vps-administration-services']],
    },
]

const footerContactColumn = {
    title: 'contact us',
    items: ['Our ID: 167436', 'US: +1 443 7764789', 'PK: +92 (21) 38898330', 'support@cloudhostshop.com']
}

const socials = [
    {
        icon: FaSquareFacebook,
        link: 'https://www.facebook.com/CloudHostShop',
        color: 'facebook',
    },
    {
        icon: FaLinkedin,
        link: 'https://www.linkedin.com/company/cloudhostshop',
        color: 'linkedin',
    },
    {
        icon: FaSkype,
        link: 'skype:thewebiz?chat',
        color: 'skype',
    }
]

export default function Footer () {
    return (
        <footer className="w-full bg-green-700  text-white text-[13px]">
            <div className="sm:container lg:max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-4 py-12 px-4">
                <div className="sm:col-span-2 lg:col-span-1 flex flex-col space-y-5 pr-4">
                <Link rel="stylesheet" href="https://us.cloudlogin.co/login/" className="flex w-fit h-fit space-x-2 bg-blue-500 text-white text-sm leading-5 font-semibold hover:bg-blue-600 active:bg-blue-700 px-5 py-2 rounded-full transition duration-200 ease-in-out items-center"><FaWindows className='inline text-xl'/> <span>Windows <br/> Hosting</span></Link>
                <p>Dynamically re-engineer high standards in functiona with alternative paradigms. Conveniently monetize resource maximizing initiatives.</p>
                <div className="flex gap-3">
                    {
                        socials.map((item, index) => (
                            <Link to={item.link} key={index} className={`${item.color} p-1 rounded-md text-slate-200 hover:brightness-90`}>
                                <item.icon className={`text-3xl`} />
                            </Link>
                        ))
                    }
                </div>
                </div>
                <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        footerLinkColumns.map((column, index) => (
                                <div key={index}>
                                    <h4 className="font-bold uppercase pt-6 pb-2 text-sm">{column.title}</h4>
                                    <ul>
                                        {
                                            column.items[0].map((item, i) => (
                                                <li key={i} className="py-2 leading-5">
                                                    <Link to={column.items[1][i]} className="hover:underline active:text-slate-200 underline-offset-4">{item}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                            )
                        )
                    }
                    <div>
                        <h4 className="font-bold uppercase pt-6 pb-2 text-sm">{footerContactColumn.title}</h4>
                        <ul>
                            {
                                footerContactColumn.items.map((item, i) => (
                                    <li key={i} className="py-2 hover:text-slate-200">
                                        <p>{item}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 bg-white text-black text-center text-sm">
                <p>Copyright © 2024 Cloud Host Shop, All rights reserved</p>
            </div>
        </footer>
    )
}