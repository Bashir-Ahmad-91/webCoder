import image from "../assets/images/p-1.png"
function PortfolioItem() {
  return (
    <div className="col-span-3 bg-[#FCF2F2] p-3 rounded-md">
        <img className="w-full" src={image} alt="image" />
        <span className="text-base font-normal pt-6 block">Web Design</span>
        <h3 className="text-2xl font-bold mb-5">Personal Portfolio</h3>
    </div>
  )
}

export default PortfolioItem