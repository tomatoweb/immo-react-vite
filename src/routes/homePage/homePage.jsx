import SearchBar from '../../components/searchBar/searchBar'
import './homePage.scss'

export default function HomePage() {
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                <p>
                When you are planning to sell your property while looking to buy a new one, it is essential to follow a series of key steps to ensure the success of these simultaneous transactions. In this article, we’ll take you through the various steps to consider in order to successfully complete these complex transactions
                </p>
                <SearchBar/>
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                        <h1>2000+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="./bg.png" alt="" />
        </div>
    </div>
  )
}
