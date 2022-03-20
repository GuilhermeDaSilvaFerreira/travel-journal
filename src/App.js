import Header from './components/Header'
import TravelCard from './components/TravelCard'
import data from './models/data'
import './styles.css'

export default function App() {
  function getTravelCardComponents(){
    return data.map(singleData => <TravelCard key={singleData.id} {...singleData} />)
  }

  return (
    <div className="App">
      <Header />
      {getTravelCardComponents()}
    </div>
  );
}