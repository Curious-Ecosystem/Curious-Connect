import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  async function handleSubmit() {
    console.log(email, password);
    const response = await fetch('LOGIN API', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    if (response.ok) {
      navigate('/createMeeting');
    } else {
      console.log('Failed to login');
    }
  }

  

  return <div>
    <div className="flex justify-center items-center px-12 py-8 max-md:px-2">
      <div className="flex lg:flex-nowrap flex-wrap flex-row gap-10 justify-between w-full max-w-[1209px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col ml-1 self-start font-extrabold text-white max-md:mt-10">
        <div className="flex gap-4 mb-16 lg:mt-10 text-xl font-bold tracking-wide text-center text-white">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczN_OhGK6i9fSwFhRHN26Oyy7wBqKwiicj9UEFEK5hYKnc9TZTwlQvvewSPpX2DJdvO1ZAnrPltIAGqqRqAT-8g6cIdZ97I69m-dplI7voq9GLhr_NLH1dLDHbaJQWqcdWn39u3ShkkudNoSCzOpeNuZ=w65-h68-s-no-gm?authuser=0"
            className="shrink-0 aspect-[0.95] w-[65px]"
          />
          <div className="ml-1 flex-auto text-left my-auto ">
            Curious Connect
          </div>
          </div>
          <div className="text-6xl tracking-wide max-[1023px]:text-[80px] max-[767px]:text-[60px] max-[450px]:text-[45px]">
            Login/Signup
            <br />
            Page Design
          </div>
          <div className="mt-7 text-xl tracking-wide">Lorem ipsum dolor sit</div>
          <div className="mt-7 font-normal w-fit lg:w-[500px] tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sint corrupti facilis nihil deleniti, expedita ipsum, maiores enim laudantium eligendi, quia nam unde reprehenderit velit. Rem at maxime natus recusandae!</div>
        </div>
        <div className="flex flex-col px-12 tracking-wider w-full lg:w-[500px] py-12 bg-[#1f22286f] border-[1px] border-[#868686] border-solid rounded-[20px] lg:rounded-[49px] max-md:px-5 max-md:max-w-[750px]">
          <div className="self-center text-5xl font-bold text-center text-white max-md:text-4xl">
            Login
          </div>
          <div className="self-start mt-14 ml-2 text-lg font-bold text-white max-md:mt-10 max-md:ml-2.5">
            EMAIL
          </div>
          <input type='text' name='email' placeholder='Enter Your Email' className="shrink-0 mt-4 p-5 h-14 rounded-3xl bg-white" onChange={handleEmailChange}></input>
          <div className="self-start mt-4 ml-2 text-lg font-bold text-white max-md:ml-2.5">
            PASSWORD
          </div>
          <input type='password' name='password' placeholder='Enter Your Password' className="shrink-0 mt-4 p-5 h-14 rounded-3xl bg-white" onChange={handlePasswordChange}></input>
          <a href='#' className="self-start underline ml-2 mt-2 text-[13px] text-[#F06B48]">
            Forgot Password?
          </a>
          <div className="justify-center cursor-pointer hover:bg-transparent border-[2px] hover:border-[2px] border-[#F06B48] hover:border-[#F06B48] self-center px-16 py-3 mt-2 text-2xl font-bold text-center text-white whitespace-nowrap bg-[#F06B48] rounded-full max-md:px-14 max-md:mt-8 max-md:mb-5" onClick={handleSubmit}>
            Login
          </div>
          <div className='flex gap-2 text-center text-white mt-5'>
            <div className='h-[1px] mt-2 w-[20%] items-center bg-white'></div>
            <div className='justify-center w-[60%]'>You Can Also Login With</div>
            <div className='h-[1px] mt-2 w-[20%] bg-white'></div>
          </div>
          <div className="flex flex-wrap gap-4 mt-5 justify-center max-md:mx-2.5 max-md:mt-10">
            <img src='https://cdn-icons-png.flaticon.com/512/2504/2504911.png' className="shrink lg:h-[70px] lg:w-[70px] h-[50px] w-[50px]" />
            <img src='https://cdn-icons-png.flaticon.com/512/2504/2504914.png' className="shrink lg:h-[70px] lg:w-[70px] h-[50px] w-[50px]" />
            <img src='https://cdn-icons-png.flaticon.com/512/2504/2504903.png' className="shrink lg:h-[70px] lg:w-[70px] h-[50px] w-[50px]" />
            <img src='https://cdn-icons-png.flaticon.com/512/2504/2504923.png' className="shrink lg:h-[70px] lg:w-[70px] h-[50px] w-[50px]" />
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default SignIn;