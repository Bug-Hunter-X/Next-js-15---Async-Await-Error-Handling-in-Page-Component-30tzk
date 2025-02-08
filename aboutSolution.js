```javascript
// pages/aboutSolution.js

export default async function About() {
  let data = null;
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) {
      throw new Error(`Error! status: ${res.status}`);
    }
    data = await res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    data = { error: 'Failed to fetch data' }; // or a fallback state
  }

  return (
    <div>
      <h1>About Page</h1>
      {data.error ? <p>{data.error}</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
```