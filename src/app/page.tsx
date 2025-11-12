"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaStrava, FaLink } from "react-icons/fa";


export default function HomePage() {
  const dogImages = [
    "/robo-dogs/robo-dog-og.png", 
    "/robo-dogs/robo-dog-cowboy.png", 
    "/robo-dogs/robo-dog-sunglasses.png",
    "/robo-dogs/robo-dog-tongue.png",
    "/robo-dogs/robo-dog-winking.png"
  ];

  const [currentDog, setCurrentDog] = useState(dogImages[0]);

  // Randomly switch to a different dog image on click
  const handlePet = () => {
    let newDog;
    do {
      newDog = dogImages[Math.floor(Math.random() * dogImages.length)];
    } while (newDog === currentDog); // avoid repeating same image
    setCurrentDog(newDog);
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Greeting */}
      <div className="flex flex-col items-center md:items-start mb-6">
        <button
          onClick={handlePet}>
            <Image
          src={currentDog}
          alt="Robot Dog"
          width={150}
          height={150}
          className="rounded-lg transition-transform duration-300 hover:scale-105"
          priority
        />
        </button>
      </div>

      <h1 className="text-5xl sm:text-6xl font-bold text-indigo-900 mb-4">
        Hi, I'm Natalie.
      </h1>

      {/* Description */}
      <p className="max-w-xl text-lg text-neutral-700 mb-8 leading-relaxed">
        I'm a Software Engineer at Juniper Networks and a recent UCLA graduate. I'm passionate about automating complex processes and building technology that is fun!  
      </p>

      {/* Social links */}
      <div className="flex gap-8 text-3xl text-indigo-700">
        <a
          href="https://www.linkedin.com/in/natalielordd"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/natalielordd"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.strava.com/athletes/50708783"
          aria-label="Strava"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition"
        >
          <FaStrava />
        </a>

        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          aria-label="Youtube"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaLink />
        </a>

      </div>
    </main>
  );
}
