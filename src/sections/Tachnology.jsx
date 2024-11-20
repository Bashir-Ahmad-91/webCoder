
import image1 from '../assets/images/image-1.png'
import image2 from '../assets/images/image-2.png'
import image3 from '../assets/images/image-3.png'
import image4 from '../assets/images/image-4.png'
import image5 from '../assets/images/image-5.png'
import image6 from '../assets/images/image-6.png'
import image7 from '../assets/images/image-7.png'
import image8 from '../assets/images/image-8.png'


function Tachnology() {
    return (
        <div className=" mt-20 bg-[#F6F6F6] pt-8">
            <div className="container max-w-screen-xl mx-auto ">
                <div>
                    <span className="section-title">Technologies</span>
                    <h2 className="text-4xl font-headingFont font-semibold max-w-[740px] leading-[50px]">I am always open to discussing product design work or partnerships.</h2>
                </div>
                <div className="grid grid-cols-12 mt-8 gap-5">
                    <div className="col-span-3 bg-white flex justify-center items-center py-10 transition-all ease-in duration-[0.6s]  hover:bg-[#e7bbbb9d] hover:transition-all">
                        <img src={image1} alt="image" />
                    </div>
                    <div className="col-span-3 bg-white flex justify-center items-center py-10 transition-all ease-in duration-[0.6s]  hover:bg-[#167dfc3a] hover:transition-all">
                        <img src={image2} alt="image" />
                    </div>
                    <div className="col-span-3 bg-white flex justify-center items-center py-10 transition-all ease-in duration-[0.6s]  hover:bg-[#cf649a3a] hover:transition-all">
                        <img src={image3} alt="image" />
                    </div>
                    <div className="col-span-3 bg-white flex justify-center items-center py-10 transition-all ease-in duration-[0.6s]  hover:bg-[#f7de1e2e] hover:transition-all">
                        <img src={image4} alt="image" />
                    </div>
                    <div className="col-span-3 bg-white flex justify-center items-center py-10 transition-all ease-in duration-[0.6s]  hover:bg-[#62dafb5b] hover:transition-all">
                        <img src={image5} alt="image" />
                    </div>
                    <div className="col-span-3 bg-white flex justify-center items-center py-10 transition-all ease-in duration-[0.6s]  hover:bg-[#64b54744] hover:transition-all">
                        <img src={image6} alt="image" />
                    </div>
                    <div className="col-span-3 bg-white flex justify-center items-center py-10 transition-all ease-in duration-[0.6s]  hover:bg-[#595bd459] hover:transition-all">
                        <img src={image7} alt="image" />
                    </div>
                    <div className="col-span-3 bg-white flex justify-center items-center py-10 transition-all ease-in duration-[0.6s]  hover:bg-[#1265a93d] hover:transition-all">
                        <img src={image8} alt="image" />
                    </div>

                </div>
            </div>
            <div className='bg-[#ededed] mt-8'>
                <div className='flex justify-between items-center py-4 container max-w-screen-xl mx-auto'>
                    <p>Copyright 2024 @ Bashir Ahmad | All Right Resurved</p>
                    <p>About | Privacy | Terms & Condition</p>
                </div>
            </div>
        </div>
    )
}

export default Tachnology