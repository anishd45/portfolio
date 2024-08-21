import React from 'react'
import './Mywork.css'
import mywork_data from '../assets/mywork_data'
import arrow_icon from '../assets/arrow_icon.png'

export default function Mywork() {
  return (
    <div id='work' className='mywork'> 
        <div className="mywork-title">
            <h1>My Lastest Work</h1>
        </div>

        <div className="mywork-container">
          {mywork_data.map((Work, index)=>{
            return <img key={index} src={Work.w_img}/>
          })}
        </div>
        
        <div className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}
