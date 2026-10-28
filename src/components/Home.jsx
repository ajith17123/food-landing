import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/style/Home.css";

// Import all required assets
import marbleBg from "../assets/images/marble-bg.jpg";
import dumplingPlate from "../assets/images/dumpling-plate.png";
import dippingSauce from "../assets/images/dipping-sauce.png";
import decorSpices from "../assets/images/decor-spices.png";
import dishStirredEgg from "../assets/images/dish-stirred-egg.png";
import dishKungPao from "../assets/images/dish-kung-pao.png";
import dishPorkChops from "../assets/images/dish-pork-chops.png";
import decorLobster from "../assets/images/decor-lobster.png";
import decorLimeHerb from "../assets/images/decor-lime-herb.png";
import dishSpaghetti from "../assets/images/dish-spaghetti.png";
import avatar1 from "../assets/images/avatar-1.jpg";
import avatar2 from "../assets/images/avatar-2.jpg";
import avatar3 from "../assets/images/avatar-3.jpg";
import decorBroccoli from "../assets/images/decor-broccoli.png";
import decorChili from "../assets/images/decor-chili.png";
import decorGarlic from "../assets/images/decor-garlic.png";
import decorMint from "../assets/images/decor-mint.png";
import decorTomato from "../assets/images/decor-cherry-tomato.png";
import decorLemon from "../assets/images/decor-lemon-wedge.png";
import dishDessert from "../assets/images/dish-dessert.png";

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    id: 0,
    name: "Eleanor Vance",
    role: "Food Critic & Journalist",
    avatar: avatar1,
    rating: 5,
    quote: "The texture of the handcrafted dumplings and the depth of the chili oil is unmatched. Truly an unforgettable culinary experience."
  },
  {
    id: 1,
    name: "Marcus Chen",
    role: "Executive Chef & Enthusiast",
    avatar: avatar2,
    rating: 5,
    quote: "Every dish served here is a masterclass in balance of flavor and aesthetic presentation. Highly recommended for Asian food lovers!"
  },
  {
    id: 2,
    name: "Sophia Rodriguez",
    role: "Lifestyle Blogger",
    avatar: avatar3,
    rating: 5,
    quote: "The vibrant colors, ambient dining atmosphere, and divine Kung Pao chicken keep me coming back week after week!"
  }
];

const dishesData = [
  {
    id: 1,
    title: "Stirred Egg",
    category: "Appetizers",
    price: "₹250",
    desc: "Fluffy organic scrambled eggs gently tossed with vine-ripened tomatoes and fresh scallions.",
    image: dishStirredEgg
  },
  {
    id: 2,
    title: "Kung Pao Chicken",
    category: "Main Dish",
    price: "₹380",
    desc: "Tender diced chicken wok-tossed with crunchy peanuts, dry red chili, and savory Sichuan pepper sauce.",
    image: dishKungPao
  },
  {
    id: 3,
    title: "Sweet Pork Chops",
    category: "Main Dish",
    price: "₹420",
    desc: "Crispy glazed pork ribs caramelized in sweet plum & balsamic reduction sprinkled with white sesame.",
    image: dishPorkChops
  },
  {
    id: 4,
    title: "Dim Sum Basket",
    category: "Appetizers",
    price: "₹280",
    desc: "Steamed shrimp and pork dumplings served hot in traditional bamboo basket with ginger soy dip.",
    image: dumplingPlate
  },
  {
    id: 5,
    title: "Sichuan Spaghetti",
    category: "Main Dish",
    price: "₹390",
    desc: "Artisanal pasta infused with fiery chili paste, roasted garlic oil, fresh basil, and spiced meatballs.",
    image: dishSpaghetti
  },
  {
    id: 6,
    title: "Matcha Mochi Cake",
    category: "Dessert",
    price: "₹190",
    desc: "Warm Japanese green tea mochi cake topped with red bean paste and vanilla bean gelato.",
    image: dishDessert
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const containerRef = useRef(null);
  const heroPlateRef = useRef(null);
  const heroSauceRef = useRef(null);
  const heroSpicesRef = useRef(null);
  const lobsterRef = useRef(null);
  const limeRef = useRef(null);
  const mintRef = useRef(null);
  const tomatoRef = useRef(null);
  const lemonRef = useRef(null);
  const spaghettiRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // B. Hero Section ScrollTrigger: Rotate dumpling plate clockwise (55deg) & translate downward (150px)
      if (heroPlateRef.current) {
        gsap.to(heroPlateRef.current, {
          rotate: 55,
          y: 150,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        });
      }

      if (heroSauceRef.current) {
        gsap.to(heroSauceRef.current, {
          y: 80,
          x: -30,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        });
      }

      if (heroSpicesRef.current) {
        gsap.to(heroSpicesRef.current, {
          rotate: -90,
          y: 100,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        });
      }

      // C. Menu Section Edge Parallax Scrubbing & Dish Up/Down Motion
      if (lobsterRef.current) {
        gsap.to(lobsterRef.current, {
          y: -120,
          rotate: 15,
          ease: "none",
          scrollTrigger: {
            trigger: ".menu-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
          }
        });
      }

      if (limeRef.current) {
        gsap.to(limeRef.current, {
          y: 100,
          rotate: -25,
          ease: "none",
          scrollTrigger: {
            trigger: ".menu-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
          }
        });
      }

      if (mintRef.current) {
        gsap.to(mintRef.current, {
          y: -90,
          rotate: 30,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        });
      }

      if (tomatoRef.current) {
        gsap.to(tomatoRef.current, {
          y: 110,
          rotate: -20,
          ease: "none",
          scrollTrigger: {
            trigger: ".menu-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
          }
        });
      }

      // Smooth vertical up/down movement on dish cards while scrolling
      gsap.utils.toArray(".dish-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: index % 2 === 0 ? 40 : -40 },
          {
            y: index % 2 === 0 ? -40 : 40,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5
            }
          }
        );
      });

      // D. Testimonial Section Counter-rotate spaghetti plate (-35deg)
      if (spaghettiRef.current) {
        gsap.to(spaghettiRef.current, {
          rotate: -35,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: ".testimonial-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  const filteredDishes = activeTab === "All" 
    ? dishesData.slice(0, 3) 
    : dishesData.filter(d => d.category === activeTab);

  const currentTestimonial = testimonialsData[activeTestimonial];

  return (
    <div className="home-container" ref={containerRef}>
      {/* Additional Floating Decor Ingredients in Free Space */}
      <img src={decorMint} alt="Fresh Mint Leaves" className="floating-decor decor-mint-float" ref={mintRef} />
      <img src={decorTomato} alt="Cherry Tomatoes" className="floating-decor decor-tomato-float" ref={tomatoRef} />

      {/* Navbar Header */}
      <header className="navbar">
        <div className="nav-brand">
          <span>GOURMET</span>
          <span className="brand-dot">•</span>
          <span style={{ color: "#E63946" }}>BITES</span>
        </div>
        <ul className="nav-links">
          <li><a href="#hero" className="nav-link active">Home</a></li>
          <li><a href="#menu" className="nav-link">Menu</a></li>
          <li><a href="#reviews" className="nav-link">Reviews</a></li>
          <li><a href="#newsletter" className="nav-link">Subscribe</a></li>
        </ul>
        <div className="nav-actions">
          <button className="nav-btn">Reserve Table</button>
          <button className="mobile-menu-toggle" aria-label="Toggle Navigation">☰</button>
        </div>
      </header>

      {/* B. Hero Section */}
      <section className="section-wrapper hero-section" id="hero">
        <div className="hero-left">
          <span className="hero-tag">AUTHENTIC ASIAN CUISINE</span>
          <h1 className="hero-title">
            Take a taste{"\n"}Come join us.
          </h1>
          <p className="hero-subtext">Life is so endlessly delicious.</p>
          <p className="hero-description">
            Experience hand-folded artisanal dumplings, rich aromatics, and timeless recipes passed down through generations. Prepared fresh daily with premium local ingredients.
          </p>
          <div className="hero-cta">
            <button className="btn-pill-primary">Explore Now</button>
            <button className="btn-circle-play" title="Watch Video">▶</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-food-composition">
            <img 
              src={dumplingPlate} 
              alt="Steamed Dumplings Plate" 
              className="img-dumpling-plate"
              ref={heroPlateRef}
            />
            <img 
              src={dippingSauce} 
              alt="Dipping Sauce Bowl" 
              className="img-dipping-sauce"
              ref={heroSauceRef}
            />
            <img 
              src={decorSpices} 
              alt="Decorative Star Anise and Peppercorns" 
              className="img-decor-spices"
              ref={heroSpicesRef}
            />
          </div>
        </div>
      </section>

      {/* C. Menu Section */}
      <section className="section-wrapper menu-section" id="menu">
        {/* Edge Parallax Decorative Elements */}
        <img 
          src={decorLobster} 
          alt="Decorative Lobster" 
          className="decor-lobster-edge"
          ref={lobsterRef}
        />
        <img 
          src={decorLimeHerb} 
          alt="Decorative Juice Glass and Lime" 
          className="decor-lime-edge"
          ref={limeRef}
        />

        <div className="section-header">
          <span className="section-subtitle">OUR SPECIALTIES</span>
          <h2 className="section-title">What's on our Plate</h2>
          <p style={{ color: "#718096", marginTop: "0.5rem" }}>
            Please serve yourself without any hesitate
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="menu-tabs">
          {["All", "Appetizers", "Main Dish", "Dessert"].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 3-Column Dish Showcase */}
        <div className="dishes-grid">
          {filteredDishes.map((dish) => (
            <div className="dish-card" key={dish.id}>
              <div className="dish-img-wrapper">
                <img src={dish.image} alt={dish.title} className="dish-img" />
              </div>
              <h3 className="dish-title">{dish.title}</h3>
              <p className="dish-desc">{dish.desc}</p>
              <div className="dish-footer">
                <span className="dish-price">{dish.price}</span>
                <button className="add-btn" title="Add to Order">+</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* D. Testimonial Section */}
      <section className="section-wrapper testimonial-section" id="reviews">
        <div className="testimonial-left">
          <div className="spaghetti-wrapper">
            <img 
              src={dishSpaghetti} 
              alt="Top-down view Spaghetti Pasta" 
              className="img-spaghetti"
              ref={spaghettiRef}
            />
          </div>
        </div>

        <div className="testimonial-right">
          <span className="section-subtitle">TESTIMONIALS</span>
          <div className="quote-badge">“</div>
          <p className="quote-text">
            "{currentTestimonial.quote}"
          </p>
          <div className="reviewer-info">
            <h4 className="reviewer-name">{currentTestimonial.name}</h4>
            <span className="reviewer-role">{currentTestimonial.role}</span>
            <div className="rating-stars">
              {"★".repeat(currentTestimonial.rating)}
            </div>
          </div>

          {/* Interactive Avatar Selectors */}
          <div className="avatar-selector">
            {testimonialsData.map((item, idx) => (
              <img
                key={item.id}
                src={item.avatar}
                alt={item.name}
                className={`avatar-img ${activeTestimonial === idx ? "active" : ""}`}
                onClick={() => setActiveTestimonial(idx)}
                title={`Read review from ${item.name}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* E. Newsletter & Floating Ingredients */}
      <section className="section-wrapper newsletter-container" id="newsletter">
        {/* Continuous Floating Ingredient Elements */}
        <img src={decorBroccoli} alt="Fresh Broccoli" className="floating-ingredient decor-broccoli" />
        <img src={decorChili} alt="Red Chili" className="floating-ingredient decor-chili" />
        <img src={decorGarlic} alt="Garlic Bulb" className="floating-ingredient decor-garlic" />

        <div className="newsletter-card">
          <span className="section-subtitle">NEVER MISS A RECIPE</span>
          <h2 className="newsletter-title">Easy recipes will send to your inbox</h2>
          <p className="newsletter-subtext">
            Join 25,000+ food lovers receiving our weekly culinary secrets, seasonal menu drops, and exclusive dining discounts.
          </p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              className="email-input" 
              placeholder="Enter your email address..." 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
          {subscribed && (
            <p className="toast-msg">✓ Thank you for subscribing! Delicious recipes are on their way.</p>
          )}
        </div>
      </section>

      {/* F. Footer */}
      <footer className="footer">
        <div className="section-wrapper" style={{ paddingBottom: "0" }}>
          <div className="footer-grid">
            <div className="footer-brand-col">
              <div className="nav-brand">
                <span>GOURMET</span>
                <span className="brand-dot">•</span>
                <span style={{ color: "#E63946" }}>BITES</span>
              </div>
              <p>Crafting authentic taste experiences with passion, fresh ingredients, and culinary heritage.</p>
            </div>
            <div>
              <h4 className="footer-col-title">Get Cooking</h4>
              <ul className="footer-links">
                <li><a href="#menu">Our Menus</a></li>
                <li><a href="#hero">Secret Recipes</a></li>
                <li><a href="#hero">Masterclasses</a></li>
                <li><a href="#hero">Kitchen Tips</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-col-title">Information</h4>
              <ul className="footer-links">
                <li><a href="#hero">About Us</a></li>
                <li><a href="#reviews">Testimonials</a></li>
                <li><a href="#newsletter">Delivery Info</a></li>
                <li><a href="#hero">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-col-title">Follow Us</h4>
              <ul className="footer-links">
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} GourmetBites Brand Inc. All rights reserved.</p>
            <p>Made with passion for extraordinary culinary experiences.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
