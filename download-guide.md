# JS Interio Website - Download Guide

## How to Download the Full Website

### Option 1: Manual Download (File by File)
You can download the following key files and folders:

#### Essential Files:
1. **package.json** - Project dependencies and scripts
2. **next.config.ts** - Next.js configuration
3. **tailwind.config.ts** - Tailwind CSS configuration
4. **tsconfig.json** - TypeScript configuration
5. **eslint.config.mjs** - ESLint configuration

#### Source Code:
6. **src/** folder (contains all source code):
   - `src/app/` - All pages and app router files
   - `src/components/` - All React components
   - `src/hooks/` - Custom hooks
   - `src/lib/` - Utility libraries
   - `src/app/globals.css` - Global styles

#### Public Files:
7. **public/** folder - Static assets (images, favicon, etc.)

#### Configuration Files:
8. **postcss.config.mjs** - PostCSS configuration
9. **components.json** - shadcn/ui configuration

### Option 2: Using Command Line (If you have access)
```bash
# Create a compressed archive
tar -czf js-interio-backup.tar.gz \
  src/ \
  public/ \
  package.json \
  next.config.ts \
  tailwind.config.ts \
  tsconfig.json \
  eslint.config.mjs \
  postcss.config.mjs \
  components.json \
  README.md

# Or if you have zip installed:
zip -r js-interio-website.zip \
  src/ \
  public/ \
  package.json \
  next.config.ts \
  tailwind.config.ts \
  tsconfig.json \
  eslint.config.mjs \
  postcss.config.mjs \
  components.json \
  README.md
```

## How to Add Projects to the Website

### 1. Adding Projects to Navigation Dropdown

**File:** `src/components/navigation.tsx`

Find the `projectCategories` array and add your projects:

```typescript
const projectCategories = [
  {
    name: "COMMERCIAL AND PUBLIC INTERIORS",
    projects: [
      "OFFICE BUILDING MUMBAI",
      "RETAIL STORE BANDRA",
      "RESTAURANT SOUTH MUMBAI"
      // Add your project names here
    ]
  },
  {
    name: "RESIDENTIAL INTERIORS",
    projects: [
      "LUXURY APARTMENT WORLI",
      "PENTHOUSE MALABAR HILL",
      "VILLA LONAVALA"
      // Add your project names here
    ]
  },
  // ... other categories
]
```

### 2. Adding Projects to Projects Page

**File:** `src/app/projects/page.tsx`

Find the `allProjects` array and add your projects:

```typescript
const allProjects = [
  {
    title: "OFFICE BUILDING MUMBAI",
    category: "COMMERCIAL AND PUBLIC INTERIORS",
    secondaryCategory: "COMMERCIAL AND PUBLIC BUILDINGS", // Optional
    description: "Modern office building with sustainable design elements",
    year: "2024",
    location: "Mumbai, Maharashtra",
    image: "/images/office-mumbai.jpg" // Add your image path
  },
  {
    title: "LUXURY APARTMENT WORLI",
    category: "RESIDENTIAL INTERIORS",
    secondaryCategory: "RESIDENTIAL BUILDINGS", // Optional
    description: "High-end residential apartment with panoramic city views",
    year: "2024",
    location: "Mumbai, Maharashtra",
    image: "/images/apartment-worli.jpg" // Add your image path
  },
  // Add more projects...
]
```

### 3. Creating Individual Project Pages

**File:** `src/app/projects/[slug]/page.tsx`

Add your project data to the `projectData` object:

```typescript
const projectData: Record<string, any> = {
  'office-building-mumbai': {
    title: "OFFICE BUILDING MUMBAI",
    category: "COMMERCIAL AND PUBLIC INTERIORS",
    secondaryCategory: "COMMERCIAL AND PUBLIC BUILDINGS",
    description: "Modern office building with sustainable design elements",
    fullDescription: "Detailed description of the project...",
    year: "2024",
    location: "Mumbai, Maharashtra",
    client: "ABC Corporation",
    size: "50,000 sq ft",
    status: "Completed",
    images: [
      "/images/office-mumbai-1.jpg",
      "/images/office-mumbai-2.jpg",
      "/images/office-mumbai-3.jpg",
      // Add more images...
    ],
    features: [
      "Sustainable design",
      "Smart building technology",
      "Green roof terrace",
      // Add more features...
    ],
    challenges: "Project challenges description...",
    solution: "Solution description..."
  },
  'luxury-apartment-worli': {
    // Add project details...
  },
  // Add more projects...
}
```

### 4. Adding Images

1. **Create images folder:**
   ```bash
   mkdir -p public/images/projects
   ```

2. **Add your images** to `public/images/projects/` folder

3. **Update image paths** in your project data to match your file structure

### 5. Adding Featured Projects to Homepage

**File:** `src/app/page.tsx`

Update the `featuredProjects` array:

```typescript
const featuredProjects = [
  {
    title: "OFFICE BUILDING MUMBAI",
    category: "COMMERCIAL AND PUBLIC INTERIORS",
    description: "Modern office building with sustainable design elements",
    image: "/images/projects/office-mumbai.jpg"
  },
  {
    title: "LUXURY APARTMENT WORLI",
    category: "RESIDENTIAL INTERIORS",
    description: "High-end residential apartment with panoramic city views",
    image: "/images/projects/apartment-worli.jpg"
  },
  // Add more featured projects...
]
```

## Deployment Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm start
```

### Deploy to Vercel:
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy your Next.js app

### Deploy to Hostinger:
1. Build your project: `npm run build`
2. Upload the `.next` folder, `public` folder, and other necessary files to your hosting
3. Configure your hosting to run the Next.js application

## File Structure Overview

```
js-interio-website/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── navigation.tsx
│   │   └── ui/ (shadcn/ui components)
│   ├── hooks/
│   └── lib/
├── public/
│   ├── images/
│   ├── favicon.ico
│   └── logo.svg
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── other config files...
```

## Tips for Adding Projects

1. **Image Optimization:** Use WebP format for better performance
2. **Image Sizing:** Use consistent image dimensions (e.g., 1200x800 for project images)
3. **SEO:** Add meta descriptions and keywords for each project
4. **Performance:** Lazy load images for better page speed
5. **Mobile:** Ensure all images look good on mobile devices

## Need Help?

If you need assistance with:
- Adding specific project types
- Customizing the design
- Setting up deployment
- Adding advanced features

Feel free to ask!