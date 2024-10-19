import React from 'react'
import banner_1 from '../images/Banner-1.png'

function SubBanner_1() {
    return (
        <div className='subbanner-1'>

            <div className="subanner-fullcontent">
                
                <div className='subbanner-content'>
                    <h1>One More Friend</h1><h2>Thousands More Fun!</h2>
                    <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.
                        We have 200+ different pets that can meet your needs!</p>
                </div>

                <div className='subbanner-buttons'>
                    <button className='sub-btn-secondary'>View Intro  </button>
                    <button className='sub-btn-primary'>Explore Now</button>
                </div>

            </div>



            <img src={banner_1} alt='sub banner 1' />


        </div>
    )
}

export default SubBanner_1
