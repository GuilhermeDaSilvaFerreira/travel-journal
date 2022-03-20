import locationMark from '../images/location-mark.png'
import '../styles/travel-card.css'

export default function TravelCard(props) {
    console.log(props)
    return(
        <main className='travel-card-container'>
            <img className='landscape-image' src={props.imageUrl} alt={`${props.title} landscape`} />
            <div className='travel-info'>
                <span className='location' >
                    <img className='location-mark-icon' src={locationMark} alt='location mark' />
                    <h3 className='country-name'>{props.location}</h3>
                    <a className='google-maps-link' href={props.googleMapsUrl} target='_blank' rel='noopener noreferrer' >View on Google Maps</a>
                </span>
                <h2 className='location-name'>{props.title}</h2>
                <h4 className='travel-date'>{props.startDate} - {props.endDate}</h4>
                <p className='location-description'>{props.description}</p>
            </div>
        </main>
    )
}