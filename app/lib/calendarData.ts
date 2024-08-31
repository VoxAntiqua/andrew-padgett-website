import {v1 as uuid} from 'uuid';

export const events = [
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
    timesLocations: [{
      time: '2024-09-08T10:00',
      location: ['Emmanuel Church', '15 Newbury Street', 'Boston, MA'],
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
]
