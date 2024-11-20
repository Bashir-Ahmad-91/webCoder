/* eslint-disable react/prop-types */

// import { LuMonitor } from "react-icons/lu";
function ServiceItem({ title, icon }) {
  return (
    <div className="py-8 px-6 border border-[#C6A953] rounded-md inline-block relative transition-all ease-in duration-[0.3s] hover:bg-[#C6A953]">
      <div className="border border-[#C6A953] rounded-md bg-white  w-11 h-11 flex justify-center items-center absolute left-7 top-[-20px]">
        {/* <LuMonitor className="text-[20px] text-[#C6A953]" /> */}
        <div className="text-[20px] text-[#C6A953]">
          {icon}

        </div>
      </div>
      <h3 className="text-2xl font-headingFont font-semibold">{title}</h3>
      <p className="text-base font-bodyFont mt-5 max-w-64">Lorem ipsum dolor sit amet, consec tetur adipisicing elit. Accusan tium.</p>
    </div>
  )
}

export default ServiceItem