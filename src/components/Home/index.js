import './index.scss'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-p1.png'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Logo from '../logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const strName = 'rashant Joshi'
  const nameArray = strName.split('')
  const strJob = 'web developer'
  const jobArray = strJob.split('')

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={28}
            />
          </h1>
          <h2>Frontend Developer / JavaScript Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
    </>
  )
}

export default Home
