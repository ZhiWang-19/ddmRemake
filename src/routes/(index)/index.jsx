import Hero from "~/components/Landing_Page/hero";
// import Schedule from "~/components/Landing_Page/schedule";
import Footer from "~/components/Landing_Page/footer";

// since ag-grid has no SSR feature, make it client-only
import { clientOnly } from "~/utils";

const ClientOnlySchedule = clientOnly(() =>
  import("~/components/Landing_Page/schedule.jsx")
);

function Home() {
  return (
    <>
      <Hero />
      {/* <Schedule /> */}
      <ClientOnlySchedule />
      <Footer />
    </>
  );
}

export default Home;
