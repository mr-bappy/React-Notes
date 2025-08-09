import './App.css'

function App() {

  return (
    <>
      <NetflixSeries/>
      <NetflixSeries/>
      <NetflixSeries/>
    </>
  )
}

export default App

const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img src="qot.webp" alt="" />
      </div>
      <div>
        <h1>Name: Queen of Tears</h1>
        <h3>Rating: 8.2</h3>
      </div>
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias obcaecati, dolorem enim maiores velit incidunt nemo similique non quae numquam cupiditate labore fugit quia explicabo amet tenetur totam in optio?</p>
      </div>
    </div>
  )
}