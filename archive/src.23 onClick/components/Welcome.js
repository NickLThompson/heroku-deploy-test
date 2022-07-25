import React, { useState } from 'react';
import Nav from './Nav';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

// Here we destructure our props into their own distinct variables
export default function Welcome({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log('Welcome -> loggedIn', loggedIn);
  const [page, setPage] = useState('home');

  let currentPage;

  if (page === 'home') currentPage = Home;
  if (page === 'about') currentPage = About;
  if (page === 'contact') currentPage = Contact;
  if (page === 'resume') currentPage = Resume;

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <>
      <Nav setPage={setPage} />
      <currentPage />
    </>
  );
}