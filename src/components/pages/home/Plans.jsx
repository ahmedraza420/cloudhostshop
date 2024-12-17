import PricingCard from "../../common/PricingCard";
import { Link } from "react-router-dom";
import { FaRegHardDrive, FaGlobe, FaDatabase, FaCodeCompare} from "react-icons/fa6";
import { LuRouter } from "react-icons/lu";
import { IoMdBrowsers } from "react-icons/io";
import { FaMailBulk } from "react-icons/fa";
import { MdVpnKey } from "react-icons/md";

const pricingPlans = [
    {
        title: 'Basic',
        price: 5.75,
        iconUrl: '/src/assets/rocket2tone.svg',
        features: [
            {icon: <FaRegHardDrive />, name: 'disk space', value: 'unlimited'},
            {icon: <LuRouter />, name: 'monthly traffic', value: 'unlimited'},
            {icon: <IoMdBrowsers />, name: 'domains', value: '1'},
            {icon: <FaMailBulk />, name: 'sub domains', value: 'unlimited'},
            {icon: <FaGlobe />, name: 'email accoutns', value: 'unlimited'},
            {icon: <FaDatabase />, name: 'my SQL database', value: 'unlimited'},
            {icon: <MdVpnKey />, name: 'VPN traffic', value: '5 GB'},
        ],
        specsLink: 'https://cloudhostshop.com/cloud-full-specification/2',
        purchaseLink: 'https://cloudhostshop.com/order-form?type=cloud-hosting&id=47289',
    },
    {
        title: 'Business Plus',
        price: 12,
        iconUrl: '/src/assets/weirdCarThingy2tone.svg',
        features: [
            {icon: <FaRegHardDrive />, name: 'disk space', value: 'unlimited'},
            {icon: <LuRouter />, name: 'monthly traffic', value: 'unlimited'},
            {icon: <IoMdBrowsers />, name: 'domains', value: '5'},
            {icon: <FaMailBulk />, name: 'sub domains', value: 'unlimited'},
            {icon: <FaGlobe />, name: 'email accoutns', value: 'unlimited'},
            {icon: <FaDatabase />, name: 'my SQL database', value: 'unlimited'},
            {icon: <MdVpnKey />, name: 'VPN traffic', value: '5 GB'},
        ],
        specsLink: 'https://cloudhostshop.com/cloud-full-specification/4',
        purchaseLink: 'https://cloudhostshop.com/order-form?type=cloud-hosting&id=54050',
    },
    {
        title: 'Corporate',
        price: 16.67,
        iconUrl: '/src/assets/orbiter2tone.svg',
        features: [
            {icon: <FaRegHardDrive />, name: 'disk space', value: 'unlimited'},
            {icon: <LuRouter />, name: 'monthly traffic', value: 'unlimited'},
            {icon: <IoMdBrowsers />, name: 'domains', value: 'unlimited'},
            {icon: <FaMailBulk />, name: 'sub domains', value: 'unlimited'},
            {icon: <FaGlobe />, name: 'email accoutns', value: 'unlimited'},
            {icon: <FaDatabase />, name: 'my SQL database', value: 'unlimited'},
            {icon: <MdVpnKey />, name: 'VPN traffic', value: '25 GB'},
        ],
        specsLink: 'https://cloudhostshop.com/cloud-full-specification/3',
        purchaseLink: 'https://cloudhostshop.com/order-form?type=cloud-hosting&id=2',
    },
]

export default function Plans () {
    return (
        <section className="w-full py-14 px-6">
            <div className="sm:container xl:max-w-5xl mx-auto flex flex-col items-center">
                <h2 className="text-center text-h2">Choose Your Web Hosting Plan</h2>
                <p className="mb-14 text-xl/8 text-center text-slate-700 w-4/5">Professional hosting at an affordable price. Distinctively recaptiualize principle-centered core competencies through client-centered core competencies.</p>
                <div className="grid lg:grid-cols-3 gap-3 w-full sm:w-3/4 md:w-1/2 lg:w-full">
                    {
                        pricingPlans?.map((pricingPlan, index) => (
                            <PricingCard key={index} pricingPlan={pricingPlan} />
                        ))
                    }
                </div>
                <Link to='https://cloudhostshop.com/compare-pricing' className="flex gap-2 pt-14 items-center hover:text-green-600 hover:underline transition duration-200"><FaCodeCompare /> Compare hosting plans</Link>
            </div>  
        </section>
    )
}