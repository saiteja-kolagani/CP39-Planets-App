// Write your code here
import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details

  return (
    <div className="slide-container">
      <img src={imageUrl} alt={`planet ${name}`} className="slide-image" />
      <div className="slide-text-container">
        <h1 className="slide-heading">{name}</h1>
        <p className="slide-description">{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem
