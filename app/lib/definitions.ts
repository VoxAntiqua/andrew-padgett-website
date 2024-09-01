export type Event = {
    id: string;
    title: string;
    ensemble: {
        name: string;
        url: string;
    }
    role?: string;
    director: string;
    description: string;
    url: string;
    image?: {
        path: string;
        alt: string;
    }
    timesLocations: TimeLocation[]
}

export type TimeLocation = {
    time: string;
    location: string[];
}