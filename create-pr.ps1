# Eternal Fitness - Create PR for conflict fixes and content updates
# Run this from: C:\GitHub\pdf-to-charm-96
# Usage: .\create-pr.ps1 -Token "your_github_token_here"

param(
    [Parameter(Mandatory=$true)]
    [string]$Token
)

$repo = "craigblackman1-rgb/pdf-to-charm-96"
$branch = "fix/merge-conflicts-and-content-updates"
$headers = @{
    "Authorization" = "token $Token"
    "Accept" = "application/vnd.github.v3+json"
    "Content-Type" = "application/json"
}

Write-Host "Creating branch '$branch'..." -ForegroundColor Cyan

# Get main SHA
$mainRef = Invoke-RestMethod -Uri "https://api.github.com/repos/$repo/git/ref/heads/main" -Headers $headers
$mainSha = $mainRef.object.sha
Write-Host "  Main SHA: $($mainSha.Substring(0,8))" -ForegroundColor Gray

# Create branch
try {
    $branchBody = @{ ref = "refs/heads/$branch"; sha = $mainSha } | ConvertTo-Json
    Invoke-RestMethod -Uri "https://api.github.com/repos/$repo/git/refs" -Method POST -Headers $headers -Body $branchBody | Out-Null
    Write-Host "  Branch created OK" -ForegroundColor Green
} catch {
    if ($_.Exception.Response.StatusCode -eq 422) {
        Write-Host "  Branch already exists, continuing..." -ForegroundColor Yellow
    } else {
        throw
    }
}

# Files to push
$files = @(
    "src/components/FAQSection.tsx",
    "src/pages/About.tsx",
    "src/pages/Blog.tsx",
    "src/pages/BlogPost.tsx",
    "src/pages/Pricing.tsx"
)

$commitMessages = @{
    "src/components/FAQSection.tsx" = "Fix merge conflict and update FAQ copy"
    "src/pages/About.tsx"           = "Fix merge conflict, add images to long-term cards, fix qualifications copy"
    "src/pages/Blog.tsx"            = "Fix merge conflict, replace generic blog copy"
    "src/pages/BlogPost.tsx"        = "Fix merge conflict, fix copy-paste error in hero"
    "src/pages/Pricing.tsx"         = "Replace placeholder SaaS pricing with real PT pricing"
}

foreach ($file in $files) {
    Write-Host "Pushing $file..." -ForegroundColor Cyan

    # Read and encode file
    $content = [System.IO.File]::ReadAllBytes("$PSScriptRoot\$($file.Replace('/', '\'))")
    $encoded = [Convert]::ToBase64String($content)

    # Get current SHA on branch
    try {
        $existing = Invoke-RestMethod -Uri "https://api.github.com/repos/$repo/contents/$file`?ref=$branch" -Headers $headers
        $fileSha = $existing.sha
    } catch {
        $fileSha = $null
    }

    # Push file
    $body = @{
        message = $commitMessages[$file]
        content = $encoded
        branch  = $branch
    }
    if ($fileSha) { $body.sha = $fileSha }

    Invoke-RestMethod -Uri "https://api.github.com/repos/$repo/contents/$file" -Method PUT -Headers $headers -Body ($body | ConvertTo-Json) | Out-Null
    Write-Host "  OK" -ForegroundColor Green
}

# Create PR
Write-Host "Creating pull request..." -ForegroundColor Cyan
$prBody = @{
    title = "Fix merge conflicts + content updates (pricing, blog copy, about images)"
    head  = $branch
    base  = "main"
    body  = @"
## Summary

Resolves build-breaking merge conflicts and applies all pending content updates.

### Bug fixes
- **Merge conflicts resolved** in 4 files — conflict markers (``<<<<<<<``, ``=======``, ``>>>>>>>``) were causing TypeScript/Vite compilation failure
  - ``src/components/FAQSection.tsx``
  - ``src/pages/About.tsx``
  - ``src/pages/Blog.tsx``
  - ``src/pages/BlogPost.tsx``

### Content updates
- **Pricing page** — replaced placeholder SaaS pricing ($ 0/9/29) with real PT pricing: Single £45, Block of 12 £480 (£40/session), Block of 24 £840 (£35/session). Removed billing toggle.
- **FAQSection** — fixed placeholder header copy ("Reduce friction and answer common concerns"), fixed first FAQ answer (was generic AI filler)
- **BlogPost hero** — fixed copy-paste error ("This Cookies Policy explains how we collect...")
- **Blog page** — replaced generic AI copy ("Insights and Inspiration, Explore Our Blog") with specific, on-brand copy
- **About page** — fixed ``[REPs / CIMSPA]`` literal placeholder in qualifications; long-term progress cards now use real photos from assets instead of grey boxes
"@
} | ConvertTo-Json

$pr = Invoke-RestMethod -Uri "https://api.github.com/repos/$repo/pulls" -Method POST -Headers $headers -Body $prBody
Write-Host ""
Write-Host "Pull request created!" -ForegroundColor Green
Write-Host "URL: $($pr.html_url)" -ForegroundColor Cyan
Start-Process $pr.html_url
