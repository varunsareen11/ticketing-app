const Badge = ({ badge }) => {
  const badgeClass =
    badge.toLowerCase() == "high"
      ? "red"
      : badge.toLowerCase() == "medium"
      ? "yellow"
      : "blue";
  return <span className={badgeClass}>{badge}</span>;
};

export default Badge;
