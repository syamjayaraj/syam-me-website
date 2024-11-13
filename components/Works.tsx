export default function Works() {
  return (
    <div className="works">
      <h2>Works</h2>
      <img src="/assets/svg/line.svg" className="line-icon" />
      <div className="row">
        <div className="col col-md-6">
          <div className="card custom-card">
            <a href="https://codedesign.ai" target="_blank" rel="noreferrer">
              <img
                className="card-img"
                src="/assets/images/works/codedesign.jpg"
              />
              <div className="card-body">
                <div className="card-title title">Codedesign.ai</div>
                <p className="category">
                  No-code platform to build, launch & export pages
                </p>
                <p className="card-text">
                  Under Redmonark Technologies, we have developed a No-code
                  platform to help developers design websites easier.
                </p>
                <p className="card-text">
                  Tools used: React.js, Express.js, MongoDB, Cloudinary, Docker,
                  AWS.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col col-md-6">
          <div className="card custom-card">
            <a href="https://codeariv.com" target="_blank" rel="noreferrer">
              <img
                className="card-img"
                src="/assets/images/works/codeariv.jpg"
              />
              <div className="card-body">
                <div className="card-title title">CodeARIV.com</div>
                <p className="category">Blog</p>
                <p className="card-text">
                  A technology blog mainly dealing with the latest trends in
                  Full-stack web and mobile app development.
                </p>
                <p className="card-text">
                  Topics: React.js, Next.js, Express.js, MongoDB, Strapi CMS and
                  more.
                </p>

                <div className="social-accounts">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a
                        href="https://www.youtube.com/@CodeARIV"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-sm btn-default btn-lg"
                      >
                        <i className="bi bi-youtube"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.youtube.com/@CodeARIV_Malayalam"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-sm btn-default btn-lg"
                      >
                        <i className="bi bi-youtube"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.github.com/codeariv"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-sm btn-default btn-lg"
                      >
                        <i className="bi bi-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col col-md-6">
          <div className="card custom-card">
            <a href="https://gymtie.com" target="_blank" rel="noreferrer">
              <img className="card-img" src="/assets/images/works/gymtie.png" />
              <div className="card-body">
                <div className="card-title title">GymTie App</div>
                <p className="category">Android App</p>
                <p className="card-text">
                  Gym management app where gym owners can manage memberships and
                  schedules
                </p>
                <p className="card-text">
                  Tools used: Expo, React Native, Strapi CMS, GraphQL, MySQL,
                  TypeScript, Digitalocean.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col col-md-6">
          <div className="card custom-card">
            <a
              href="https://play.google.com/store/apps/details?id=com.onnich.parambath"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="card-img"
                src="/assets/images/works/parambathapp.png"
              />
              <div className="card-body">
                <div className="card-title title">Parambath App</div>
                <p className="category">Android App</p>
                <p className="card-text">
                  It is designed to provide instant access to services and
                  notifications for people living in Thalakkulathur village
                </p>
                <p className="card-text">
                  The app is completely in the Malayalam language.
                </p>
                <p className="card-text">
                  Tools used: Expo, React Native, Strapi CMS, MySQL, TypeScript,
                  Digitalocean.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col col-md-6">
          <div className="card custom-card">
            <a href="https://youngmenu.com" target="_blank" rel="noreferrer">
              <img
                className="card-img"
                src="/assets/images/works/youngmenu.jpg"
              />
              <div className="card-body">
                <div className="card-title title">YoungMenu.com</div>
                <p className="category">
                  Virtual menu card for Restaurants and home bakers
                </p>
                <p className="card-text">
                  Virtual menu cards are easy to maintain and update. It can
                  also provide the minute details of each item in a restaurant.
                </p>
                <p className="card-text">
                  Tools used: Next.js, Strapi CMS, MySQL, Vercel, Digitalocean.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col col-md-6">
          <div className="card custom-card">
            <a href="https://kuty.me" target="_blank" rel="noreferrer">
              <img className="card-img" src="/assets/images/works/kuty.png" />
              <div className="card-body">
                <div className="card-title title">Kuty.me</div>
                <p className="category">URL Shortener</p>
                <p className="card-text">
                  People don&apos;t like long and messy URLs. Kuty.me will help
                  you to shorten any lengthy URL in just one click.
                </p>
                <p className="card-text">
                  Other features in Kuty.me are Whatsapp link generator and Quiz
                  maker
                </p>
                <p className="card-text">
                  Tools used: Next.js, Express.js, MongoDB, Cloudinary, Vercel,
                  Digitalocean.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
