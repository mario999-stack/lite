import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

import useWindowDimensions from '../helpers/useWindowDimensions';

export default function NavbarWrapper() {
  // state mgmt
  const [darkMode, setDarkMode] = useState(0);
  const { width } = useWindowDimensions();

  // toggle light/dark mode
  const toggleDarkMode = e => {
    e.preventDefault();

    // get elements needed
    const navbarBrand = document.getElementsByClassName('navbar-brand');
    const anchors = document.getElementsByTagName('a');
    const headers = document.getElementsByTagName('h1');
    const paragraphs = document.getElementsByTagName('p');

    // set global styles
    document.body.style.backgroundColor = darkMode === 1 ? '#f5f8ff' : '#0f0f22';
    [...navbarBrand, ...anchors, ...headers].forEach(element => {
      element.style.color = darkMode === 1 ? '#0f0f22' : '#f5f8ff';
    });

    [...paragraphs].forEach(element => {
      element.style.color = darkMode === 1 ? '#636467' : '#9E9EA6';
    });

    // toggle
    setDarkMode(darkMode ^ 1);
  };

  return (
    <Navbar style={width > 500 ? styles.navbarBig : {}} className="navbar-main">
      <Navbar.Brand href="/" className="navbar-brand" style={styles.navbarBrand}>
        {process.env['APP_NAME'] ?? 'lite.fyi'}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end navbar-links">
        <Nav.Link href="#" onClick={e => toggleDarkMode(e)} style={styles.navbarLink}>
          {darkMode === 1 ? 'Light Mode' : 'Dark Mode'}
        </Nav.Link>
        <Nav.Link href="https://github.com/jdleo/lite" target="_blank" style={styles.navbarLink}>
          Github
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

const styles = {
  navbarBig: { paddingLeft: 200, paddingRight: 200 },
  navbarBrand: {
    color: '#0f0f22',
  },
  navbarLink: {
    color: '#0f0f22',
  },
};
