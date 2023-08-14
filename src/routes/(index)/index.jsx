import Hero from "~/components/Landing_Page/hero";
// import Features from "~/components/Landing_Page/features";
// import Schedule from "~/components/Landing_Page/schedule";
import Footer from "~/components/Landing_Page/footer";
import { clientOnly } from "~/utils";

const MyComp = clientOnly(() =>
  import("~/components/Landing_Page/schedule.jsx")
);

function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      {/* <Schedule /> */}
      <MyComp />
      <Footer />
    </>
  );
}

export default Home;
