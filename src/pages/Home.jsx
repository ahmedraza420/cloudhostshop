import BuyDomain from "../components/pages/home/BuyDomain";
import FAQs from "../components/pages/home/FAQs";
import HostingFeatures from "../components/pages/home/HostingFeatures";
import HostingLocations from "../components/pages/home/HostingLocations";
import OperatingSystems from "../components/pages/home/OperatingSystems";
import Plans from "../components/pages/home/Plans";
import Services from "../components/pages/home/Services";
import Slider from "../components/pages/home/Slider";

export default function Home() {
    return (
        <>
            <Slider />
            <Plans />
            <OperatingSystems />
            <HostingFeatures />
            <Services />
            <FAQs />
            <BuyDomain />

            <section className="w-full py-14">
                <div className="sm:container xl:max-w-4xl mx-auto flex flex-col items-center">
                    <h2 className="text-h2-2 capitalize text-center font-normal mt-0 mb-2">A risk–free hosting service</h2>
                    <p className="mb-12 text-base/8 text-center text-slate-600 w-4/5">To top it all, our hosting service is completely risk–free. We offer you a 99.9% server uptime guarantee, which means that your websites will be up and running no matter what happens with our web servers. And if you have any enquiries, our tech support team is at your service 24–7 and the guaranteed technical support ticket response time is less than sixty minutes. In case you are unhappy with our cloud web hosting service for whatever reason, you’ll get a full refund. We offer a 30–day money–back guarantee.</p>
                    <img src="/src/assets/promisesbadges.svg" className="w-8/12" alt="badges about promising 30 days money back guarantee, customer support, network uptime guarantee, and service guarantee" />
                </div>
            </section>  
            <HostingLocations />
        </>
    )
}