import React from "react";
import { useRouter } from "next/router";
import { Button, Cards, Container, Footer, Header, Main } from "@components";

const Home: React.FC = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    // Redirect to the /login page
    router.push("/login");
  };

  return (
    <>
      <Button onClick={handleLoginClick}>Go to Login</Button>
    </>
  );
};

export default Home;
