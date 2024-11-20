import PortfolioItem from "../componant/PortfolioItem"

function Portfolio() {
    return (
        <div className="container max-w-screen-xl mx-auto mt-20 ">
            <div>
                <span className="section-title">MY PORTFOLIO</span>
                <h2 className="section-heading">My Recent Portfolio</h2>
            </div>
            <ul className="flex items-center my-7">
                <li><a className="text-xl font-medium  mx-3" href="#">All</a></li>
                <li><a className="text-xl font-medium  mx-3" href="#"> Web Design </a></li>
                <li><a className="text-xl font-medium  mx-3" href="#"> Web Development </a></li>
                <li><a className="text-xl font-medium  mx-3" href="#">React JS </a></li>
                <li><a className="text-xl font-medium  mx-3" href="#"> Node JS</a></li>
                <li><a className="text-xl font-medium  mx-3" href="#"> Graphic Design</a></li>
            </ul>
            <div className="grid grid-cols-12 gap-6 mb-7">
                 <PortfolioItem />
                 <PortfolioItem />
                 <PortfolioItem />
                 <PortfolioItem />
                 <PortfolioItem />
                 <PortfolioItem />
                 <PortfolioItem />
                 <PortfolioItem />
            </div>
           


        </div>
    )
}

export default Portfolio