import React, { useEffect, useState, useRef } from "react";
import "./Productcomponent.css";

const Productcomponent = () => {
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
            <div className="service-text">
                <h2>Our Products</h2>
                <p>
                    Discover the finest selection of beauty products at Fancy hair Salon, carefully curated to ensure you achieve salon-quality results at home. Our range includes top-tier brands and exclusive items that cater to all your hair, skin, and beauty needs. Each product is chosen for its superior quality and effectiveness, helping you maintain and enhance your natural beauty between visits.
                </p>
            </div>
            <div className="service-image">
                <img src="/products.png" alt="Our Services" />
                <br/><br/>
            </div>
        </div>
    );
};

export default Productcomponent;
