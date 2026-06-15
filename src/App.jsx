import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './index.css';
import { projectsData, blogsData } from './content.js';

const TABS = [
  ['all', 'All projects'],
  ['ai',   'AI / ML'],
  ['web', 'Systems'],
];

// Pure SVG GitHub Icon Component
function Github({ size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// Pure SVG LinkedIn Icon Component
function Linkedin({ size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function BlinkingCursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn(v => !v), 530);
    return () => clearInterval(t);
  }, []);
  return <span className={`cursor ${on ? 'cursor--on' : 'cursor--off'}`} />;
}

function LabNoteView({ slug, onBack }) {
  // Find the active blog post based on the current slug route
  const blog = blogsData.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="container--narrow lab-notes">
        <p>Log entry not found.</p>
        <button onClick={onBack} className="nav__btn nav__btn--active" style={{ marginTop: '20px' }}>← Return to Lab Notes</button>
      </div>
    );
  }

  return (
    <div className="container--narrow lab-notes">
      {/* Navigation Header */}
      <div style={{ marginBottom: '40px' }}>
        <button onClick={onBack} className="nav__btn nav__btn--active" style={{ textTransform: 'uppercase', fontFamily: 'monospace', fontSize: '11px' }}>
          ← Back to Lab Notes
        </button>
      </div>

      {/* Article Meta */}
      <div className="post__meta" style={{ marginBottom: '16px' }}>
        {[blog.date, `#${blog.hash}`, blog.readTime].map((item, i) => (
          <span key={i} className="post__meta-item">{item}</span>
        ))}
      </div>

      {/* Article Typography */}
      <h1 className="hero__h1-bold" style={{ fontSize: '32px', marginBottom: '24px', lineHeight: '1.2' }}>
        {blog.title}
      </h1>
      
      <p className="post__excerpt" style={{ fontSize: '16px', fontStyle: 'italic', marginBottom: '32px', color: 'var(--slate-500)' }}>
        {blog.excerpt}
      </p>

      {/* Unique Featured Image (Only renders if blog.image exists in content.js) */}
      {blog.image && (
        <div style={{ marginBottom: '40px', width: '100%', overflow: 'hidden', borderRadius: '12px', border: '1px solid var(--slate-200)' }}>
          <img 
            src={blog.image} 
            alt={blog.title} 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </div>
      )}

      {/* Main Content Body */}
      <div className="lab-note-markdown" style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--navy)' }}>
        <p style={{ whiteSpace: 'pre-line' }}>
          {blog.content}
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [activeTab, setActiveTab]     = useState('all');

  const filtered = activeTab === 'all'
    ? projectsData
    : projectsData.filter(p => p.cat === activeTab);

  return (
    <div className="page-root">
      <div className="grid-overlay" />

      <div className="page-inner">

        {/* ── NAV ── */}
        <header className="container">
          <nav className="nav">
            <span className="nav__wordmark">Jumaana Aslam</span>
            <div className="nav__links">
              {[['home', 'Work'], ['blog', 'Lab Notes']].map(([view, label]) => (
                <button
                  key={view}
                  onClick={() => setCurrentView(view)}
                  className={`nav__btn ${currentView === view || (view === 'blog' && currentView.startsWith('blog-')) ? 'nav__btn--active' : ''}`}
                >
                  {label}
                </button>
              ))}
              <a href="https://github.com/Jumaana-bit" target="_blank" rel="noopener noreferrer" className="nav__icon-link">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/jumaana-aslam-424b55279/" target="_blank" rel="noopener noreferrer" className="nav__icon-link nav__icon-link--linkedin">
                <Linkedin size={16} />
              </a>
              <a href="mailto:jumaana.aslam@gmail.com" className="nav__contact">
                Contact
              </a>
            </div>
          </nav>
        </header>

        <AnimatePresence mode="wait">
          {currentView === 'home' ? (

            <motion.div key="home" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }}>

              {/* ── HERO ── */}
              <section className="container">
                <div className="hero">
                  <div className="hero__grid">
                    <div>
                      <p className="hero__eyebrow">
                        <span className="hero__eyebrow-line" />
                        MEng · University of Toronto
                      </p>
                      <h1 className="hero__h1-bold">
                        Engineering<br />
                        intelligent systems<BlinkingCursor />
                      </h1>
                      <h1 className="hero__h1-light">& scalable architecture.</h1>
                      <p className="hero__sub">
                        Software engineer with a focus on ML systems, cloud infrastructure, and full-stack development. Incoming MEng at the University of Toronto.
                      </p>
                    </div>
                    <div className="hero__canvas">
                      <iframe
                        src="https://my.spline.design/cutecomputerfollowcursor-Z7olPvfneE9xLpiNQoUQRRTe/"
                        title="3D plexus visualization"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* ── RIBBON ── */}
              <div className="ribbon">
                <div className="container ribbon__inner">
                  <p className="ribbon__label">Engineering Philosophy</p>
                  <p className="ribbon__text">Disciplined, maintainable systems built on architectural clarity.</p>
                </div>
              </div>

              {/* ── PROJECTS ── */}
              <section className="container projects">
                <div className="filter-bar">
                  {TABS.map(([tab, label]) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`filter-btn ${activeTab === tab ? 'filter-btn--active' : ''}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <motion.div layout className="cards-grid">
                  {filtered.map(project => (
                    <motion.a
                      layout
                      key={project.id}
                      href={project.link || '#'}
                      target={project.link ? '_blank' : undefined}
                      rel={project.link ? 'noopener noreferrer' : undefined}
                      className="card"
                    >
                      <div>
                        <div className="card__header">
                          <span className="card__tag">{project.tag}</span>
                          {project.link
                            ? <a href={project.link} target="_blank" rel="noopener noreferrer" className="card__icon-link" onClick={e => e.stopPropagation()}><Github size={13} /></a>
                            : <ArrowUpRight size={15} color="var(--slate-400)" />
                          }
                        </div>
                        <h3 className="card__title">{project.title}</h3>
                        <p className="card__desc">{project.desc}</p>
                        <p className="card__stack">{project.stack}</p>
                      </div>

                      <div className="card__metrics">
                        {[{ val: project.metric1, label: project.label1 }, { val: project.metric2, label: project.label2 }].map((m, i) => (
                          <div key={i} className="card__metric">
                            <p className="card__metric-val">{m.val}</p>
                            <p className="card__metric-label">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </section>

            </motion.div>

          ) : currentView === 'blog' ? (

            /* ── LAB NOTES LIST ── */
            <motion.div key="blog" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }}>
              <div className="container--narrow lab-notes">
                <div className="lab-notes__heading">
                  <h2 className="lab-notes__title">
                    Lab Notes & <strong>Research Logs</strong>
                  </h2>
                </div>

                <div className="posts-list">
                  {blogsData.map(blog => (
                    <article 
                      key={blog.id} 
                      className="post" 
                      style={{ cursor: 'pointer' }}
                      onClick={() => setCurrentView(`blog-${blog.slug}`)}
                    >
                      <div className="post__meta">
                        {[blog.date, `#${blog.hash}`, blog.readTime].map((item, i) => (
                          <span key={i} className="post__meta-item">{item}</span>
                        ))}
                      </div>
                      <h3 className="post__title">{blog.title}</h3>
                      <p className="post__excerpt">{blog.excerpt}</p>
                      {blog.snippet && (
                        <div className="post__snippet">
                          <code>{blog.snippet}</code>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            </motion.div>

          ) : (

            /* ── DEDICATED FULL LAB NOTE VIEW ── */
            <motion.div key={currentView} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }}>
              <LabNoteView 
                slug={currentView.replace('blog-', '')} 
                onBack={() => setCurrentView('blog')} 
              />
            </motion.div>

          )}
        </AnimatePresence>

        {/* ── FOOTER ── */}
        <footer className="container footer">
          <div className="footer__panel">
            <div className="footer__status">
              <span className="footer__dot-wrap">
                <span className="footer__dot-ping" />
                <span className="footer__dot-core" />
              </span>
              <span className="footer__status-label">Open to opportunities</span>
            </div>
            <div className="footer__right">
              {[['Next up', 'MEng · University of Toronto'], ['Based in', 'Toronto, Ontario']].map(([label, val]) => (
                <div key={label}>
                  <p className="footer__stat-label">{label}</p>
                  <p className="footer__stat-val">{val}</p>
                </div>
              ))}
              <div className="footer__social">
                <a href="https://github.com/Jumaana-bit" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                  <Github size={15} />
                </a>
                <a href="https://www.linkedin.com/in/jumaana-aslam-424b55279/" target="_blank" rel="noopener noreferrer" className="footer__social-link footer__social-link--linkedin">
                  <Linkedin size={15} />
                </a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}