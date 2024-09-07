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

export type Album = {
    id: string;
    imagePath: string;
    title: string;
    subtitle?: string;
    ensemble: {
        name: string;
        url: string;
    };
    director: string;
    year: number;
    soloTracks?: Track[];
    spotifyUrl: string;
    appleMusicUrl: string;
    amazonUrl: string;
}

type Track = {
    number: number;
    title: string;
    spotifyUrl: string;
}

export type Video = {
    id: string;
    title: string;
    composerOrSubtitle?: string;
    monthYear: string;
    ensemble: {
        name: string;
        url: string;
    };
    featuring?: string;
    director?: string;
    youtubeEmbedCode: string;
}