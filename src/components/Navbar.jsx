import { useEffect, useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [scroll, setScroll] = useState(false);
    
    const handleClick = () => {
       setShow("!show");
        // console.log(show);
    };

    let menuActive = show ? "left-0" : "-left-full";

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 5) {
               // console.log("testing");
               setScroll(true);
               setShow(false);
            } else {
                setScroll(false);
            }
        });
    });

    let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";
    
  return (
  <div className={`navbar fixed w-full transition-all ${scrollActive}`}> 
     <div className="container mx-auto px-7  ">
        <div className="navbar-box flex items-center justify-between">
        <div className="logo"> 
            <h1 className="text-2xl font-bold">NovelNest</h1>
        </div>
         <ul className={`flex  lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 
         flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-slate-200 transition-all`}>
        <li>
            <a herf="#" className="font-medium opacity-75 ">Home</a>
        </li>
        <li>
            <a herf="#" className="font-medium opacity-75 ">Genre</a>
        </li>
        <li>
            <a herf="#" className="font-medium opacity-75 ">Novel</a>
        </li>
        <li>
            <a herf="#" className="font-medium opacity-75 ">Terbaru</a>
        </li>
         </ul>
         <div className="social flex items-center gap-2"></div>
         <a herf="#" className="bg-sky-400 px-3 py-0 rounded-full text-white  hover:bg-sky-700 transition-all">
            Social Media 
            </a>   
            <i className="ri-menu-3-line text-3x1 md:hidden block " onClick={handleClick}></i>
        </div>
        </div>
     </div>
   

  );
  
};

export default Navbar;