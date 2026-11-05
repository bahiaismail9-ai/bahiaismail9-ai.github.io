# Ismail Bahia — Personal Portfolio

A responsive, bilingual (English/French) dark portfolio built with plain HTML, CSS and JavaScript. Ready for GitHub Pages.

## 1. Add your portrait
Copy your photo into the `assets` folder and name it exactly:

`profile.jpg`

Use a clear, professional portrait. The site crops it automatically to fit the portrait frame.

## 2. Add your contact details
Open `script.js` and update the values at the top:

```js
const CONTACT_EMAIL = "your-email@example.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/your-profile/";
const GITHUB_URL = "https://github.com/your-username";
```

The LinkedIn button appears once a URL is provided. Do not publish until you have checked that all contact links are correct.

## 3. Preview locally
Open `index.html` in a browser. For the best local development experience, use the VS Code Live Server extension.

## 4. Publish on GitHub Pages
1. Create/sign in to a GitHub account.
2. Create a **Public** repository named exactly `YOUR-USERNAME.github.io`.
3. Upload the contents of this folder (not the outer folder) to the repository root.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then Save.
7. Wait a few minutes. Your website will be available at `https://YOUR-USERNAME.github.io`.

## 5. Before sharing with employers
- Add `assets/profile.jpg`.
- Add and test your email and LinkedIn details in `script.js`.
- Review every project description and keep only skills you can discuss confidently.
- If you want to attach a CV, add a PDF in the project and add a link in `index.html`.
- Never publish your home-lab private IP addresses, passwords, certificates or other sensitive configuration details.

## Files
- `index.html` — page structure and content
- `style.css` — responsive dark theme and layout
- `script.js` — language switch, menu, animations and contact settings
- `assets/` — personal photo goes here
