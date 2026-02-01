# Portfolio

A personal portfolio site built for GitHub Pages.

## Deploying to GitHub Pages

### Option 1: User/Organization Site (recommended)

1. **Create a new repository** on GitHub named exactly: `yourusername.github.io`  
   (Replace `yourusername` with your GitHub username)

2. **Push this project** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages** (if not auto-enabled):
   - Go to your repo → **Settings** → **Pages**
   - Under "Build and deployment", set **Source** to "Deploy from a branch"
   - Choose branch: `main` and folder: `/ (root)`
   - Save

4. Your site will be live at **https://yourusername.github.io** within a few minutes.

### Option 2: Project Site

1. Push this project to **any** GitHub repository.

2. Go to **Settings** → **Pages**.

3. Under "Build and deployment", set **Source** to "Deploy from a branch".

4. Choose your branch and the `/ (root)` folder.

5. Your site will be at: **https://yourusername.github.io/repo-name**

## Customization

Before deploying, update these in `index.html`:

- **Your name** (hero section and footer)
- **Job title / tagline** (hero section)
- **About section** text
- **Projects** — titles, descriptions, live demo URLs, and source code links
- **Skills** — add or remove skills to match yours
- **Contact links** — GitHub, LinkedIn, email, resume URL

## Local Preview

Open `index.html` in your browser, or use a simple local server:

```bash
# Python
python -m http.server 8000

# Node.js (if you have npx)
npx serve
```

Then visit `http://localhost:8000`.
