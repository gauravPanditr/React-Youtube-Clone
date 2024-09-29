
import Navbar from '../compontents/NavBar'
import SlideBar from '../compontents/SlideBar'

const Home = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{height:"7.5vh"}}>
      <Navbar/>
      </div>
      <div className='flex'  style={{height:"92.5vh"}}>
        <SlideBar/>
      </div>
    </div>
  )
}

export default Home
