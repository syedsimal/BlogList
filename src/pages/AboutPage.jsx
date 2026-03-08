import './AboutPage.css';

const AboutPage = () => {
    const team = [
        { name: "Sarah Mitchell", role: "Chief Editor & Designer", initials: "SM", bio: "10+ years in web design and content strategy." },
        { name: "James Chen", role: "Lead Developer", initials: "JC", bio: "Full-stack developer and React enthusiast." },
        { name: "Elena Rodriguez", role: "Tech Journalist", initials: "ER", bio: "Covering AI, cybersecurity, and innovation." },
        { name: "Marcus Thompson", role: "Backend Expert", initials: "MT", bio: "Specializing in scalable systems and APIs." },
        { name: "Aisha Patel", role: "Lifestyle Writer", initials: "AP", bio: "Exploring productivity, culture, and remote work." },
        { name: "David Kim", role: "Business Analyst", initials: "DK", bio: "Startup founder turned content strategist." },
    ];

    return (
        <div className="page-content">
            <section className="about section">
                <div className="container">
                    {/* Header */}
                    <div className="about__header">
                        <span className="about__badge">✦ About Us</span>
                        <h1 className="about__title">
                            We Believe in the Power of <span className="gold-text">Great Stories</span>
                        </h1>
                        <p className="about__subtitle">
                            BlogList is a community-driven publication where industry experts share their knowledge,
                            insights, and experiences. We cover technology, design, business, and modern lifestyle
                            for curious minds everywhere.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="about__stats">
                        <div className="about__stat-card">
                            <span className="about__stat-num">200+</span>
                            <span className="about__stat-label">Articles Published</span>
                        </div>
                        <div className="about__stat-card">
                            <span className="about__stat-num">50K+</span>
                            <span className="about__stat-label">Monthly Readers</span>
                        </div>
                        <div className="about__stat-card">
                            <span className="about__stat-num">15</span>
                            <span className="about__stat-label">Expert Writers</span>
                        </div>
                        <div className="about__stat-card">
                            <span className="about__stat-num">5</span>
                            <span className="about__stat-label">Categories</span>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="about__mission">
                        <div className="about__mission-content">
                            <h2 className="section-title">Our Mission</h2>
                            <p className="about__mission-text">
                                We started BlogList with a simple belief: knowledge should be accessible, engaging, and actionable.
                                Too much valuable information is locked behind jargon and paywalls. We aim to change that.
                            </p>
                            <p className="about__mission-text">
                                Every article we publish is carefully crafted by experts who are passionate about their fields.
                                Whether you're a developer looking to sharpen your skills, a designer seeking inspiration, or
                                an entrepreneur building the next big thing — BlogList is your resource.
                            </p>
                        </div>
                        <div className="about__values">
                            <div className="about__value">
                                <span className="about__value-icon">✦</span>
                                <h4>Quality First</h4>
                                <p>Every article is reviewed and refined before publication</p>
                            </div>
                            <div className="about__value">
                                <span className="about__value-icon">◈</span>
                                <h4>Expert Voices</h4>
                                <p>Written by professionals with real-world experience</p>
                            </div>
                            <div className="about__value">
                                <span className="about__value-icon">◇</span>
                                <h4>Community Driven</h4>
                                <p>Topics shaped by what our readers want to learn</p>
                            </div>
                        </div>
                    </div>

                    {/* Team */}
                    <div className="about__team">
                        <h2 className="section-title">Meet the Team</h2>
                        <p className="section-subtitle">The people behind the stories</p>
                        <div className="about__team-grid">
                            {team.map(member => (
                                <div key={member.name} className="about__team-card">
                                    <div className="about__team-avatar">{member.initials}</div>
                                    <h4 className="about__team-name">{member.name}</h4>
                                    <span className="about__team-role">{member.role}</span>
                                    <p className="about__team-bio">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
