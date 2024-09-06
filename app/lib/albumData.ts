import {v1 as uuid} from 'uuid'
import { Album } from './definitions'

export const albums:Album[] = [
    {
        id: uuid(),
        imagePath: '/images/albums/FortunaAntiquaEtUltra.png',
        title: 'Fortuna Antiqua et Ultra',
        subtitle: 'Medieval Songs of Fate, Fortune, and Fin\'amor',
        ensemble: {
            name: 'Concordian Dawn',
            url: 'https://concordiandawn.com',
        },
        director: 'Christopher Preston Thompson',
        year: 2022,
        soloTracks: [
            {
                number: 11,
                title: 'Je n\'ai autre retenance',
                spotifyUrl: 'https://open.spotify.com/track/2DcNXRQnfTiyRV5LGckRVU?si=9fe9dbdb1cf04e11'
            },
            {
                number: 17,
                title: 'Quant voi la flour boutener',
                spotifyUrl: 'https://open.spotify.com/track/7nFwVedjTZxjD9GcMLbhex?si=f8bb7760afdd4acc'
            }
        ],
        spotifyUrl: 'https://open.spotify.com/album/5iwUhdnloQEQwOfFkCRrK8',
        appleMusicUrl: 'https://music.apple.com/us/album/fortuna-antiqua-et-ultra-medieval-songs-of-fate/1608479200',
        amazonUrl: 'https://www.amazon.com/Fortuna-Antiqua-Ultra-Medieval-Fortune/dp/B09RJHPJ2N',
    },
    {
        id: uuid(),
        imagePath: '/images/albums/MedievalSongAristotleOpera.jpeg',
        title: 'Medieval Song from Aristotle to Opera',
        ensemble: {
            name: 'Concordian Dawn',
            url: 'https://concordiandawn.com',
        },
        director: 'Christopher Preston Thompson',
        year: 2023,
        soloTracks: [
            {
                number: 9,
                title: 'Entre.l Taur e.l Doble Signe',
                spotifyUrl: 'https://open.spotify.com/track/274eC5gOGuyUxT7UgqJqix?si=3319068a01514745'
            },
            {
                number: 17,
                title: 'Amar dei',
                spotifyUrl: 'https://open.spotify.com/track/0oFFF0SBo30MY1an2PwUf9?si=2b665e32c4f34f21'
            }
        ],
        spotifyUrl: 'https://open.spotify.com/album/7EvgDFtH1OvLAFjQmjkcQ8?si=D1PdEDWdRfKl-Za793eQ-w',
        appleMusicUrl: 'https://music.apple.com/us/album/medieval-song-from-aristotle-to-opera-extended-version/1716297644',
        amazonUrl: 'https://www.amazon.com/Medieval-Music-Aristotle-Concordian-Ensemble/dp/B0CKS1Y2S5',
    },
    {
        id: uuid(),
        imagePath: '/images/albums/GerreHancock.jpg',
        title: 'The Music of Gerre Hancock',
        ensemble: {
            name: 'The Saint Thomas Choir of Men and Boys',
            url: 'https://www.saintthomaschurch.org/music/musicians-and-recordings/choir-of-men-boys/',
        },
        director: 'Jeremy Filsell',
        year: 2021,
        soloTracks: [
            {
                number: 13,
                title: 'The Lord Will Surely Come',
                spotifyUrl: 'https://open.spotify.com/track/4OR1s1RKe5r0zk2KZKrfAr?si=0aa444eb737c467e'
            },
        ],
        spotifyUrl: 'https://open.spotify.com/album/2xfyUZgSJwySkxslOKax32?si=V4gRetIHQ_28RThQF2HZDA',
        appleMusicUrl: 'https://music.apple.com/us/album/the-music-of-gerre-hancock/1553982414',
        amazonUrl: 'https://www.amazon.com/Music-Gerre-Hancock-Avenue-Thomas/dp/B08WZL1QRX',
    },
    {
        id: uuid(),
        imagePath: '/images/albums/ClearVoicesInTheDark.png',
        title: 'Clear Voices In The Dark',
        subtitle: 'Poulenc Figure Humaine, Songs of the American Civil War',
        ensemble: {
            name: 'Skylark',
            url: 'https://www.skylarkensemble.org/',
        },
        director: 'Matthew Guard',
        year: 2024,
        spotifyUrl: 'https://open.spotify.com/album/4SeONhnQjyVO6hwhFjVUQB?si=70GMwhIURgSKwJJg8UVkqA',
        appleMusicUrl: 'https://music.apple.com/us/album/clear-voices-in-the-dark/1743986688',
        amazonUrl: 'https://www.amazon.com/Clear-Voices-Dark-Skylark/dp/B0CZJ4YV11',
    },
    {
        id: uuid(),
        imagePath: '/images/albums/LambsJourney.jpg',
        title: 'The Lamb\'s Journey',
        subtitle: 'A Choral Narrative from Gibbons to Barber',
        ensemble: {
            name: 'Ensemble Altera',
            url: 'https://www.ensemblealtera.com',
        },
        director: 'Christopher Lowrey',
        year: 2024,
        spotifyUrl: 'https://open.spotify.com/album/6XPnk8aylCvRL1NK0xJPyg?si=tbW1CZlFRjGVgGoI3aNWoA',
        appleMusicUrl: 'https://music.apple.com/us/album/the-lambs-journey-a-choral-narrative-from-gibbons-to-barber/1727584583',
        amazonUrl: 'https://www.amazon.com/Lambs-Journey-Choral-Narrative-Gibbons/dp/B0CT237HC1',
    },
    {
        id: uuid(),
        imagePath: '/images/albums/LostVespers.jpg',
        title: 'Monteverdi: The \'Lost\' Vespers',
        ensemble: {
            name: 'The Thirteen',
            url: 'www.thethirteenchoir.org/',
        },
        director: 'Matthew Robertson',
        year: 2024,
        spotifyUrl: 'https://open.spotify.com/album/4FxCoMCrDySL9WCXPOMQJ3?si=N3drsB7iSOqQxsQJK7Jxfw',
        appleMusicUrl: 'https://music.apple.com/us/album/monteverdi-the-lost-vespers/1743071408',
        amazonUrl: 'https://music.amazon.com/albums/B0D2LV6BMF',
    },
]