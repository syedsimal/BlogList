import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import posts from '../data/posts';
import './HomePage.css';

const HomePage = () => {
    const featuredPost = posts[0];
    const recentPosts = posts.slice(1, 7);

    return (
        <div className="page-content">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero__bg">
                    <div className="hero__gradient"></div>
                    <div className="hero__grid-pattern"></div>
                </div>
                <div className="hero__content container">
                    <span className="hero__badge">✦ Welcome to BlogList</span>
                    <h1 className="hero__title">
                        Stories That <span className="gold-text">Inspire</span>,<br />
                        Ideas That <span className="gold-text">Transform</span>
                    </h1>
                    <p className="hero__subtitle">
                        Discover carefully curated articles on technology, design, business, and modern living.
                        Written by industry experts for the curious mind.
                    </p>
                    <div className="hero__actions">
                        <Link to="/blog" className="btn-primary">
                            Explore Articles →
                        </Link>
                        <a href="#featured" className="btn-outline">
                            Featured Posts
                        </a>
                    </div>
                    <div className="hero__stats">
                        <div className="hero__stat">
                            <span className="hero__stat-num">200+</span>
                            <span className="hero__stat-label">Articles</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-num">50K+</span>
                            <span className="hero__stat-label">Readers</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-num">15</span>
                            <span className="hero__stat-label">Authors</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="featured section" id="featured">
                <div className="container">
                    <h2 className="section-title">Featured Article</h2>
                    <p className="section-subtitle">Our top pick for you this week</p>

                    <div className="featured__hero-card">
                        <Link to={`/blog/${featuredPost.slug}`} className="featured__image-wrapper">
                            <img src={featuredPost.coverImage} alt={featuredPost.title} className="featured__image" />
                            <div className="featured__image-overlay"></div>
                        </Link>
                        <div className="featured__info">
                            <span className="featured__category">{featuredPost.category}</span>
                            <Link to={`/blog/${featuredPost.slug}`}>
                                <h3 className="featured__title">{featuredPost.title}</h3>
                            </Link>
                            <p className="featured__excerpt">{featuredPost.excerpt}</p>
                            <div className="featured__meta">
                                <div className="featured__author">
                                    <div className="featured__avatar">{featuredPost.authorAvatar}</div>
                                    <div>
                                        <span className="featured__author-name">{featuredPost.author}</span>
                                        <span className="featured__date">{featuredPost.date} · {featuredPost.readTime}</span>
                                    </div>
                                </div>
                                <Link to={`/blog/${featuredPost.slug}`} className="btn-primary featured__cta">
                                    Read Article →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Posts Grid */}
            <section className="latest section">
                <div className="container">
                    <h2 className="section-title">Latest Articles</h2>
                    <p className="section-subtitle">Fresh perspectives on topics that matter</p>

                    <div className="latest__grid">
                        {recentPosts.map(post => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>

                    <div className="latest__more">
                        <Link to="/blog" className="btn-outline">
                            View All Articles →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter-section" id="newsletter">
                <div className="container">
                    <div className="newsletter-card">
                        <div className="newsletter-card__content">
                            <span className="newsletter-card__icon">✦</span>
                            <h2 className="newsletter-card__title">
                                Never Miss a <span className="gold-text">Story</span>
                            </h2>
                            <p className="newsletter-card__text">
                                Join 50,000+ readers. Get the latest articles delivered straight to your inbox every week.
                            </p>
                            <div className="newsletter-card__form">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="newsletter-card__input"
                                />
                                <button className="btn-primary newsletter-card__btn">Subscribe</button>
                            </div>
                            <p className="newsletter-card__disclaimer">
                                No spam, unsubscribe anytime. We respect your privacy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
