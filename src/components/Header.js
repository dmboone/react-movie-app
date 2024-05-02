import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () =>{
        if(window.scrollY >= 50){
            setIsScrolled(true);
            console.log("TRUE");
        }
        else{
            setIsScrolled(false);
            console.log("FALSE");
        }
    }
  });

  return (
    <header className={isScrolled ? "opaque" : ""}>
      <h1>React-Movie-App</h1>
      <BiMenuAltRight color="white" size="2em" />
    </header>
  );
};

export default Header;
