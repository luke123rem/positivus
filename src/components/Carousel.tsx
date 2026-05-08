import Amazon from '../assets/images/icons/amazon.svg'
import Dribble from '../assets/images/icons/dribble.svg'
import HubSpot from '../assets/images/icons/hubspot.svg'
import Notion from '../assets/images/icons/notion.svg'
import Netflix from '../assets/images/icons/netflix.svg'
import Zoom from '../assets/images/icons/zoom.svg'


function Carousel() {

const logos = [Amazon, Dribble, HubSpot, Notion, Netflix, Zoom];
const doubled = [...logos, ...logos];

    return (
        <>
            <div className="SliderCon">
                <div className="SliderTrack">
                    {doubled.map((logo, i) => (
        <img
          key={i}
          src={logo}
          className="CarouselLogo"
          alt="logo"
        />
      ))}
                </div>
            </div>
        </>
    )
}

export default Carousel;