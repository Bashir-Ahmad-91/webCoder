import banner_img from '../assets/images/banner-img.png'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"
function Banner() {
  return (
    <div className="  bg-custom-image bg-cover bg-center">
        <div className='pt-[170px] pb-[75px] container max-w-screen-xl mx-auto grid grid-cols-2 justify-center items-center'>
          <div>
            <span className='text-base font- text-[#cbab49]'>Hello I am</span>
          <h1 className='text-6xl font-headingFont font-medium'>bashir ahmad</h1>
          <strong className='text-base font-bodyFont mb-7 block'>Front end developer</strong>
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. dolor sit amet, consectetur adipisicing elit. Laborum corrupti consequatur dolor sit amet, consectetur adipisicing elit. Laborum corrupti consequatur itaque soluta magni, dolor, in error facilis sit! Doloribus!</p>


          <ul className='flex mt-20'>
            <li className='w-10 h-10 rounded-md mr-4 text-[#C6A953] border border-[#C6A953] text-2xl flex  justify-center items-center transition-all ease-in duration-[0.6s]  hover:bg-[#C6A953] hover:transition-all hover:text-white'><a className='' href="#"></a><FaFacebookF /></li>
            <li className='w-10 h-10 rounded-md mr-4 text-[#C6A953] border border-[#C6A953] text-2xl flex  justify-center items-center transition-all ease-in duration-[0.6s]  hover:bg-[#C6A953] hover:transition-all hover:text-white'><a className='' href="#"></a><FaTwitter /></li>
            <li className='w-10 h-10 rounded-md mr-4 text-[#C6A953] border border-[#C6A953] text-2xl flex  justify-center items-center transition-all ease-in duration-[0.6s]  hover:bg-[#C6A953] hover:transition-all hover:text-white'><a className='' href="#"></a><FaLinkedinIn /></li>
            <li className='w-10 h-10 rounded-md mr-4 text-[#C6A953] border border-[#C6A953] text-2xl flex  justify-center items-center transition-all ease-in duration-[0.6s]  hover:bg-[#C6A953] hover:transition-all hover:text-white'><a className='' href="#"></a><FaGithub /></li>
          </ul>
          </div>


          <div className='flex justify-center'>
            <img src={banner_img} alt="Image" />
          </div>
          
          
        </div>
    </div>
  )
}

export default Banner