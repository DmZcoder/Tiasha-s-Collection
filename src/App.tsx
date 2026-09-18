import { useState } from 'react'

const collections = [
  { name: 'Winter Collection', icon: '❄', text: 'Warm layers with a soft boutique feel.' },
  { name: 'Summer Collection', icon: '☼', text: 'Light, effortless pieces for bright days.' },
  { name: 'New Arrivals', icon: '✦', text: 'Fresh looks curated for the season.' },
]

const dresses = [
  { image: '/assets/dress-01.png', label: 'Featured Look' },
  { image: '/assets/dress-04.png', label: 'Signature Style' },
  { image: '/assets/dress-05.png', label: 'Elegant Edit' },
  { image: '/assets/dress-06.png', label: 'Soft Statement' },
  { image: '/assets/dress-07.png', label: 'The Collection' },
]

const whatsapp = '01716793693'
const whatsappLink = `https://wa.me/8801716793693`

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [webhook, setWebhook] = useState('')
  const [jsonConfig, setJsonConfig] = useState(`{
  "event": "tiasha_collection",
  "source": "website",
  "action": "new_contact"
}`)

  const goTo = (id: string) => {
    setActiveSection(id)
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <div className={`backdrop ${menuOpen ? 'show' : ''}`} onClick={() => setMenuOpen(false)} />

      <aside className={`side-panel ${menuOpen ? 'open' : ''}`}>
        <div className="side-brand">
          <img src="/assets/logo.png" alt="Tiasha's Collection logo" />
          <div>
            <span>TIASHA'S</span>
            <strong>COLLECTION</strong>
          </div>
        </div>

        <nav>
          <button className={activeSection === 'home' ? 'active' : ''} onClick={() => goTo('home')}>⌂ <span>Home</span></button>
          <button onClick={() => goTo('collections')}>❄ <span>Winter Collection</span></button>
          <button onClick={() => goTo('collections')}>☼ <span>Summer Collection</span></button>
          <button onClick={() => goTo('new-arrivals')}>✦ <span>New Arrivals</span></button>
          <button onClick={() => goTo('about')}>♡ <span>About</span></button>
          <button onClick={() => goTo('automation')}>⌁ <span>Automation</span></button>
          <button onClick={() => goTo('contact')}>☎ <span>Contact</span></button>
        </nav>

        <div className="side-footer">
          <span>WhatsApp</span>
          <a href={whatsappLink} target="_blank" rel="noreferrer">{whatsapp}</a>
        </div>
      </aside>

      <header className="topbar">
        <button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
          <span />
          <span />
          <span />
        </button>

        <div className="top-logo">
          <img src="/assets/logo.png" alt="Tiasha's Collection" />
        </div>

        <a className="top-contact" href={whatsappLink} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">A CURATED FASHION STORY</p>
            <h1>Wear your<br /><em>beautiful</em> story.</h1>
            <p className="hero-text">
              Thoughtfully selected styles, soft details and timeless silhouettes
              from Tiasha's Collection.
            </p>
            <button className="primary-button" onClick={() => goTo('collections')}>
              Explore Collection <span>↗</span>
            </button>
          </div>

          <div className="hero-image">
            <img src="/assets/hero-banner.png" alt="Tiasha's Collection fashion banner" />
            {/* <div className="hero-tag">TIASHA'S<br />COLLECTION</div> */}
          </div>
        </section>

        <section id="collections" className="intro-section">
          <div>
            <p className="eyebrow">THE EDIT</p>
            <h2>Curated for every season.</h2>
          </div>
          <p>
            Discover a collection built around effortless elegance,
            feminine details and modern everyday fashion.
          </p>
        </section>

        <section className="season-grid">
          {collections.map((item) => (
            <article className="season-card" key={item.name}>
              <span className="season-icon">{item.icon}</span>
              <p>{item.name}</p>
              <h3>{item.text}</h3>
              <span className="card-arrow">↗</span>
            </article>
          ))}
        </section>

        <section id="new-arrivals" className="editorial-section">
          <div className="editorial-heading">
            <p className="eyebrow">THE TIASHA EDIT</p>
            <h2>Every piece has<br /><em>a story.</em></h2>
            <p>
              Fabrics, movement and little details come together to create
              something meant to be remembered.
            </p>
          </div>

          <div className="editorial-stories">

            <article className="editorial-row row-right">
              <div className="editorial-text">
                <span className="story-number">01</span>
                <p className="story-label">THE FIRST IMPRESSION</p>
                <h3>Softness that<br /><em>speaks quietly.</em></h3>
                <p>
                  A graceful silhouette, gentle movement and a fabric that
                  feels as effortless as it looks.
                </p>
                <blockquote>
                  “Elegance is not loud.<br />It simply stays with you.”
                </blockquote>
              </div>
              <div className="editorial-image">
                <img src="/assets/dress-01.png" alt="Tiasha's Collection featured dress" />
              </div>
            </article>

            <article className="editorial-row row-left">
              <div className="editorial-image">
                <img src="/assets/dress-04.png" alt="Tiasha's Collection signature dress" />
              </div>
              <div className="editorial-text">
                <span className="story-number">02</span>
                <p className="story-label">A QUIET STATEMENT</p>
                <h3>Made for<br /><em>beautiful moments.</em></h3>
                <p>
                  The kind of cloth that follows your movement naturally,
                  giving every simple moment a little more grace.
                </p>
                <blockquote>
                  “Wear what makes<br />you feel like yourself.”
                </blockquote>
              </div>
            </article>

            <article className="editorial-row row-right">
              <div className="editorial-text">
                <span className="story-number">03</span>
                <p className="story-label">THE SOFT EDIT</p>
                <h3>Beauty in<br /><em>every thread.</em></h3>
                <p>
                  Delicate texture meets an easy feminine form, creating
                  a look that feels both modern and timeless.
                </p>
                <blockquote>
                  “Some fabrics don't just dress you—<br />they tell your story.”
                </blockquote>
              </div>
              <div className="editorial-image">
                <img src="/assets/dress-05.png" alt="Tiasha's Collection elegant dress" />
              </div>
            </article>

            <article className="editorial-row row-left">
              <div className="editorial-image">
                <img src="/assets/dress-06.png" alt="Tiasha's Collection soft statement dress" />
              </div>
              <div className="editorial-text">
                <span className="story-number">04</span>
                <p className="story-label">THE DETAILS</p>
                <h3>Simple lines,<br /><em>lasting charm.</em></h3>
                <p>
                  Thoughtful details turn an everyday silhouette into
                  something personal, polished and unmistakably yours.
                </p>
                <blockquote>
                  “Let the little details<br />say everything.”
                </blockquote>
              </div>
            </article>

            <article className="editorial-row row-right">
              <div className="editorial-text">
                <span className="story-number">05</span>
                <p className="story-label">THE FINAL NOTE</p>
                <h3>Where style<br /><em>becomes a feeling.</em></h3>
                <p>
                  A final piece for those days when you want your clothes
                  to carry a little more emotion.
                </p>
                <blockquote>
                  “Dress in the mood<br />you want to remember.”
                </blockquote>
              </div>
              <div className="editorial-image">
                <img src="/assets/dress-07.png" alt="Tiasha's Collection final editorial look" />
              </div>
            </article>

          </div>
        </section>

        <section id="about" className="story-section">
          <div className="story-mark">T</div>
          <div>
            <p className="eyebrow">OUR STORY</p>
            <h2>Simple. Feminine.<br /><em>Unforgettable.</em></h2>
            <p>
              Tiasha's Collection is a boutique fashion space created for
              beautiful pieces that feel personal, effortless and timeless.
            </p>
          </div>
        </section>

        <section id="automation" className="automation-section automation-hidden" aria-hidden="true">
          <div />
        </section>

        <section id="contact" className="contact-section">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Have something<br /><em>beautiful</em> in mind?</h2>
          <a className="whatsapp-button" href={whatsappLink} target="_blank" rel="noreferrer">
            Chat on WhatsApp <span>↗</span>
          </a>
          <p className="phone">{whatsapp}</p>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Tiasha's Collection</span>
        <span>Made with intention.</span>
      </footer>
    </div>
  )
}

export default App
