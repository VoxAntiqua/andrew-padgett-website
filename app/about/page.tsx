import Image from "next/image";

export default function About() {
  return (
    <section className="p-8 lg:px-16">
      <div className="container flex flex-wrap gap-6 h-[calc(100vh-14rem)]">
        {/* Image section */}
        <div className="flex-1 relative h-full">
          <Image
            src="/images/HeadshotAbout.jpg"
            alt="Headshot of Andrew Padgett"
            layout="fill" // Fill the container
            objectFit="cover" // Contain the image while maintaining aspect ratio
            objectPosition="top" // Center the image
          />
        </div>

        {/* Text section with scrollbar */}
        <div className="flex-1 flex flex-col justify-center h-full gap-4 relative mr-8">
          <div className="container h-full max-h-full overflow-y-auto p-4">
            <p className="mt-4">
              Praised for his &quot;powerful baritone and impressive vocal range&quot; (Boston Music Intelligencer) and as a &quot;musicianly, smooth vocalist, capable in divisions&quot; (Opera News Online), bass-baritone Andrew Padgett is an accomplished interpreter of early music from medieval to baroque repertoire. He has worked with several early music luminaries including Masaaki Suzuki, Benjamin Bagby, and Paul O&#39;Dette, and has been featured as a soloist in concert venues worldwide, such as Alice Tully Hall at Lincoln Center, NYC, the Kennedy Center for the Performing Arts in Washington, D.C., and the Esplanade Concert Hall in his hometown, Singapore. He is a frequent collaborator with ensembles such as TENET, Bach Collegium San Diego, Pegasus Early Music, and Piffaro, both as an ensemble artist and a soloist.
            </p>
            <p className="mt-4">
              Andrew has been a featured soloist on a number of recently-released recordings, including <em><a href="https://www.amazon.com/Fortuna-Antiqua-Ultra-Medieval-Fortune/dp/B09RJHPJ2N">Fortuna Antiqua et Ultra</a></em> and <em><a href="https://concordiandawn.com/release/medieval-song-from-aristotle-to-opera/">Medieval Song from Aristotle to Opera</a></em> with Concordian Dawn, and <em><a href="https://www.saintthomaschurch.org/product/the-music-of-gerre-hancock/">The Music of Gerre Hancock</a></em> with The Saint Thomas Choir of Men and Boys.
            </p>
            <p className="mt-4">
              Andrew holds a B.S. in physics, an M.M. in voice from UC Santa Barbara, and an M.M. in Early Music, Oratorio, and Chamber Ensemble from Yale University&rsquo;s Institute of Sacred Music. After several years in New York City, as a member of the internationally-acclaimed Saint Thomas Choir of Men and Boys, he now lives in the suburbs of Boston with his wife and son, where he frequently sings with Emmanuel Music on their long-running Bach Cantata Series, under the direction of Ryan Turner. In his free time, Andrew enjoys <a href="https://www.instagram.com/vox.antiqua.painting/">miniature painting</a> and homebrewing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
