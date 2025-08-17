import { useEffect, useMemo, useState } from "react";

// import Components
import CardListing from "../components/CardListing";
import Search from "../components/Search";

const Home = () => {
  const [tickets, setTickets] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("ticketingData"));
    if (item) {
      setTickets(item);
    } else {
      setTickets([]);
    }
  }, []);

  //   Filter ticket as per searchQuery

  const filterTickets = useMemo(() => {
    if (!searchQuery) return tickets;

    return tickets.filter((ticket) => 
      ticket.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
        ticket.desc.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
  }, [searchQuery, tickets]);

  return (
    <main className="ticketing_main">
      <div className="container">
        <h1 className="heading">Mini Ticketing App</h1>
        <div className="below_head">
          <div className="count">
            <span>Total tickets</span>
            <strong>{filterTickets.length || 0}</strong>
          </div>
          
          {/* Searching */}
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        {/* Listing */}
        {filterTickets && filterTickets.length > 0 ? (
          <CardListing ticketData={filterTickets} />
        ) : (
          <span>No data found</span>
        )}
      </div>
    </main>
  );
};

export default Home;
