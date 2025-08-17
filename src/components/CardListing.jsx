import Badge from "./Badge";

const CardListing = ({ticketData}) => {
    return(
        <ul className="ticketing_list">
          {ticketData.map((item) => {
              return (
                <li key={item.id}>
                  <div className="ticketing_card">
                    <h5>{item.title}</h5>
                    <Badge badge={item.priority}/>
                    <p>{item.desc}</p>
                  </div>
                </li>
              );
            })}
        </ul>
    )
}

export default CardListing;