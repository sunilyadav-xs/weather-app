import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = ({darkMode, styles}) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="scrollButton">
    <button
    style={{ display: visible ? "inline" : "none", backgroundColor: darkMode ? '#555353': '', border: 'none' }}
    >
      <FaArrowUp
        onClick={scrollToTop}
        style={darkMode ? styles.lightImg : {}}
        />
    </button>
    </div>
  );
};

export default ScrollToTop;
