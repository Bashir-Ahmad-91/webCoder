import { LuMonitor } from "react-icons/lu";
import ServiceItem from "../componant/ServiceItem"
import { IoCode } from "react-icons/io5";
import { FaCamera, FaPaintBrush, FaRocket } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";


function Sarvis() {
  return (
    <div className="container max-w-screen-xl mx-auto mt-20 ">
        <div>
            <span className="section-title">MY OFFERS</span>
            <h2 className="section-heading">What I offer?</h2>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-x-4 gap-y-8">
        <ServiceItem icon={<LuMonitor />} title={'Web Design'} />
        <ServiceItem icon={ <IoCode />} title={'Web Developement'} />
        <ServiceItem icon={<FaPaintBrush />} title={'Graphic Design'} />
        <ServiceItem icon={<FaCamera />} title={'Photography'} />
        <ServiceItem icon={<MdPhoneAndroid />} title={'Mobile Apps'} />
        <ServiceItem icon={<FaRocket />} title={'Branding'} />

        </div>
    </div>
  )
}

export default Sarvis