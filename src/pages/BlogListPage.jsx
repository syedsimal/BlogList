import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';
import posts from '../data/posts';
import './BlogListPage.css';

const BlogListPage = () => {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category') || 'All';
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = useMemo(() => {
        let result = posts;

        if (activeCategory !== 'All') {
            result = result.filter(p => p.category === activeCategory);
        }

        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.title.toLowerCase().includes(q) ||
                p.excerpt.toLowerCase().includes(q) ||
                p.tags.some(t => t.toLowerCase().includes(q))
            );
        }

        return result;
    }, [activeCategory, searchQuery]);

    return (
        <div className="page-content">
            <section className="blog-list-page section">
                <div className="container">
                    {/* Page Header */}
                    <div className="blog-list-page__header">
                        <h1 className="section-title">All Articles</h1>
                        <p className="section-subtitle">
                            Browse our collection of {posts.length} articles across various topics
                        </p>
                        <div className="blog-list-page__search-wrapper">
                            <SearchBar value={searchQuery} onChange={setSearchQuery} />
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="blog-list-page__layout">
                        <div className="blog-list-page__main">
                            {filteredPosts.length > 0 ? (
                                <div className="blog-list-page__grid">
                                    {filteredPosts.map(post => (
                                        <BlogCard key={post.id} post={post} />
                                    ))}
                                </div>
                            ) : (
                                <div className="blog-list-page__empty">
                                    <span className="blog-list-page__empty-icon">⌕</span>
                                    <h3>No articles found</h3>
                                    <p>Try adjusting your search or category filter</p>
                                </div>
                            )}
                        </div>
                        <Sidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogListPage;
