import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <h1>THis is sample foooter.</h1>
      </div>
      <div>
        <h3>Instructios for all my Game devs:</h3>
        <ol>
          <li>Dont use class based components, make components like this component is made. using export default function.</li>
          <li>Dont use Svgs Directly from public Folder, To use Svgs Make a new Component of svg in components/Svgs folder, create new YourSvg.js file and put all svg code there, import that anywhere</li>
          <li>Donot use "next Image" Tag, Use simple img tag</li>
          <li>Use Module Css Files, dont use global css File for your games development</li>
          <li>Your game will be used as a seperate page, dont use index.js to put your game.</li>
          <li>Your game will be in pages/Games/YourGame.js page</li>
        </ol>
      </div>
    </div>
  );
};

export default Footer;
