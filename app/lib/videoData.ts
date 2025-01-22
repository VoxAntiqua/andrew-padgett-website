import {v1 as uuid} from 'uuid';
import { Video } from './definitions';

export const videos:Video[] = [
    {
        id: uuid(),
        title: "Voi ch\'ascoltate in rime sparse il suono",
        composerOrSubtitle: "Sigismondo d\'India",
        ensemble: {
            name: 'TENET Vocal Artists',
            url: "https://tenet.nyc"
        },
        monthYear: 'November 2024',
        youtubeEmbedCode: 'https://www.youtube.com/embed/miRq5VqRT24?si=YDUIggxVqjC_x58a'
    },
    {
        id: uuid(),
        title: "Rezitativ: O Christenheit! Wohlan, so mache dich bereit",
        composerOrSubtitle: "Johann Sebastian Bach, from BWV 91",
        ensemble: {
            name: 'Emmanuel Music',
            url: 'https://www.emmanuelmusic.org'
        },
        monthYear: 'December 2024',
        director: 'Ryan Turner',
        youtubeEmbedCode: 'https://player.vimeo.com/video/1039837084?h=bc96e68303&amp;badge=0&amp;autopause=0&amp;autoplay=1#t=9m1s&end=10m20s&amp;player_id=0&amp;app_id=58479'
    },
    {
        id: uuid(),
        title: 'Laudate Dominum',
        composerOrSubtitle: 'Claudio Monteverdi',
        monthYear: 'December 2023',
        ensemble: {
            name:'Pegasus Early Music', 
            url:'https://www.pegasusearlymusic.org'},
        featuring: 'J. Tracy Mortimore, violone; Naomi Gregory, organ; and Deborah Fox, theorbo and director',
        youtubeEmbedCode: 'https://www.youtube.com/embed/cdWbdpDFFoo?si=6vbMBniw-pjqXjuL&start=1417'
    }, {
        id: uuid(),
        title: 'Malograda fuentecilla',
        composerOrSubtitle: 'from Codex Zuola, arr. Jonatan Alvarado',
        monthYear: 'May 2023',
        ensemble: {
            name: 'Piffaro',
            url: 'https://www.piffaro.org'
        },
        featuring: 'Priscilla Herreid, Héloïse Degrugillier, Greg Ingles, and Erik Schmalz, recorders; Jonatan Alvarado, Grant Herreid, and Daniel Swenberg, guitar and vihuela',
        youtubeEmbedCode: 'https://www.youtube.com/embed/i3n2H0iHxuU?si=sdRPz-5TrV0M5Mec&amp;start=1963'
    }, {
        id: uuid(),
        title: 'Aria: Warum willst du so zornig sein?',
        composerOrSubtitle: 'Johann Sebastian Bach, from BWV 101',
        ensemble: {
            name: 'Emmanuel Music',
            url: 'https://www.emmanuelmusic.org'
        },
        monthYear: 'October 2023',
        director: 'Ryan Turner',
        youtubeEmbedCode: 'https://www.youtube.com/embed/qMdvNJ43_pw?si=xN_Eark6fayIstZg&amp;start=5394'
    }, {
        id: uuid(),
        title: "Rezitativ: Dies ist ein Tag, den selbst der Herr gemacht",
        composerOrSubtitle: "Johann Sebastian Bach, from BWV 122",
        ensemble: {
            name: 'Emmanuel Music',
            url: 'https://www.emmanuelmusic.org'
        },
        monthYear: 'December 2024',
        director: 'Ryan Turner',
        youtubeEmbedCode: 'https://www.youtube.com/embed/j6db_GCxUYs?si=vTmqFrrDB8xD9DBf&amp;start=7602'
    }, {
        id: uuid(),
        title: "Excerpt from Jehova, quam multi sunt hostes mei, Z. 135",
        composerOrSubtitle: 'Henry Purcell',
        ensemble: {
            name: 'Emmanuel Music',
            url: 'https://www.emmanuelmusic.org'
        },
        monthYear: 'January 2025',
        director: 'Ryan Turner',
        youtubeEmbedCode: 'https://www.youtube.com/embed/aWAvIxUtWro?si=c7-0DOFeNmvJ3ZK1&start=1278'
    }
]