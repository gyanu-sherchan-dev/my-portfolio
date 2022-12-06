import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import { AnimatedLetters } from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['h', 'e', 'r', 'c', 'h', 'a', 'n']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <span className={`${letterClass} _15`}> </span>
          <span className={`${letterClass} _16`}>Gyanu</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            index={22}
          />
        </h1>
        <h2 className="h2">Frontend Developer / JavaScript/ React </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
