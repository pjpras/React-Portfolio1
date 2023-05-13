import { useEffect, useState } from 'react'
import {
  faNodeJs,
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }
  }, [])
  const strAbout = 'About me'
  const aboutArray = strAbout.split('')

  return (
    <>
      <div id="loadOverlay"></div>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            Hi, I'm Prashant Joshi, a React developer with a passion for
            building dynamic, user-friendly web applications. As a self-taught
            programmer, I have honed my skills through personal projects and
            online courses, and I am excited to take on new challenges and
            continue learning.
          </p>
          <p>
            I am proficient in React, HTML, CSS, and JavaScript, and I am
            committed to writing clean, efficient code that is easy to maintain
            and scale. In my previous projects, I have worked on a range of
            applications, from e-commerce sites to social media platforms, and I
            enjoy tackling complex problems and finding innovative solutions.
          </p>
          <p>
            I am a strong communicator and a collaborative team player, always
            willing to share my knowledge and learn from others. I am dedicated
            to staying up-to-date on the latest developments in web development
            and applying new knowledge to my work. I am excited to bring my
            skills and enthusiasm to your project and help you achieve your
            goals.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
        </div>
        <Loader type="pacman" />
      </div>
    </>
  )
}

export default About
