# CvSU Mini Store — Laboratory Exercise 4

Live search and filters using React `useState` and `useEffect`. The original Lab 3 product cards, data, stock status, and cart functionality are preserved.

## Run locally

Install Node.js 22 (or a compatible version) and Git. Open this folder in VS Code and run:

```sh
git switch lab4-live-search
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173/). Run `npm run build` to check the production build once dependencies are installed.

## Behavior checklist

| Test | Expected result |
| --- | --- |
| Initial page | Showing 8 of 8 products; tab title includes 8 results |
| Type `mouse` | After 300ms, Wireless Mouse is the only result |
| Type `MOUSE` | Same result (case-insensitive search) |
| Type quickly | Input changes immediately; results wait until typing stops for 300ms |
| Clear filters, then choose Books | JavaScript Handbook and React Essentials appear |
| Search `react` with Books selected | Only React Essentials appears |
| Choose Price: Low to High after clearing | Notebook Set, Water Bottle, Wireless Mouse, Laptop Sleeve, JavaScript Handbook, React Essentials, USB-C Hub, Mechanical Keyboard |
| Choose Price: High to Low | Reverse price order |
| Search `xyz` | No products found. Try a different keyword or category. |
| Clear Filters | All inputs reset and eight products return immediately |
| Change result count | Browser tab title reflects the new count |
| Add an in-stock product | Cart count and last added title update |
| Filter or clear after adding a product | Cart count is preserved |
| Click an out-of-stock card | Its Add to Cart button remains disabled |
| Resize to a narrow screen | Controls and cards stack without horizontal overflow |

## Guide questions

1. **Why use two states, `searchText` and `debouncedSearch`?**
   `searchText` updates immediately as the user types. `debouncedSearch` updates only after 300 milliseconds without typing, so the search box stays responsive and the filtering waits for a pause.

2. **What happens without a cleanup function?**
   Each keystroke would leave its previous timer running. Several timers could update the results with earlier search values even while the user is still typing. Cleanup cancels the previous timer and also prevents pending work when the component unmounts.

3. **What is the purpose of the dependency array?**
   It tells React which values should cause an effect to run again after the initial render. With an empty array (`[]`), the effect runs on mount (with an additional setup/cleanup cycle in development Strict Mode). Without the array, the effect runs after every committed render.

4. **Why avoid sorting the original products array?**
   `sort()` modifies the array in place. Sorting a copy preserves the original product order, so selecting Default can restore it, and avoids unexpected changes elsewhere.

5. **Should the filtered list be stored in state or calculated during rendering?**
   It is better to calculate it from the existing search, category, and sort states. This avoids duplicate state, keeps the displayed list consistent with the filters, and requires less code.

## GitHub submission

This archive contains both branches and their local commit history. Keep the hidden `.git` folder. The included commits use a generic local author; configure your own Git identity for subsequent work and review your instructor's authorship requirements.

Check the branches and the Lab 4 commits:

```sh
git branch
git log --oneline main..lab4-live-search
```

Configure Git and create an empty repository at https://github.com/new if you do not already have one. Use the same repository as Lab 3 if you already submitted it.

```sh
git config user.name "Your Name"
git config user.email "Your GitHub Email"
git remote -v
```

If there is no `origin`, add it (replace YOUR-USERNAME):

```sh
git remote add origin https://github.com/YOUR-USERNAME/product-catalog.git
```

If npm install creates a package-lock.json, you may commit it on the Lab 4 branch before pushing:

```sh
git add package-lock.json
git commit -m "Lock project dependencies"
```

Push both branches:

```sh
git push -u origin main
git push -u origin lab4-live-search
```

If your existing GitHub repository has a different commit history from this archive, do not force-push. Instead, create a Lab 4 branch from your own Lab 3 repository and apply the Lab 4 changes there. Submit your repository link after both branches are present on GitHub.
