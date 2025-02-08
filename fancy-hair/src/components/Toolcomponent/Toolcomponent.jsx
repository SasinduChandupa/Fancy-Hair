import React, { useEffect, useState, useRef } from "react";
import "./Toolcomponent.css";

const ToolComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toolRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (toolRef.current) {
      observer.observe(toolRef.current); // Start observing the component
    }

    return () => {
      if (toolRef.current) {
        observer.unobserve(toolRef.current); // Cleanup observer
      }
    };
  }, []);

  return (
    <div
      ref={toolRef}
      className={`tool-container ${isVisible ? "animate" : ""}`}
    >
      <div className="tool-image">
        <img
          src="/tools.png"
          alt="Hair tools"
          className="responsive-image"
        />
      </div>
      <div className="tool-content">
        <h2 className="tool-title">Transforming Beauty, One <br/>Style at a Time</h2>
        <ul className="tool-features">
          <li>
            <div className="icon"></div>
            <div>
              <h3>Expertise in Brazilian Hair Techniques</h3>
              <p>Precision color, balayage, & innovative free-hand painting.</p>
            </div>
          </li>
          <hr className="hr"/>
          <li>
            <div className="icon"></div>
            <div>
              <h3>Personalized Styling & Haircuts</h3>
              <p>Tailored cuts and styles that elevate your natural beauty.</p>
            </div>
          </li>
          <hr className="hr"/>
          <li>
            <div className="icon"></div>
            <div>
              <h3>Premium Treatments for Healthy Hair</h3>
              <p>
                Keratin straightening & deep conditioning for ultimate hair
                health.
              </p>
            </div>
          </li>
          <hr className="hr"/>
          <li>
            <div className="icon"></div>
            <div>
              <h3>Aveda Partnership for the Best in Hair Care</h3>
              <p>
                Specializing in Aveda products for high-performance, plant-based
                hair care solutions.
              </p>
            </div>
          </li> 
        </ul>
      </div>
    </div>
  );
};

export default ToolComponent;