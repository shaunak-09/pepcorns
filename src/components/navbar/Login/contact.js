import React,{useRef,useState}from 'react'
import './contact.scss'
// import AnimatedLetters from './animated letters';
import { TypeAnimation } from 'react-type-animation';


// export const ContactUs = () => {
//   const form = useRef();
  

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

function Contact() {
    const form = useRef();
    const str1=['P','e','p',' ','U','p',' ','Y','o','u','r','P','']
    const [Form, setForm] = useState("Login")
    const text = document.querySelector(".sec-text");

  
    return(
        <div className='contact'>
        <div className='contact-txt'>
        <TypeAnimation
    
    sequence={[
    'Pep Up Your Portfolio',
    1000,
    'Pep Up Your Life',
    1000
    ]}
    speed={20} // Custom Speed from 1-99 - Default Speed: 40
    style={{ fontSize: '2.5rem' }}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />

        </div>
        

    
       
            {
                Form=="Login"?(
                    <>
                    <div className='contact-form'>
                    <h1>LOGIN</h1>
                    <form className='form'>
                        <div className='inputfield'>
                            <input type="text" id="email" placeholder='Email'></input>
                        </div>
                        <div className='inputfield'>
                            <input type="text" id="email" placeholder='Password'></input>
                        </div>
                        <button  className='form-sub'>LOGIN</button>
                    </form>
                    <div className='details'> Don't have an Account? <span onClick={()=>{setForm("SignUp")}}>Sign Up</span></div>
                    <div className='log-foot'>Privacy Policy | Terms & Conditions | version 1.1 |</div>
                    </div>
                    </>

                ):(
                    <>
                    <div className='contact-form'>
                    <h1>SIGN UP</h1>
                    <form className='form'>
                    <div className='inputfield'>
                            <input type="text" id="name" placeholder='UserName'></input>
                        </div>
                        <div className='inputfield'>
                            <input type="text" id="email" placeholder='Email'></input>
                        </div>
                        <div className='inputfield'>
                            <input type="text" id="password" placeholder='Password'></input>
                        </div>
                        <button  className='form-sub'>SIGN UP</button>
                    </form>
                    <div className='details'> Already have an Account? <span onClick={()=>{setForm("Login")}}>Log in</span></div>
                    <div className='log-foot'>Privacy Policy | Terms & Conditions | version 1.1 |</div>
                    </div>
                    </>

                )
            }
            
            

        </div>
    )
      
  
}

export default Contact