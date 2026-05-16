import React from 'react';
import Footer from './components/Footer';
import './styles/app.css';
function App() {
  return (
    <div className='max-w-5xl mx-auto p-4 md:p-6 lg:p-8 mt-10 mb-10'>
      <h1 className='text-3xl font-bold mb-4'>Welcome to our website</h1>
      <Footer />
    </div>
  );
}
export default App;