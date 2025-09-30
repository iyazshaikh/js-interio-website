# JS Interio Website - Complete Setup Guide

## 📥 Download Instructions

### Method 1: Manual File Download (Recommended for most users)

Download these essential files and folders:

#### Core Configuration Files:
- `package.json` - Project dependencies and scripts
- `next.config.ts` - Next.js configuration  
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration
- `components.json` - shadcn/ui configuration

#### Source Code:
- **`src/`** folder (complete folder):
  - `src/app/` - All pages (home, about, contact, projects)
  - `src/components/` - All React components (navigation, UI components)
  - `src/hooks/` - Custom React hooks
  - `src/lib/` - Utility functions and database setup
  - `src/app/globals.css` - Global styles and animations

#### Public Assets:
- **`public/`** folder (complete folder):
  - `public/favicon.ico` - Website favicon
  - `public/logo.svg` - Default logo (replace with JS Interio logo)
  - `public/robots.txt` - SEO configuration

#### Documentation:
- `README.md` - Project overview
- `WEBSITE_SETUP.md` - This setup guide
- `download-guide.md` - Detailed download instructions

### Method 2: Using Git (If you're comfortable with command line)

```bash
# If you have git access, you can clone the repository
# Then create a backup:

# Create a compressed archive excluding unnecessary files
tar -czf js-interio-backup.tar.gz \
  --exclude=node_modules \
  --exclude=.git \
  --exclude=.next \
  --exclude=dist \
  --exclude=*.log \
  .
```

## 🚀 Website Setup Instructions

### 1. Local Development Setup

#### Prerequisites:
- Node.js (v18 or higher)
- npm or yarn

#### Installation Steps:

```bash
# 1. Create a new folder for your website
mkdir js-interio-website
cd js-interio-website

# 2. Extract all downloaded files into this folder

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev

# 5. Open your browser and visit:
# http://localhost:3000
```

### 2. Production Build

```bash
# Build the website for production
npm run build

# Test the production build locally
npm start
```

## 📝 How to Add Projects

### Step 1: Add Project Images

1. **Create images folder structure:**
   ```
   public/
   └── images/
       └── projects/
           ├── project-1/
           │   ├── main.jpg
           │   ├── gallery-1.jpg
           │   ├── gallery-2.jpg
           │   └── gallery-3.jpg
           └── project-2/
               ├── main.jpg
               └── gallery-1.jpg
   ```

2. **Optimize your images:**
   - Use JPEG or WebP format
   - Compress images for web (use tools like TinyPNG)
   - Recommended size: 1200x800px for main images
   - Use consistent naming conventions

### Step 2: Update Navigation Menu

**File:** `src/components/navigation.tsx`

```typescript
// Find the projectCategories array and update it:
const projectCategories = [
  {
    name: "COMMERCIAL AND PUBLIC INTERIORS",
    projects: [
      "MUMBAI OFFICE TOWER",
      "BANDRA RETAIL STORE", 
      "SOUTH MUMBAI RESTAURANT"
      // Add your actual project names
    ]
  },
  {
    name: "RESIDENTIAL INTERIORS",
    projects: [
      "WORLI LUXURY APARTMENT",
      "MALABAR HILL PENTHOUSE",
      "LONAVALA VILLA"
      // Add your actual project names
    ]
  },
  {
    name: "COMMERCIAL AND PUBLIC BUILDINGS",
    projects: [
      "MUMBAI OFFICE COMPLEX",
      "THANE SHOPPING MALL"
      // Add your actual project names
    ]
  },
  {
    name: "RESIDENTIAL BUILDINGS",
    projects: [
      "ALIBAUG BEACH HOUSE",
      "PUNE BUNGALOW"
      // Add your actual project names
    ]
  },
  {
    name: "ART DIRECTION / INSTALLATIONS",
    projects: [
      "MUMBAI ART GALLERY",
      "CORPORATE ART INSTALLATION"
      // Add your actual project names
    ]
  }
]
```

### Step 3: Add Projects to Projects Page

**File:** `src/app/projects/page.tsx`

```typescript
// Find the allProjects array and update it:
const allProjects = [
  {
    title: "MUMBAI OFFICE TOWER",
    category: "COMMERCIAL AND PUBLIC INTERIORS",
    secondaryCategory: "COMMERCIAL AND PUBLIC BUILDINGS",
    description: "A modern sustainable office tower in the heart of Mumbai's business district",
    year: "2024",
    location: "Mumbai, Maharashtra",
    image: "/images/projects/mumbai-office/main.jpg"
  },
  {
    title: "WORLI LUXURY APARTMENT",
    category: "RESIDENTIAL INTERIORS",
    secondaryCategory: "RESIDENTIAL BUILDINGS",
    description: "High-end luxury apartment with panoramic sea views and premium finishes",
    year: "2024",
    location: "Mumbai, Maharashtra", 
    image: "/images/projects/worli-apartment/main.jpg"
  },
  {
    title: "BANDRA RETAIL STORE",
    category: "COMMERCIAL AND PUBLIC INTERIORS",
    description: "Contemporary retail space with innovative display systems and customer experience focus",
    year: "2023",
    location: "Mumbai, Maharashtra",
    image: "/images/projects/bandra-retail/main.jpg"
  }
  // Add more projects...
]
```

### Step 4: Create Individual Project Detail Pages

**File:** `src/app/projects/[slug]/page.tsx`

```typescript
// Add your project data to the projectData object:
const projectData: Record<string, any> = {
  'mumbai-office-tower': {
    title: "MUMBAI OFFICE TOWER",
    category: "COMMERCIAL AND PUBLIC INTERIORS",
    secondaryCategory: "COMMERCIAL AND PUBLIC BUILDINGS",
    description: "A modern sustainable office tower in the heart of Mumbai's business district",
    fullDescription: "This landmark office tower represents the pinnacle of commercial architecture in Mumbai. Featuring sustainable design elements, smart building technology, and premium amenities, it sets new standards for workplace environments.",
    year: "2024",
    location: "Mumbai, Maharashtra",
    client: "ABC Developments Pvt Ltd",
    size: "250,000 sq ft",
    status: "Completed",
    images: [
      "/images/projects/mumbai-office/main.jpg",
      "/images/projects/mumbai-office/gallery-1.jpg", 
      "/images/projects/mumbai-office/gallery-2.jpg",
      "/images/projects/mumbai-office/gallery-3.jpg",
      "/images/projects/mumbai-office/gallery-4.jpg"
    ],
    features: [
      "LEED Platinum certified sustainable design",
      "Smart building management system",
      "Rooftop garden and recreational areas",
      "Advanced security and access control",
      "High-speed elevators and smart parking",
      "Energy-efficient HVAC and lighting"
    ],
    challenges: "The main challenge was to create a landmark building that would stand out in Mumbai's crowded skyline while maintaining sustainability standards and meeting the diverse needs of modern businesses.",
    solution: "Our solution involved innovative facade design, integration of green building technologies, and careful space planning to create flexible, efficient work environments that promote productivity and well-being."
  },
  
  'worli-luxury-apartment': {
    title: "WORLI LUXURY APARTMENT",
    category: "RESIDENTIAL INTERIORS",
    secondaryCategory: "RESIDENTIAL BUILDINGS",
    description: "High-end luxury apartment with panoramic sea views and premium finishes",
    fullDescription: "This luxury apartment in Worli offers breathtaking views of the Arabian Sea and Mumbai's skyline. Every detail has been carefully considered to create a living space that combines luxury, comfort, and functionality.",
    year: "2024",
    location: "Mumbai, Maharashtra",
    client: "Private Client",
    size: "3,500 sq ft",
    status: "Completed",
    images: [
      "/images/projects/worli-apartment/main.jpg",
      "/images/projects/worli-apartment/gallery-1.jpg",
      "/images/projects/worli-apartment/gallery-2.jpg",
      "/images/projects/worli-apartment/gallery-3.jpg"
    ],
    features: [
      "Panoramic sea views from every room",
      "Italian marble and premium wood finishes",
      "Smart home automation system",
      "Modular kitchen with high-end appliances",
      "Luxury bathrooms with designer fixtures",
      "Custom furniture and lighting design"
    ],
    challenges: "The challenge was to maximize the spectacular views while creating a comfortable, functional living space that would meet the client's luxury lifestyle requirements.",
    solution: "We used floor-to-ceiling windows, open-plan living areas, and carefully selected materials to create a sense of space and luxury while ensuring practical functionality for daily living."
  },
  
  // Add more projects following the same structure...
}
```

### Step 5: Add Featured Projects to Homepage

**File:** `src/app/page.tsx`

```typescript
// Update the featuredProjects array:
const featuredProjects = [
  {
    title: "MUMBAI OFFICE TOWER",
    category: "COMMERCIAL AND PUBLIC INTERIORS",
    description: "Modern sustainable office tower in Mumbai's business district",
    image: "/images/projects/mumbai-office/main.jpg"
  },
  {
    title: "WORLI LUXURY APARTMENT", 
    category: "RESIDENTIAL INTERIORS",
    description: "Luxury apartment with panoramic sea views and premium finishes",
    image: "/images/projects/worli-apartment/main.jpg"
  },
  {
    title: "BANDRA RETAIL STORE",
    category: "COMMERCIAL AND PUBLIC INTERIORS", 
    description: "Contemporary retail space with innovative customer experience design",
    image: "/images/projects/bandra-retail/main.jpg"
  },
  {
    title: "ALIBAUG BEACH HOUSE",
    category: "RESIDENTIAL BUILDINGS",
    description: "Beachfront villa combining traditional architecture with modern amenities",
    image: "/images/projects/alibaug-villa/main.jpg"
  }
]
```

## 🌐 Deployment Guide

### Deploy to Vercel (Easiest)

1. **Create GitHub Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: JS Interio website"
   # Create repository on GitHub and push
   ```

2. **Deploy to Vercel:**
   - Go to vercel.com
   - Click "New Project"
   - Connect your GitHub repository
   - Vercel will automatically detect Next.js and deploy

### Deploy to Hostinger

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files to Hostinger:**
   - Upload the `.next` folder
   - Upload the `public` folder  
   - Upload `package.json`
   - Upload `next.config.ts`

3. **Configure Node.js on Hostinger:**
   - Set Node.js version to 18+
   - Set start command: `npm start`
   - Install dependencies: `npm install`

### Deploy to Netlify

1. **Build the project:**
   ```bash
   npm run build
   npm run export  # If using static export
   ```

2. **Upload to Netlify:**
   - Drag and drop the `out` folder (if using static export)
   - Or connect GitHub repository for automatic deployment

## 🎨 Customization Guide

### Change Brand Colors
**File:** `src/app/globals.css`

Update the CSS custom properties in the `:root` selector.

### Update Contact Information
**Files to update:**
- `src/app/page.tsx` (footer)
- `src/app/about/page.tsx` (contact section)
- `src/app/contact/page.tsx` (contact information)

### Add New Pages
1. Create new folder in `src/app/`
2. Add `page.tsx` file
3. Update navigation in `src/components/navigation.tsx`

### Modify Layout
**File:** `src/app/layout.tsx`
Update the root layout component for site-wide changes.

## 🔧 Maintenance

### Adding New Dependencies
```bash
npm install package-name
```

### Updating Dependencies
```bash
npm update
```

### Code Quality
```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint -- --fix
```

## 📱 Mobile Optimization

The website is fully responsive, but when adding images:
- Use responsive image formats (WebP)
- Add alt text for accessibility
- Test on different screen sizes
- Optimize image sizes for mobile

## 🚀 Performance Tips

1. **Image Optimization:**
   - Use WebP format
   - Compress images before uploading
   - Use appropriate image sizes

2. **Code Optimization:**
   - Remove unused imports
   - Use React.memo for components
   - Implement lazy loading for images

3. **SEO Optimization:**
   - Add meta descriptions to each page
   - Use semantic HTML
   - Add structured data for projects

## 🆘 Troubleshooting

### Common Issues:

1. **Build Errors:**
   ```bash
   # Clean build
   rm -rf .next
   npm run build
   ```

2. **Dependency Issues:**
   ```bash
   # Clear node modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Port Already in Use:**
   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   ```

## 📞 Support

If you need help with:
- Adding specific types of projects
- Custom design requirements
- Deployment issues
- Feature additions

Feel free to refer to the code comments and structure - everything is well-documented and easy to modify!

---

**Happy building! 🏗️**