# SEO Review & Optimization Process
## Eternal Fitness Blog

This document defines the monthly review cadence, content optimization checklist, and performance targets for ongoing SEO management of the Eternal Fitness blog.

---

## Monthly Review Cadence

### Week 1: Data Collection (1st-7th of month)

**Objective**: Gather all GSC data and establish the baseline for the month.

#### Tasks

- [ ] **Log into Google Search Console**
  - Property: eternalf.it (domain property)
  - Review any alerts or notifications

- [ ] **Export Performance Report**
  - Date range: Last 30 days (or calendar month)
  - Download as CSV
  - Columns: Query, Clicks, Impressions, CTR, Position
  - Filter: Show all queries

- [ ] **Export Coverage Report**
  - Screenshot or download the coverage breakdown
  - Note: Indexed, Excluded, Error, Valid but not indexed
  - Document any new errors since last month

- [ ] **Check URL Inspection Tool**
  - Test 3-5 major pages (homepage, top 3 blog posts)
  - Document any issues: mobile usability, Core Web Vitals, indexation status
  - Submit any newly published pages for indexation

- [ ] **Review Core Web Vitals Dashboard**
  - Note: Good vs. Needs Improvement breakdown
  - Identify pages with poor LCP, CLS, or FID
  - Export page-level data if available

- [ ] **Update MONTHLY_SEO_TRACKING.md**
  - Paste Performance report data into "Monthly Page Performance Tracking" table
  - Paste Coverage report data into "Coverage & Indexation Report" section
  - Update "Core Web Vitals & Performance" section
  - Document activities completed this month in "SEO Activities"

#### Output
- Updated `MONTHLY_SEO_TRACKING_[MONTH].md` with current month's data
- Baseline metrics established for trend analysis

---

### Week 2: Analysis (8th-14th of month)

**Objective**: Understand performance, identify trends, and find opportunities.

#### Analysis Tasks

- [ ] **Query Analysis**
  - Identify top 10 queries by impressions
  - Identify top 10 queries by clicks
  - Calculate CTR for each (clicks ÷ impressions × 100)
  - Note average position for top queries

- [ ] **Opportunity Identification**
  - Find queries ranking in positions 6-20 with <3% CTR
  - Identify "Valid but not indexed" pages from Coverage report
  - Look for queries you rank for but receive 0 clicks (position 30+)
  - Note seasonal/trending topics in search results

- [ ] **Coverage Analysis**
  - Review any error pages (4xx, 5xx)
  - Identify "Valid but not indexed" pages (usually need better content/internal links)
  - Check for unintended "Excluded" pages (duplicates, noindex)

- [ ] **Competitive Keyword Research**
  - Search 3-5 top queries in Google
  - Note: What are competitors ranking for?
  - Identify gaps in your content strategy
  - Look for featured snippet opportunities

- [ ] **Trend Identification**
  - Compare this month vs. last month:
    - Are impressions trending up or down?
    - Is CTR improving?
    - Are positions moving up (lower number = better)?
  - Note any unexpected drops or gains

#### Deliverables for Week 2
- [ ] List of top 10 opportunities (low-hanging fruit for optimization)
- [ ] Note any structural/technical issues to fix
- [ ] 3-5 new content ideas based on search gaps
- [ ] Update tracking spreadsheet with analysis notes

---

### Week 3: Optimization (15th-21st of month)

**Objective**: Optimize existing content and fix technical issues.

#### Content Optimization

For each underperforming page, apply the **Content Optimization Checklist** below:

- [ ] **Title Tag Optimization** (if CTR is low)
  - Current: [Note existing title]
  - New: [Create optimized title]
  - Ensure: Under 60 characters, includes primary keyword, compelling, addresses user intent
  - Example: "Cancer Rehabilitation: 10 Safe Exercises for Recovery (Expert Guide)" (58 chars)

- [ ] **Meta Description Optimization** (if CTR is low)
  - Current: [Note existing description]
  - New: [Create optimized description]
  - Ensure: 150-160 characters, includes secondary keyword, includes CTA
  - Example: "Learn safe exercises & fitness strategies for cancer survivors. Expert personal training tips for rehabilitation & recovery." (127 chars)

- [ ] **H1 Tag Review**
  - Current H1: [Note existing]
  - Is it unique on the site? (check other pages)
  - Does it include primary keyword?
  - Is it compelling/descriptive?
  - Update if needed

- [ ] **Internal Linking Audit**
  - Count existing internal links in page body
  - Goal: 3+ contextual internal links per post
  - Add links to related health condition pages
  - Use descriptive anchor text (not "click here")
  - Example: "Learn more about post-injury recovery strategies" links to `/blog/post-injury-recovery`

- [ ] **Content Depth Check**
  - Word count: [Current count]
  - Goal: 1,500+ words for medical/health topics
  - If under target: Expand with more details, case studies, expert quotes
  - Ensure comprehensive coverage of topic

- [ ] **Image Alt Text Review**
  - Review each image alt tag
  - Goal: Descriptive, includes keyword where natural, 100-125 characters
  - Example: "Personal trainer demonstrating adaptive exercises for cancer survivors in studio setting"
  - Update any missing or generic alt text

- [ ] **Schema Markup Validation**
  - Check for Article schema (blog posts)
  - Validate using [Schema Markup Testing Tool](https://search.google.com/test/rich-results)
  - Add FAQPage schema if post contains Q&A
  - Add BreadcrumbList schema if site has clear hierarchy
  - Example Article schema fields: headline, author, datePublished, image, articleBody

#### Technical SEO Fixes

- [ ] **Crawl Error Resolution**
  - For each error in Coverage report:
    - 404s: Fix links or remove from sitemap
    - 5xx errors: Contact hosting support
    - Blocked by robots.txt: Update robots.txt
  - Retest with URL Inspection tool after fix

- [ ] **Core Web Vitals Improvement** (if scores are poor)
  - LCP issues: Optimize image sizes, defer non-critical CSS/JS
  - CLS issues: Add size attributes to images, avoid unsized embeds
  - FID issues: Reduce JavaScript execution time
  - Document improvements for next week's checking

- [ ] **Mobile Usability** (if issues exist)
  - Check text readability: Font size 16px minimum
  - Check touch targets: 48px minimum spacing between buttons
  - Check viewport: Ensure viewport meta tag is present
  - Test on mobile device or use Chrome DevTools

#### Week 3 Deliverables
- [ ] 2-3 pages optimized with improved titles/descriptions
- [ ] 1-2 content pieces expanded with better depth/internal links
- [ ] 1 technical issue fixed (crawl error, schema, Core Web Vitals)
- [ ] Note: Changes take 1-2 weeks to show impact in GSC

---

### Week 4: Publishing & Planning (22nd-30th of month)

**Objective**: Publish new content and plan for next month.

#### Publishing Tasks

- [ ] **Publish New Blog Posts**
  - Publish 3-5 new blog posts (based on keyword research opportunities)
  - Apply Content Optimization Checklist to each new post (see below)
  - Ensure all posts meet minimum standards before publishing

- [ ] **Submit New Content to GSC**
  - Use URL Inspection tool for each new page
  - Click "Request Indexing" to expedite crawling
  - Monitor for 24-48 hours for indexation

- [ ] **Update Sitemaps**
  - Verify new pages appear in sitemap.xml
  - Resubmit sitemap to GSC if not auto-updated
  - Monitor GSC Sitemaps page for new URL count

#### Planning Tasks

- [ ] **Analyze This Month's Data**
  - Review final metrics in MONTHLY_SEO_TRACKING.md
  - Did impressions increase? Decrease? Hold steady?
  - Which posts performed best? Why?
  - Which queries have growth potential?

- [ ] **Create Next Month's Content Calendar**
  - Based on GSC keyword gaps and search opportunities
  - Plan 5+ blog posts aligned with high-intent queries
  - Reference: docs/CONTENT_CALENDAR.md
  - Include target keywords and publish dates

- [ ] **Set Next Month's Goals**
  - Impression targets: [Based on growth trajectory]
  - Click targets: [Based on new content + optimization]
  - Position improvement targets: [Number of keywords to move into top 20]
  - Index coverage targets: [Total pages to index]
  - Example: "Increase indexed pages to 35, target 100+ impressions, 25+ clicks"

- [ ] **Document Learnings**
  - What worked well this month?
  - What didn't work as expected?
  - Adjust strategy for next month accordingly

#### Week 4 Deliverables
- [ ] 3-5 new blog posts published
- [ ] New posts submitted to GSC for indexation
- [ ] Next month's content calendar finalized
- [ ] Next month's goals documented in MONTHLY_SEO_TRACKING.md

---

## Content Optimization Checklist

Use this checklist for every new blog post and when optimizing existing posts.

### Pre-Publishing Checklist

#### On-Page Elements
- [ ] **Title Tag**
  - Length: 50-60 characters (fits in Google search results)
  - Includes primary keyword
  - Compelling and accurate
  - Format: "Primary Keyword: Secondary Keyword | Benefit" or "Primary Keyword - [Question/Benefit]"
  - Example: "Cancer Rehabilitation Exercises: Safe Fitness for Recovery | Eternal Fitness"

- [ ] **Meta Description**
  - Length: 150-160 characters (fits on mobile)
  - Includes primary keyword naturally
  - Includes secondary keyword if possible
  - Includes call-to-action (CTA)
  - Compelling and specific to content
  - Example: "Learn safe exercises & fitness strategies for cancer survivors. Expert training tips for rehabilitation & recovery from treatment side effects."

- [ ] **H1 Tag**
  - Only one H1 per page
  - Includes primary keyword
  - Clear, descriptive, compelling
  - Different from title tag (usually same as headline)
  - Example: "Cancer Rehabilitation: Safe Exercises for Fitness Recovery"

- [ ] **H2/H3 Headers**
  - Clear outline structure (H2s break major sections, H3s sub-sections)
  - Include secondary keywords in headers where natural
  - All headers are descriptive and helpful for skimming
  - Example H2s: "Why Exercise After Cancer Treatment?", "5 Safe Rehabilitation Exercises", "Modifications for Different Fitness Levels"

- [ ] **Body Content**
  - Word count: 1,500+ for medical/health topics
  - Keyword density: 0.5-2% for primary keyword (natural inclusion)
  - Content is original, well-researched, authoritative
  - Clear introduction explaining what reader will learn
  - Use short paragraphs (2-4 sentences max)
  - Use bullet points for lists (scannable)
  - Conclusion summarizing key takeaways

- [ ] **Images**
  - At least 1-2 relevant, high-quality images
  - Images are optimized (compressed, appropriate resolution)
  - All images have descriptive alt text (100-125 characters)
  - Alt text includes keyword naturally where appropriate
  - Captions under images add context
  - Example alt text: "Personal trainer demonstrating modified push-up for cancer survivor rehabilitation"

- [ ] **Internal Links**
  - Minimum 3 internal links to related posts
  - Links are contextual (placed naturally in relevant sections)
  - Anchor text is descriptive, includes keywords where natural
  - Links point to related health conditions, recovery guides, or complementary topics
  - Example: In post about "Cancer Rehabilitation", link to "Post-Injury Recovery" with anchor "post-injury fitness strategies"

- [ ] **External Links**
  - 2-3 authoritative external sources cited
  - Links to reputable medical/health sources (NIH, Mayo Clinic, etc.)
  - External links open in new tab (target="_blank")
  - Links are relevant to content and add credibility

### Structural SEO

- [ ] **Permalink/URL Slug**
  - Descriptive, keyword-inclusive
  - Lowercase, hyphens between words
  - Under 75 characters when possible
  - Example: `/blog/cancer-rehabilitation-exercises`

- [ ] **Schema Markup**
  - Article schema present with:
    - headline
    - description
    - image
    - datePublished
    - dateModified
    - author
    - articleBody
  - Validate with [Schema Testing Tool](https://search.google.com/test/rich-results)

- [ ] **No Duplicate Content**
  - Check if content duplicates other pages on your site
  - Unique perspective/angle compared to competitors
  - If updating existing post: Update dateModified, not create new post

- [ ] **Canonical Tag**
  - Present and pointing to correct URL
  - Self-referential if original content
  - Points to primary version if duplicate content exists intentionally

### Technical SEO

- [ ] **Mobile Responsiveness**
  - Test on mobile device or Chrome DevTools mobile view
  - Text is readable (16px+ font)
  - Touch targets are adequate (48px minimum)
  - No horizontal scrolling
  - Images display properly on mobile

- [ ] **Page Load Speed**
  - Load time under 3 seconds (check with PageSpeed Insights)
  - Images are optimized and lazy-loaded
  - CSS/JavaScript is minified
  - Caching is enabled

- [ ] **Core Web Vitals**
  - Largest Contentful Paint (LCP): Under 2.5 seconds
  - Cumulative Layout Shift (CLS): Under 0.1
  - First Input Delay (FID) / Interaction to Next Paint (INP): Under 100ms

- [ ] **Accessibility**
  - Sufficient color contrast (WCAG AA standard)
  - All interactive elements keyboard accessible
  - Form labels associated with inputs
  - No auto-playing media

### Pre-Publish Checklist (Final)

- [ ] Content reviewed for grammar/spelling
- [ ] Facts and medical information verified
- [ ] Links tested (no broken links)
- [ ] Images display correctly
- [ ] Meta tags filled in completely
- [ ] Schema markup validated
- [ ] Mobile view tested
- [ ] Page load speed acceptable
- [ ] Published to staging/preview first if available
- [ ] Publish to production
- [ ] Use GSC URL Inspection to submit for indexation

---

## Keyword Research & Gap Analysis

### Monthly Keyword Research Process

#### Step 1: Analyze GSC Query Data

1. Export GSC Performance report for past month
2. Filter to queries with 5+ impressions
3. Identify gaps: Queries you rank for but don't receive clicks
   - Usually position 20+ with 0 clicks
   - Opportunity: Create new post or update existing post

#### Step 2: Identify High-Intent Keywords

Focus on keywords that indicate searcher intent to work with a personal trainer:

- "personal trainer for [health condition]"
- "adaptive fitness [condition]"
- "rehabilitation exercises [condition]"
- "fitness coach for [health condition]"

**Action**: Create blog posts targeting high-intent keywords to drive qualified leads.

#### Step 3: Identify Content Gaps

1. Google your top 10 target keywords
2. Note: What are competitors ranking for?
3. Ask yourself:
   - Does Eternal Fitness rank for this query?
   - If not, can we create content to rank for it?
   - Is this query relevant to our services?

**Action**: Create content addressing gaps where you have expertise.

#### Step 4: Seasonal & Trending Topics

Monitor for seasonal health-related trends:

- **January**: New Year fitness resolutions
- **February**: Heart Health Awareness Month
- **March**: Colorectal Cancer Awareness Month
- **April**: Cancer Awareness Month
- **May**: Mental Health Awareness Month
- **June**: Men's Health Month
- **July-August**: Summer fitness trends
- **September**: Fall fitness routines
- **October**: Breast Cancer Awareness Month
- **November**: Diabetes Awareness Month
- **December**: Holiday fitness challenges

**Action**: Create seasonal content 4-6 weeks before awareness months.

#### Step 5: Competitor Keyword Analysis

Analyze what 2-3 competitor personal trainers rank for:

1. Go to competitors' websites
2. Use SEMrush, Ahrefs, or Moz (if budget allows) to see their keywords
3. Identify keywords they rank for that you don't
4. Determine if those keywords are relevant to Eternal Fitness

**Action**: Create content targeting keywords with high relevance and moderate competition.

### Gap Analysis Template

| Keyword | Search Volume | Competition | Relevance | Ranking Status | Action |
|---------|--------------|-------------|-----------|----------------|--------|
| "cancer survivor fitness training" | High | Medium | High | Not ranking | Create post |
| "adaptive exercises arthritis" | Medium | Low | High | Ranking #25 | Optimize existing |
| "post-injury rehab exercises" | Medium | Medium | High | Ranking #15 | Good, monitor |

---

## Performance Targets & Milestones

### Month 1 Targets (April 2026)

**Focus**: Indexation and Discovery

- [ ] 25+ pages indexed in GSC (all blog posts + main pages)
- [ ] 10+ keywords appearing in GSC search results
- [ ] 5-10 total impressions (new site, minimal visibility)
- [ ] 0-1 total clicks (new site expectations)
- [ ] 0 crawl errors (clean start)
- [ ] Sitemap submitted and monitored

**Success Criteria**: Site is discoverable, pages are indexed, no technical errors.

---

### Month 2-3 Targets (May-June 2026)

**Focus**: Ranking Expansion

- [ ] 50+ keywords appearing in GSC results
- [ ] 30-50 total impressions per month
- [ ] 5-15 total clicks per month
- [ ] Avg CTR: 2-5% (improving)
- [ ] Avg position: 30-50 (expected for new site)
- [ ] 10-15 keywords in positions 11-30

**Success Criteria**: Site is ranking for 50+ keywords, gaining visibility, some clicks coming through.

---

### Month 3-6 Targets (July-September 2026)

**Focus**: Top 30 Rankings

- [ ] 75+ keywords in GSC results
- [ ] 50-150+ total impressions per month
- [ ] 15-50+ total clicks per month
- [ ] Avg CTR: 5-10% (significant improvement)
- [ ] Avg position: 20-40 (improved)
- [ ] **10+ keywords in positions 11-30** (key milestone)
- [ ] 3-5 keywords beginning to move toward top 10

**Success Criteria**: Steady growth, meaningful traffic, keywords moving toward valuable positions.

---

### Month 6+ Targets (October 2026 onwards)

**Focus**: Top 10 Rankings & Organic Growth

- [ ] 100+ keywords in GSC results
- [ ] 150-500+ monthly impressions
- [ ] 50-200+ monthly clicks
- [ ] Avg CTR: 10-15%+ (established site)
- [ ] Avg position: 15-30 (strong improvement)
- [ ] **10+ keywords in top 10 positions** (revenue driver)
- [ ] 3-5 keywords on first page with high CTR
- [ ] Organic traffic: 50-150+ sessions per month from search

**Success Criteria**: Established organic presence, qualified traffic, positioning as trusted resource.

### Ongoing Targets (Month 12+)

- Maintain/grow top 10 rankings
- Expand to 150+ keywords in positions 1-30
- Build authority in health + fitness niche
- Generate consistent organic lead flow
- Establish Eternal Fitness as specialist in "personal training for [health conditions]"

---

## Monthly Metrics Dashboard

Track these KPIs each month in your spreadsheet:

### Key Metrics

| Metric | Unit | Month 1 | Month 2 | Month 3 | Month 6 | Month 12 |
|--------|------|---------|---------|---------|---------|----------|
| Indexed Pages | count | 25 | 35 | 45 | 60+ | 80+ |
| Keywords (any position) | count | 10 | 50 | 75 | 100+ | 150+ |
| Impressions | monthly | 5-10 | 30-50 | 50-150 | 150-500 | 300-800 |
| Clicks | monthly | 0-1 | 5-15 | 15-50 | 50-200 | 150-400 |
| CTR | % | 0.1% | 3% | 5-10% | 10-15% | 15-25% |
| Avg Position | # | 50+ | 30-40 | 20-35 | 15-25 | 10-20 |
| Top 10 Keywords | count | 0 | 0 | 1-3 | 5-10 | 10-20 |
| Organic Sessions | monthly | 1-5 | 10-30 | 30-80 | 80-200 | 200-400 |

---

## When to Adjust Strategy

### Red Flags (Adjust Strategy)

- **No index growth in 60 days**: Review coverage report for errors, check robots.txt, verify domain property is active
- **Impressions plateau for 2+ months**: Create new content, optimize for different keywords, improve internal linking
- **CTR declining over time**: Optimize title tags and meta descriptions, improve snippet appearance
- **Crawl errors increasing**: Fix broken links, update robots.txt, check server status
- **Core Web Vitals degrading**: Optimize page load speed, fix layout shifts, improve interactivity

### Green Lights (Continue Strategy)

- **Steady 20-30% month-over-month growth**: Keep publishing 5+ posts/month, continue optimization
- **Keywords moving up in positions**: Content is resonating, continue optimization of successful pages
- **CTR improving for top queries**: Title/meta optimization is working, apply learnings to other pages
- **No crawl errors for 2+ months**: Technical SEO is solid, focus on content creation

---

## Resources & Tools

### Essential Tools
- **Google Search Console**: Free, official data source (priority #1)
- **Google Analytics 4**: Free, tracks organic traffic
- **Google PageSpeed Insights**: Free, Core Web Vitals insights
- **Schema Markup Testing Tool**: Free, validate structured data

### Optional Tools (if budget allows)
- **Ahrefs** or **SEMrush**: Keyword research, competitor analysis, rank tracking
- **Surfer SEO**: Content optimization recommendations
- **ContentStudio**: Content calendar management

### Learning Resources
- [Google Search Central](https://developers.google.com/search): Official SEO best practices
- [Google Search Central Blog](https://developers.google.com/search/blog): Latest updates
- [Core Web Vitals Guide](https://web.dev/vitals/): Performance optimization
- [Search Quality Rater Guidelines](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf): E-E-A-T standards

---

## Summary: The Monthly SEO Cycle

```
Week 1: DATA COLLECTION
├─ Pull GSC data (Performance, Coverage, Core Web Vitals)
├─ Test key pages with URL Inspection
└─ Update tracking spreadsheet

Week 2: ANALYSIS
├─ Analyze queries and CTR
├─ Identify quick wins for optimization
├─ Research competitor keywords
└─ Document opportunities

Week 3: OPTIMIZATION
├─ Optimize 2-3 underperforming pages
├─ Fix technical issues
├─ Improve internal linking and content depth
└─ Test fixes with URL Inspection

Week 4: PUBLISHING & PLANNING
├─ Publish 3-5 new blog posts
├─ Submit new content to GSC
├─ Create next month's content calendar
└─ Document learnings and adjust strategy
```

This cycle repeats every month, building authority and organic traffic over time.
