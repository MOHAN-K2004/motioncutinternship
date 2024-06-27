import React from 'react'
import './Registrationform.css'
const Registrationform = () => {
  return (
    
    
    <>
  <div className="modernForm">
    <div className="imageSection">
      <div className="image">
        <div className="overlay" />
        <img
          src="https://i.ibb.co/wRWNy8q/pexels-yuri-manei-2272854.jpg"
          alt="pexels-yuri-manei-2272854"
        />
      </div>
      <div className="textInside">
        <h1>Welcome to Registration form </h1>
        <p className="tagLine">Enjoy Unlimited</p>
      </div>
    
    </div>
    <div className="contactForm">
      <h1>Registaration Form</h1>
      <form>
        <div className="name">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="ex: Lindsey Wilson"
            required=""
          />
          <div className="iconName">
            <i className="fa-solid fa-user" />
          </div>
        </div>
        <div className="name">
          <label htmlFor="email">Your Email:</label>
          <input type="email" name="email" id="email" required="" />
          <div className="iconName">
            <i className="fa-solid fa-envelope" />
          </div>
        </div>
        <div className="name">
          <label htmlFor="Password">Password:</label>
          <input type="password" name="password" id="password" required="" />
          <div className="iconName">
            <i className="fa-solid fa-lock" />
          </div>
        </div>
        <div className="name">
          <label htmlFor="Password">Confirm Password:</label>
          <input type="password" name="password" id="password" required="" />
          <div className="iconName">
            <i className="fa-solid fa-lock" />
          </div>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="checkbox" name="checkbox" required="" />
          <label htmlFor="checkbox">
            By signing up, you agree to the
            <p>
              <a href="#">Play Term of Service</a>
            </p>
          </label>
          <a href="#"></a>
        </div>
        <a href="#">
          <input type="submit" defaultValue="Register" />
        </a>
      </form>
    </div>
    <a href="#"></a>
  </div>
  <a href="#"></a>
</>

  )
}

export default Registrationform