# Deployment Guide 🚀

This guide will help you deploy the Little Learners Academy frontend application to various hosting platforms.

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git
- Account on your chosen hosting platform

## 🏗️ Build for Production

Before deploying, build the project for production:

```bash
cd Front-End
npm install
npm run build
```

This creates a `dist` folder with optimized production files.

## 🌐 Deployment Options

### 1. Vercel (Recommended)

Vercel is perfect for React applications with automatic deployments.

#### Setup:
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   cd Front-End
   vercel
   ```

4. Follow the prompts and your app will be deployed!

#### Automatic Deployments:
- Connect your GitHub repository to Vercel
- Every push to main branch triggers automatic deployment
- Preview deployments for pull requests

### 2. Netlify

Great for static sites with drag-and-drop deployment.

#### Manual Deployment:
1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live!

#### Git Integration:
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### 3. GitHub Pages

Free hosting directly from your GitHub repository.

#### Setup:
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/Little-Learner",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### 4. AWS S3 + CloudFront

For enterprise-level deployments.

#### Setup:
1. Create an S3 bucket
2. Enable static website hosting
3. Upload the `dist` folder contents
4. Set up CloudFront distribution
5. Configure custom domain (optional)

### 5. Firebase Hosting

Google's hosting platform with great performance.

#### Setup:
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login and initialize:
   ```bash
   firebase login
   firebase init hosting
   ```

3. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## 🔧 Environment Configuration

### Environment Variables

Create a `.env` file in the Front-End directory:

```env
VITE_APP_TITLE=Little Learners Academy
VITE_APP_API_URL=https://api.littlelearnersacademy.com
VITE_APP_CONTACT_EMAIL=info@littlelearnersacademy.com
```

### Build Configuration

Update `vite.config.js` for production:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Change to '/Little-Learner/' for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Set to true for debugging
  }
})
```

## 📊 Performance Optimization

### Before Deployment:

1. **Optimize Images:**
   ```bash
   # Install image optimization tool
   npm install -g imagemin-cli
   
   # Optimize images
   imagemin src/assets/*.{jpg,png} --out-dir=src/assets/optimized
   ```

2. **Bundle Analysis:**
   ```bash
   npm install --save-dev vite-bundle-analyzer
   ```

3. **Lighthouse Audit:**
   - Use Chrome DevTools Lighthouse
   - Aim for 90+ scores in all categories

### Production Checklist:

- [ ] All images optimized
- [ ] Bundle size minimized
- [ ] Gzip compression enabled
- [ ] HTTPS configured
- [ ] CDN configured (if applicable)
- [ ] Analytics tracking added
- [ ] Error monitoring setup

## 🔒 Security Considerations

### Headers Configuration:

Add security headers to your hosting platform:

```http
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000
```

### Content Security Policy:

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https:;
```

## 📈 Monitoring and Analytics

### Google Analytics:

Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Monitoring:

Consider adding Sentry or similar service:

```bash
npm install @sentry/react @sentry/tracing
```

## 🚀 Continuous Deployment

### GitHub Actions:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    - name: Install dependencies
      run: cd Front-End && npm install
    - name: Build
      run: cd Front-End && npm run build
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        working-directory: Front-End
```

## 🔄 Rollback Strategy

### Quick Rollback:

1. **Vercel:** Use the dashboard to rollback to previous deployment
2. **Netlify:** Use the deploy history to rollback
3. **Manual:** Revert to previous commit and redeploy

### Database Rollback:

If using a backend, ensure database migrations are reversible.

## 📞 Support

If you encounter issues during deployment:

1. Check the build logs for errors
2. Verify environment variables
3. Test locally with production build
4. Check hosting platform documentation
5. Contact support team

## 🎯 Best Practices

- Always test production build locally first
- Use staging environment for testing
- Monitor performance after deployment
- Keep dependencies updated
- Use semantic versioning
- Document deployment process
- Have rollback plan ready

---

**Happy Deploying!** 🚀

For more help, check our [Contributing Guide](CONTRIBUTING.md) or open an issue.
