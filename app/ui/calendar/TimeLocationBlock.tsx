interface TimeLocationBlockProps {
    time: string;
    location: string[];
  }
  
  const TimeLocationBlock: React.FC<TimeLocationBlockProps> = ({ time, location }) => {
    // Format date to be more readable
    const formattedDate = new Date(time).toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  
    // Create Google Maps search URL
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.join(", "))}`;
  
    return (
      <li className="bg-slate-100 p-2 shadow-sm">
        <strong className="block">{formattedDate}</strong>
        <a href={googleMapsUrl} className="text-slate-600 block">
          {location[0]}
        </a>
        <a href={googleMapsUrl} className="text-slate-600 block">
          {location.slice(1).join(", ")}
        </a>
      </li>
    );
  };

  export default TimeLocationBlock