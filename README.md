# Healthy Living Hub 🌱

> **A Complete, Professional & Responsive Lifestyle & Wellness Blog**  
> Developed for College Digital Marketing Coursework: Keyword Research, On-Page SEO, Content Architecture & Google Search Console Analysis.

---

## 📌 Project Overview

- **Blog Name:** Healthy Living Hub
- **Topic:** Healthy Lifestyle & Wellness
- **Target Audience:** College students, busy professionals, and mindful individuals looking for sustainable daily wellness habits without extreme diets or exhausting routines.
- **Technology Stack:** HTML5 (Semantic), CSS3 (Custom Properties & Modern Grid/Flexbox), Vanilla JavaScript (Modular ES6).
- **Architecture:** 100% Static Web Application (zero backend or database dependencies). Fully optimized for instant deployment to **GitHub Pages**, Netlify, or Vercel.

---

## 🎨 Design System & Editorial Aesthetics

- **Color Palette:**
  - Soft Greens: `#245e43` (Primary Forest), `#3a7d5c` (Mid Green), `#52b788` (Vibrant Mint/Sage), `#eaf4ee` (Subtle Mint Tint)
  - Light Beige & Warm Neutrals: `#faf9f6` (Body Warm White), `#f4efe6` (Warm Beige Section Backgrounds)
  - Typography Colors: `#162a20` (Dark Forest Charcoal for Headings), `#2d3e35` (Deep Charcoal Green for Body Copy), `#5e7065` (Muted Sage Text)
- **Typography:**
  - Headings: `Playfair Display`, serif (Editorial Elegance)
  - Body & UI: `Plus Jakarta Sans`, sans-serif (Clean Modern Readability)
- **Visuals:**
  - High-resolution, authentic, royalty-free photography stored locally in `/images/` (100% offline & fast CDN delivery).
  - Custom SVG Brand Logo and matching Favicon.
  - Subtle drop shadows, rounded pill badges, smooth micro-interactions, and zoom hover states.

---

## 🧭 Site Structure & Pages

1. **Home (`index.html`)**
   - High-impact Hero Section:  
     *“Live Better. Feel Better. Every Day.”*  
     *“Simple and practical ideas for building healthier habits, better routines and a balanced lifestyle.”*
   - Prominent *“Explore Articles”* CTA + *“Browse Topics”* button.
   - Core Editorial Pillars ribbon (Realistic Nutrition, Intentional Routines, Digital Balance).
   - Editor's Spotlight Featured Article + 3-card Featured Grid.
   - *Popular Topics* Section: Healthy Eating, Daily Habits, Fitness, Student Wellness, Mental Wellbeing, Productivity.
   - *Latest Wellness Insights* Grid.
   - Front-end *“Get Healthy Tips in Your Inbox”* Newsletter Subscription form.
   - Semantic Footer with quick links, category tags, academic project disclosure, and copyright:  
     *“© 2026 Healthy Living Hub. All rights reserved.”*

2. **Blog / Articles Archive (`blog.html`)**
   - Real-time live search input (queries article titles, summaries, and categories).
   - Interactive category filter pills (*All Articles*, *Healthy Eating*, *Fitness & Activity*, *Daily Habits*, *Student Wellness*, *Sleep & Routine*, *Digital Wellness*).
   - URL search parameter support (e.g., `blog.html?category=Healthy+Eating` or `blog.html?search=habits`).
   - Dynamic sorting: *Newest First*, *Reading Time*, *Alphabetical*.
   - Live article counter (`Showing 6 articles`) and graceful empty state message.

3. **Categories Hub (`categories.html`)**
   - Dedicated showcase cards for all 6 core lifestyle pillars:
     1. Healthy Eating
     2. Fitness & Activity
     3. Daily Habits
     4. Student Wellness
     5. Sleep & Routine
     6. Digital Wellness
   - Each card displays curated photography, descriptions, direct links to related articles, and a filter link to the blog archive.

4. **About Page (`about.html`)**
   - Editorial mission and the *Micro-Habits* lifestyle philosophy.
   - Author & Lead Researcher profile: *Sarah Jenkins* (Wellness Writer & Digital Marketing Student).
   - Core Editorial Principles: *Evidence-Informed Simplicity*, *Zero Toxic Guilt*, *Student & Budget Accessibility*.
   - Academic Digital Marketing Project Disclosure and non-medical disclaimer.
   - Interactive FAQ accordion component.

5. **Contact Page (`contact.html`)**
   - Accessible contact form with live JavaScript validation (Full Name, Email, Subject, Message).
   - Animated toast feedback alert upon submission.
   - Contact details sidebar (campus department base, email address, response time guidelines).

---

## 📚 Original Blog Articles (700–1,100 Words Each)

Every article is complete with a unique SEO title, meta description, structured JSON-LD (`BlogPosting`), reading progress bar, breadcrumb navigation, author badge, key takeaways callout box, data summary table, bulleted takeaways, conclusion, and related articles grid:

| # | Article Title | Category | Body Word Count | URL Slug |
|---|---------------|----------|-----------------|----------|
| 1 | **10 Simple Habits for a Healthier Lifestyle** | Daily Habits | ~1,138 words | [`articles/10-simple-habits-for-a-healthier-lifestyle.html`](articles/10-simple-habits-for-a-healthier-lifestyle.html) |
| 2 | **Healthy Eating Habits for Students** | Healthy Eating | ~907 words | [`articles/healthy-eating-habits-for-students.html`](articles/healthy-eating-habits-for-students.html) |
| 3 | **Easy Ways to Stay Active Every Day** | Fitness & Activity | ~881 words | [`articles/easy-ways-to-stay-active-every-day.html`](articles/easy-ways-to-stay-active-every-day.html) |
| 4 | **How to Build a Better Daily Routine** | Daily Habits | ~830 words | [`articles/how-to-build-a-better-daily-routine.html`](articles/how-to-build-a-better-daily-routine.html) |
| 5 | **Simple Tips for Managing Screen Time** | Digital Wellness | ~805 words | [`articles/simple-tips-for-managing-screen-time.html`](articles/simple-tips-for-managing-screen-time.html) |
| 6 | **Why Sleep Is Important for a Healthy Lifestyle** | Sleep & Routine | ~843 words | [`articles/why-sleep-is-important-for-a-healthy-lifestyle.html`](articles/why-sleep-is-important-for-a-healthy-lifestyle.html) |

---

## 🎯 Search Engine Optimization (SEO) Implementation

Built specifically to excel in Digital Marketing assignments and real-world search engine performance:

1. **Keyword Integration (Natural & Non-Stuffed):**
   - *healthy lifestyle*, *healthy lifestyle tips*, *healthy habits*, *healthy habits for students*, *healthy eating habits*, *daily healthy habits*, *fitness tips*, *daily routine*, *sleep habits*, *screen time management*, *wellness tips*.
2. **Metadata & Open Graph:**
   - Unique `<title>` and `<meta name="description">` on every page and article.
   - Canonical links (`<link rel="canonical" ...>`).
   - Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`, `og:url`) and Twitter Cards.
3. **Structured Data (JSON-LD):**
   - Homepage: `WebSite` schema with search action specification.
   - Article Pages: `BlogPosting` schema with author, publisher, publication date, image, and description.
4. **Technical SEO Files:**
   - [`sitemap.xml`](sitemap.xml): Complete XML sitemap detailing all 11 URLs with `lastmod`, `changefreq`, and `priority` attributes.
   - [`robots.txt`](robots.txt): Permissive crawler directives pointing explicitly to the XML sitemap.
5. **On-Page Hierarchy:**
   - Single semantic `<h1>` on every page.
   - Strict `<h2>` and `<h3>` heading structure without skipped levels.
   - Descriptive `alt` attributes on all images.

---

## ♿ Accessibility & UX Features

- **Semantic HTML5 Elements:** `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`.
- **Keyboard Navigation:** High-contrast focus rings (`:focus-visible`), standard tab indices, and ARIA attributes (`aria-expanded`, `aria-label`, `role="tab"`).
- **Responsive Mobile Navigation:** Slide-out drawer menu with animated backdrop and `Escape` key dismissal.
- **Reading Progress Indicator:** Real-time top progress bar tracking scroll depth across all articles.
- **Interactive Toast Alerts:** Accessible feedback alerts for newsletter subscriptions, contact messages, and clipboard link copying.

---

## 🚀 How to Run Locally & Deploy to GitHub Pages

### Running Locally
You can run this project in any standard web browser by opening `index.html` directly, or using a lightweight HTTP server:

```powershell
# Using Python
cd C:\Users\Admin\.gemini\antigravity\scratch\healthy-living-hub
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

### Deploying to GitHub Pages
1. Initialize a git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Healthy Living Hub blog website"
   ```
2. Push to your GitHub repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/healthy-living-hub.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings > Pages > Source** and select `Deploy from a branch` -> `main` / `root`.
4. Your site will be live at `https://YOUR-USERNAME.github.io/healthy-living-hub/` in less than two minutes!

---

## 🎓 Academic Integrity & Disclaimer
- **No Plagiarism:** All article copy was authored specifically for this project.
- **No Deceptive Marketing:** No fake reviews, artificial visitor counters, or simulated Search Console screenshots.
- **Non-Medical Information:** The website explicitly states its academic and informational nature, with full medical disclaimers on every relevant page.
