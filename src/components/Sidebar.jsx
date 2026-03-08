import { Link } from 'react-router-dom';
import { categories, popularPosts } from '../data/posts';
import './Sidebar.css';

const Sidebar = ({ activeCategory, onCategoryChange }) => {
    const tags = ["React", "JavaScript", "CSS", "Node.js", "AI", "Design", "Startup", "Productivity", "Web Design", "Performance"];

    return (
        <aside className="sidebar">
            {/* Categories */}
            <div className="sidebar__section">
                <h3 className="sidebar__heading">Categories</h3>
                <ul className="sidebar__categories">
                    {categories.map(cat => (
                        <li key={cat}>
                            <button
                                className={`sidebar__cat-btn ${activeCategory === cat ? 'sidebar__cat-btn--active' : ''}`}
                                onClick={() => onCategoryChange(cat)}
                            >
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Popular Posts */}
            <div className="sidebar__section">
                <h3 className="sidebar__heading">Popular Posts</h3>
                <div className="sidebar__popular">
                    {popularPosts.map((post, i) => (
                        <Link to={`/blog/${post.slug}`} key={post.id} className="sidebar__popular-item">
                            <span className="sidebar__popular-num">0{i + 1}</span>
                            <div>
                                <h4 className="sidebar__popular-title">{post.title}</h4>
                                <span className="sidebar__popular-date">{post.date}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Tags */}
            <div className="sidebar__section">
                <h3 className="sidebar__heading">Tags</h3>
                <div className="sidebar__tags">
                    {tags.map(tag => (
                        <span key={tag} className="sidebar__tag">{tag}</span>
                    ))}
                </div>
            </div>

            {/* Newsletter CTA */}
            <div className="sidebar__section sidebar__newsletter" id="newsletter">
                <div className="sidebar__newsletter-icon">✉</div>
                <h3 className="sidebar__newsletter-title">Stay Updated</h3>
                <p className="sidebar__newsletter-text">
                    Subscribe to our newsletter for the latest articles and insights.
                </p>
                <input
                    type="email"
                    placeholder="your@email.com"
                    className="sidebar__newsletter-input"
                />
                <button className="btn-primary sidebar__newsletter-btn">Subscribe</button>
            </div>
        </aside>
    );
};

export default Sidebar;
