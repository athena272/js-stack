import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { Nav } from './styles';
import Header from '../Header';
import Footer from '../Footer';
import Routes from '../../Routes';

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </Nav>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
