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
    title: 'Equal the Stars in Number: On the Cusp of the 16th Century',
    ensemble: {
      name:'Ampersand',
      url:'https://www.weareampersand.net'
    },
    director: 'Madeline Healey and Tim Parsons',
    description: 'Exploring the astonishing creativity on display in the Chigi Codex and the Eton Choirbook, both compiled in the waning years of the 15th century. This program highlights the floridity and inventiveness of the counterpoint found in these works as well as the curious style of combinative myth-making on display–many of the texts mix imagery from ancient Greek and Roman mythology with flowery exhortations to Mary, the mother of Jesus. The Eton Choirbook is represented by English composers William Horewud, Walter Lambe and William Cornysh; and the Chigi Codex by Franco-Flemish masters Johannes Regis, Gaspar van Weerbeke, and Loyset Compere. ',
    url: 'https://www.weareampersand.net/events',
    image:{
        path: '/images/ampersandEnsemblePhoto.jpg',
        alt: 'Ampersand vocal chamber ensemble'
    },
    timesLocations: [{
      time: '2025-06-17T19:30',
      location: ['St. Anne\'s in the Fields', '147 Concord Road', 'Lincoln, MA']
    },{
      time: '2025-06-18T19:30',
      location: ['The Chapel at West Parish', '210 Lowell Street', 'Andover, MA']
    },{
      time: '2025-06-19T19:30',
      location: ['Lindsey Chapel at Emmanuel Church', '15 Newbury Street', 'Boston, MA']
    },{
      time: '2025-06-21T16:00',
      location: ['Keene Arts', '10881 Route 73', 'Keene, NY']
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
  },
  {
    id: uuid(),
    title: 'Handel\'s Messiah: As Heard in His Time',
    ensemble: {
      name: 'Cantata Singers with Finger Lakes Early Music',
      url: 'https://www.cantatasingers.com/'
    },
    role: 'Bass soloist',
    director: 'Will Wickham and Caroline Giassi',
    description: 'Experience the power and beauty of Handel\'s MESSIAH with the Cantata Singers on Saturday, May 17th at 7:30 PM at Grace Episcopal Church in Elmira. Prepare to be transported to 18th-century London as our dedicated local singers, together with renowned Baroque specialists Elijah McCormack, Virginia Kelsey, Dann Coakwell, and Andrew Padgett bring portions of this great work to life. Their voices will soar above the rich textures of an orchestra of Baroque musicians playing authentic period instruments, bringing Handel\'s masterpiece to life with unparalleled grandeur. Don\'t miss this extraordinary opportunity to witness Messiah performed in its most authentic form by passionate local talent and world-class artists.',
    url: 'https://www.cantatasingers.com/may-25-messiah-program',
    image: {
      path: '/images/ElmiraGraceWindow.jpg',
      alt: 'Window in Grace Church, Elmira NY'
    },
    timesLocations: [{
      time: '2025-05-17T19:30',
      location: ['Grace Episcopal Church', '375 West Church Street', 'Elmira, NY']
    }]
  },
  {
    id: uuid(),
    title: 'JS Bach: Nun komm, der Heiden Heiland, BWV 61',
    ensemble: {
      name: 'Bach Akademie Charlotte',
      url: 'https://bacharlotte.com/'
    },
    url: 'https://bacharlotte.com/2024-25/2025-festival/tuning-in-bach-bwv-61',
    image: {
      path: '/images/BachAkademieCharlotte.jpg',
      alt: 'Bach Akademie Charlotte Background'
    },
    description: 'Johann Sebastian Bach composed the church cantata Nun komm, der Heiden Heiland (Now come, Savior of the heathens), BWV 61, in Weimar for the first Sunday in Advent, the Sunday which begins the liturgical year, and first performed it on December 2, 1714. For Lutherans, the festive start to the liturgical year had a hopeful character. After all, it was almost Christmas time.\n\nOn March 2, 1714 Bach was appointed concertmaster of the Weimar court capelle of the co-reigning dukes Wilhelm Ernst and Ernst August of Saxe-Weimar. As concertmaster, he assumed the principal responsibility for composing new works, specifically cantatas for the Schlosskirche (palace church), on a monthly schedule.\n\nBach structured this cantata in six movements, beginning with chorale fantasia, followed by a series of alternating recitatives and arias and concluded by a chorale. The words of the cantata are derived from Luther\'s Advent chorale Nun komm, der Heiden Heiland, which was well-known at the time. The first and the last movement follow Luther\'s text literally, and the middle movements are based on it.\n\nThis melody is first documented as a Roman Catholic Latin hymn based upon Gregorian chant in manuscript form in Einsiedeln (Switzerland) around 1120. ',
    director: 'Guy Fishman and Aisslinn Nosky',
    timesLocations: [{
      time: '2025-06-05T12:00',
      location: ['Myers Park Presbyterian Church', '2501 Oxford Place', 'Charlotte, NC']
    }]
  },
  {
    id: uuid(),
    title: 'JS Bach: Meine Seel erhebt den Herren, BWV 10',
    ensemble: {
      name: 'Bach Akademie Charlotte',
      url: 'https://bacharlotte.com/'
    },
    url: 'https://bacharlotte.com/2024-25/2025-festival/tuning-in-bach-bwv-10',
    image: {
      path: '/images/BachAkademieCharlotte.jpg',
      alt: 'Bach Akademie Charlotte Background'
    },
    description: 'Johann Sebastian Bach composed the church cantata Meine Seel erhebt den Herren (My soul magnifies the Lord), in 1724 as part of his second cantata cycle. By early July, Bach was more than a month into his second year as Thomaskantor in Leipzig. Meine Seel erhebt den Herren is the fifth of 40 chorale cantatas he started that year. \n\nBach adopted the text and the melody of Martin Luther\'s German Magnificat in various compositions, including this one. (Meine Seel erhebt den Herren, BWV 10 is also known as Bach\'s German Magnificat.)\n\nThe work follows Bach\'s chorale cantata format. The outer movements of the cantata are set for mixed choir and an orchestra consisting of trumpet, two oboes, strings and continuo. Luther\'s translation of Luke 1:46-48 provides the text for the first movement. The canticle\'s doxology is the text of the last movement, and the five middle movements are a succession of arias and recitatives.',
    director: 'Guy Fishman and Aisslinn Nosky',
    timesLocations: [{
      time: '2025-06-06T12:00',
      location: ['Myers Park Presbyterian Church', '2501 Oxford Place', 'Charlotte, NC']
    }]
  },
  {
    id: uuid(),
    title: 'Mozart Requiem',
    ensemble: {
      name: 'Bach Akademie Charlotte',
      url: 'https://bacharlotte.com/'
    },
    url: 'https://bacharlotte.com/2024-25/2025-festival/mozart-requiem',
    image: {
      path: '/images/BachAkademieCharlotte.jpg',
      alt: 'Bach Akademie Charlotte Background'
    },
    role: 'Bass soloist',
    description: 'A requiem, of course, is music for a religious ceremony intended to honor the memory of, and make a plea for, those who have passed away. In early July of 1791, an \'unknown, gray stranger\' showed up at Mozart\'s door, requesting an anonymous commission to compose a Requiem Mass—on the understanding that Mozart not seek to learn the identity of his patron. Mozart accepted, and the stranger paid for the Requiem in full.\n\nMozart\'s study of traditions of funeral music likely played a role in the Requiem\'s composition, as well as his recent affinity for Baroque counterpoint. Mozart begins in the key of D minor, the same key used to conjure the terrifying sounds in his opera Don Giovanni, as the titular character is carried by demons down into Hell.\n\nIn ill health and near death, Mozart completed the Requiem and Kyrie movements, and managed to sketch the voice parts and bass lines for the Dies irae through to the Hostias. But before he could complete the work, Mozart died on December 5, 1791, at the age of 35. His widow Constanze feared that if she handed over an incomplete work, the mystery patron would demand his money back. She asked Joseph Eybler to finish the score, but after orchestrating the music following the Kyrie, Eybler handed it over to Mozart\'s pupil Franz Xaver Süssmayer.\n\nSüssmayer completed the work, copying the entire completed score in his own hand. There is to this day controversy over who actually composed what in the remaining sections of the Requiem, and how much—or how little—Mozart dictated the notes or outlines of those movements.\n\nThe unknown patron was Anton Leitgeb, son of the mayor of Vienna and the valet of Count Franz von Walsegg-Stuppach. Leitgeb had a well-earned reputation for promoting other people\'s music as his own. The Count was hoping to use Mozart\'s Requiem to commemorate his late wife, Anna. It took a decade before Constanze was able to persuade Walsegg to acknowledge Mozart as the Requiem\'s true composer. Well, at least part of it, anyway.\n\nThe end result is a powerful exploration of grief and mortality that contains some of Mozart\'s darkest music. It is one of the most famous choral works in the classical repertoire—a masterpiece that will stir your emotions.',
    director: 'Guy Fishman and Aisslinn Nosky',
    timesLocations: [{
      time: '2025-06-07T19:30',
      location: ['Sandra Levine Theatre - Sarah Belk Gambrell Center, Queens University of Charlotte', '2319 Wellesley Avenue', 'Charlotte, NC']
    }]
  }
]
