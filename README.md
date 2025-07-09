# Madibana IT Solutions and Cabling Website

A modern, responsive website for Madibana IT Solutions and Cabling (PTY) Ltd - South Africa's trusted ICT company.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Google Maps Integration**: Interactive map showing office location
- **Newsletter Subscription**: Email collection with preferences
- **Contact Forms**: Professional contact and inquiry forms
- **SEO Optimized**: Meta tags and structured data for search engines

## Google Maps Setup

To enable the Google Maps functionality:

1. **Get a Google Maps API Key**:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the "Maps JavaScript API" and "Places API"
   - Create credentials (API Key)
   - Restrict the API key to your domain for security

2. **Update the API Key**:
   - Open `index.html`
   - Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key:
   ```html
   <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY&libraries=places"></script>
   ```

3. **Customize Location**:
   - In `src/pages/Contact.tsx`, update the `officeLocation` coordinates to your exact office location
   - Current coordinates are set to Johannesburg city center

## Technologies Used

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Lucide React** for icons
- **Google Maps JavaScript API** for location display
- **Vite** for build tooling

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Set up Google Maps API Key** (see above)

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── GoogleMap.tsx   # Google Maps integration
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── ...
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   ├── Contact.tsx     # Contact page
│   └── Newsletter.tsx  # Newsletter page
└── ...
```

## Customization

### Company Information
Update company details in:
- `src/pages/About.tsx` - Company story and client list
- `src/pages/Services.tsx` - Service offerings
- `src/components/Header.tsx` - Contact information
- `src/components/Footer.tsx` - Footer details

### Styling
- Tailwind CSS classes are used throughout
- Custom styles can be added to `src/index.css`
- Color scheme can be modified in `tailwind.config.js`

### SEO
Update meta tags in `index.html`:
- Title and description
- Open Graph tags
- Structured data (JSON-LD)

## Deployment

The site can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## Support

For technical support or customization requests, contact Madibana IT Solutions and Cabling.

---

© 2024 Madibana IT Solutions and Cabling (PTY) Ltd. All rights reserved.