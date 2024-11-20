
import logo from '../assets/images/logo-img.png'
import Button from '../componant/Button'
function Header() {
  return (
    <div className='absolute top-5  w-full'>
        <div className="container max-w-screen-xl mx-auto  py-2 flex justify-between ">
            <a className='w-[150px] block' href="#"><img src={logo} alt="Logo" /></a>
            <div className='flex justify-center items-center'>
            <ul className='flex items-center font-bodyFont'>
                <li className='text-1xl font-semibold hover:underline transition mx-4 hover:text-[#C6A953]'><a href="#">Home</a></li>
                <li className='text-1xl font-semibold hover:underline transition mx-4 hover:text-[#C6A953]'><a href="#">About</a></li>
                <li className='text-1xl font-semibold hover:underline transition mx-4 hover:text-[#C6A953]'><a href="#">Services</a></li>
                <li className='text-1xl font-semibold hover:underline transition mx-4 hover:text-[#C6A953]'><a href="#">Portfolio</a></li>
                <li className='text-1xl font-semibold hover:underline transition mx-4 hover:text-[#C6A953]'><a href="#">Contact</a></li>                                 
            </ul>
            <Button className={'ml-8'}>Dounload CV</Button>

            </div>
        </div>
    </div>
  )
}

export default Header