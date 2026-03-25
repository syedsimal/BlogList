# ✦ BlogList — Stories That Inspire

A **professional blog listing website** built with React + Vite, featuring a premium **black and gold** design theme. The site offers a fully responsive, visually stunning experience for browsing, searching, and reading blog articles.

---

## 🖼️ Preview

| Page | Description |
|------|-------------|
| **Homepage** | Hero section with animated headline, stats, featured article, and latest articles grid |
| **Blog List** | All articles with search, category filtering, sidebar with tags and newsletter |
| **Blog Post** | Full article view with hero image, author bio, share buttons, and related posts |
| **About** | Mission statement, -----site statistics, core values, and team member profiles |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/BlogList.git
cd BlogList

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI component library |
| **Vite 7** | Build tool and dev server |
| **React Router v7** | Client-side routing and navigation |
| **Vanilla CSS** | Custom design system with CSS variables |
| **Google Fonts** | Playfair Display (headings) + Inter (body) |

---

## 📁 Project Structure

```
BlogList/
├── public/                     # Static assets
│   └── vite.svg                # Default favicon
│
├── src/                        # Application source code
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Fixed top navigation bar
│   │   ├── Navbar.css          #   ├─ Glassmorphism on scroll
│   │   │                       #   ├─ Mobile hamburger menu
│   │   │                       #   └─ Gold active link indicator
│   │   ├── Footer.jsx          # Multi-column site footer
│   │   ├── Footer.css          #   ├─ Quick links & categories
│   │   │                       #   ├─ Newsletter sign-up form
│   │   │                       #   └─ Social media icons
│   │   ├── BlogCard.jsx        # Blog post preview card
│   │   ├── BlogCard.css        #   ├─ Image with hover zoom effect
│   │   │                       #   ├─ Gold category badge
│   │   │                       #   └─ Author info & read time
│   │   ├── Sidebar.jsx         # Blog list page sidebar
│   │   ├── Sidebar.css         #   ├─ Category filter buttons
│   │   │                       #   ├─ Popular posts widget
│   │   │                       #   ├─ Tags cloud
│   │   │                       #   └─ Newsletter CTA
│   │   ├── SearchBar.jsx       # Search input with clear button
│   │   └── SearchBar.css       #   └─ Focus ring with gold glow
│   │
│   ├── pages/                  # Route-level page components
│   │   ├── HomePage.jsx        # Landing page
│   │   ├── HomePage.css        #   ├─ Hero with gradient + grid pattern
│   │   │                       #   ├─ Featured article highlight
│   │   │                       #   ├─ Latest articles 3-column grid
│   │   │                       #   └─ Newsletter call-to-action
│   │   ├── BlogListPage.jsx    # All articles listing
│   │   ├── BlogListPage.css    #   ├─ Search + category filtering
│   │   │                       #   ├─ 2-column grid with sidebar
│   │   │                       #   └─ Empty state for no results
│   │   ├── BlogPostPage.jsx    # Single article detail view
│   │   ├── BlogPostPage.css    #   ├─ Full-width hero image
│   │   │                       #   ├─ Rich article content area
│   │   │                       #   ├─ Tags, share, author box
│   │   │                       #   ├─ Previous/Next navigation
│   │   │                       #   └─ Related articles section
│   │   ├── AboutPage.jsx       # About the blog/team
│   │   └── AboutPage.css       #   ├─ Stats cards (200+, 50K+, etc.)
│   │                           #   ├─ Mission & values section
│   │                           #   └─ 3×2 team member grid
│   │
│   ├── data/                   # Data layer
│   │   └── posts.js            # 9 sample blog posts with:
│   │                           #   ├─ Full HTML article content
│   │                           #   ├─ Author, date, read time
│   │                           #   ├─ Category & tags
│   │                           #   └─ Unsplash cover images
│   │
│   ├── App.jsx                 # Root component with React Router
│   ├── App.css                 # App layout styles
│   ├── main.jsx                # React entry point
│   └── index.css               # Global design system
│                               #   ├─ CSS variables (colors, spacing, etc.)
│                               #   ├─ Typography scale
│                               #   ├─ Utility classes (.btn-primary, .gold-text)
│                               #   ├─ Keyframe animations
│                               #   └─ Scrollbar & selection styles
│
├── index.html                  # HTML entry with SEO meta tags
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── eslint.config.js            # ESLint rules
```

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0a0a0a` | Main background |
| `--bg-secondary` | `#111111` | Footer, elevated sections |
| `--bg-card` | `#161616` | Card backgrounds |
| `--gold-primary` | `#d4af37` | Primary accent color |
| `--gold-light` | `#f5d76e` | Hover state, gradient end |
| `--gold-dark` | `#b8960c` | Scrollbar, subtle accents |
| `--text-primary` | `#f0f0f0` | Headings, primary text |
| `--text-secondary` | `#9a9a9a` | Body text, descriptions |

### Typography

- **Headings**: Playfair Display (serif) — elegant, editorial feel
- **Body**: Inter (sans-serif) — clean, highly readable

### Visual Effects

- **Glassmorphism**: Navbar blurs on scroll with `backdrop-filter`
- **Card Hover**: Scale up image (1.06×), gold border glow, lift shadow
- **Gold Gradient**: Applied to buttons, headings, and decorative elements
- **Grid Pattern**: Subtle CSS grid overlay on the hero section
- **Scroll Animations**: Fade-in-up reveals via CSS keyframes

---

## 🗺️ Routing

| Route | Page | Description |
|-------|------|-------------|
| `/` | `HomePage` | Landing page with hero, featured, and latest posts |
| `/blog` | `BlogListPage` | All posts with search, filter, and sidebar |
| `/blog/:slug` | `BlogPostPage` | Individual article with full content |
| `/about` | `AboutPage` | About the publication and team |

---

## 📝 Blog Data Schema

Each post in `src/data/posts.js` follows this structure:

```javascript
{
  id: 1,                          // Unique identifier
  slug: "article-url-slug",       // URL-friendly identifier
  title: "Article Title",         // Display title
  excerpt: "Short description",   // Card preview text
  content: "<p>HTML content</p>", // Full article body (HTML)
  author: "Author Name",         // Writer's name
  authorAvatar: "AN",            // Author initials
  category: "Development",       // Post category
  tags: ["React", "JavaScript"], // Related tags
  coverImage: "https://...",     // Unsplash cover image URL
  date: "March 5, 2026",        // Publication date
  readTime: "6 min read"        // Estimated read time
}
```

### Categories

- 🎨 **Design** — Web design, UI/UX, visual trends
- 💻 **Development** — React, CSS, Node.js, APIs
- 🤖 **Technology** — AI, cybersecurity, innovation
- 📈 **Business** — Startups, entrepreneurship, leadership
- 🌿 **Lifestyle** — Productivity, remote work, mindfulness

---

## ✨ Key Features

- **Responsive Design** — Fully adapts from mobile (320px) to desktop (1440px+)
- **Search & Filter** — Real-time search by title, excerpt, or tags with category filtering
- **Article Navigation** — Previous/Next post links within the detail page
- **Related Posts** — Automatically shows posts from the same category
- **Newsletter CTAs** — Email sign-up forms in footer, sidebar, and homepage
- **SEO Ready** — Proper meta tags, heading hierarchy, and semantic HTML
- **Zero Dependencies** — No UI libraries; all styling done with vanilla CSS
- **Micro-Animations** — Hover effects, fade-ins, and smooth transitions throughout

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
