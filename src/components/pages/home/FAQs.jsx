import { Collapse, ConfigProvider } from 'antd';
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
    {
        key: '1',
        label: 'A Point & Click Web Control Panel',
        children: 'With the Web Control Panel, we would like to show that site management doesn’t have to be hard. If truth be told, it might be rather simple and intuitive.',
    },
    {
        key: '2',
        label: 'Unlimited Resource',
        children: 'No matter how much disk drive storage space or monthly bandwidth your web sites need – we’ve got you covered. With unrestricted resources available to you, you’ll no longer need to be bothered about web traffic surges or huge files.',
    },
    {
        key: '3',
        label: 'Web Hosting Platform',
        children: 'We spent the better part of a year setting up our web hosting platform the way we wanted it. Now it’s reliable (we offer a 99.9% uptime guarantee) and incredibly safe (we use Security–Enhanced Linux on all servers of ours). It is completely scalable. And it is three times faster compared to other web hosting alternatives.',
    },
    {
        key: '4',
        label: 'Multiple Data Centers',
        children: 'Decide where to host your web site – in the United States of America, in Britain, in Eastern Europe or in Australia. Take advantage of ultrasonic web site load speeds thanks to the leading–edge datacenter facilities we have chosen – the Colohouse data center in the US, the UK Servers data center in the UK, the Ficolo data center in Finland, the S3 data center in Bulgaria, and the Amaze data center in Australia.',
    },
]
faqs.map(faq => (
    faq.children = <p>{faq.children}</p>
))
// console.log(faqs.map(faq=>faq.children));

export default function FAQs() {
    return (
        <section className="w-full py-14 px-6">
        <div className="sm:container xl:max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="text-h2-2 capitalize text-center font-normal mt-0">Frequently Asked Queries</h2>
            <p className="mb-12 text-base/8 text-center text-slate-700 w-4/5">Efficiently productivate reliable paradigms before ubiquitous models. Continually utilize frictionless expertise whereas tactical relationships. Still have questions? Contact us</p>
            <ConfigProvider
                theme={{
                token: {
                    colorPrimary: '#00b96b',
                    borderRadius: 2,
                    fontSize: 16,
                    marginBottom: 20,
                    colorBgContainer: '#f6ffed',},
                collapse: {
                    headerBgActive: '#d9f7be', // Background for the active header
                    colorTextHeadingActive: '#389e0d', 
                }}}>
                <Collapse expandIconPosition='end' expandIcon={({ isActive }) => isActive ? <FaMinus /> : <FaPlus />} accordion items={faqs} className='w-full' />
            </ConfigProvider>
        </div>
        </section>
    )
}