import { useMemo } from "react";

const TicketCounter = ({ tickets }) => {
const openCount = useMemo(() => {
    return tickets.filter(ticket => ticket.status !=='closed').length;
    return tickets.filter(ticket => ((ticket?.status ?? "open") !== "closed")).length;
}, [tickets])
return <div>You have {openCount} open tickets</div>;
}

export default TicketCounter;