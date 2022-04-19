import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className=' bg-slate-800 text-center text-xl h-20 p-5 mt-10'>
             <p className="text-white">
        <small className="fw-lighter">
          Sowad &#169;{currentYear} All rights reserved.
        </small>
      </p>
        </div>
    );
};

export default Footer;