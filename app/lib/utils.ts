import { Event } from "./definitions";

export function formatEventLocations(event: Event): string {
    // Extract unique city, state pairs from the third element of the location array
    const locations = Array.from(new Set(event.timesLocations.map(tl => tl.location[2])));
    
    // Separate cities and states
    const cityStatePairs = locations.map(location => {
      const [city, state] = location.split(', ');
      return { city, state };
    });
  
    // Extract unique states
    const uniqueStates = Array.from(new Set(cityStatePairs.map(loc => loc.state)));
  
    if (uniqueStates.length === 1) {
      // All locations share the same state, only show the state once at the end
      const uniqueCities = Array.from(new Set(cityStatePairs.map(loc => loc.city)));
      return formatListWithAnd(uniqueCities) + `, ${uniqueStates[0]}`;
    } else {
      // Locations have different states, show city and state for each
      const formattedLocations = cityStatePairs.map(loc => `${loc.city}, ${loc.state}`);
      return formatListWithAnd(formattedLocations);
    }
  }
  
  function formatListWithAnd(items: string[]): string {
    if (items.length <= 1) return items.join('');
    return items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
  }
  