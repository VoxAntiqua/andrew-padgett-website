import {v1 as uuid} from 'uuid';
import { Event } from './definitions';

export const events: Event[] = [
  {
    id: uuid(),
    title: 'Graupner: Wie lieblich sind deine Wohnungen, GWV 1108/42',
    ensemble: {
      name: 'Emmanuel Music and the Emmanuel Chapel Choir', 
      url: 'https://www.emmanuelmusic.org'
    }, 
    role: 'Bass soloist',
    director: 'Ryan Turner',
    description: 'Bach’s magnificent cantatas have been presented as part of the Sunday morning worship service at Emmanuel Church since 1970. Founding Artistic Director Craig Smith initiated the series which has continued to the present day. In addition to Bach, this season features premieres by Elena Ruehr and Kati Agócs, and commissioned motets by Nell Shaw Cohen, Trevor Weston, Peter Child, Philip Lasser and Evan Williams. All are welcome to attend the service, which begins at 10:00 AM.',
    url: 'https://www.emmanuelmusic.org/performance-info/2024-2025-cantata-schedule',
    image:{
        path: '/images/EmmanuelEnsemblePhoto.webp',
        alt: 'Emmanuel Music'
    },
    timesLocations: [{
      time: '2024-09-08T10:00',
      location: ['Emmanuel Church', '15 Newbury Street', 'Boston, MA'],
    }]
  },
  {
    id: uuid(),
    title: 'Bach: Sei Lob und Ehr dem höchsten Gut, BWV 117',
    ensemble: {
      name: 'Emmanuel Music', 
      url: 'https://www.emmanuelmusic.org'
    }, 
    role: 'Bass soloist',
    director: 'Ryan Turner',
    description: 'Bach’s magnificent cantatas have been presented as part of the Sunday morning worship service at Emmanuel Church since 1970. Founding Artistic Director Craig Smith initiated the series which has continued to the present day. In addition to Bach, this season features premieres by Elena Ruehr and Kati Agócs, and commissioned motets by Nell Shaw Cohen, Trevor Weston, Peter Child, Philip Lasser and Evan Williams. All are welcome to attend the service, which begins at 10:00 AM.',
    url: 'https://www.emmanuelmusic.org/performance-info/2024-2025-cantata-schedule',
    image:{
        path: '/images/EmmanuelEnsemblePhoto.webp',
        alt: 'Emmanuel Music'
    },
    timesLocations: [{
      time: '2024-11-24T10:00',
      location: ['Emmanuel Church', '15 Newbury Street', 'Boston, MA'],
    }]
  },
  {
    id: uuid(),
    title: 'Bach: Das neugeborne Kindelein, BWV 122',
    ensemble: {
      name: 'Emmanuel Music', 
      url: 'https://www.emmanuelmusic.org'
    }, 
    role: 'Bass soloist',
    director: 'Ryan Turner',
    description: 'Bach’s magnificent cantatas have been presented as part of the Sunday morning worship service at Emmanuel Church since 1970. Founding Artistic Director Craig Smith initiated the series which has continued to the present day. In addition to Bach, this season features premieres by Elena Ruehr and Kati Agócs, and commissioned motets by Nell Shaw Cohen, Trevor Weston, Peter Child, Philip Lasser and Evan Williams. All are welcome to attend the service, which begins at 7:30 PM.',
    url: 'https://www.emmanuelmusic.org/performance-info/2024-2025-cantata-schedule',
    image:{
        path: '/images/EmmanuelEnsemblePhoto.webp',
        alt: 'Emmanuel Music'
    },
    timesLocations: [{
      time: '2024-12-24T19:30',
      location: ['Emmanuel Church', '15 Newbury Street', 'Boston, MA'],
    }]
  },
  {
    id: uuid(),
    title: 'Mozart Requiem',
    ensemble: {
        name: 'Handel and Haydn Society',
        url: 'https://handelandhaydn.org'
    },
    director: 'Jonathan Cohen',
    description: 'Artistic Director Jonathan Cohen and the superb H+H Chorus “let perpetual light shine” in this stunning season opener, a double feature of moving masterpieces. Performing this heartfelt music with the instruments for which it was composed, the H+H Orchestra and Chorus trace the influence of the opening requiem by Michael Haydn (our namesake’s brother) on Mozart’s main event. Your spirit will be uplifted by sublime soloists, including soprano Lucy Crowe, who “takes us heavenwards with dazzling high notes until we arrive at paradise itself” (The Times).',
    url: 'https://handelandhaydn.org/concerts/2024-25/mozart-requiem/',
    image:{
        path: '/images/HandHRequiem.png',
        alt: 'Handel and Haydn Society'
    },
    timesLocations: [{
        time: '2024-09-27T19:30',
        location: ['Symphony Hall', '301 Massachusetts Avenue', 'Boston, MA']
    },{
        time: '2024-09-29T15:00',
        location: ['Symphony Hall', '301 Massachusetts Avenue', 'Boston, MA']
    }]
  },
  {
    id: uuid(),
    title: 'Return to Earth',
    ensemble: {
      name:'Ampersand',
      url:'https://www.weareampersand.net'
    },
    director: 'Madeline Healey and Tim Parsons',
    description: 'a spooky program of (mostly) Franco-flemish pieces composers wrote to honor their dead friends',
    url: 'https://www.weareampersand.net/events',
    image:{
        path: '/images/ampersandEnsemblePhoto.jpg',
        alt: 'Ampersand vocal chamber ensemble'
    },
    timesLocations: [{
      time: '2024-10-05T16:00',
      location: ['The Old Round Church', '29 Round Church Road', 'Richmond, VT']
    }]
  },
  {
    id: uuid(),
    title: 'Triomphi',
    ensemble: {
      name: 'TENET Vocal Artists and Piffaro, the Renaissance Band',
      url: 'https://www.piffaro.org'
    },
    director: 'Jolle Greenleaf and Priscilla Herreid',
    description: 'Francesco Petrarch, considered the founder of humanism, was the most influential poet of the Italian Renaissance. He wrote of timeless themes in his Triumphs - Love, Chastity, Death, Fame, Time, Eternity - each more powerful than the last. Our musical interpretation, created by Grant Herreid, will run the gamut of 16th century styles: from light-hearted carnival songs of the early Renaissance, through polyphonic madrigals of Cipriano de Rore and Orlando de Lassus, to the beginnings of 17th century monody. For this, our biggest program of the season, Piffaro joins forces with TENET Vocal Artists and groundbreaking visual designer Camilla Tassi in a musical, artistic, and literary exploration of human experience.',
    url: 'https://piffaro.my.salesforce-sites.com/ticket/#/events/a0SUs000000HDYjMAO',
    image:{
        path: '/images/Triomphi.png',
        alt: 'TENET and Piffaro present Triomphi'
    },
    timesLocations: [{
      time: '2024-10-11T19:30',
      location: ['Philadelphia Episcopal Cathedral', '19 South 38th Street', 'Philadelphia, PA']
    },
    {
      time: '2024-10-12T19:30',
      location: ['Presbyterian Church of Chestnut Hill', '8855 Germantown Avenue', 'Philadelphia, PA']
    },
    {
      time: '2024-10-13T15:00',
      location: ['Christ Church Christiana Hundred', '505 East Buck Road', 'Wilmington, DE']
    }]
  },
  {
    id: uuid(),
    title: 'Triomphi',
    ensemble: {
      name: 'TENET Vocal Artists and Piffaro, the Renaissance Band',
      url: 'https://www.tenet.nyc'
    },
    director: 'Jolle Greenleaf and Priscilla Herreid',
    description: 'Francesco Petrarch, considered the founder of humanism, was the most influential poet of the Italian Renaissance. He wrote of timeless themes in his Triumphs - Love, Chastity, Death, Fame, Time, Eternity - each more powerful than the last. Our musical interpretation, created by Grant Herreid, will run the gamut of 16th century styles: from light-hearted carnival songs of the early Renaissance, through polyphonic madrigals of Cipriano de Rore and Orlando de Lassus, to the beginnings of 17th century monody. For this, our biggest program of the season, Piffaro joins forces with TENET Vocal Artists and groundbreaking visual designer Camilla Tassi in a musical, artistic, and literary exploration of human experience.',
    url: 'https://tenet.nyc/triomphi',
    image:{
        path: '/images/Triomphi.png',
        alt: 'TENET and Piffaro present Triomphi'
    },
    timesLocations: [{
      time: '2024-10-18T20:00',
      location: ["St. Paul’s Chapel, Columbia University", '1160 Amsterdam Avenue', 'New York, NY']
    }]
  },
  {
    id: uuid(),
    title: 'Sleepy Hollow',
    ensemble: {
        name: 'Skylark Vocal Ensemble',
        url: 'http://www.skylarkensemble.org',
    },
    director: 'Matthew Guard',
    description: 'Skylark begins the season with a brand new storytelling concert featuring acclaimed storyteller Sarah Walker. Abridged by Artistic Director, Matthew Guard, the beloved ghost story comes alive with spooky whispers, bloodcurdling screeches, bawdy drinking songs, and classic American tunes.',
    url: 'https://www.skylarkensemble.org/sleepy-hollow.html',
    image: {
        path: '/images/SkylarkEnsemblePhoto.jpg',
        alt: 'Skylark Vocal Ensemble'
    },
    timesLocations: [{
        time: '2024-10-24T19:00',
        location: ['John Wesley United Methodist Church', '270 Gifford Street', 'Falmouth, MA'],
    },{
        time: '2024-10-25T19:00',
        location: ["St. Paul's Episcopal Church", '166 High Street', 'Newburyport, MA'],
    },{
        time: '2024-10-26T15:00',
        location: ['Church of the Redeemer', '379 Hammond Street', 'Chestnut Hill, MA']
    }]
  },
  {
    id: uuid(),
    title: 'Ariadne Unbound',
    ensemble: {
      name: 'TENET Vocal Artists',
      url: 'https://www.tenet.nyc'
    },
    director: 'Jolle Greenleaf and Elisa Sutherland',
    description: 'TENET retells the story of Ariadne in a lively and dramatic pastiche of 17th Century Italian music. With an intimate cast of six, each singer embodies the main characters of Ariadne, Theseus, and the inhabitants of the island of Naxos. The tale is told through duets, arias, madrigals, and opera scenes by Francesca Caccini, Sigismondo D’India, Barbara Strozzi, and Claudio Monteverdi. Curated by Elisa Sutherland.',
    url: 'https://tenet.nyc/unbound',
    image:{
        path: '/images/Ariadne.png',
        alt: 'TENET presents Ariadne Unbound'
    },
    timesLocations: [{
      time: '2024-11-16T18:00',
      location: ["Park Avenue Christian Church", '1010 Park Avenue', 'New York, NY']
    }]
  },
  {
    id: uuid(),
    title: 'A French Twist - À la Vierge - Music for the Virgin Mary and the Nativity',
    ensemble: {
        name: 'Bach Collegium San Diego',
        url: 'https://bachcollegiumsd.org'
    },
    director: 'Ruben Valenzuela and Dana Marsh',
    description: 'An unusual meeting of repertoire by Charpentier, Poulenc, and Villette covering a span of over three hundred years, yet connected aesthetically by way of musical sensuousness and elegance. BCSD welcomes Guest Director, Dana Marsh (Artistic Director of the Washington Bach Consort and Director of the Historical Performance Institute at the Indiana University Jacobs School of Music).',
    url: 'https://bachcollegiumsd.org/mainstage-concerts-overview-24-25',
    image:{
        path: '/images/BCSD.jpg',
        alt: 'Bach Collegium San Diego'
    },
    timesLocations: [{
        time: '2024-12-06T19:00',
        location: ['Grace Lutheran Church', '3967 Park Boulevard', 'San Diego, CA']
    },{
        time: '2024-12-07T19:00',
        location: ['St. James-by-the-Sea Episcopal Church', '743 Prospect Street', 'La Jolla, CA']
    }]
  },
  {
    id: uuid(),
    title: 'Christmas at Emmanuel',
    ensemble: {
      name: 'Emmanuel Music', 
      url: 'https://www.emmanuelmusic.org'
    }, 
    role: 'Bass soloist',
    director: 'Ryan Turner',
    description: 'Ring in the holiday season with traditions both old and new as we celebrate with uplifting and glorifying works of J.S. Bach setting the stage for the New England premiere of Evan Williams’ Little Mass for Christmas. Start something bright and new with Emmanuel Music this winter. Emmanuel continues its collaboration with local organization Project STEP, which provides talented young musicians that identify with historically underrepresented groups in classical music with comprehensive music instruction. Project STEP envisions a world in which the classical music profession reflects the racial and ethnic diversity of our communities.',
    url: 'https://www.emmanuelmusic.org/performance-info/christmas-at-emmanuel-2024',
    image:{
        path: '/images/EmmanuelEnsemblePhoto.webp',
        alt: 'Emmanuel Music'
    },
    timesLocations: [{
      time: '2024-12-15T16:00',
      location: ['Emmanuel Church', '15 Newbury Street', 'Boston, MA'],
    }]
  },
  {
    id: uuid(),
    title: 'Lamentation',
    ensemble: {
      name:'Ampersand',
      url:'https://www.weareampersand.net'
    },
    director: 'Madeline Healey and Tim Parsons',
    description: 'a concert of penitential Tudor music from the 15th & 16th centuries for 5 and 6 voices',
    url: 'https://www.weareampersand.net/events',
    image:{
        path: '/images/ampersandEnsemblePhoto.jpg',
        alt: 'Ampersand vocal chamber ensemble'
    },
    timesLocations: [{
      time: '2025-03-09T16:00',
      location: ['Trinity Episcopal Church', '85 West Street', 'Rutland, VT']
    }]
  },
  {
    id: uuid(),
    title: 'Take Flight',
    ensemble: {
        name: 'Skylark Vocal Ensemble',
        url: 'http://www.skylarkensemble.org',
    },
    director: 'Matthew Guard',
    description: 'Skylark takes to the skies to celebrate its avian roots in a new program exploring music inspired by creatures that fill the air. This concert will feature a choral & violin arrangement of Ralph Vaughan William’s The Lark Ascending alongside other spritely springtime songs.',
    url: 'https://www.skylarkensemble.org/take-flight.html',
    image: {
        path: '/images/SkylarkEnsemblePhoto.jpg',
        alt: 'Skylark Vocal Ensemble'
    },
    timesLocations: [{
        time: '2025-03-13T19:00',
        location: ['John Wesley United Methodist Church', '270 Gifford Street', 'Falmouth, MA'],
    },{
        time: '2025-03-14T19:00',
        location: ["St. Paul's Episcopal Church", '166 High Street', 'Newburyport, MA'],
    },{
        time: '2025-03-15T15:00',
        location: ['Church of the Redeemer', '379 Hammond Street', 'Chestnut Hill, MA']
    }]
  },
  {
    id: uuid(),
    title: 'Haydn + Beethoven',
    ensemble: {
        name: 'Handel and Haydn Society',
        url: 'https://handelandhaydn.org'
    },
    director: 'Jonathan Cohen',
    description: 'Reawaken your senses, reinvigorate your spirit, and celebrate spring with your H+H community! Harmonies burst through the Symphony Hall air like daffodils through the snow as Jonathan Cohen leads the superlative H+H Orchestra and Chorus in that sweetest of Haydn’s The Seasons. Then, our “gem of a chorus…makes a truly glorious noise” (The Boston Musical Intelligencer) as serenity gives way to rapture in Beethoven’s mesmerizing Mass in C Major.',
    url: 'https://handelandhaydn.org/concerts/2024-25/haydn-beethoven/',
    image: {
        path: '/images/HandH.png',
        alt: 'Handel and Haydn Society director Jonathan Cohen'
    },
    timesLocations: [{
        time: '2025-03-28T19:30',
        location: ['Symphony Hall', '301 Massachusetts Avenue', 'Boston, MA']
    },{
        time: '2025-03-30T15:00',
        location: ['Symphony Hall', '301 Massachusetts Avenue', 'Boston, MA']
    }]
  },
  {
    id: uuid(),
    title: 'Monteverdi Vespers of 1610',
    ensemble: {
        name: 'Pegasus Early Music',
        url: 'https://www.pegasusearlymusic.org'
    },
    director: 'Deborah Fox and Paul O’Dette',
    description: 'The iconic masterpiece, to celebrate our 20th season! Paul O’Dette conducts twenty-five brilliant Pegasus musicians, including singers, trombones, cornettos, strings, and theorbos.',
    url: 'https://www.pegasusearlymusic.org/concert/monteverdi-vespers-of-1610-2/',
    image: {
        path: '/images/PegasusNoel.png',
        alt: 'Pegasus Early Music'
    },
    timesLocations: [{
        time: '2025-04-06T16:00',
        location: ['Asbury First United Methodist Church', '1050 East Avenue', 'Rochester, NY']
    }]
  },
  {
    id: uuid(),
    title: 'Monteverdi Vespers of 1610',
    ensemble: {
        name: 'NYS Baroque',
        url: 'https://nysbaroque.com'
    },
    director: 'Deborah Fox and Paul O’Dette',
    description: 'The iconic masterpiece, to celebrate our 20th season! Paul O’Dette conducts twenty-five brilliant Pegasus musicians, including singers, trombones, cornettos, strings, and theorbos.',
    url: 'https://nysbaroque.com',
    image: {
        path: '/images/PegasusNoel.png',
        alt: 'Pegasus Early Music'
    },
    timesLocations: [{
        time: '2025-04-04T19:30',
        location: ['St. Paul\'s Syracuse', '310 Montgomery Street', 'Syracuse, NY']
    },{
        time: '2025-04-05T19:30',
        location: ['First Presbyterian Church', '315 North Cayuga Street', 'Ithaca, NY']
    }]
  },
  {
    id: uuid(),
    title: 'Rachmaninoff Vespers',
    ensemble: {
        name: 'Skylark Vocal Ensemble',
        url: 'http://www.skylarkensemble.org',
    },
    director: 'Matthew Guard',
    description: 'An apocryphal story recounts that when conductor Nikolai Danilin first heard Sergei Rachmaninoff play the score for his All-Night Vigil  (‘Vespers’), Danilin said \"Where am I to get such basses? They are as rare as Asparagus at Christmas!\" Skylark returns this spring with its stunning rendition of Rachmaninoff\'s Vespers, performing from its own edition of the score prepared by Artistic Director Matthew Guard and Skylark Soprano Fotina Naumenko. ',
    url: 'https://www.skylarkensemble.org/take-flight.html',
    image: {
        path: '/images/SkylarkEnsemblePhoto.jpg',
        alt: 'Skylark Vocal Ensemble'
    },
    timesLocations: [{
        time: '2025-04-30T19:00',
        location: ['Corpus Christi Parish', '324 Quaker Meetinghouse Road', 'East Sandwich, MA'],
    },{
        time: '2025-05-01T19:00',
        location: ["St. Paul's Episcopal Church", '166 High Street', 'Newburyport, MA'],
    },{
        time: '2025-05-02T19:00',
        location: ['St. Paul\'s Parish, Harvard Square', '29 Mount Auburn Street', 'Cambridge, MA']
    },{
        time: '2025-05-04T15:00',
        location: ['Christ Church Greenwich', '254 East Putnam Avenue', 'Greenwich, CT']
    }]
  },
  {
    id: uuid(),
    title: 'Residency: University of Oregon',
    ensemble: {
        name: 'Kaleidoscope Vocal Ensemble',
        url: 'https://www.kaleidoscopevocalensemble.com'
    },
    director: 'Arianne Abela',
    description: 'Comprised of artists with thriving solo careers who celebrate racial, ethnic, and gender diversity, Kaleidoscope Vocal Ensemble performs a program of works by Monteverdi and Purcell, as well as contemporary composers Caroline Shaw, Reena Esmail, and more.',
    url: 'https://www.kaleidoscopevocalensemble.com/kve-events/kaleidoscope-in-concert-university-of-oregon',
    image: {
        path: '/images/KaleidoscopeVocalEnsemble.jpg',
        alt: 'Kaleidoscope Vocal Ensemble'
    },
    timesLocations: [{
        time: '2025-01-12T15:00',
        location: ['Beall Concert Hall', '961 East 18th Avenue', 'Eugene, OR']
    }]
  },
  {
    id: uuid(),
    title: 'Bach: Ich lasse dich nicht, du segnest mich denn, BWV 157',
    ensemble: {
      name: 'Emmanuel Music', 
      url: 'https://www.emmanuelmusic.org'
    }, 
    role: 'Bass soloist',
    director: 'Ryan Turner',
    description: 'Bach’s magnificent cantatas have been presented as part of the Sunday morning worship service at Emmanuel Church since 1970. Founding Artistic Director Craig Smith initiated the series which has continued to the present day. In addition to Bach, this season features premieres by Elena Ruehr and Kati Agócs, and commissioned motets by Nell Shaw Cohen, Trevor Weston, Peter Child, Philip Lasser and Evan Williams. All are welcome to attend the service, which begins at 10:00 AM.',
    url: 'https://www.emmanuelmusic.org/performance-info/2024-2025-cantata-schedule',
    image:{
        path: '/images/EmmanuelEnsemblePhoto.webp',
        alt: 'Emmanuel Music'
    },
    timesLocations: [{
      time: '2025-02-02T10:00',
      location: ['Emmanuel Church', '15 Newbury Street', 'Boston, MA'],
    }]
  },
  {
    id: uuid(),
    title: 'Bach: Der Herr ist mein getreuer Hirt, BWV 112',
    ensemble: {
      name: 'Emmanuel Music', 
      url: 'https://www.emmanuelmusic.org'
    }, 
    role: 'Bass soloist',
    director: 'Ryan Turner',
    description: 'Bach’s magnificent cantatas have been presented as part of the Sunday morning worship service at Emmanuel Church since 1970. Founding Artistic Director Craig Smith initiated the series which has continued to the present day. In addition to Bach, this season features premieres by Elena Ruehr and Kati Agócs, and commissioned motets by Nell Shaw Cohen, Trevor Weston, Peter Child, Philip Lasser and Evan Williams. All are welcome to attend the service, which begins at 10:00 AM.',
    url: 'https://www.emmanuelmusic.org/performance-info/2024-2025-cantata-schedule',
    image:{
        path: '/images/EmmanuelEnsemblePhoto.webp',
        alt: 'Emmanuel Music'
    },
    timesLocations: [{
      time: '2025-05-11T10:00',
      location: ['Emmanuel Church', '15 Newbury Street', 'Boston, MA'],
    }]
  },
  {
    id: uuid(),
    title: 'Bach: St. John Passion',
    ensemble: {
      name: 'American Classical Orchestra',
      url: 'https://aconyc.org/'
    },
    role: 'Bass soloist',
    director: 'Thomas Crawford',
    description: 'Bach’s St. John Passion is not the first oratorio he wrote but it is his earliest such work to survive.  He composed it just after his 39th birthday, for a vesper service on Good Friday, while he was director of church music in Leipzig.  It premiered on April 7, 1724, three years before St. Matthew, his only other surviving Passion (of the five he wrote) was performed, also on a Good Friday in Leipzig.\nWhile oratorios were originally developed as large-scale musical compositions for solo voices, chorus, and orchestra, celebrating a religious subject, because of their length (often four hours or more), they were not intended for liturgical use.  They were generally performed in churches or concert halls, with the music divided in two parts, separated by a sermon.\nThe earliest known oratorio dates from 1600 and involves dramatic action, including a ballet.  By Bach’s time, the form had undergone significant changes, action had been abandoned, and the use of predominantly Latin or Italian texts had been modified by German composers, beginning with Heinrich Schütz, who blended German and Italian elements.  What Bach contributed to the genre was a vigorous treatment of the choruses and the use of narrative as a binding element, dramatically linking the arias to the chorales and choruses, holding the entire structure together in a way that is richly expressive, powerful, and affecting.',
    url: 'https://aconyc.org/season-40/st-john-passion/',
    image:{
      path: '/images/ACO-Full-w-Chorus.webp',
      alt: 'American Classical Orchestra'
    },
    timesLocations: [{
      time: '2025-01-30T19:30',
      location: ['Alice Tully Hall, Lincoln Center', '1941 Broadway at West 65th Street', 'New York, NY']
    }]
  }
]
