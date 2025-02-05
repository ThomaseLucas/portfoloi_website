"use client";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [bgStyle, setBgStyle] = useState({});

  useEffect(() => {
    setBgStyle({
      backgroundImage: "url('../components/images/gray_texture.jpg')",
    });
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center" style={bgStyle}>
      <Navbar />
      <div className="p-8 text-center text-black">
        <h1>Welcome to my portfolio!</h1>
      </div>
    </div>
  );
}
