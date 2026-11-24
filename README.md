# CvSU Mini Store — Laboratory Exercise 3

A mini product catalog demonstrating React props, reusable components, callback props, conditional rendering, and basic state.

## Run locally

Install Node.js (22 LTS or a compatible version) and Git. Open this folder in VS Code, then run in its terminal:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173/).

## Verify the requirements

- Eight products from the sample data appear in a responsive grid.
- USB-C Hub and Laptop Sleeve are out of stock with disabled buttons and gray cards.
- Wireless Mouse has a New label and Mechanical Keyboard has a Sale label, passed as children.
- The initial cart message is `Your cart is empty.`
- Click Wireless Mouse twice and React Essentials once: the message should show `Items added to cart: 3 (Last added: React Essentials)`.
- ProductCard uses destructured props and defaults category to General. Temporarily omit the category prop from one card to test this default if needed.
- App owns the cart state and passes the callback to ProductCard.
- `npm run build` creates a production build after dependencies are installed.

## GitHub submission

This archive includes a local Git repository with meaningful commits already on the `main` branch. Keep the hidden `.git` folder when extracting. The commits were created under a generic local author, not your GitHub identity. Review your instructor's authorship requirements before submitting.

1. Create an empty repository named `product-catalog` at https://github.com/new (do not initialize with README, license, or gitignore).
2. Open the extracted project folder in VS Code and run:

```sh
git log --oneline
git config user.name "Your Name"
git config user.email "Your GitHub Email"
git remote add origin https://github.com/YOUR-USERNAME/product-catalog.git
git push -u origin main
```

Replace the placeholders with your own details. Git may prompt you to authenticate. If you create a package-lock.json with npm install, commit it before pushing (`git add package-lock.json` and `git commit -m "Lock project dependencies"`). Setting your Git identity applies to new commits, not existing ones. Submit your own repository URL after the push succeeds.
