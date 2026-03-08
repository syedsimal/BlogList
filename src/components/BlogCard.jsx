import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ post, featured = false }) => {
    return (
        <article className={`blog-card ${featured ? 'blog-card--featured' : ''}`}>
            <Link to={`/blog/${post.slug}`} className="blog-card__image-wrapper">
                <img
                    src={post.coverImage}
                    alt={post.title}
                    className="blog-card__image"
                    loading="lazy"
                />
                <div className="blog-card__image-overlay"></div>
                <span className="blog-card__category">{post.category}</span>
            </Link>
            <div className="blog-card__content">
                <div className="blog-card__meta">
                    <span className="blog-card__date">{post.date}</span>
                    <span className="blog-card__dot">·</span>
                    <span className="blog-card__read-time">{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.slug}`}>
                    <h3 className="blog-card__title">{post.title}</h3>
                </Link>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__footer">
                    <div className="blog-card__author">
                        <div className="blog-card__avatar">{post.authorAvatar}</div>
                        <span className="blog-card__author-name">{post.author}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="blog-card__read-more">
                        Read More →
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
