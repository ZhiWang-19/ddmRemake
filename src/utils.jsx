// import { createSignal } from "solid-js";
import { createSignal, sharedConfig, createComponent, onMount, lazy} from "solid-js"
import { createStore } from "solid-js/store";

function isElementVisible(myElement) {
  const rect = myElement.getBoundingClientRect();
  const isVisible = rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

  return (isVisible) ? true : false;
}

export function dateDistance(d1, d2) {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();

  const diffTime = date1 - date2;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
  // return date1 <= date2;
}

export const [activeContext_Heading, setActiveContext_Heading] = createSignal(
  "",
);

export const [contextHeadings, setHeadings] = createStore([]);

export const generateActiveContext = (id) => {
  let docs_Elements = document.getElementById(id);
  let headings = docs_Elements?.querySelectorAll("h2,h3");

  // just get the first h2/h3
  for (let i = 0; i < headings.length; i++) {
    if (isElementVisible(headings[i])) {
      setActiveContext_Heading(headings[i].innerText);
      break;
    }
  }
};

export const assign_heading_ids = () => {
  const docs = document.getElementById("DocContent");
  const headingElements = docs?.querySelectorAll("h2, h3");
  const headings = [];

  headingElements?.forEach((item) => {
    item.id = item.innerText.replaceAll(/[ .&]/g, "_").toLowerCase();
    headings.push([item.localName.toLowerCase(), item.innerText]);
  });

  setHeadings(headings);
};

export const autoscroll_toID = () => {
  const hash = location.hash;

  // if currentl link has an anhcor link (with # prefix) then autoscroll to it
  if (hash[0] === "#") {
    const id = hash.substring(1);
    document.getElementById(id).scrollIntoView();
  }
};


export function clientOnly(fn) {
  const Lazy = lazy(fn)
  return props => {
    if (sharedConfig.context) {
      const [flag, setFlag] = createSignal(false)

      onMount(() => {
        setFlag(true)
      })

      return createMemo(() => {
        if (flag()) {
          return createComponent(Lazy, props)
        }
        return undefined
      })
    }
    return createComponent(Lazy, props)
  }
}
