import React from 'react'
import banner_image from '../images/Banner.png'

function MainBanner() {
  return (
    <div>
    <section className='banner'>

     <div className='banner-content'>
         <h1>One More Friend</h1><h2>Thousands More Fun!</h2>
         <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.
         We have 200+ different pets that can meet your needs!</p>
     </div>

      <div className='banner-buttons'>
         <button className='btn-secondary'>View Intro  </button>
         <button className='btn-primary'>Explore Now</button>
     </div> 
 

     <div className='banner-image'>
         <img src= {banner_image} alt='banner image'/>
     </div>

 </section>

 </div>
  )
}

export default MainBanner
