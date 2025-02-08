import Image from "next/image";

export default function Home() {
  const letters = ["മ", "രീ", "ചി", "ക"];

  return (
    <main className="main-container">
      {/* Hero Section with Video Background */}
      <section className="hero">
        <video className="background-video" autoPlay muted loop playsInline>
          <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="blood-overlay"></div>
        <div className="fog-container">
          <div className="fog-img fog-img-first"></div>
          <div className="fog-img fog-img-second"></div>
        </div>

        <div className="hero-content">
          <h1 className="horror-title">
            {letters.map((letter, index) => (
              <span
                key={index}
                style={{ "--i": index + 1 } as React.CSSProperties}
                className="dripping-letter"
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="tagline">മിഥ്യയിലേക്കുള്ള പ്രയാണം</p>
          <div className="cta-buttons">
            <button className="blood-btn watch-btn">
              Watch Latest Episode
              <div className="blood-drip"></div>
            </button>
            <button className="blood-btn seasons-btn">
              All Seasons
              <div className="blood-drip"></div>
            </button>
          </div>
        </div>

        <div className="season-info">
          <div className="season-card">
            <span className="season-number">S3</span>
            <span className="episode-count">E08</span>
            <h3 className="episode-title">"The Crimson Ritual"</h3>
            <p className="air-date">Latest Episode - March 21, 2024</p>
          </div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="episodes-section">
        <h2 className="section-title">Latest Episodes</h2>
        <div className="episodes-grid">
          {[1, 2, 3, 4].map((episode) => (
            <div key={episode} className="episode-card">
              <div className="episode-thumbnail">
                <Image
                  src={`/episode-${episode}.jpg`}
                  alt={`Episode ${episode}`}
                  width={300}
                  height={169}
                  className="thumbnail-img"
                />
                <div className="play-overlay">
                  <span className="play-icon">▶</span>
                </div>
              </div>
              <div className="episode-info">
                <span className="episode-number">S3:E{12 - episode}</span>
                <h3>
                  The{" "}
                  {
                    [
                      "Haunted Mirror",
                      "Basement Dweller",
                      "Night Shift",
                      "Blood Moon",
                    ][episode - 1]
                  }
                </h3>
                <p className="episode-description">
                  {
                    [
                      "A mysterious antique mirror reveals horrifying reflections...",
                      "Something sinister lurks in the old hospital basement...",
                      "The midnight guard faces an ancient evil...",
                      "When the moon turns red, the ritual begins...",
                    ][episode - 1]
                  }
                </p>
                <div className="episode-meta">
                  <span className="duration">45 min</span>
                  <span className="rating">TV-MA</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Season Overview */}
      <section className="seasons-overview">
        <div className="season-tabs">
          {[3, 2, 1].map((season) => (
            <div key={season} className="season-tab">
              <h3>Season {season}</h3>
              <p>{`12 Episodes • ${2024 - (3 - season)} Release`}</p>
              <div className="season-poster">
                <Image
                  src={`/season-${season}-poster.jpg`}
                  alt={`Season ${season}`}
                  width={200}
                  height={300}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Story Section */}
      <section className="featured-story">
        <div className="story-card">
          <div className="story-image">
            <Image
              src="/dummy-book-cover.jpg"
              alt="Latest Story"
              width={300}
              height={450}
            />
          </div>
          <div className="story-content">
            <h2>The Whispers in Room 213</h2>
            <p className="story-excerpt">
              "The scratching sounds grew louder each night, but Sarah knew
              better than to investigate. Some doors, once opened, can never be
              closed again..."
            </p>
            <button className="blood-btn">Read More</button>
          </div>
        </div>
      </section>

      {/* Story Collection */}
      <section className="story-collection">
        <h2 className="section-title">Enter the Nightmare</h2>
        <div className="story-grid">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="story-item">
              <h3>
                The{" "}
                {
                  ["Haunted Manuscript", "Midnight Caller", "Shadow's Edge"][
                    index
                  ]
                }
              </h3>
              <p>Short horror stories that will keep you awake at night...</p>
              <span className="read-time">13 min read</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Author */}
      <section className="about-author">
        <div className="author-content">
          <h2>About the Author</h2>
          <p>
            In the shadows of ordinary life, I craft tales that blur the line
            between reality and nightmare. With each story, I invite readers to
            explore the darkest corners of their imagination.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">
              Twitter
            </a>
            <a href="#" className="social-icon">
              Instagram
            </a>
            <a href="#" className="social-icon">
              Goodreads
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Join the Nightmare</h2>
          <p>
            Subscribe for monthly horror stories delivered straight to your
            inbox
          </p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email..." />
            <button type="submit" className="blood-btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="horror-footer">
        <div className="spider-web"></div>
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="ghost-float">Explore the Darkness</h3>
            <ul>
              <li>
                <a href="#">Latest Episodes</a>
              </li>
              <li>
                <a href="#">Previous Seasons</a>
              </li>
              <li>
                <a href="#">Behind the Scenes</a>
              </li>
              <li>
                <a href="#">Character Profiles</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="ghost-float">Enter the Nightmare</h3>
            <ul>
              <li>
                <a href="#">Short Stories</a>
              </li>
              <li>
                <a href="#">Fan Theories</a>
              </li>
              <li>
                <a href="#">Merchandise</a>
              </li>
              <li>
                <a href="#">Download App</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="ghost-float">Connect with Evil</h3>
            <ul>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Discord</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Nightmares. All Souls Reserved.</p>
          <div className="blood-drip"></div>
        </div>
      </footer>
    </main>
  );
}
