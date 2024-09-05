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

export type AudioClip = {
    id: string;
    path: string;
    title: string;
    composer: string;
    collection?: string;
    monthYear: string;
    live: boolean;
    director?: string;
    featuring?: string;
}