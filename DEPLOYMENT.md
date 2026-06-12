# Adam Hollinshead Website - Deployment Guide

This is a static React website built with Vite, Tailwind CSS, and TypeScript. It can be deployed to any static hosting platform.

## Prerequisites

- Node.js 18+ (download from https://nodejs.org)
- npm or pnpm package manager

## Local Development

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# or
pnpm dev
```

The site will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
# or
pnpm build
```

This creates an optimized production build in the `dist/` directory.

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest option for deploying Vite projects.

1. **Sign up** at https://vercel.com
2. **Connect your Git repository** or upload the project directly
3. **Configure build settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy** - Vercel will automatically build and deploy
5. **Add custom domain** in Vercel dashboard under Settings > Domains

### Option 2: Netlify

1. **Sign up** at https://netlify.com
2. **Connect your Git repository** or drag-and-drop the `dist/` folder
3. **Configure build settings:**
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. **Deploy** - Netlify will build and deploy automatically
5. **Add custom domain** in Netlify dashboard under Domain Management

### Option 3: GitHub Pages

1. **Create a GitHub repository** for the project
2. **Push the code** to your repository
3. **Update `vite.config.ts`** to add your repository name:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```
4. **Enable GitHub Pages** in repository Settings > Pages
5. **Set source** to "GitHub Actions"
6. **Add custom domain** in repository Settings > Pages > Custom domain

### Option 4: Any Static Host (AWS S3, Firebase, etc.)

1. **Build the project:**
   ```bash
   npm run build
   ```
2. **Upload the `dist/` folder** to your hosting provider
3. **Configure your host** to serve `index.html` for all routes (important for client-side routing)
4. **Add custom domain** through your hosting provider's DNS settings

## Custom Domain Setup

### For Vercel/Netlify:
- Go to your project dashboard
- Navigate to Domain settings
- Add your custom domain
- Follow the instructions to update DNS records at your domain registrar

### For Other Hosts:
1. **Get your hosting provider's DNS records** (usually an A record or CNAME)
2. **Log into your domain registrar** (GoDaddy, Namecheap, etc.)
3. **Update DNS records** to point to your hosting provider
4. **Wait 24-48 hours** for DNS propagation

## Environment Variables

The website uses CDN-hosted images via `/manus-storage/` paths. These are pre-configured and don't require additional setup.

If you need to change image URLs, edit `client/src/pages/Home.tsx` and update the image paths.

## Project Structure

```
client/
  ├── src/
  │   ├── pages/        # Page components
  │   ├── components/   # Reusable UI components
  │   ├── App.tsx       # Main app component
  │   ├── main.tsx      # Entry point
  │   └── index.css     # Global styles
  ├── index.html        # HTML template
  └── public/           # Static assets
package.json            # Dependencies and scripts
vite.config.ts          # Vite configuration
tailwind.config.ts      # Tailwind CSS configuration
```

## Troubleshooting

### Build fails with "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images not loading after deployment
- Ensure image paths in `Home.tsx` are correct
- Check that CDN URLs are accessible from your domain
- Verify CORS settings if using external CDN

### Routing issues on custom domain
- Make sure your host is configured to serve `index.html` for all routes
- This is critical for client-side routing to work properly

## Support

For issues with the website code, check the source files in `client/src/`.

For hosting-specific issues, refer to your provider's documentation:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- GitHub Pages: https://pages.github.com

---

**Website:** Adam Hollinshead - Indie Pop Artist
**Built with:** React 19 + Vite + Tailwind CSS 4
