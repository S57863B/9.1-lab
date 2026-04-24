1. How did you handle optional props in your components?
I used the ? modifier in my TypeScript interfaces to mark props as optional. In the component code, I assigned default values (like showEmail = false) and used conditional rendering (e.g., {children && <div>{children}</div>}) to only display elements if they were provided.

2. What considerations did you make when designing the component interfaces?
My main focus was keeping them flexible and reusable. I separated core data (like the User object) from UI toggles (like showRole). I also included the children prop on every component so they can easily wrap other content.

3. How did you ensure type safety across your components?
I created strict TypeScript interfaces for all props and centralized them in an index.ts file. I also used Union Types (like 'success' | 'error' | 'warning' | 'info') so the compiler catches invalid inputs immediately.

4. What challenges did you face when implementing component composition?
The biggest challenge was state management across different components. To make the "Add to Cart" button in the ProductDisplay trigger the AlertBox, I had to "lift the state up" to the parent App component so they could share data.