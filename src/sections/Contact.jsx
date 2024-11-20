import { FaRegAddressCard } from "react-icons/fa"
import Button from "../componant/Button"
import { MdOutlineMail } from "react-icons/md"
import { RiPhoneFill } from "react-icons/ri"

function Contact() {
  return (
    <div className="container max-w-screen-xl mx-auto mt-20 ">
    <div>
        <span className="section-title">Contact me</span>
        <h2 className="text-4xl font-headingFont font-semibold max-w-[740px] leading-[50px]">I am always open to discussing product design work or partnerships.</h2>
    </div>
    <div className="grid grid-cols-12 mt-12 gap-10 items-center ">
        <div className="col-span-7 bg-[#F6F6F6] p-5">
            <h3 className="text-xl uppercase font-headingFont font-semibold">Send me a note</h3>
            <div className=" flex justify-between mt-5">
            <input className="w-full mr-2 p-4 outline-[#C6A953] rounded-md shadow-sm" placeholder="Your Name" type="text" />
            <input className="w-full ml-2 p-4 outline-[#C6A953] rounded-md shadow-sm" placeholder="Your Email" type="text" />
            </div>
            <input className="my-4 w-full p-4 outline-[#C6A953] rounded-md shadow-sm" placeholder="Your Email" type="text" />
            <textarea className=" w-full h-[105px] p-4 outline-[#C6A953] rounded-md shadow-sm" placeholder="Your Message ..." type="text-area" />

            <Button className={'my-4 py-4'}>Send Message</Button>

        </div>
        <div className="col-span-5">
            <h3 className="text-xl font-headingFont font-semibold mb-2">My ADDRESS</h3>
            <p className="text-lg text-[#605F62] font-bodyFont font-normal mb-8">There are many variations of passages of Lorem Ipsum available but the majority have suffered</p>

            <ul>
                <li className="flex items-center my-5">
                    <div className="w-12 h-12 bg-[#C6A953] rounded-md flex justify-center items-center">
                        <FaRegAddressCard className="text-2xl text-white" />
                    </div>
                
                    <div className="ml-3">
                        <p className="text-xl font-headingFont font-semibold">Address</p>
                        <span className="text-lg text-[#605F62] font-bodyFont font-normal">Gajipur, Dhaka, Bangladesh</span>
                    </div>
                </li>
                <li className="flex items-center my-5">
                    <div className="w-12 h-12 bg-[#C6A953] rounded-md flex justify-center items-center">
                        <MdOutlineMail className="text-2xl text-white" />
                    </div>
                
                    <div className="ml-3">
                        <p className="text-xl font-headingFont font-semibold">Email</p>
                        <span className="text-lg text-[#605F62] font-bodyFont font-normal">bashirahmad918109@gmail.com</span>
                    </div>
                </li>
                <li className="flex items-center my-5">
                    <div className="w-12 h-12 bg-[#C6A953] rounded-md flex justify-center items-center">
                        <RiPhoneFill className="text-2xl text-white" />
                    </div>
                
                    <div className="ml-3">
                        <p className="text-xl font-headingFont font-semibold">Phone</p>
                        <span className="text-lg text-[#605F62] font-bodyFont font-normal">+880 1891810924</span>
                    </div>
                </li>
            </ul>

        </div>

    </div>
    

    
</div>
  )
}

export default Contact