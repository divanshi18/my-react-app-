import React from 'react'
import vg from "../assets/2.webp"
import './ServiceCards.css';
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const services = [
    {
      title: "Educational Courses and Workshops",
      description: "Interactive coding classes, robotics workshops, and STEM lessons tailored for children."
    },
    {
      title: "Online Learning Platform",
      description: "Engaging online lessons, virtual classrooms, and educational games to enhance learning."
    },
    {
      title: "Technology Products",
      description: "Educational software and tech kits that make learning fun and interactive."
    },
    {
      title: "Support and Resources",
      description: "Comprehensive tech guides, tutorials, and dedicated customer support."
    },
    {
      title: "Consultation Services",
      description: "Tech integration consulting for schools and parental guidance for home support."
    },
    {
      title: "Community and Collaboration",
      description: "Online forums, collaborative platforms, and hackathons for students."
    },
    {
      title: "Career Guidance",
      description: "Future tech career workshops and mentorship programs with industry experts."
    },
    {
      title: "Tech News and Updates",
      description: "Regular newsletters and blog posts on the latest tech trends and educational insights."
    },
    {
      title: "Custom Solutions",
      description: "Tailored tech solutions for educational institutions and corporate training programs."
    },
  ];
  
const Home = () => {
  return (
<>
    <div className='home' id="home">
        <main> 
        <h1>Techy Star</h1>
        <p>Solution to all your problems</p>
        </main>
       
        </div>
        <div className="home2" id="">
            <img src={vg} alt="graphics"></img>
            <div>
                <p>
            

We are your one and only solution to the tech problems you face every day. As a leading tech company, our aim is to enhance problem-solving abilities in children. Our innovative approach and dedicated team ensure that we stay at the forefront of technological advancements. We offer a wide range of services and products tailored to meet the needs of both individuals and businesses. From providing cutting-edge educational tools to delivering exceptional customer support, we strive to make technology accessible and enjoyable for everyone.<br></br>  <br></br>   
<button>Get Started </button></p></div>
  
        </div>
        <div className='home9' id ="resources"><div className="container">
            <h1>Our Resources</h1>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    <div className="home3" id="about">
          <div>
            <h1>Who Are We?</h1>
            <p>
            We are committed to fostering a learning environment that encourages creativity, critical thinking, and innovation. Our wide range of services and products are designed to make technology accessible and enjoyable for everyone. We offer cutting-edge educational tools, interactive coding classes, robotics workshops, and STEM lessons that make learning fun and engaging.

        <br></br>
        In addition to our educational programs, we provide tech kits, educational software, comprehensive tech guides, tutorials, and exceptional customer support to assist you at every step of your tech journey.<br></br> <br></br>
        We believe in the power of community and collaboration. Our forums and collaborative platforms allow students to engage with peers, participate in hackathons, and share their knowledge. We also offer consultation services for schools to integrate technology into their curriculum and provide guidance for parents to support tech education at home.
        <br></br> <br></br>
Join us on this exciting journey to shape the future of technology and unlock the potential within every individual. Together, we can transform lives and create a brighter, more innovative future.
            </p>
          </div>
        </div>
        
        <div className="home4" id="brands">
          <div className='div1'>
            <h1>Brands</h1>
            <article>
              <div style={{
                animationDelay:"0.3s",
              }}>
                <AiFillGoogleCircle/>
                <p>Google</p>

              </div>
              <div style={{
                animationDelay:"0.5s",
              }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>

              </div>
              <div style={{
                animationDelay:"0.7s",
              }}>
                <AiFillYoutube/>
                <p>Youtube</p>

              </div>
              <div style={{
                animationDelay:"0.8s",
              }}>
                <AiFillInstagram/>
                <p>Instagram</p>

              </div>
            </article>
          </div>
        </div>

        </>  )
}

export default Home