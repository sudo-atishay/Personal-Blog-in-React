import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash'; // Import debounce from lodash
import '../styles/Footer.css';

function Footer() {

  return (
    <div className='footer'>
      {/* Text */}
      <div className='atishay-text'>@atishay_jain</div>
    </div>
  );
}

export default Footer;
