import React from "react";
import about from '../assets/ice-about.png'

const About = () => {
  return (
    <div className="p-8 text-center mt-5  ">
      <h1 className="text-4xl font-pacifico text-crimsonRed">About Us</h1>
      <div className="sm:flex gap-10 mt-5 justify-center ">
        
         <img src={about} alt="about-img" className="sm:h-1/3 sm:w-1/3 rounded-lg px-5 sm:rounded-lg" />
            <div className="sm:flex sm:flex-col">
              <p className="text-justify text-[#5D4037] text-xl m-9 gap-2 font-medium"> <span className="text-2xl font-semibold">Welcome to Ice-Fy,</span> the ultimate ice cream destination where every scoop is a celebration of flavor and joy! Renowned as the best in town, Ice-Fy transforms ordinary moments into extraordinary memories with its wide range of delicious and innovative ice cream creations. From timeless classics to bold, handcrafted flavors, each treat is made with love, premium ingredients, and a dash of creativity. Whether you're enjoying a family outing, a romantic dessert date, or just treating yourself, Ice-Fy guarantees an experience that's as delightful as it is indulgent. Come, explore the magic of Ice-Fy, where every bite is pure happiness!</p>

                <button className="text-black font-semibold text-xl hover:bg-[#990000] hover:text-[#E5E5E5] hover:border-none transition-all ease-linear duration-500 border px-10 border-stone-950 py-2  rounded-md self-start ml-9">Contact</button>
            </div>
      </div>

    </div>
  );
};

export default About;

// 5D4037