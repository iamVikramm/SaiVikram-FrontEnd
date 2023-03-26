import React from 'react';

function Navbar() {

    // function useScrollDirection() {
    //     const [scrollDirection, setScrollDirection] = useState(null);
      
    //     useEffect(() => {
    //       let lastScrollY = window.pageYOffset;
      
    //       const updateScrollDirection = () => {
    //         const scrollY = window.pageYOffset;
    //         const direction = scrollY > lastScrollY ? "down" : "up";
    //         if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
    //           setScrollDirection(direction);
    //         }
    //         lastScrollY = scrollY > 0 ? scrollY : 0;
    //       };
    //       window.addEventListener("scroll", updateScrollDirection); // add event listener
    //       return () => {
    //         window.removeEventListener("scroll", updateScrollDirection); // clean up
    //       }
    //     }, [scrollDirection]);
      
    //     return scrollDirection;
    //   };

    //   const scrollDirection = useScrollDirection();
  
    return (
        <nav className="nav">   
            <div className='logo-img'>
            </div>
            <div className='nav-links'>
                <h4 style={{cursor:"pointer"}}>FALCON 9</h4>
                <h4 style={{cursor:"pointer",textDecoration:"underline",textUnderlineOffset:"0.7rem"}}>DRAGON</h4>
            </div>
           
            <div></div>
        </nav>
    );
}

export default Navbar;