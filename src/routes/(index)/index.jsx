import Hero from "~/components/Landing_Page/hero";
import Footer from "~/components/Landing_Page/footer";

import { createRouteData } from "solid-start";
import { isServer } from "solid-js/web";

import { clientOnly } from "~/utils"; // since ag-grid has no SSR feature, make it client-only

// create data that can be used later
export function routeData() {
  return createRouteData(async () => {
    if (isServer) return false;

    const response = await fetch("/schedule.json");
    return await response.json();
  });
}

const ClientOnlySchedule = clientOnly(() =>
  import("~/components/Landing_Page/schedule.jsx")
);

function Home() {
  return (
    <>
      <Hero />
      <ClientOnlySchedule />
      <Footer />
    </>
  );
}

export default Home;
