// verify-build.js
// Script to verify the build configuration and paths for GitHub Pages deployment

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying MyStories Build Configuration\n');

// Check if build directory exists
const buildDir = path.join(__dirname, 'build');
if (!fs.existsSync(buildDir)) {
    console.log('❌ Build directory does not exist. Run "npm run build" first.');
    process.exit(1);
}

console.log('✅ Build directory exists');

// Check for essential build files
const essentialFiles = [
    'index.html',
    '_app',
    'Arrival/arrival.png',
    'Rising/rising.png',
    'Climax/climax.png',
    'Falling/falling.png',
    'Resolution/resolution.png'
];

let missingFiles = [];
essentialFiles.forEach(file => {
    const filePath = path.join(buildDir, file);
    if (fs.existsSync(filePath)) {
        console.log(`✅ ${file} exists`);
    } else {
        console.log(`❌ ${file} missing`);
        missingFiles.push(file);
    }
});

// Check index.html for correct base path
const indexPath = path.join(buildDir, 'index.html');
if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8');

    console.log('\n📄 Analyzing index.html:');

    // Check for base tag
    const baseTagMatch = indexContent.match(/<base[^>]*href="([^"]*)"[^>]*>/i);
    if (baseTagMatch) {
        console.log(`✅ Base tag found: ${baseTagMatch[1]}`);
    } else {
        console.log('⚠️  No base tag found in index.html');
    }

    // Check for asset paths
    const assetMatches = indexContent.match(/\/_app\/[^"'\s]+/g);
    if (assetMatches) {
        console.log(`✅ Found ${assetMatches.length} app asset references`);
        console.log(`   Example: ${assetMatches[0]}`);
    } else {
        console.log('❌ No app assets found in index.html');
    }

    // Check if paths seem to be absolute or relative
    if (indexContent.includes('"/MyStories/')) {
        console.log('✅ Found /MyStories/ paths in HTML');
    } else if (indexContent.includes('"./')) {
        console.log('⚠️  Found relative paths (./) - might cause issues on GitHub Pages');
    } else {
        console.log('❓ Could not determine path style in HTML');
    }
}

// Check for .nojekyll file
const nojekyllPath = path.join(buildDir, '.nojekyll');
if (fs.existsSync(nojekyllPath)) {
    console.log('✅ .nojekyll file exists (prevents Jekyll processing)');
} else {
    console.log('⚠️  .nojekyll file missing - GitHub Pages might process files incorrectly');
}

// Summary
console.log('\n📊 Summary:');
if (missingFiles.length === 0) {
    console.log('✅ All essential files are present');
} else {
    console.log(`❌ Missing ${missingFiles.length} essential files:`, missingFiles);
}

console.log('\n🚀 Deployment checklist:');
console.log('1. Build directory exists and contains files');
console.log('2. All image assets are in the correct folders');
console.log('3. index.html has proper asset references');
console.log('4. Base path is configured for /MyStories');

console.log('\n💡 If you\'re still having issues:');
console.log('- Check browser developer console for 404 errors');
console.log('- Verify GitHub Pages is serving from the correct branch/folder');
console.log('- Make sure repository name matches the base path (/MyStories)');
