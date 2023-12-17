// Update the import path to match your project structure
import { Button } from '@components/button';
import { selectUser } from '@redux/slices/user';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const router = useRouter();
  const user = useSelector(selectUser);
  console.log("🚀 ~ file: index.tsx:11 ~ Home ~ user:", user)
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    router.push('/login');
  };

  return (
    <div>
      {/* <p>JWT: {user.jwt}</p>
      <p>Status: {user.status ? 'Logged In' : 'Logged Out'}</p> */}
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Home;
