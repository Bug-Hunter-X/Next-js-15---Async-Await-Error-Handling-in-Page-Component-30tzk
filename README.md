# Next.js 15 - Async/Await Error Handling in Page Component

This repository demonstrates a common error encountered in Next.js 15 applications when using async/await within page components.  The `pages/about.js` file attempts to fetch data using `fetch`, but doesn't handle potential errors, causing the application to crash. 

The `aboutSolution.js` file provides a corrected version with proper error handling using a `try...catch` block.