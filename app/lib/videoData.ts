import {v1 as uuid} from 'uuid';
import { Video } from './definitions';

export const videos:Video[] = [
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
        featuring: '',
        youtubeEmbedCode: 'https://www.youtube.com/embed/i3n2H0iHxuU?si=sdRPz-5TrV0M5Mec&amp;start=1963'
    }
]