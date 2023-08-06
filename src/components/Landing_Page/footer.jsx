const links = [
  [
    "ETH Department of Architecture",
    "i-mdi:github",
    "https://arch.ethz.ch/en",
  ],

  [
    "Master of Landscape Architecture",
    "i-ph:youtube-logo-fill text-red-4",
    "https://mscla.arch.ethz.ch",
  ],

  [
    "Chair of Being Alive",
    "i-ic:baseline-discord text-indigo-4",
    "https://gali-izard.arch.ethz.ch",
  ],

  // ["telegram group", "i-uil:telegram text-sky-3", "https://t.me/nvchad_tg"],
  // [
  //   "matrix space",
  //   "i-cib:matrix text-emerald-3",
  //   "https://matrix.to/#/#nvchad:matrix.org",
  // ],
];

function Communities() {
  return (
    <div grid gap-0 id="community">
      <h3 text-start font-normal>Links</h3>
      {/* links with icons */}
      <div flex gap-5 bg="dark-4 dark:dark-3" p="3 x-4">
        {links.map((x) => {
          return (
            <a Capitalize href={x[2]} aria-label={x[0]} vertCentered>
              <div class={x[1]} text-2xl rounded-none></div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function ETH() {
  return (
    <div grid gap-0 id="community">
      <h3 text-start font-normal>Links</h3>
      {/* links with icons */}
      <div flex gap-5 bg="dark-4 dark:dark-3" p="3 x-4">
        {links.map((x) => {
          return (
            <a Capitalize href={x[2]} aria-label={x[0]} vertCentered>
              <div class={x[1]} text-2xl rounded-none></div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div bg="dark-2 dark:dark-1" text-white-1 rounded-none>
      <div
        p-10
        grid
        gap-10
        max="w-[1700px]"
        mx-auto
        text-center
      >
        <div class="grid gap-10 mx-auto md:mx-0 md:flex md:justify-between">
          <div text-start>
            {/* <div text-sm pb-1> */}
            {/*   Powered by Github pages */}
            {/* </div> */}

            <div
              flex
              vertCentered
              justify-center
              bg="dark-4 dark:dark-3"
              p="3 x-4"
            >

              <div i-logos-solidjs-icon></div> Solidjs +{" "}
              <div i-simple-icons:unocss rounded-none></div> Unocss
            </div>
          </div>


          <div flex bg="white-1 dark:white-2" p="x-2 y-2" align-middle>
            <img src="/eth_logo_kurz_pos.svg" alt="nvchad logo" w="150px" h="24px" />
          </div>
        </div>

        {/* Copyright stuff */}
        <div grid gap-5 h-fit py-10 rounded-none border="0 t-2 solid dark-4">
          <div mx-auto Capitalize vertCentered text-2xl font-semibold>
            <img src="/logo.svg" alt="ddm logo" w="33px" h="33px" />
            Digital Design Methods I
          </div>
          <span dark:text-white-2>Copyright © 2023 Dr.Zhao.MA™</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
