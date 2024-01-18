import React from 'react';
import { Link, BrowserRouter, useHistory } from 'react-router-dom';
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
        <Link to="/posts/151515">Post</Link>
      </Nav>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
