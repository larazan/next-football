import React, { useEffect, useState } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <div className="fixed bg-pink bottom-10 right-3 z-20 cursor-pointer">
        {isVisible && (
          <div
            onClick={scrollToTop}
            className="fixed p-2 opacity-50 rounded-lg border border-[#1cd0ff] bg-[#e6ff00] bottom-4 right-3 hover:bg-[#fdfc3b] lg:bottom-5 lg:right-5 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-[#1cd0ff]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>

          </div>
        )}
      </div>
    </>
  );
};

export default ScrollTop;