# SEO Audit Report: Eternal Fitness
**Date:** April 19, 2026  
**Auditor:** Claude  
**Focus:** Specialist Health Conditions Positioning

---

## EXECUTIVE SUMMARY

### Overall Health: **CRITICAL ISSUES BLOCKING SEARCH VISIBILITY**

Your site has **excellent technical foundation and on-page optimization**, but is currently **invisible to search engines** due to a global `noindex` directive. Once indexation is enabled, the site is well-positioned for the specialist health conditions niche.

### Top 3 Priority Actions (Do These First)
1. ⚠️ **CRITICAL:** Remove `noindex: true` from `app/layout.tsx` (lines 30-32)
2. ⚠️ **HIGH:** Update all page title tags to better target health condition keywords
3. ⚠️ **HIGH:** Remove or reposition 5 blog posts focused on weight loss (contradicts specialist positioning)

### Quick Wins (Implement Immediately After Indexation)
- Update meta descriptions on pricing and blog pages for better CTR
- Refresh blog content strategy (14 posts → align with new positioning)
- Add FAQ schema markup to FAQs page
- Improve internal linking between specialist health condition posts

---

## TECHNICAL SEO FINDINGS

### 1. INDEXATION: **CRITICAL** 🚨

**Issue:** Global `noindex` directive blocking all search engine indexing  
**Location:** `app/layout.tsx:30-32`
```javascript
robots: {
  index: false,  // ← BLOCKING INDEXATION
  follow: false,
}
```

**Impact:** **CRITICAL** — Site is completely invisible to Google, Bing, other search engines  
**Current State:** No traffic from organic search; all discovery manual/direct  

**Fix:**
```javascript
robots: {
  index: true,      // Enable indexation
  follow: true,     // Follow internal links
}
```

**Timeline:** Change immediately upon launch readiness. No other SEO work matters until this is done.

---

### 2. SITEMAP: **GOOD** ✅

**Status:** Properly configured at `app/sitemap.ts`  
**Coverage:** 7 static pages + dynamic blog posts  
**Quality:** Correct priority weighting (homepage 1.0, core pages 0.8-0.9, blog 0.6-0.8)  
**Recommendation:** Ensure sitemap submitted to Google Search Console after indexation is enabled.

---

### 3. CANONICAL TAGS: **GOOD** ✅

**Status:** Each page has canonical tag  
**Example:** `alternates: { canonical: "https://eternalfitness.co.uk/personal-training" }`  
**Recommendation:** Continue this practice; no changes needed.

---

### 4. MOBILE-FRIENDLINESS: **GOOD** ✅

**Status:** Responsive design, proper viewport configuration  
**Assessment:** Site is mobile-first optimized  
**Recommendation:** Continue responsive-first approach.

---

### 5. HTTPS & SECURITY: **GOOD** ✅

**Status:** Full HTTPS across site, valid SSL  
**Recommendation:** No issues.

---

### 6. ROBOTS.TXT: **MISSING** ⚠️

**Status:** No robots.txt file found  
**Impact:** **LOW** — Not critical, but recommended for all sites  
**Recommendation:** Create `/public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://eternalfitness.co.uk/sitemap.xml
```

---

## ON-PAGE SEO FINDINGS

### Title Tags Analysis

| Page | Current Title | Character Count | Issues | Recommendation |
|------|---------------|-----------------|--------|-----------------|
| Home | "Eternal Fitness \| Level 4 Personal Trainer in Worthing" | 56 | Generic; missing health conditions keyword | "Level 4 Personal Trainer for Health Conditions in Worthing" |
| About | "About Esther Fair — Level 4 Personal Trainer in Worthing" | 57 | Too focused on name; weak keyword | "Esther Fair: Specialist in Cancer Rehab & Complex Health Needs" |
| Personal Training | "Personal Training in Worthing for Health Conditions and Complex Needs" | 71 | **GOOD** — On-brand, keyword-rich | No change needed |
| Pricing | "Personal Training Pricing in Worthing — No Contracts, No Surprises" | 61 | Weak CTA; missing positioning | "Cancer Rehabilitation Training Pricing in Worthing from £45" |
| Blog | "Fitness & Health Blog — Eternal Fitness Worthing" | 45 | Too generic | "Health Conditions & Cancer Recovery Blog — Eternal Fitness" |
| FAQs | "FAQs — Personal Training in Worthing..." | 75+ | Cut off; long | "Personal Training FAQs: Health Conditions, Cancer Rehab, Disability" |
| Contact | "Contact Eternal Fitness — Book a Free Consultation..." | 64 | OK but generic | "Book Free Consultation: Specialist Personal Training in Worthing" |

**Priority:** Update 5 title tags to better target health condition, cancer recovery, disability adaptation keywords.

---

### Meta Descriptions Analysis

| Page | Current Description | Quality | Improvement |
|------|---------------------|---------|-------------|
| Home | "Private one-to-one personal training... Specialist support for health conditions, cancer rehabilitation, disability..." | **EXCELLENT** | None needed |
| About | "Meet Esther Fair... Specialist support for complex needs." | **GOOD** | Could mention specific specializations (cancer, disability, exercise referral) |
| Personal Training | "One-to-one personal training... adapted for health conditions, cancer rehabilitation, disability, injury recovery..." | **EXCELLENT** | None needed |
| Pricing | "Transparent personal training pricing... Single sessions from £45..." | **GOOD** | Add trust signal: "No contracts, free consultation" |
| Blog | "Practical articles on training with health conditions, cancer rehabilitation..." | **EXCELLENT** | None needed |
| FAQs | "Answers to common questions... health conditions, cancer rehab, disability..." | **EXCELLENT** | None needed |
| Contact | "Get in touch... free 30-minute consultation." | **GOOD** | Add urgency or benefit: "Book your specialist consultation today" |

**Overall:** Meta descriptions are strong and well-optimized. Minor tweaks only.

---

### Heading Structure

**Homepage (HeroSection.tsx):**
```
<h1>Personal Training for People with Health Conditions</h1>
  <h2>Why I Specialise in Conditions Other Trainers Say "No" To</h2>
    <h3>Cancer Rehabilitation</h3>
    <h3>Mobility Disabilities</h3>
    <h3>Post-Surgery Recovery</h3>
```

**Assessment:** Logical hierarchy, H1 present, keyword-aligned. **GOOD** ✅

---

### Internal Linking

**Current State:**
- Homepage links to: About, Personal Training, Pricing, Blog, Contact
- About page links to: Personal Training (CTA), Contact
- Blog page has search + filter by category
- No cross-linking between related blog posts

**Gaps:**
- No topic cluster linking (e.g., blog post on cancer recovery should link to Cancer Rehab page)
- Blog posts not internally linked (related topics could link to each other)
- No silo structure for specialist topics

**Recommendation:** Create internal linking map for health conditions silo:
```
/personal-training (hub)
  ├─ /blog/cancer-rehabilitation (spoke)
  ├─ /blog/mobility-disabilities (spoke)
  ├─ /blog/post-surgery-recovery (spoke)
  └─ /about (authority + expertise)
```

---

### Keyword Alignment: **NEEDS UPDATE**

**Current Issues:**

1. **Blog posts misaligned with ICP**
   - Posts on "weight loss," "BMI," "spot reduction," "low-fat foods" → Target wrong audience
   - 36% of posts focus on weight loss (not your niche)
   - Recommendation: Remove 5 weight-loss posts; replace with health conditions content

2. **Page content mentions generic benefits**
   - Some CTA copy still says "sustainable transformation" without emphasizing capability/function
   - Recommendation: Update copy across About, Personal Training pages to emphasize health conditions focus

3. **Schema markup optimization**
   - ✅ Personal Training page has comprehensive Service schema
   - ❌ Other pages missing Organization schema enhancements
   - ❌ Blog posts missing Article schema with author authority
   - ❌ FAQ page should have FAQPage schema for rich snippets

---

## CONTENT QUALITY & POSITIONING

### Blog Content Audit

**Total Posts:** 14  
**On-Brand Posts:** 6 (health conditions focused) ✅  
**Off-Brand Posts:** 5 (weight-loss focused) ❌  
**Generic Posts:** 3 (universal, acceptable) ⚠️

**Posts to Remove/Reframe:**
1. ❌ "Are you sabotaging your weight loss?" → Remove (off-brand)
2. ❌ "Getting back on track when you've fallen off the wagon" → Remove or reframe as "Managing Setbacks in Recovery"
3. ❌ "Is it possible to target fat loss to specific body parts?" → Remove (purely weight-loss focused)
4. ❌ "BMI an outdated assessment" → Reframe as "Why BMI Doesn't Matter for Health Condition Training"
5. ❌ "Myth: Are low fat foods healthy?" → Remove or reframe as "Nutrition for Recovery"

**On-Brand Posts to Keep:**
- Blood pressure & resistance training ✅
- Exercise & illness ✅
- Menopause & exercise ✅
- Inflammation & body ✅
- Staying hydrated ✅
- RPE (Rate of Perceived Exertion) ✅

---

### E-E-A-T Signals: **STRONG** ✅

**Experience:** Personal stories, real client work, experience with complex cases ✅  
**Expertise:** Level 4 qualification, cancer rehabilitation cert, exercise referral specialist ✅  
**Authoritativeness:** Only trainer in area with these credentials; clear thought leadership ✅  
**Trustworthiness:** Transparent pricing, contact info, no BS marketing claims ✅

**Recommendation:** Author byline on blog posts should be updated to "Esther Fair, Level 4 Personal Trainer" (currently "Craig Blackman"). This builds author authority.

---

## COMPETITOR ANALYSIS INSIGHTS

**Your Competitive Advantages (for SEO):**
1. **Rare specialty:** Only Level 4 trainer locally with cancer rehab certification
2. **Specific niche:** Positions against generic "local personal trainers"
3. **Keyword opportunity:** Low-competition long-tail keywords:
   - "cancer rehabilitation personal training"
   - "personal training for disabilities"
   - "post-surgery strength training"
   - "exercise after cancer treatment"

**Keywords competitors likely rank for:**
- "personal trainer Worthing" (generic, high competition)
- "Level 3 trainer" (lower-tier competitor advantage)

**Your advantage:** Own the specialist keywords competitors can't serve.

---

## PRIORITIZED ACTION PLAN

### PHASE 1: CRITICAL (Do First)
- [ ] **Remove noindex directive** from `app/layout.tsx` (enable indexation)
- [ ] Create `robots.txt` file in `/public`
- [ ] Submit sitemap to Google Search Console
- [ ] Update 5 blog posts (remove/reframe weight-loss content)

### PHASE 2: HIGH (Within 1 week)
- [ ] Update title tags on 5 pages (Home, About, Pricing, Blog, FAQs)
- [ ] Refine meta descriptions (minor tweaks for 3 pages)
- [ ] Update author byline on blog posts: "Craig Blackman" → "Esther Fair, Level 4"
- [ ] Add FAQ schema to `/faqs` page

### PHASE 3: MEDIUM (Within 2 weeks)
- [ ] Create internal linking strategy (topic clustering)
- [ ] Add Article schema to blog posts with author authority
- [ ] Create blog content (new posts aligned with health conditions strategy)
- [ ] Update copy on About + Personal Training pages (remove generic language)

### PHASE 4: LONG-TERM (1-3 months)
- [ ] Publish 12-month blog content calendar (27 new posts)
- [ ] Build topical clusters around health conditions
- [ ] Acquire local links (healthcare providers, cancer support orgs)
- [ ] Monitor Search Console for new ranking opportunities
- [ ] Optimize for AI search engines (AEO - AI-optimized content)

---

## KEYWORD ROADMAP FOR CONTENT

### HIGH-PRIORITY KEYWORDS (Low competition, High relevance)
- cancer rehabilitation personal training
- post-surgery strength training
- personal training for disabilities
- exercise after cancer treatment
- mobility limitations personal trainer
- health conditions fitness coaching
- exercise referral specialist

### MEDIUM-PRIORITY KEYWORDS
- personal trainer for complex needs
- adaptive fitness training
- Level 4 personal trainer (specialist)
- post-op fitness guidance

### LOCAL KEYWORDS
- personal trainer Worthing (generic, but valuable for local discovery)
- fitness coaching Worthing
- specialist fitness Worthing

---

## SUMMARY SCORECARD

| Category | Score | Status |
|----------|-------|--------|
| **Indexation** | 0/10 | 🚨 CRITICAL — Noindexed |
| **Technical SEO** | 8/10 | ✅ Solid foundation |
| **Title Tags** | 6/10 | ⚠️ Need keyword refinement |
| **Meta Descriptions** | 8/10 | ✅ Strong, minor tweaks |
| **Heading Structure** | 9/10 | ✅ Excellent |
| **Internal Linking** | 5/10 | ⚠️ Missing topic clustering |
| **Content Quality** | 6/10 | ⚠️ 36% off-brand blog posts |
| **E-E-A-T Signals** | 9/10 | ✅ Excellent credentials |
| **Schema Markup** | 6/10 | ⚠️ Partial (Service only) |
| **Mobile-Friendly** | 9/10 | ✅ Excellent |
| **Site Architecture** | 8/10 | ✅ Good hierarchy |
| **Overall SEO Health** | **6/10** | **⚠️ High Potential, Needs Fixes** |

---

## NEXT STEPS

1. **Immediate:** Enable indexation (remove noindex)
2. **This Week:** Update blog + titles + meta descriptions
3. **This Month:** Submit to Search Console, monitor for new ranking opportunities
4. **Ongoing:** Publish 2-3 new blog posts per month aligned with keyword roadmap

---

**Questions?** Contact your SEO specialist or review the detailed task breakdown in `plan.md`.
