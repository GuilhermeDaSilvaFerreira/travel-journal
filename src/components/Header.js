import palnetIcon from '../images/planet-icon.png'
import '../styles/header.css'

export default function Header() {
    return (
        <header>
            <img src={palnetIcon} alt='planet earth icon' />
            <h1>my travel journal.</h1>
        </header>
    )
}