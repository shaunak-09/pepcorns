import React from 'react'
import './heading.css'

function Heading() {
  return (
    <>
    <div className='heading'>
        <div className='head-content'>
        <div className='heading-content'>
        <img  src="https://api.pepcorns.com/clientassets/icon1677177731365.png"></img>
        <div className='heading-txt'>
        <h1>Zappfresh</h1>
        <h4>New Delhi,Delhi</h4><br/>
        </div>
        </div>
        <div className='heading-btn'>
        <button >Save</button>
        <button>Share</button>
        </div>
        </div>
        
        <br/>
        <hr/> 

        <div className='head-video'>
          <div className='vid-txt'>
           <h2>We are an online brand focusing on fresh meat and ready-to-cook/eat products.</h2>   
          </div>
          <div className='head-vid'>
           <div className='vid'>
           {/* <video src=""></video> */}
    
    <iframe class="w-100 ivid ng-isolate-scope" 
     video-url="currentVdo"
     player="bestPlayer" 
     frameborder="0" 
     allowfullscreen="1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      width="95%" 
      height="350" 
      src="https://www.youtube.com/embed/H1M1prVk-kI?start=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fapp.pepcorns.com&amp;widgetid=2">

      </iframe>
      <a  style={{textDecoration:"none",color:'grey'}} href="https://www.youtube.com/embed/H1M1prVk-kI?start=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fapp.pepcorns.com&amp;widgetid=2">Unable to view video? Click here</a>
     
           </div>
           <div className='vid-stat'>
             <div>
             <div className='stat-content'><h2>0</h2><h5>0 % of minimum goal raised</h5></div><hr/>
             <div className='stat-content'><h2>0</h2><h5>Total investors</h5></div><hr/>
             <div className='stat-content'><h2>21 Days</h2><h5>Left to invest</h5></div><hr/>
              </div>
             <button className='stat-btn'>Invest Now</button>
             <p>₹ 1000 Minimum Investment</p>
           </div>
          </div>
          
          </div> 
    </div>
    
    </>
  )
}

export default Heading;