import React from 'react';
import '../css/Footer.css'

function Footer() {
  const today = new Date();

  return <div className='footer'>
    <footer className='footerlab'>
      Rock Paper Sissor By <a className='a_foot' href='https://binwinviju.co.in/'>Binwin Viju</a> || Copyright &copy; {today.getFullYear()}
    </footer>
  </div>;
}

export default Footer;
