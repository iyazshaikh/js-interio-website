#!/bin/bash

# JS Interio Website Packaging Script
# This script helps you create a complete package of the website

echo "📦 Packaging JS Interio Website..."

# Create a temporary directory
TEMP_DIR="js-interio-website-package"
mkdir -p $TEMP_DIR

# Copy essential files
echo "📋 Copying essential files..."
cp package.json $TEMP_DIR/
cp next.config.ts $TEMP_DIR/
cp tailwind.config.ts $TEMP_DIR/
cp tsconfig.json $TEMP_DIR/
cp eslint.config.mjs $TEMP_DIR/
cp postcss.config.mjs $TEMP_DIR/
cp components.json $TEMP_DIR/
cp README.md $TEMP_DIR/
cp download-guide.md $TEMP_DIR/

# Copy source code
echo "📁 Copying source code..."
cp -r src $TEMP_DIR/

# Copy public files
echo "🖼️  Copying public files..."
cp -r public $TEMP_DIR/

# Create archive
echo "🗜️  Creating archive..."
tar -czf js-interio-website.tar.gz $TEMP_DIR/

# Clean up
rm -rf $TEMP_DIR

echo "✅ Website packaged successfully!"
echo "📦 File: js-interio-website.tar.gz"
echo ""
echo "To extract the archive:"
echo "tar -xzf js-interio-website.tar.gz"
echo ""
echo "To install dependencies and run:"
echo "cd js-interio-website-package"
echo "npm install"
echo "npm run dev"