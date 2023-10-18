import { Link } from 'gatsby';
import React from 'react';
import '../styles/globals.css';

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header className='header'>
        <h1 className='title'>📋 Micro Status 2.0</h1>
        <nav className='navigation'>
          <ul>
            <li>
              <Link to='/'>Timeline</Link>
            </li>
            <li>
              <Link to='/compose'>Compose</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default PageLayout;
