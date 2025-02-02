import React from "react";
import { Carousel } from "antd";
import profile from "../../assets/p1.jpg"; // Example profile image
import profile1 from "../../assets/p2.avif"; // Example profile image
import profile2 from "../../assets/p3.avif"; // Example profile image
import profile3 from "../../assets/p4.jpg"; // Example profile image

const testimonials = [
  {
    avatar: profile,
    text: "A bicycle ride offers freedom, fitness, and fun. It’s an eco-friendly way to explore nature, commute, or exercise. Cycling boosts mental and physical health, reduces stress, and strengthens muscles. Whether on city streets or scenic trails, a bike ride provides adventure, fresh air, and a sense of joy. 🚴‍♂️",
    name: "John Doe",
  },
  {
    avatar: profile1,
    text: "A bicycle ride offers freedom, fitness, and fun. It’s an eco-friendly way to explore nature, commute, or exercise. Cycling boosts mental and physical health, reduces stress, and strengthens muscles. Whether on city streets or scenic trails, a bike ride provides adventure, fresh air, and a sense of joy. 🚴‍♂️",
    name: "Sarah Smith",
  },
  {
    avatar: profile2,
    text: "A bicycle ride offers freedom, fitness, and fun. It’s an eco-friendly way to explore nature, commute, or exercise. Cycling boosts mental and physical health, reduces stress, and strengthens muscles. Whether on city streets or scenic trails, a bike ride provides adventure, fresh air, and a sense of joy. 🚴‍♂️",
    name: "Mike Johnson",
  },
  {
    avatar: profile3,
    text: "A bicycle ride offers freedom, fitness, and fun. It’s an eco-friendly way to explore nature, commute, or exercise. Cycling boosts mental and physical health, reduces stress, and strengthens muscles. Whether on city streets or scenic trails, a bike ride provides adventure, fresh air, and a sense of joy. 🚴‍♂️",
    name: "Emily Davis",
  },
];

const Testimonial: React.FC = () => (
  <div className="testimonial-container">
    <h1>Testimonial</h1>
    <p>About Our Shop</p>
    <Carousel autoplay>
      {testimonials.map((item, index) => (
        <div key={index} className="testimonial-slide">
          <div className="overlay"></div> {/* Dark overlay for readability */}
          <div className="content">
            <img src={item.avatar} alt={item.name} className="avatar" />
            <p className="testimonial-text">"{item.text}"</p>
            <h4 className="testimonial-name">- {item.name}</h4>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default Testimonial;
