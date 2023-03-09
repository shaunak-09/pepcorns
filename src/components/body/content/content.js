import React,{useState,useEffect} from 'react';

import './content.css'

function Content() {
    const btns=["Pitch","Details","Discussion","Updates"];
    const [btnName, setBtnName] = useState("Pitch")
    
    useEffect(() => {
        // console.log(btnName);
        if(localStorage.getItem("btn")==null || localStorage.getItem("btn")==undefined)
        {
          localStorage.setItem("btn",btnName);
        }
        setBtnName(localStorage.getItem("btn"));
        console.log(btnName);
    }, []);
    useEffect(() => {
      
        console.log(btnName);
        document.querySelector(`.${btnName}`).style.backgroundColor="black";
        document.querySelector(`.${btnName}`).style.color="white";
        btns.map((item)=>{
            if(item!=btnName)
            {document.querySelector(`.${item}`).style.backgroundColor="white";
            document.querySelector(`.${item}`).style.color="black";
        }
        })
    }, [btnName])
    function handleClick(item)
    {
        setBtnName(item);
        localStorage.setItem("btn",item);
       
        // console.log(btnName);
    }
    
    
    
  return (
    <div className='body'>
        <div className='body-btn'>
         {
            btns.map((item)=>{
              return(  <button className={item} onClick={()=>{handleClick(item)}}>{item}</button>
              );
            })
         }
        </div>
        <div className='body-content'>
            <div className='body-txt'> 
            {
              btnName=="Pitch" && (
                
                <div className='body-txt-box'>
                    <h1>Highlights</h1><br/>
                    <li>Only profitable D2C brand in meats in India with a high return on capital efficiency. </li>
                    <li>Backed by prolific angel investors like Amit Burman (Dabur chairman), SIDBI VC, Jitendra Gupta of Jupiter, Om Manchanda MD of Dr. Lal path lab, and many others.</li>
                </div>
              )
            } 
            {
                btnName=="Details" && (
                    <div className='body-txt-box'>
                        <h1>Team</h1><br/>
                        <h2>Deepanshu Manchanda</h2>
                        <h4>Co-founder</h4>
                    </div>
                  )

            } 
             {
                btnName=="Discussion" && (
                    <div className='body-txt-box'>
                        <h1>Discussion</h1><br/>
                        
                    </div>
                  )

            } 
             {
                btnName=="Updates" && (
                    <div className='body-txt-box'>
                        <h1>Updates</h1><br/>
                       
                    </div>
                  )

            } 
              
             
               
               
            
            </div>
            <div className='body-card'>
               <div className='card'>
                <h1>1000</h1> <hr/>
                <h3>Rewards</h3>
                 <li>Be a part of our journey.</li>
                 <h3>Terms and Conditions</h3>
                 <p>Community participants offer</p>
                 <button>Invest 1000</button>
                 <h3>CSOP <span>Limited</span> ( 20 of 20 <span>left </span>)</h3>





               </div>
            </div>

        </div>
    </div>
  )
}

export default Content;