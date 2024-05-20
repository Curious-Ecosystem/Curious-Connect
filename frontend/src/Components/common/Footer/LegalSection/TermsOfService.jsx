import React from 'react';
import { Link } from 'react-router-dom';


const TermsOfService = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div>
      <div className='bg-gradient min-h-screen'>
        <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>

          <div className='  h-16 gap-4 flex flex-row  items-center font-extrabold  mb-4'>
            <h1 className='text-5xl font-light text-gray-100 '>Terms of Services</h1>
          </div>
          <div className='h-fit p-5  flex flex-col items-center pb-0'>
            <img
              src="https://cdn-icons-png.flaticon.com/512/748/748504.png"
              className='h-56 w-48  '
              alt="terms of service image" />
            <p className='text-white my-4'>
              <h1 className='text-3xl text-bold text-sky-300 '> Welcome to Curious Connect's Terms of Service.</h1>
              <p className='tracking-wide'>
                These terms govern your use of our website and services. By accessing or using our website, you agree to comply with these terms and conditions.
                We reserve the right to make changes to these terms at any time, and we encourage you to review them regularly. Your continued use of our website following any updates signifies your acceptance of the revised terms.
              </p>
              <p className='font-light pt-2 text-slate-400 text-xl '> We know it’s tempting to skip these Terms of Service, but it’s important to understand them.
              </p>
            </p>
          </div>
          <div className='text-white p-3 h-fit '>
            <h3 className='text-2xl '>What's covered in these terms?</h3>
            <table className="table-auto mx-3  w-full">
              <tbody>
                <tr>
                  <td className="py-2">
                    <a href="#userConduct" className="text-blue-500 hover:text-2xl hover:underline">1.User Conduct</a>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <a href="#property" className="hover:text-2xl text-blue-500 hover:underline">2.Intellectual Property</a>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <a href="#liability" className="hover:text-2xl text-blue-500 hover:underline">3.Limitation of Liability</a>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <a href="#law" className="hover:text-2xl text-blue-500 hover:underline">4.Governing Law</a>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <a href="#changes" className="hover:text-2xl text-blue-500 hover:underline"> 5.Changes to Terms</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 className='text-2xl font-bold pt-8 text-sky-300 mb-2' id='userConduct'>
              1. User Conduct
            </h2>
            <p className='text-lg text-gray-100 mb-6'>
              You agree to use our website and services only for lawful purposes
              and in a manner that does not infringe the rights of, or restrict or
              inhibit the use and enjoyment of, others. Prohibited behavior
              includes harassing or causing distress or inconvenience to any other
              user, transmitting obscene or offensive content, or disrupting the
              normal flow of dialogue within our website.
            </p>
            <h2 id="property" className='text-2xl font-bold text-sky-300 mb-2'>
              2. Intellectual Property
            </h2>
            <p className='text-lg text-gray-100 mb-6'>
              All content included on this site, such as text, graphics, logos,
              button icons, images, audio clips, digital downloads, data
              compilations, and software, is the property of Curious Connect or
              its content suppliers and protected by international copyright laws.
            </p>
            <h2 id="liability" className=' text-2xl font-bold text-sky-300 mb-2'>
              3. Limitation of Liability
            </h2>
            <p className='text-lg text-gray-100 mb-6'>
              Curious Connect shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not
              limited to lost profits, business interruption, or loss of data,
              arising out of or in any way connected with the use of our website
              or services.
            </p>
            <h2 id="law" className='text-2xl font-bold text-sky-300 mb-2'>
              4. Governing Law
            </h2>
            <p className='text-lg text-gray-100 mb-6'>
              These terms shall be governed by and construed in accordance with
              the laws of [Your Jurisdiction], and you submit to the exclusive
              jurisdiction of the courts in that jurisdiction.
            </p>
            <h2 id="changes" className='text-2xl font-bold text-sky-300 mb-2'>
              5. Changes to Terms
            </h2>
            <p className='text-lg text-gray-100 mb-6'>
              Curious Connect reserves the right to update or change these terms
              at any time. Any changes will be effective immediately upon posting
              on our website. Your continued use of our website following the
              posting of any changes constitutes acceptance of those changes.
            </p>
          </div>
          <div className='mt-4'>
            <Link
              to='/contactUs'
              className='text-white text-2xl p-2 bg-[#077BE7] rounded-xl cursor-pointer hover:bg-transparent hover:border-[1px] hover:border-[#077BE7]'
              onClick={scrollToTop}
            >
              Contact Us
            </Link>
            <p className='text-lg text-gray-100 mb-6 mt-3'>
              If you have any questions or concerns about our Terms of Service,
              please contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
