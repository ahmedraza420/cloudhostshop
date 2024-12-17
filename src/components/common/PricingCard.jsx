import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";

export default function PricingCard(data) {
    const {iconUrl, price, title, features, specsLink, purchaseLink} = data.pricingPlan
    // console.log(data)
    // console.log(iconUrl, price, title, features, specsLink, purchaseLink);
    return (
        <div className="relative rounded-lg border border-gray-200 shadow-sm py-6 px-10 text-gray-800">
                    <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 h-1 w-7/12 bg-green-500 rounded-full"></div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                        <div className="p-2">
                            <img src={iconUrl} />
                        </div>
                        </div>
                        <div className="text-3xl font-semibold text-gray-900">
                        $<span>{price}</span> <span className="text-lg font-normal text-gray-500">/mo</span>
                        </div>
                    </div>
                    
                    <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>

                    <ul className="mt-4 space-y-3 text-sm">
                        {
                            features.map((feature, index) => (
                                <li className="flex items-center gap-3 border-b pb-1" key={index}>
                                    <div className="text-green-600 text-base">{feature.icon}</div>
                                    <div className="mx-auto flex items-center justify-between w-full">
                                        <p className="text-sm font-medium capitalize">{feature.name}</p>
                                        <p className="text-sm text-slate-500 capitalize">{feature.value}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="mt-6 text-green-500 font-semibold hover:underline">
                        <Link to={specsLink} className="flex items-center    gap-3">
                            Full Specifications
                            <FaArrowRightLong className="text-xm"/>
                        </Link>
                    </div>
                    <div className="mt-4">
                        <Link to={purchaseLink} className="block w-full border border-green-600 text-green-600 hover:text-white text-center py-2 rounded-lg hover:bg-green-600 transition duration-200">
                            Purchase Now
                        </Link >
                    </div>
                </div>
    )
}