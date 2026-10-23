
const aboutText = `A leading product studio enabling startups & businesses transform their vision into product reality. We believe technology is a major force multiplier for mankind. We make it easier for businesses to leverage technology to solve large problems. Innovation is what we are awesome at. And we channel it to our product development, resulting in amazing products & outcomes!`;

const AboutUs = () => (
  <section className="w-full">
    {/* Section 1: Who We Are (purple bg) */}
    <div className="w-full bg-teal-950 pt-10 md:pt-16 pb-32 md:pb-16 px-4 text-center">
      <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Who We Are?
      </h1>
      <p className="text-white text-lg md:text-2xl font-medium max-w-3xl mx-auto mb-10 md:mb-16" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Started in the year 2017 & helped over 45+ businesses build high quality products.
      </p>
    </div>

    {/* Mobile Layout: Centered image bridging both backgrounds */}
    <div className="md:hidden relative w-full flex justify-center z-10 px-4">
      <div className="w-full max-w-md flex flex-col justify-center mx-auto">
        <div
          className="bg-white overflow-hidden border-4 border-white w-full"
          style={{
            marginTop: '-80px', // pull image up into purple
            marginBottom: '-80px', // pull image down into white
            maxWidth: 400,
            borderRadius: 0,
            borderWidth: 4,
          }}
        >
          <div className="relative w-full">
            <img
              src="/design/man-wearing-white-long-sleeved-shirt-holding-black-pen-3182781-e1717483845436.png"
              alt="Team meeting"
              width={400}
              height={200}
              className="w-full max-w-md mx-auto h-auto object-cover"
            />
          </div>
          <div className="w-full bg-white border-t border-white px-4 py-6 text-center">
            <h2 className="text-teal-950 text-2xl font-extrabold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              About MVPRockets
            </h2>
            <p className="text-muted text-lg font-medium leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {aboutText}
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Desktop Layout: Three-layer floating effect */}
    <div className="hidden md:block relative w-full">
      {/* Large floating image */}
      <div className="relative w-full flex justify-center z-20 px-4">
        <div 
          className="bg-white border-4 border-white rounded-lg overflow-hidden"
          style={{
            marginTop: '-90px', // pull image up into purple
            width: '1200px',
            maxWidth: '90vw'
          }}
        >
          <img
            src="/design/man-wearing-white-long-sleeved-shirt-holding-black-pen-3182781-e1717483845436.png"
            alt="Team meeting"
            width={1200}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* White "About MVPRockets" card overlapping image */}
      <div className="relative w-full flex justify-center z-30 px-4">
        <div 
          className="bg-white rounded-lg px-8 py-6 text-center"
          style={{
            marginTop: '-70px', // overlap bottom 15% of image
            width: '1000px',
            maxWidth: '80vw'
          }}
        >
          <h2 className="text-teal-950 text-4xl font-extrabold mt-8 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            About MVPRockets
          </h2>
          <p className="text-muted text-lg font-medium leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {aboutText}
          </p>
        </div>
      </div>

      {/* White background section to provide base for the floating elements */}
      <div className="w-full bg-white pt-20 pb-10"></div>
    </div>

    {/* Mobile white background section */}
    <div className="md:hidden w-full bg-white pt-20 pb-10"></div>
  </section>
);

export default AboutUs;