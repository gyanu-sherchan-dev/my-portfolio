import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm Gyanu
          <img src={LogoTitle} alt="developer" />
          herchan
          <br />
          Web Developer
        </h1>
        <h2>Frontend Developer / JavaScript/ React </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home




