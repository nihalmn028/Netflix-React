import React from 'react'
import '../home/style.css'
import { Link } from 'react-router-dom'
function Home()
      {

      return(
   <div className="main">
  <div
    className="title_section"
    style={{ backgroundImage: "url(images/netflixbg.jpg)" }}
  >
    <div className="title_section_dark">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingLeft: 200,
          paddingRight: 200,
          paddingTop: 40,
          alignItems: "center"
        }}
      >
        <img
          src="images/netflix logo.png"
          alt=""
          style={{ width: 200, opacity: 1 }}
        />
        <div>
          <select
            style={{
              background: "none",
              color: "white",
              width: 150,
              height: "fit-content",
              padding: 5,
              borderRadius: 5
            }}
          >
            <option value="">English</option>
            <option value="">Hindi</option>
            <option value="">Malayalam</option>
          </select>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              marginLeft: 20,
              padding: 5,
              borderRadius: 5,
              height: "fit-content"
            }}
          >
            Sign In
          </button>
        </div>
      </div>
      <div style={{ color: "white", textAlign: "center", marginTop: 200 }}>
        <h1 style={{ fontSize: 50, fontWeight: "bold" }}>
          Enjoy big movies, hit series and more from ₹ 149.
        </h1>
        <p style={{ fontSize: 30 }}>Join today. Cancel anytime.</p>
        <p style={{ fontSize: 20 }}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input
          type="text"
          style={{
            width: 400,
            marginTop: 20,
            padding: 5,
            background: "rgb(0, 0, 0, .6)",
            height: 45,
            color: "white"
          }}
          placeholder="Email Address"
        />
       <Link to={'/main'} style={{textDecoration:"none"}}><button
          style={{
            backgroundColor: "red",
            color: "white",
            padding: 10,
            fontWeight: "bold",
            marginLeft:"20px"
          }}
       >
          Get Started &gt;
        </button></Link>
      </div>
    </div>
  </div>
</div>

  
  )
}
export default Home
