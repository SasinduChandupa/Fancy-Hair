import React, { useEffect, useState, useRef } from "react";
import "./ServiceComponent.css";

const ServiceComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`service-container ${isVisible ? "animate" : ""}`}
    >
      <div className="service-image">
        <img src="/1.jpg" alt="Our Services" />
      </div>
      <div className="service-text">
        <h2>Our Services</h2>
        <p>
          We offer a comprehensive range of beauty treatments designed to meet
          all your needs and exceed your expectations. Our expert team is
          dedicated to providing you with an exceptional experience, using the
          latest techniques and top-quality products. Whether you're looking
          for a refreshing new look or a relaxing retreat, we have the perfect
          solution to enhance your natural beauty and boost your confidence.
          Experience the epitome of beauty at <b>Fancy Hair</b>, where your
          satisfaction is our top priority.
        </p>
      </div>
    </div>
  );
};

export default ServiceComponent;
