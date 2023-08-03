import Hero from "~/components/Landing_Page/hero";
import Features from "~/components/Landing_Page/features";
import Schedule from "~/components/Landing_Page/schedule";
import Footer from "~/components/Landing_Page/footer";

function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <Schedule />
      <Footer />
    </>
  );
}

export default Home;
