# 🎟️ Mini Ticketing App (React)
A simple React ticketing app where you can create, search, and list tickets stored in **localStorage**.  
This project also demonstrates state management, search filtering, and component composition.

---

## 🚀 Features
- Add tickets with title, description and priority badge.
- Persist tickets in **localStorage**
- Search tickets by **title** or **description**
- Real-time filtered results
- Clean React component structure

## 🧠 Part 2: Explain – Architecture & Decisions
### 1. Component Structure
Components are split into **Home** (container), **AddTicket**(container) for add ticket form and **CardListing / Search** (presentational).  
- **Home** → fetches tickets, manages filtering, and holds state.  
- **Search** → controlled input (receives `searchQuery` + `setSearchQuery`).  
- **CardListing** → pure renderer of ticket data.  
- **Badge** → to handle the ui as per the value. 
This separation keeps logic isolated and UI components reusable.

### 2. State Management
- `tickets` → stored in **Home**, as it’s needed for listing, counting, and filtering.  
- `searchQuery` → lifted to **Home**, shared with Search.  
- `AddTicket` → local form state, pushes to `localStorage`.  
This ensures a **single source of truth** for tickets.

### 3. Performance Considerations
As of now we use UseMemo for memoizing its search result as per searchQuery. but in future If tickets scale to 1,000+:  
- **Debounce search** (250–300ms).  
- **Pagination or infinite scroll**.  
- Use `useMemo` + `useCallback` for stable computations & handlers.  

### 5. What I Googled / Used GPT For
For describing the features we use the same. but for coding and generating logics **No**.

## 🐞 Part 3: Debug – Fix a Broken Ticket Counter

### Original (broken)
```jsx
<TicketCounter />

It should display:
You have 3 open tickets
But here’s the broken implementation:

function TicketCounter({ tickets }) {
const openCount = tickets.filter(ticket => ticket.status !==
'closed').length;
return <div>You have {openCount} open tickets</div>;
}
```

as you can see TicketCounter component received on props but while accessing we are not able to pass the props. So we have pass props to it as 
```jsx
<TicketCounter tickets={tickets}/>
```

