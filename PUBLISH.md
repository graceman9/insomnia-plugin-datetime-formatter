# 📦 Publishing to NPM and Insomnia Plugin Hub

## Step 1: Update Package Information
Before publishing, update the following in `package.json`:

```json
{
  "author": "Sergey Klochko",
  "repository": {
    "type": "git",
    "url": "https://github.com/graceman9/insomnia-plugin-datetime-formatter"
  },
  "insomnia": {
    "publisher": {
      "name": "Sergey Klochko",
      "icon": "https://github.com/graceman9.png"
    }
  }
}
```

## Step 2: Create GitHub Repository
1. Create a new GitHub repository named `insomnia-plugin-datetime-formatter`
2. Push your code to GitHub
3. Update the repository URL in package.json

## Step 3: Publish to NPM
```bash
# Make sure you're logged in to NPM
npm login

# Publish the plugin
npm publish

# The plugin will be available at:
# https://www.npmjs.com/package/insomnia-plugin-datetime-formatter
```

## Step 4: Wait for Hub Approval
After publishing to NPM:
- The plugin should appear on the Insomnia Plugin Hub within a few days
- URL will be: `https://insomnia.rest/plugins/insomnia-plugin-datetime-formatter`
- Check the hub periodically for approval status

## Step 5: Update if Needed
If the plugin needs updates:
```bash
# Update version in package.json
# Make your changes
# Publish new version
npm publish
```

## Requirements Checklist ✅
- [x] Plugin name starts with `insomnia-plugin-`
- [x] package.json includes `insomnia` attribute
- [x] Plugin is publicly available on NPM
- [x] Includes proper README.md
- [x] Includes LICENSE file
- [x] Icon is SVG format
- [x] Follows Insomnia plugin standards

## Plugin Hub URL (after approval)
🔗 **https://insomnia.rest/plugins/insomnia-plugin-datetime-formatter**

## Install URL (for users)
```
insomnia://plugins/install?name=insomnia-plugin-datetime-formatter
```
