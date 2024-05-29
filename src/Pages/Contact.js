import React from 'react';
import { contactDetails } from '../Details';

function Contact() {
  const { email, phone } = contactDetails;
  return (
    // <main className="container mx-auto max-width section">
    //   <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
    //     For any questions please drop a mail
    //   </h1>
    //   <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
    //     <a href={`mailto:${email}`}>{email}</a>
    //   </h3>
    //   <span className="text-center text-content text-xl font-light block">or</span>
    //   <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
    //     <a href={`tel:${phone}`}>{phone}</a>
    //   </h3>
    // </main>

    <div id='contact'>
      <div class='p-10px-10p'>
        <div class='flex'>
          <div class='basis-7/20'>
            <h1 class='text-[3.75rem] font-semibold text-black'>Contact Me</h1>
            <p>
              <i class='fa-solid fa-envelope'></i>disikwe@gmail.com
            </p>
            <p>
              <i class='fa-solid fa-phone'></i>6056593295
            </p>
            <div class='mt-[2rem]'>
              <a
                className='no-underline text-[2rem] mr-[1rem] text-[#ababab] inline-block hover:bg-[#ff004f] transform -translate-y-[5px]'
                href='https://www.linkedin.com/in/david-isikwe-a47439231'
              >
                <i class='fa-brands fa-linkedin'></i>
              </a>
              <a href='https://github.com/davidisikwe'>
                <i class='fa-brands fa-github'></i>
              </a>
            </div>
            <a
              href='David_Isikwe Resume.pdf'
              download
              class='block mx-[50px] my-auto w-fit border border-solid border-[#ff004f] px-[14px] py-[50px] rounded-md no-underline text-[#fff]'
            >
              Download CV
            </a>
          </div>

          <div class='contact-right'>
            <form name='submit-to-google-sheet'>
              <input type='text' name='Name' placeholder='Your Name' required />
              <input
                type='email'
                name='Email'
                placeholder='Your Email'
                required
              />
              <textarea
                name='Message'
                rows='6'
                placeholder='Your Message'
              ></textarea>
              <button type='submit' class='btn btn2'>
                Submit
              </button>
            </form>
            <span id='msg'></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
