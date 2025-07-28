# AI Commissions - Image Collection Guide

## 📸 Missing Images Summary

Based on the 404 errors in your console, here are all the images you need to collect:

## 🛠️ Tool Images Needed

### AI Writing Tools

- **jasper-ai.png** - https://www.jasper.ai (look for their logo/brand assets)
- **copy-ai.png** - https://www.copy.ai (download their logo)
- **writesonic.png** - https://writesonic.com (get their brand logo)
- **grammarly.png** - https://www.grammarly.com (their logo/icon)
- **quillbot.png** - https://quillbot.com (their brand logo)

### AI Video Tools

- **pictory.png** - https://pictory.ai (their logo)
- **descript.png** - https://www.descript.com (their brand logo)
- **synthesia.png** - https://www.synthesia.io (their logo)
- **invideo.png** - https://invideo.io (their logo)
- **midjourney.png** - https://www.midjourney.com (their logo)

### AI Design Tools

- **canva-ai.png** - https://www.canva.com (Canva logo)
- **dall-e.png** - https://openai.com/dall-e-3 (DALL-E logo)
- **leonardo-ai.png** - https://leonardo.ai (their logo)

### AI Chat/General Tools

- **chatgpt-plus.png** - https://openai.com/chatgpt (ChatGPT logo)
- **claude-pro.png** - https://www.anthropic.com/claude (Claude logo)
- **perplexity-pro.png** - https://www.perplexity.ai (their logo)
- **character-ai.png** - https://character.ai (their logo)

### AI Productivity Tools

- **notion-ai.png** - https://www.notion.so (Notion logo)
- **zapier.png** - https://zapier.com (Zapier logo)
- **otter-ai.png** - https://otter.ai (their logo)
- **clickup-ai.png** - https://clickup.com (ClickUp logo)

### AI Development Tools

- **github-copilot.png** - https://github.com/features/copilot (GitHub Copilot logo)
- **cursor-ai.png** - https://cursor.sh (Cursor logo)
- **replit-ai.png** - https://replit.com (Replit logo)
- **tabnine.png** - https://www.tabnine.com (Tabnine logo)

### AI Marketing Tools

- **semrush.png** - https://www.semrush.com (SEMrush logo)
- **hubspot-ai.png** - https://www.hubspot.com (HubSpot logo)
- **mailchimp-ai.png** - https://mailchimp.com (Mailchimp logo)

## 📰 Blog Images Needed

### Author Image

- **author-alex.png** - Create or find a professional headshot for Alex Chen

### Featured Blog Images

- **best-ai-tools-2025.png** - Create/find image for "7 Best AI Tools for Affiliate Marketers"
- **jasper-vs-copyai.png** - Create comparison image for Jasper vs Copy.ai post
- **passive-income-ai-tools.png** - Create image for passive income guide
- **recurring-commissions-ai-tools.png** - Create image for recurring commissions post
- **ai-tools-content-creators.png** - Create image for content creators post

### Default Images

- **default-featured.png** - Generic blog post featured image
- **logo.png** - Your site logo
- **og-image.png** - Open Graph image for social sharing (1200x630px)

## 🎯 How to Collect These Images

### Method 1: Official Brand Assets

1. Visit each tool's website
2. Look for "Brand Assets", "Press Kit", or "Media Kit" pages
3. Download official logos (usually PNG with transparent background)
4. Resize to 200x200px for consistency

### Method 2: Screenshot & Edit

1. Take screenshots of the tool logos from their websites
2. Use a tool like Canva or Photoshop to:
   - Remove backgrounds
   - Resize to 200x200px
   - Save as PNG

### Method 3: Use Placeholder Service (Temporary)

1. Generate placeholder images for now
2. Replace with real logos later
3. Use services like placeholder.com or unsplash

## 📁 Where to Save Images

Save all images in these directories:

- **Tool images**: `/public/images/` (root level)
- **Blog images**: `/public/images/blog/`
- **Author images**: `/public/images/`

## 🔧 Quick PowerShell Script to Create Placeholder Images

```powershell
# Navigate to your project's public/images directory
cd "C:\Users\ewahr\Projects\next-projects\ai-tools-directory\public\images"

# Create placeholder tool images (you'll replace these with real ones)
$tools = @(
    "jasper-ai", "copy-ai", "writesonic", "grammarly", "quillbot",
    "pictory", "descript", "synthesia", "invideo", "midjourney",
    "canva-ai", "dall-e", "leonardo-ai", "chatgpt-plus", "claude-pro",
    "perplexity-pro", "character-ai", "notion-ai", "zapier", "otter-ai",
    "clickup-ai", "github-copilot", "cursor-ai", "replit-ai", "tabnine",
    "semrush", "hubspot-ai", "mailchimp-ai"
)

# This creates empty files - you'll need to add actual images
foreach ($tool in $tools) {
    New-Item -Name "$tool.png" -ItemType File -Force
}

# Create blog directory and author image
New-Item -Name "author-alex.png" -ItemType File -Force
New-Item -Path "blog" -ItemType Directory -Force
cd blog
$blogImages = @(
    "best-ai-tools-2025", "jasper-vs-copyai", "passive-income-ai-tools",
    "recurring-commissions-ai-tools", "ai-tools-content-creators", "default-featured"
)
foreach ($img in $blogImages) {
    New-Item -Name "$img.png" -ItemType File -Force
}
```

## 🎨 Recommended Image Specs

- **Tool logos**: 200x200px, PNG with transparent background
- **Blog featured images**: 1200x630px, high quality
- **Author image**: 200x200px, professional headshot
- **Logo**: 100x100px, your brand logo
- **OG image**: 1200x630px for social media sharing

## 🚀 Priority Order

1. **High Priority** (most visible):

   - jasper-ai.png, copy-ai.png, writesonic.png
   - author-alex.png
   - logo.png, og-image.png

2. **Medium Priority**:

   - All other tool logos
   - Blog featured images

3. **Low Priority**:
   - Placeholder images for tools not yet featured

## 📋 Next Steps

1. Create the placeholder files using the PowerShell script above
2. Visit the top 10 tool websites and download their official logos
3. Create/find an author headshot for Alex Chen
4. Design blog featured images (or use AI tools like Midjourney/DALL-E)
5. Test your site - the 404 errors should disappear!

## 💡 Pro Tips

- Keep original high-res versions in a separate folder
- Use consistent sizing and format (PNG recommended)
- Optimize images for web (use tools like TinyPNG)
- Consider using CDN links for faster loading
- Always respect brand guidelines when using logos

Would you like me to help you create any specific images or modify the image references in your code?
