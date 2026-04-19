# Google Search Console Setup Guide
## Eternal Fitness Blog

### Prerequisites

Before setting up Google Search Console (GSC), you need:

1. **Google Account**: A valid Google account (recommend using craig.blackman1@gmail.com)
2. **Website Access**: Ownership of the domain or ability to verify domain ownership
3. **Verification Method**: One of the following:
   - HTML file upload to root directory
   - HTML meta tag in `<head>` section
   - Domain provider verification (DNS TXT record)
   - Google Analytics verification (if GA4 already installed)
   - Google Tag Manager verification (if GTM already installed)

For Eternal Fitness (deployed to Vercel), use either:
- HTML meta tag (easiest for Vercel deployments)
- DNS record verification through your domain registrar

---

## Step-by-Step GSC Domain Property Setup

### 1. Create or Access Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account (craig.blackman1@gmail.com)
3. Click **"Start now"** or **"+ Create property"**

### 2. Choose Property Type

- **Domain property** (recommended): Covers all subdomains and protocols
  - Example: `eternalf.it` covers `www.eternalf.it`, `http`, `https`, etc.
- **URL prefix property**: Only covers exact URL
  - Example: `https://www.eternalf.it`

**Recommendation**: Use domain property for maximum coverage.

### 3. Verify Domain Ownership

#### Option A: HTML Meta Tag (Recommended for Vercel)

1. GSC provides an HTML meta tag: `<meta name="google-site-verification" content="..." />`
2. Copy the entire meta tag
3. Add to `public/index.html` or main layout file in `<head>` section
4. Redeploy to Vercel
5. Return to GSC and click **"Verify"**
6. GSC will confirm verification within seconds

#### Option B: DNS TXT Record

1. GSC provides a TXT record: `google-site-verification=...`
2. Log into your domain registrar (Namecheap, GoDaddy, etc.)
3. Add as a DNS TXT record for your domain
4. Return to GSC and click **"Verify"**
5. Wait 15-30 minutes for DNS propagation

### 4. Confirm Property Addition

- GSC displays "Property verified" message
- Your domain now appears in the GSC dashboard
- Property is ready for sitemap and URL submission

---

## XML Sitemap Submission

### 1. Generate Sitemap

Ensure your Next.js application generates a `public/sitemap.xml` file.

Example next-sitemap configuration in `package.json`:
```json
{
  "scripts": {
    "sitemap": "next-sitemap",
    "build": "next build && npm run sitemap"
  }
}
```

### 2. Submit Sitemap to GSC

1. In GSC, click **"Sitemaps"** (left sidebar)
2. Enter your sitemap URL: `https://eternalf.it/sitemap.xml`
3. Click **"Submit"**
4. GSC will crawl and report:
   - Total URLs in sitemap
   - Indexed URLs
   - Errors or warnings

### 3. Monitor Sitemap Status

- Check **Sitemaps** page weekly for new submissions
- Verify indexed count increases as new content is published
- Watch for error messages (404s, non-indexable content)

---

## URL Inspection Tool Usage

### 1. Purpose

The URL Inspection tool shows exactly how Google sees your pages and why they may/may not be indexed.

### 2. Inspect Individual Pages

1. In GSC dashboard, paste URL into search box at top
2. Tool shows:
   - **Coverage**: Indexed, excluded, error, or valid but not indexed
   - **Mobile usability**: Issues with mobile rendering
   - **AMP status**: If applicable
   - **Core Web Vitals**: Performance metrics
   - **Last crawl**: When Google last visited the page

### 3. Common Actions

- **Submit to index**: Request Google crawl a new or updated page
- **Test live URL**: Check the current version at your domain
- **View page properties**: See structured data, mobile-friendliness, mobile usability issues

### 4. Debugging Coverage Issues

If a page shows "Valid but not indexed":
- Check page content depth and length
- Verify internal linking
- Ensure page isn't blocked by robots.txt
- Check for noindex meta tag or X-Robots-Tag header

---

## Initial Health Check: Index Status and Metrics

### 1. Check Coverage Report

1. Go to **Coverage** section in GSC
2. Review breakdown:
   - **Indexed**: Successfully crawled and indexed
   - **Excluded**: Intentionally excluded (noindex, duplicate, etc.)
   - **Error**: Pages Google couldn't access (404, 403, server error)
   - **Valid but not indexed**: Crawled but not indexed yet

**Goal for new site**: Expect most pages in "Indexed" after 2-4 weeks.

### 2. Review Crawl Statistics

1. Go to **Crawl stats** (Settings → Crawl statistics)
2. Monitor:
   - **Requests per day**: Should be reasonable (10-50 for new site)
   - **Kilobytes downloaded**: Indicates crawl depth
   - **Response time**: Should average under 1 second

### 3. Performance Metrics

1. Go to **Performance** section
2. Review initial baseline:
   - **Impressions**: How often your site appears in search results
   - **Clicks**: How often users click your result
   - **CTR**: Click-through rate
   - **Position**: Average ranking position

**Expectation for new site**: Minimal impressions/clicks first 30 days; expect growth after 60 days.

---

## Ongoing Monitoring Strategy

### 1. Queries to Track

Set up tracking for these query categories in your monthly spreadsheet:

**High-Intent Queries** (people seeking solutions):
- "personal trainer for cancer survivors"
- "fitness rehabilitation after cancer treatment"
- "adaptive exercises arthritis"
- "post-injury physical therapy exercises"

**Informational Queries** (educational content):
- "how to exercise with joint pain"
- "cancer recovery timeline fitness"
- "arthritis management strategies"

**Local Queries** (if applicable):
- "personal trainer [city] cancer survivors"
- "rehabilitation specialist near me"

### 2. Pages to Monitor

Monitor indexing and rankings for:
- Blog post home page
- Each major health condition category page
- Top 5 performing blog posts
- New content monthly

### 3. Error Types to Watch

**Crawl Errors**:
- Server errors (5xx): Indicates infrastructure issues
- Access denied (403): Check robots.txt and server permissions
- Not found (404): Fix broken links or redirects

**Coverage Errors**:
- Noindex: Unintended noindex tags should be removed
- Duplicate: Use canonical tags to consolidate similar content
- Robots.txt blocked: Verify important pages aren't blocked

**Mobile Usability**:
- Viewport not set
- Text too small
- Click targets too close together
- Flash content

---

## Monthly Review Checklist

### Week 1: Data Collection
- [ ] Pull GSC data export (last 30 days)
- [ ] Download Coverage report (CSV)
- [ ] Export Performance report (impressions, clicks, CTR, position)
- [ ] Run URL Inspection on 3-5 major pages
- [ ] Update MONTHLY_SEO_TRACKING.md with new metrics

### Week 2: Analysis
- [ ] Identify top 10 queries by impressions
- [ ] Identify top 10 queries by clicks
- [ ] Calculate CTR trends (improving/declining by query)
- [ ] Note any coverage errors or warnings
- [ ] Identify low CTR queries (position 6-20, <3% CTR)

### Week 3: Content & Optimization
- [ ] For low CTR queries: optimize title tags and meta descriptions
- [ ] For "valid but not indexed" pages: improve content depth and internal links
- [ ] Identify content gaps (queries asked but not ranked for)
- [ ] Plan new blog content based on search opportunities
- [ ] Implement one technical SEO fix (schema, Core Web Vitals, etc.)

### Week 4: Publishing & Planning
- [ ] Publish new content aligned with keyword opportunities
- [ ] Submit newly published pages to GSC via URL Inspection
- [ ] Resubmit updated sitemaps if new pages added
- [ ] Document findings in monthly report
- [ ] Plan next month's content calendar based on search trends

### Ongoing (Every Review Cycle)
- [ ] Check for new crawl errors weekly
- [ ] Monitor Core Web Vitals dashboard monthly
- [ ] Track mobile usability issues
- [ ] Review referral traffic sources
- [ ] Monitor for unexpected ranking drops

---

## Expected Timeline for SEO Impact

| Timeframe | Milestone |
|-----------|-----------|
| Week 1-2 | Site discovery by Googlebot |
| Week 2-4 | Initial indexing of content |
| Week 4-8 | First impressions in search results |
| Week 8-12 | CTR stabilization for top pages |
| Month 3-6 | Keywords moving into top 30 positions |
| Month 6+ | Measurable organic traffic growth |

---

## Troubleshooting Common Issues

### "Discovered but not indexed"
- Ensure page has sufficient content (300+ words minimum)
- Check for noindex meta tag or X-Robots-Tag header
- Improve internal linking to the page
- Wait 2-4 weeks; Google may index on next crawl

### "Excluded by robots.txt"
- Check robots.txt file
- Verify intended pages aren't blocked
- Update robots.txt if needed and resubmit

### "Soft 404"
- Page returns 200 status but little/no content
- Add meaningful content or return proper 404 status
- Remove from sitemaps if not needed

### Low impressions despite high rankings
- Meta description may not be compelling (low CTR)
- Title tag could be more click-worthy
- Page isn't actually ranking for target queries (check GSC data)

### No index growth after 30 days
- Check Coverage report for errors
- Verify pages aren't blocked by robots.txt
- Ensure domain is properly verified
- Check Core Web Vitals; very poor metrics can prevent indexing

---

## Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Google Search Central Blog](https://developers.google.com/search/blog)
- [Core Web Vitals Guide](https://web.dev/vitals/)
- [Structured Data Testing Tool](https://search.google.com/test/rich-results)
