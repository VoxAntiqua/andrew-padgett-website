import {v1 as uuid} from 'uuid';
import { AudioClip } from './definitions';

export const audioClips: AudioClip[] = [
    {
        id: uuid(),
        path: '/audio/TheTrumpetShallSound.mp3',
        title: 'The Trumpet Shall Sound',
        collection: 'Messiah, HWV 56',
        composer: 'George Frideric Handel',
        monthYear: 'May 2025',
        live: true,
        featuring: 'Chris Colletti, trumpet'
    },
    {
        id: uuid(),
        path: '/audio/ThusSaithTheLord.mp3',
        title: 'Thus Saith The Lord',
        collection: 'Messiah, HWV 56',
        composer: 'George Frideric Handel',
        monthYear: 'May 2025',
        live: true,
    },
    {
        id: uuid(),
        path: '/audio/AmarDei.mp3',
        title: 'Amar Dei',
        composer: 'Bernart Marti',
        monthYear: 'January 2021',
        live: false,
        featuring: 'Niccolo Seligmann, vielle'
    },
    {
        id: uuid(),
        path: '/audio/GerneRecitAria.mp3',
        title: 'Der Heiland fällt vor seinem Vater nieder and Gerne will ich mich bequemen',
        collection: 'Matthäuspassion, BWV 244',
        composer: 'Johann Sebastian Bach',
        monthYear: 'March 2024',
        live: true,
    },
    {
        id: uuid(),
        path: '/audio/BarberStItasVision.mp3',
        title: 'St. Ita\'s Vision',
        collection: 'Hermit Songs',
        composer: 'Samuel Barber',
        monthYear: 'February 2020',
        live: true,
        featuring: 'Renana Gutman, piano'
    },
    {
        id: uuid(),
        path: '/audio/AbAeternoMonteverdi.mp3',
        title: 'Ab aeterno ordinata sum',
        composer: 'Claudio Monteverdi',
        collection: 'Selva morale e spirituale',
        monthYear: 'November 2019',
        live: true
    },
    {
        id: uuid(),
        path: '/audio/ArNeKuthIchSorgheNon.mp3',
        title: 'Ar ne kuth ich sorghe non',
        composer: 'Anonymous, 13th century',
        monthYear: 'January 2024',
        live: true,
        featuring: 'Grant Herreid, lute'
    },
    {
        id: uuid(),
        path: '/audio/DurufleGloriaMesseCumJubilo.mp3',
        title: 'Gloria (excerpt)',
        collection: 'Messe cum jubilo',
        composer: 'Maurice Duruflé',
        monthYear: 'October 2019',
        live: true,
        featuring: 'Benjamin Sheen, organ, and Lawrence Jones, tenor'
    }
]