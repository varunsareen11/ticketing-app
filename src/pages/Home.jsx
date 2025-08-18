import { useEffect, useMemo, useState } from "react";

// import Components
import CardListing from "../components/CardListing";
import Search from "../components/Search";
import TicketCounter from "../components/TicketCounter";

const Home = () => {
  const [tickets, setTickets] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [filterByPriority, setFilterByPriority] = useState();

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
    console.log("changePriority");
    // if (!searchQuery) return tickets;

    return tickets.filter((ticket) => {
      const matchesPriority =
        !filterByPriority || ticket.priority === filterByPriority;
      const matchesSearch =
        ticket.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
        ticket.desc.toLowerCase().includes(searchQuery.trim().toLowerCase());

      return matchesPriority && matchesSearch;
    });
  }, [searchQuery, tickets, filterByPriority]);

  // handle close tickets
  const handleCloseTicket = (id) => {
    const updatedTickets = filterTickets.map((ticket) =>
      ticket.id === id ? { ...ticket, status: "close" } : ticket
    );

    setTickets(updatedTickets);
    localStorage.setItem("ticketingData", JSON.stringify(updatedTickets));
  };

  // Delete ticket
  const handleDeleteTicket = (id) => {
    const updatedTickets = filterTickets.filter((ticket) => ticket.id !== id);
    console.log("updatedTickets", updatedTickets);
    setTickets(updatedTickets);
    localStorage.setItem("ticketingData", JSON.stringify(updatedTickets));
  };

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
          <div className="select_filter_group">
            <div className="priorityFilter">
              <label htmlFor="priority_filter">Filter by priority</label>
              <select
                name="priority_filter"
                id="priority_filter"
                value={filterByPriority}
                onChange={(e) => setFilterByPriority(e.target.value)}
              >
                <option value="">All</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
        <TicketCounter tickets={tickets} />
        {/* Listing */}
        {filterTickets && filterTickets.length > 0 ? (
          <CardListing
            ticketData={filterTickets}
            handleClose={handleCloseTicket}
            handleDelete={handleDeleteTicket}
          />
        ) : (
          <span>No data found</span>
        )}
      </div>
    </main>
  );
};

export default Home;
