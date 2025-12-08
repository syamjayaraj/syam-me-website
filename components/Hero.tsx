"use client";

import { useState } from "react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="hero-section">
      {/* Navigation Bar */}
      <nav className="hero-nav">
        <div className="hero-logo">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="note-icon"
          >
            <path
              d="M8 3C6.9 3 6 3.9 6 5V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V5C18 3.9 17.1 3 16 3H8M8 5H16V19H8V5M9 7V9H15V7H9M9 11V13H15V11H9M9 15V17H13V15H9Z"
              fill="currentColor"
            />
          </svg>
          <span>FLOYET</span>
        </div>
        <div className="hero-nav-links">
          <a href="#portfolio">Portfolio</a>
          <a href="#blog">Blog</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className="hero-join-btn">LET'S TALK</button>
        </div>
      </nav>

      {/* Background Text */}
      <div className="hero-bg-text">CODE</div>

      {/* Main Hero Content */}
      <div className="hero-content">
        {/* Left Widget - Featured Project/Service */}
        <div className="hero-widget hero-widget-left">
          <div className="widget-icon-container">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              className="widget-vinyl"
            >
              <rect
                x="10"
                y="10"
                width="40"
                height="40"
                rx="8"
                fill="#191919"
              />
              <path
                d="M18 25L22 29L30 21"
                stroke="#C0C0C0"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="42" cy="25" r="3" fill="#8b5cf6" />
              <rect x="18" y="32" width="24" height="2" rx="1" fill="#C0C0C0" />
              <rect x="18" y="37" width="18" height="2" rx="1" fill="#C0C0C0" />
            </svg>
          </div>
          <h3 className="widget-title">Latest Article</h3>
          <p className="widget-subtitle">Tech Insights & Ideas</p>
          <div className="waveform">
            <div className="wave-bar" style={{ height: "20px" }}></div>
            <div className="wave-bar" style={{ height: "35px" }}></div>
            <div className="wave-bar" style={{ height: "25px" }}></div>
            <div className="wave-bar" style={{ height: "40px" }}></div>
            <div className="wave-bar" style={{ height: "30px" }}></div>
            <div className="wave-bar" style={{ height: "35px" }}></div>
            <div className="wave-bar" style={{ height: "20px" }}></div>
          </div>
          <div className="widget-controls">
            <button className="control-btn" title="Previous">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button
              className="control-btn play-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              title="Read Article"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {isPlaying ? (
                  <>
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </>
                ) : (
                  <path d="M8 5v14l11-7z" />
                )}
              </svg>
            </button>
            <button className="control-btn" title="Next">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
          <p className="widget-footer-text">Read My Latest Posts!</p>
        </div>

        {/* Center - Portrait and Name */}
        <div className="hero-center">
          {/* Tags */}
          <div className="hero-tags">
            <div className="hero-tag">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>Software Engineer</span>
            </div>
            <div className="hero-tag">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
              </svg>
              <span>Entrepreneur</span>
            </div>
            <div className="hero-tag">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
              <span>Blogger & Writer</span>
            </div>
          </div>

          {/* Portrait */}
          <div className="hero-portrait">
            <img src="/assets/images/syamlal.jpg" alt="Syamlal CM" />
          </div>

          {/* Name in Handwritten Style */}
          <h1 className="hero-name">Syamlal CM</h1>

          {/* Badge */}
          <div className="hero-badge">
            <span>Open for Projects & Collaborations</span>
          </div>
        </div>

        {/* Right Widget - CTA */}
        <div className="hero-widget hero-widget-right">
          <div className="ticket-overlay">
            <div className="ticket-stub">
              <div className="ticket-barcode"></div>
              <div className="ticket-text">TECH SOLUTIONS 2024</div>
            </div>
            <div className="ticket-stub">
              <div className="ticket-barcode"></div>
              <div className="ticket-text">LET'S BUILD TOGETHER</div>
            </div>
          </div>
          <div className="widget-content-dark">
            <div className="widget-profile-section">
              <div className="widget-profile-pic">
                <img src="/assets/images/syamlal.jpg" alt="Profile" />
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10H7" />
              </svg>
            </div>
            <h3 className="widget-title-dark">Let's Work Together!</h3>
            <p className="widget-text-dark">
              Need a software solution, want to collaborate, or looking for tech
              insights? Let's connect and build something amazing together!
            </p>
            <button className="widget-cta-btn">Get In Touch</button>
          </div>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="hero-tagline">
        <h2>BUILDING THE FUTURE WITH CODE & IDEAS</h2>
      </div>
    </section>
  );
}
