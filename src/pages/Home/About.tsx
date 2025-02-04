import React from "react";
import { Carousel } from "antd";
import "./About.css";

const About: React.FC = () => (
  <div className="about-container">
    <Carousel autoplay>
      <div className="carousel-slide">
        <h1>About Our Shop</h1>
        <p>
          Welcome to our bicycle shop, your one-stop destination for high-quality
          bikes and accessories. Whether you're a casual rider, a fitness
          enthusiast, or a professional cyclist, we have the perfect bicycle for
          you. Our collection features top brands, ensuring durability, comfort,
          and style. We prioritize customer satisfaction, offering expert advice,
          repairs, and maintenance services. Our goal is to promote a healthier
          lifestyle and an eco-friendly mode of transportation. With a wide
          variety of mountain bikes, road bikes, and electric bicycles, we
          guarantee a ride that suits your needs. Visit us today and experience
          the joy of cycling!
        </p>
      </div>
      <div className="carousel-slide">
        <h1>Why Choose Us?</h1>
        <p>
          At our bicycle shop, we believe in providing high-quality products and
          exceptional service. Our team consists of passionate cyclists who
          understand the importance of finding the perfect bike. We offer
          competitive prices, expert recommendations, and a seamless shopping
          experience. Our commitment to customer satisfaction means we provide
          warranties, easy returns, and professional bike fitting. Whether you're
          a beginner or an experienced rider, we ensure you get the best value for
          your money. Trust us for all your cycling needs and enjoy a hassle-free
          purchase with excellent after-sales support. Ride with confidence and
          style!
        </p>
      </div>
      <div className="carousel-slide">
        <h1>Our Bicycle Collection</h1>
        <p>
          We take pride in offering a diverse selection of bicycles, catering to
          all riders. From lightweight road bikes for speed enthusiasts to rugged
          mountain bikes for adventure seekers, our shop has it all. Looking for a
          comfortable city bike for daily commutes? We’ve got you covered. Our
          electric bicycles provide an effortless ride, perfect for those who want
          extra power. We carefully select every bike to ensure quality,
          performance, and durability. Whether you need a bike for leisure,
          fitness, or professional racing, our collection meets all requirements.
          Explore our range and find your perfect ride today!
        </p>
      </div>
      <div className="carousel-slide">
        <h1>Our Commitment to Quality</h1>
        <p>
          Quality is at the heart of everything we do. We partner with leading
          manufacturers to bring you bicycles that excel in performance and
          longevity. Each bike undergoes rigorous testing to ensure safety and
          durability. Our skilled technicians assemble and inspect every product
          before it reaches you. We also offer repair and maintenance services to
          keep your bike in top condition. From premium frames to high-performance
          gears, we focus on delivering only the best. When you purchase from us,
          you're investing in a reliable, high-quality bicycle that enhances your
          riding experience. Your satisfaction is our priority!
        </p>
      </div>
    </Carousel>
  </div>
);

export default About;
