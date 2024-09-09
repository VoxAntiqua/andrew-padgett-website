import Image from "next/image";

export default function About() {
  return (
    <section className="p-4 sm:p-6 lg:px-16">
      <div className="container flex flex-col lg:flex-row gap-4 lg:gap-6 h-auto lg:h-[calc(100vh-15rem)]">
        {/* Image section */}
        <div className="relative lg:flex-1 lg:w-[50%] lg:overflow-hidden">
          <Image
            src="/images/HeadshotAbout.jpg"
            alt="Headshot of Andrew Padgett"
            fill
            sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 100vw"
            priority
            style={{
              objectFit: 'cover',
              objectPosition: 'top',
            }}
            className="w-full lg:w-auto lg:h-full"
          />
        </div>

        {/* Text section */}
        <div className="flex-1 lg:flex-none lg:w-[50%] lg:overflow-y-auto">
          <div className="h-auto lg:h-full max-h-full p-4 sm:p-6">
            <p className="mt-4">
              Praised as &quot;splendidly declamatory&quot; (Opera Today) and for his &quot;powerful baritone and impressive vocal range&quot; (Boston Music Intelligencer), bass-baritone Andrew Padgett is an accomplished interpreter of early music from medieval to baroque repertoire. He has worked with several early music luminaries including Masaaki Suzuki, Benjamin Bagby, and Paul O&#39;Dette, and has been featured as a soloist in concert venues worldwide, such as Alice Tully Hall at Lincoln Center, NYC, the Kennedy Center for the Performing Arts in Washington, D.C., and the Esplanade Concert Hall in his hometown, Singapore. He is a frequent collaborator with ensembles such as TENET, Bach Collegium San Diego, Pegasus Early Music, and Piffaro, both as an ensemble artist and a soloist.
            </p>
            <p className="mt-4">
              Andrew has been a featured soloist on a number of recently-released recordings, including <em><a href="https://www.amazon.com/Fortuna-Antiqua-Ultra-Medieval-Fortune/dp/B09RJHPJ2N" target="_blank" className="text-blue-700 hover:underline">Fortuna Antiqua et Ultra</a></em> and <em><a href="https://concordiandawn.com/release/medieval-song-from-aristotle-to-opera/" target="_blank" className="text-blue-700 hover:underline">Medieval Song from Aristotle to Opera</a></em> with Concordian Dawn, and <em><a href="https://www.saintthomaschurch.org/product/the-music-of-gerre-hancock/" target="_blank" className="text-blue-700 hover:underline">The Music of Gerre Hancock</a></em> with The Saint Thomas Choir of Men and Boys.
            </p>
            <p className="mt-4">
              Andrew holds a B.S. in physics, an M.M. in voice from UC Santa Barbara, and an M.M. in Early Music, Oratorio, and Chamber Ensemble from Yale University&rsquo;s Institute of Sacred Music. After several years in New York City, as a member of the internationally-acclaimed Saint Thomas Choir of Men and Boys, he now lives in the suburbs of Boston with his wife and son, where he frequently sings with Emmanuel Music on their long-running Bach Cantata Series, under the direction of Ryan Turner. In his free time, Andrew enjoys <a href="https://www.instagram.com/vox.antiqua.painting/" target="_blank" className="text-blue-700 hover:underline">miniature painting</a> and homebrewing.
            </p>
            <p className="mt-4">
              <a
                href="/docs/CV%20Sept%202024.pdf"
                target="_blank"
                className="text-blue-700 hover:underline font-semibold"
              >
                Resume (PDF)
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
