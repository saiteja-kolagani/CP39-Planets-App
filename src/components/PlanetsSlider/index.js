// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="bg-container" data-testid="planets">
      <h1 className="main-heading">PLANETS</h1>
      <div className="slideshow-container">
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem details={each} key={each.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
