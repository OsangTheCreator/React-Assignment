import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Reading Tree's Bio</h2>
            <p className='biography'>Welcome to Reading Tree, where we cultivate the love of reading and provide a digital haven for book lovers around the world. Our vision is to create a space where readers of all ages and interests can easily explore a vast and diverse library of ebooks. From timeless classics and bestsellers to hidden gems across genres like fiction, non-fiction, fantasy, memoirs, and self-development, Reading Tree offers something for every reader.

We are dedicated to making reading accessible and enjoyable by offering a seamless online experience. With personalized recommendations, curated book lists, and community-driven features, we aim to connect readers with stories that resonate with them. Our goal is to support lifelong learning and foster a culture of reading by providing tools for exploration, discovery, and discussion.</p>
            <p className='biography'>At Reading Tree, books aren’t just a hobby – they’re a way to grow, dream, and connect with the world. Our growing digital collection ensures that there is always something new to explore, while our commitment to innovation means we’re continually improving the experience to better serve our readers. Join us on a journey of literary discovery and let your reading tree flourish.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
