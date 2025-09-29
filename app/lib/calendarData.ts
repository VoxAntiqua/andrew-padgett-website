import {v1 as uuid} from 'uuid';
import { Event } from './definitions';

export const events: Event[] = [
  {
    id: uuid(),
    title: 'Bach: Wer Dank opfert, der preiset mich, BWV 17',
    ensemble: {
      name: 'Emmanuel Music',
      url: 'https://www.emmanuelmusic.org'
    },
    role: 'Bass soloist',
    director: 'Ryan Turner and guest conductor Andrew Clark',
    description: 'Emmanuel Music is one of the only organizations in the world that regularly performs Bach\'s cantatas within the liturgical context for which they were intended. The Sunday Eucharist at Emmanuel Church begins at 10:00 AM with the cantata performance beginning just before the closing hymn.',
    url: 'https://www.emmanuelmusic.org/performance-info/2025-2026-cantata-schedule',
    image:{
        path: '/images/EmmanuelEnsemblePhoto.webp',
        alt: 'Emmanuel Music'
    },
    timesLocations: [{
      time: '2025-10-12T10:00',
      location: ['Emmanuel Church', '15 Newbury Street', 'Boston, MA'],
    }]
  },
  {
    id: uuid(),
    title: 'Bach: Ich freue mich in dir, BWV 133',
    ensemble: {
      name: 'Emmanuel Music',
      url: 'https://www.emmanuelmusic.org'
    },
    role: 'Bass soloist',
    director: 'Ryan Turner',
    description: 'Emmanuel Music is one of the only organizations in the world that regularly performs Bach\'s cantatas within the liturgical context for which they were intended. The Sunday Eucharist at Emmanuel Church begins at 10:00 AM with the cantata performance beginning just before the closing hymn.',
    url: 'https://www.emmanuelmusic.org/performance-info/2025-2026-cantata-schedule',
    image:{
        path: '/images/EmmanuelEnsemblePhoto.webp',
        alt: 'Emmanuel Music'
    },
    timesLocations: [{
      time: '2025-12-24T10:00',
      location: ['Emmanuel Church', '15 Newbury Street', 'Boston, MA'],
    }]
  },
  {
    id: uuid(),
    title: 'Bach: Christmas Oratorio',
    ensemble: {
      name: 'Emmanuel Music',
      url: 'https://www.emmanuelmusic.org'
    },
    role: 'Bass soloist',
    director: 'Ryan Turner',
    description: 'The six cantatas of the radiant Christmas Oratorio ignite the holiday spirit with Bach\'s unparalleled brilliance played out in exquisite pastoral scenes, profound vocal solos, and dazzling choruses. Join us as we continue our cherished tradition, crafting a holiday experience that resonates with timeless joy.',
    url: 'https://www.emmanuelmusic.org/performance-info/christmas-oratorio',
    image:{
        path: '/images/EmmanuelEnsemblePhoto.webp',
        alt: 'Emmanuel Music'
    },
    timesLocations: [{
      time: '2025-12-13T19:00',
      location: ['Emmanuel Church', '15 Newbury Street', 'Boston, MA'],
    },
  {
      time: '2025-12-14T14:00',
      location: ['Emmanuel Church', '15 Newbury Street', 'Boston, MA'],
    }]
  },
  {
    id: uuid(),
    title: 'Nuestra Señora',
    ensemble: {
      name: 'Ampersand',
      url: 'https://www.weareampersand.net',
    },
    director: 'Madeline Healey and Tim Parsons',
    description: 'works by Hellinck, Gombert, Andreas de Silva, and Victoria — drawing inspiration from a 1589 document detailing the contents of the musical collection in the Mexico City Cathedral',
    url: 'https://www.weareampersand.net/events',
    image:{
        path: '/images/ampersandGorpCore.jpg',
        alt: 'Ampersand vocal chamber ensemble'
    },
    timesLocations: [{
      time: '2025-10-04T16:00',
      location: ['The Old Round Church', '29 Round Church Road', 'Richmond, VT']
    }]
  },
  {
    id: uuid(),
    title: 'Nuestra Señora',
    ensemble: {
      name: 'Ampersand',
      url: 'https://www.weareampersand.net',
    },
    director: 'Madeline Healey and Tim Parsons',
    description: 'Works by Hellinck, Gombert, Andreas de Silva, and Victoria — drawing inspiration from a 1589 document detailing the contents of the musical collection in the Mexico City Cathedral. Presented by Gotham Early Music Scene.',
    url: 'https://gemsny.org/event/midtown-concerts-2026-06-18',
    image:{
        path: '/images/ampersandGorpCore.jpg',
        alt: 'Ampersand vocal chamber ensemble'
    },
    timesLocations: [{
      time: '2026-06-18T13:15',
      location: ['St. Malachy\'s Church - The Actors\' Chapel', '239 West 49th Street', 'New York, NY']
    }]
  },
  {
    id: uuid(),
    title: 'Naples, Sacred and Profane',
    ensemble: {
      name: 'Ampersand',
      url: 'https://www.weareampersand.net',
    },
    director: 'Madeline Healey and Tim Parsons',
    description: 'centered on a 14th c. altarpiece by Lippo Vanni, sacred works interface with the triptych\'s gilded haloes, sumptuous textiles, & devotional symbolism — illuminating the world of 14th c. Italy',
    url: 'https://events.miami.edu/event/old-masters-in-context-naples-sacred-and-profane',
    image:{
        path: '/images/ampersandGorpCore.jpg',
        alt: 'Ampersand vocal chamber ensemble'
    },
    timesLocations: [{
      time: '2025-11-06T18:30',
      location: ['Lowe Art Museum', '1301 Stanford Drive', 'Coral Gables, FL']
    }]
  },
  {
    id: uuid(),
    title: 'Continental',
    ensemble: {
      name: 'Ampersand',
      url: 'https://www.weareampersand.net',
    },
    director: 'Madeline Healey and Tim Parsons',
    description: 'darkness & light, thick textures & silken threads, unusual continental polyphony for four to six voices',
    url: 'https://www.weareampersand.net/events',
    image:{
        path: '/images/ampersandGorpCore.jpg',
        alt: 'Ampersand vocal chamber ensemble'
    },
    timesLocations: [{
      time: '2026-01-23T20:00',
      location: ['Venue TBD','Address TBD','Saranac Lake, NY']
    },{
      time: '2026-01-24T16:00',
      location: ['Venue TBD','Address TBD', 'Richmond, VT']
    }]
  },
    {
    id: uuid(),
    title: '&&& at the Baldwin Wallace Bach Festival',
    ensemble: {
      name: 'Ampersand',
      url: 'https://www.weareampersand.net',
    },
    director: 'Madeline Healey and Tim Parsons',
    description: 'The vocal ensemble Ampersand—founded and directed by Baldwin Wallace alumna Madeline Healey—presents works drawn from the holdings of the Riemenschneider Bach Institute. Some of this music may not have been performed since its original debut over 300 years ago, offering audiences a truly historic and inspiring listening experience.',
    url: 'https://www.bw.edu/schools/conservatory/bach-festival',
    image:{
        path: '/images/ampersandGorpCore.jpg',
        alt: 'Ampersand vocal chamber ensemble'
    },
    timesLocations: [{
      time: '2026-04-26T19:00',
      location: ['Baldwin Wallace University','275 Eastland Road','Berea, OH']
    }]
  },
  {
    id: uuid(),
    title: 'Polyphonic Spree',
    ensemble: {
      name: 'Ampersand',
      url: 'https://www.weareampersand.net',
    },
    director: 'Madeline Healey and Tim Parsons',
    description: 'our community ensemble &chorus returns to join four of our core consort members in a polyphony smorgasbord of connection and delight',
    url: 'https://www.weareampersand.net/events',
    image:{
        path: '/images/ampersandGorpCore.jpg',
        alt: 'Ampersand vocal chamber ensemble'
    },
    timesLocations: [{
      time: '2026-05-16T16:00',
      location: ['The Old Round Church', '29 Round Church Road', 'Richmond, VT']
    }]
  },
    {
    id: uuid(),
    title: 'Selva morale e spirituale',
    ensemble: {
      name: 'Ampersand and Elm City Consort',
      url: 'https://www.weareampersand.net',
    },
    director: 'Madeline Healey, Tim Parsons, and Michael Rigsby',
    description: 'Virtuoso vocal ensemble Ampersand joins Elm City Consort in a program of selections from Claudio Monteverdi\'s \"Moral and Spiritual Forest.\"',
    url: 'https://www.elmcityconsort.org/2025-2026-season',
    image:{
        path: '/images/ampersandGorpCore.jpg',
        alt: 'Ampersand vocal chamber ensemble'
    },
    timesLocations: [{
      time: '2026-02-21T19:00',
      location: ['Bethesda Lutheran Church', '450 Whitney Avenue', 'New Haven, CT']
    }]
  },
  {
    id: uuid(),
    title: 'The Tempest Tossed',
    ensemble: {
      name: 'Tenet Vocal Artists',
      url: 'https://tenet.nyc',
    },
    director: 'Jolle Greenleaf and Elisa Sutherland',
    description: 'In this \"tossed\" theatrical rendition, our merry cast of singers and instrumentalists tell you the story of how Prospero summons his dutiful servant, Ariel, to conjure a masque for a waiting audience (you!). Will he keep his promise to free Ariel at the end of the evening\'s revels? You\'ll have to come and find out!',
    url: 'https://tenet.nyc/tempest',
    image:{
      path: '/images/TenetGroupCouch.jpg',
      alt: 'Tenet Vocal Artists'
    },
    timesLocations: [{
      time: '2025-10-18T18:00',
      location: ['Park Avenue Christian Church', '1010 Park Avenue', 'New York, NY']
    }]
  },
  {
    id: uuid(),
    title: 'Stagioni d\'amore',
    ensemble: {
      name: 'Tenet Vocal Artists',
      url: 'https://tenet.nyc',
    },
    director: 'Jolle Greenleaf and Jacob Perry',
    description: 'Stagioni d\'Amore (Seasons of Love) brings the music of Claudio Monteverdi and Salamone Rossi together in a dramatic tribute to love for every season of the year. Tenet\'s performers explore love\'s emotional highs and lows through madrigals ranging from sprightly to tormented in nature, impassioned arias, and instrumental interludes. You\'ll take in beautiful sounds while being immersed in gorgeous renaissance art-filled projections by designer Camilla Tassi.',
    url: 'https://tenet.nyc/stagioni',
    image:{
      path: '/images/TenetGroupCouch.jpg',
      alt: 'Tenet Vocal Artists'
    },
    timesLocations: [{
      time: '2026-04-11T18:00',
      location: ['Park Avenue Christian Church', '1010 Park Avenue', 'New York, NY']
    }]
  },
  {
    id: uuid(),
    title: 'Ein Kind Geborn',
    ensemble: {
      name: 'Tenet Vocal Artists and Piffaro, the Renaissance Band',
      url: 'https://tenet.nyc',
    },
    director: 'Jolle Greenleaf and Priscilla Herreid',
    description: 'A child is born! Step away from the bustle of the season and into the warm, joyful sounds of a German Renaissance Christmas. Piffaro is joined by Tenet Vocal Artists to present music by Praetorius and his contemporaries. We invite you to settle into the beauty of this music, and to be transported to another time.',
    url: 'https://www.piffaro.org/ein-kind-geborn',
    image:{
      path: '/images/TenetGroupCouch.jpg',
      alt: 'Tenet Vocal Artists'
    },
    timesLocations: [{
      time: '2025-12-04T19:30',
      location: ['St. Vincent Ferrer Roman Catholic Church', '869 Lexington Avenue', 'New York, NY']
    },{
      time: '2025-12-05T19:30',
      location: ['Church of the Holy Trinity', '1904 Walnut Street', 'Philadelphia, PA']
    },{
      time: '2025-12-06T19:30',
      location: ['Church of St. Martin-in-the-Fields', '8000 St Martins Lane', 'Philadelphia, PA']
    },{
      time: '2025-12-07T15:00',
      location: ['Westminster Presbyterian Church', '1502 West 13th Street', 'Wilmington, DE']
    }]
  },
  {
    id: uuid(),
    title: 'Eagle and Empire: Music of Colonial Mexico',
    ensemble: {
      name: 'Piffaro, the Renaissance Band',
      url: 'https://www.piffaro.org',
    },
    director: 'Priscilla Herreid',
    description: 'The music of Colonial Mexico tells a complex story shaped by power, adaptation, and survival. European and Indigenous traditions collided and combined, creating a new soundscape. Piffaro\'s wind players, joined by guest singers, plucked strings, and percussion, explore this repertoire. The Friday performance at Teatro Esperanza features a special appearance by the Aztec dancers of Ollin Yoliztli Calmecac',
    url: 'https://www.piffaro.org/eagle-and-empire-music-of-colonial-mexico',
    image:{
      path: '/images/Piffaro.jpeg',
      alt: 'Piffaro'
    },
    timesLocations: [{
      time: '2026-05-08T19:30',
      location: ['The Teatro at Esperanza Arts Center', '4261 North 5th Street', 'Philadelphia, PA']
    },{
      time: '2026-05-09T19:30',
      location: ['The Presbyterian Church of Chestnut Hill', '8855 Germantown Avenue', 'Philadelphia, PA']
    },{
      time: '2026-05-10T15:00',
      location: ['Westminster Presbyterian Church', '1502 West 13th Street', 'Wilmington, DE']
    }]
  },
  {
    id: uuid(),
    title: 'J.S. Bach\'s Easter Oratorio & Magnificat',
    ensemble: {
      name: 'Upper Valley Baroque',
      url: 'https://www.uppervalleybaroque.org/',
    },
    director: 'Filippo Ciabatti',
    description: 'Two of Bach\'s powerful works usher us into the season of renewal and hope. This sonic journey through rich orchestral timbres, contemplative arias, and intense polyphony leads to celebratory strains of joy.',
    url: 'https://www.uppervalleybaroque.org/concerts-2',
    image:{
      path: '/images/UpperValleyBaroque.webp',
      alt: 'Upper Valley Baroque'
    },
    timesLocations: [{
      time: '2026-03-13T18:00',
      location: ['Grace Congregational Church', '8 Court Street', 'Rutland, VT']
    },{
      time: '2026-03-14T15:00',
      location: ['Chandler Center for the Arts', '71 North Main Street', 'Randolph, VT']
    },{
      time: '2026-03-15T14:00',
      location: ['Lebanon Opera House', '51 North Park Street', 'Lebanon, NH']
    }]
  },
  {
    id: uuid(),
    title: 'The Flute and the Cantata Tradition',
    ensemble: {
      name: 'Bach Akademie Charlotte',
      url: 'https://bacharlotte.com/'
    },
    url: 'https://bacharlotte.com/2025-26/winterfest-2026',
    image: {
      path: '/images/BachAkademieCharlotteRequiem.jpg',
      alt: 'Bach Akademie Charlotte Requiem Bows'
    },
    description: 'Radiant and alive with color, this program spotlights the flute\'s expressive brilliance—brought vividly to life by the perpetually boundary-pushing Emi Ferguson. Lauded for her \"tonal bloom\" and \"hauntingly beautiful performances,\" she brings a singular flair that seamlessly bridges Baroque elegance and modern creativity. From sparkling concertos to majestic chorales, be swept away by her artistry and the exuberant spirit of Bach and Telemann.',
    director: 'Guy Fishman and Aisslinn Nosky',
    timesLocations: [{
      time: '2026-01-30T19:30',
      location: ['St. Mark\'s Lutheran Church', '1001 Queens Road', 'Charlotte, NC']
    }]
  },
    {
    id: uuid(),
    title: 'Vivaldi\'s Gloria',
    ensemble: {
      name: 'Bach Akademie Charlotte',
      url: 'https://bacharlotte.com/'
    },
    url: 'https://bacharlotte.com/2025-26/winterfest-2026',
    image: {
      path: '/images/BachAkademieCharlotteRequiem.jpg',
      alt: 'Bach Akademie Charlotte Requiem Bows'
    },
    description: 'Exuberant trumpet, soaring voices, and radiant orchestral colors—Vivaldi\'s Gloria brims with vitality and joy. Alongside Bach\'s rarely heard Lutheran Mass in G minor and Heinichen\'s sparkling concerto, this program reveals the Baroque at its most inventive and uplifting. ',
    director: 'Guy Fishman and Aisslinn Nosky',
    timesLocations: [{
      time: '2026-01-31T19:30',
      location: ['Venue TBA', 'Address TBA', 'Charlotte, NC']
    }]
  },
  {
    id: uuid(),
    title: 'Farewell Unkind: Songs and Dances of John Dowland',
    ensemble: {
      name: 'The Boston Camerata',
      url: 'https://bostoncamerata.org/',
    },
    director: 'Anne Azéma',
    description: 'To celebrate the anniversary of John Dowland, lutenist to Queen Elizabeth the First and the greatest English song writer until Purcell and Britten, we present a program of airs, dances, hymns and fantasies, for voices and instruments. With British lute virtuoso Nigel North.',
    url: 'https://bostoncamerata.org/performances/#prog-204',
    image:{
      path: '/images/BostonCamerata.jpeg',
      alt: 'The Boston Camerata'
    },
    timesLocations: [{
      time: '2026-02-15T16:00',
      location: ['Pickman Concert Hall, Longy School of Music', '27 Garden Street', 'Cambridge, MA']
    }]
  },
  {
    id: uuid(),
    title: 'Clear Voices in the Dark',
    ensemble: {
        name: 'Skylark Vocal Ensemble',
        url: 'http://www.skylarkensemble.org',
    },
    director: 'Matthew Guard',
    description: 'Francis Poulenc\'s Figure Humaine is one of the greatest works ever composed for unaccompanied choir - composed in 1943 in occupied France, and based on resistance-inspired poems by Paul Éluard, it is a stunning 8-movement exploration of the grim realities of war, culminating in an optimistic and embattled cry for liberty in the face of oppression. Skylark\'s innovative concert program, Clear Voices in the Dark, is a powerful cross-cultural statement about the expressive power of the arts, and specifically the human voice, in times of tragedy. Interspersed between Poulenc\'s stirring and complex settings, Skylark offers far simpler (but no less beautiful) musical images from the American Civil War era. Skylark shares some well-known pieces that have remained in the popular consciousness, as well as beautiful war-inspired songs that have long since been forgotten (and only found thanks to the Duke University Historical Archives).',
    url: 'https://www.skylarkensemble.org/clearvoices2026.html',
    image: {
        path: '/images/SkylarkEnsemblePhoto.jpg',
        alt: 'Skylark Vocal Ensemble'
    },
    timesLocations: [{
        time: '2026-05-25T15:00',
        location: ['Lawrence School Memorial Auditorium', '113 Lakeview Avenue', 'Falmouth, MA'],
    },{
        time: '2026-05-28T19:00',
        location: ["Rockport Music-Shalin Liu Performance Center", '37 Main Street', 'Rockport, MA'],
    },{
        time: '2026-05-30T15:00',
        location: ['Madison Avenue Presbyterian Church', '921 Madison Avenue', 'New York, NY']
    }]
  }
]
