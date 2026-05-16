import React from 'react';
import './styles/footer.css';
function Footer() {
  return (
    <footer className='bg-gray-200 text-gray-600 p-4 md:p-6 lg:p-8 mt-10 mb-10'>
      <div className='max-w-5xl mx-auto flex flex-wrap justify-between'>
        <div className='w-full md:w-1/2 xl:w-1/3 p-6'>
          <h5 className='text-lg font-bold mb-2'>Contact Us</h5>
          <ul>
            <li className='mb-2'><a href='mailto:example@example.com' className='hover:text-gray-900'>example@example.com</a></li>
            <li className='mb-2'><a href='tel:123-456-7890' className='hover:text-gray-900'>123-456-7890</a></li>
            <li className='mb-2'><a href='https://www.example.com' className='hover:text-gray-900' target='_blank' rel='noopener noreferrer'>www.example.com</a></li>
          </ul>
        </div>
        <div className='w-full md:w-1/2 xl:w-1/3 p-6'>
          <h5 className='text-lg font-bold mb-2'>Social Media</h5>
          <ul>
            <li className='mb-2'><a href='https://www.facebook.com/example' className='hover:text-gray-900' target='_blank' rel='noopener noreferrer'>Facebook</a></li>
            <li className='mb-2'><a href='https://www.twitter.com/example' className='hover:text-gray-900' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
            <li className='mb-2'><a href='https://www.instagram.com/example' className='hover:text-gray-900' target='_blank' rel='noopener noreferrer'>Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;