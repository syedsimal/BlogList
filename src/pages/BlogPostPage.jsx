import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import posts from '../data/posts';
import './BlogPostPage.css';

const BlogPostPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = posts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="page-content">
                <div className="post-not-found container">
                    <h2>Article Not Found</h2>
                    <p>The article you're looking for doesn't exist.</p>
                    <Link to="/blog" className="btn-primary">Back to Blog</Link>
                </div>
            </div>
        );
    }

    const relatedPosts = posts
        .filter(p => p.id !== post.id && p.category === post.category)
        .slice(0, 3);

    const currentIndex = posts.findIndex(p => p.id === post.id);
    const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
    const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

    return (
        <div className="page-content">
            {/* Hero */}
            <section className="post-hero">
                <div className="post-hero__bg">
                    <img src={post.coverImage} alt={post.title} className="post-hero__image" />
                    <div className="post-hero__overlay"></div>
                </div>
                <div className="post-hero__content container">
                    <button onClick={() => navigate(-1)} className="post-hero__back">
                        ← Back
                    </button>
                    <span className="post-hero__category">{post.category}</span>
                    <h1 className="post-hero__title">{post.title}</h1>
                    <div className="post-hero__meta">
                        <div className="post-hero__author">
                            <div className="post-hero__avatar">{post.authorAvatar}</div>
                            <span>{post.author}</span>
                        </div>
                        <span className="post-hero__divider">·</span>
                        <span>{post.date}</span>
                        <span className="post-hero__divider">·</span>
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </section>

            {/* Article Body */}
            <article className="post-body section">
                <div className="container">
                    <div className="post-body__wrapper">
                        <div
                            className="post-body__content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Tags */}
                        <div className="post-body__tags">
                            {post.tags.map(tag => (
                                <span key={tag} className="post-body__tag">{tag}</span>
                            ))}
                        </div>

                        {/* Share */}
                        <div className="post-body__share">
                            <span className="post-body__share-label">Share this article</span>
                            <div className="post-body__share-links">
                                <a href="#" className="post-body__share-btn" aria-label="Share on Twitter">𝕏</a>
                                <a href="#" className="post-body__share-btn" aria-label="Share on LinkedIn">in</a>
                                <a href="#" className="post-body__share-btn" aria-label="Copy link">⊕</a>
                            </div>
                        </div>

                        {/* Author Box */}
                        <div className="post-body__author-box">
                            <div className="post-body__author-avatar">{post.authorAvatar}</div>
                            <div className="post-body__author-info">
                                <span className="post-body__author-label">Written by</span>
                                <h4 className="post-body__author-name">{post.author}</h4>
                                <p className="post-body__author-bio">
                                    Passionate writer and expert in {post.category.toLowerCase()}.
                                    Loves sharing insights and exploring new ideas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Navigation */}
            <section className="post-nav">
                <div className="container">
                    <div className="post-nav__inner">
                        {prevPost ? (
                            <Link to={`/blog/${prevPost.slug}`} className="post-nav__link post-nav__link--prev">
                                <span className="post-nav__direction">← Previous Article</span>
                                <span className="post-nav__link-title">{prevPost.title}</span>
                            </Link>
                        ) : <div></div>}
                        {nextPost ? (
                            <Link to={`/blog/${nextPost.slug}`} className="post-nav__link post-nav__link--next">
                                <span className="post-nav__direction">Next Article →</span>
                                <span className="post-nav__link-title">{nextPost.title}</span>
                            </Link>
                        ) : <div></div>}
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="post-related section">
                    <div className="container">
                        <h2 className="section-title">Related Articles</h2>
                        <p className="section-subtitle">More stories in {post.category}</p>
                        <div className="post-related__grid">
                            {relatedPosts.map(p => (
                                <BlogCard key={p.id} post={p} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default BlogPostPage;
