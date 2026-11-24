# CvSU Mini Store — Laboratory Exercise 4

Live search and filters using React `useState` and `useEffect`. The original Lab 3 product cards, data, stock status, and cart functionality are preserved.


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


