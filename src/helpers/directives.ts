import { all, el } from "~~/src/composables/index"

class ImageObserver {
  private images: NodeListOf<Element> | [];
  private preloaders: NodeListOf<Element> | [];

  constructor(parent: HTMLElement) {
    this.images = []
    this.preloaders = []
    this.initialize(parent)
  }

  initialize(parent: HTMLElement) {
    this.images = all(".lazy-image", parent)
    this.preloaders = all(".-preloader")

    this.images.forEach(this.lazyLoad.bind(this))
  }

  lazyLoad(el: Element) {
    const image = el as HTMLImageElement
    if (image.src !== undefined) {
      image.src = image.getAttribute("data-src") as string
      image.onload = () => this.afterLoad(image)
    } else this.afterLoad(image)
  }
  
  afterLoad(image: HTMLImageElement) {
    image.classList.add("loaded")
    const preloader = el(".-preloader", image.parentElement as HTMLElement)
    this.removeLoader(preloader as Element)
    this.preloaders.forEach(this.removeLoader.bind(this))
  }
  removeLoader(el: Element) {
    el.classList.remove("-loading")
    el.classList.add("-hide")
  }
}


export const vSelected = {
  updated: (ele: Element) => {
    // console.log("vSelected component updated")
  },
  mounted: (ele: Element) => {
    // const buttons = document.querySelectorAll(".card-buttons button");
    // const sections = document.querySelectorAll(".card-section");
    // const card = document.querySelector(".card");

    // const handleButtonClick = (e: Event) => {
    //   const target = e.target as HTMLElement
    //   const targetSection = target.getAttribute("data-section")
    //   const section = el(targetSection as string)
    //   targetSection !== "#about"
    //     ? ele.classList.add("is-active")
    //     : ele.classList.remove("is-active");
    //   ele.setAttribute("data-state", targetSection as string);
    //   sections.forEach((s) => s.classList.remove("is-active"));
    //   buttons.forEach((b) => b.classList.remove("is-active"));
    //   target.classList.add("is-active");
    //   section.classList.add("is-active");
    // };

    // buttons.forEach((btn) => {
    //   btn.addEventListener("click", handleButtonClick);
    // });

  },
  unmounted: (ele: Element) => {
    // console.log("vSelected component unmounted")
  }
}

const loaded = (ele: Element) => {
  const img = ele as HTMLImageElement
  img.onload = () => (img.parentElement as HTMLElement).classList.add("loaded")
}

export const vLoaded = {
  mounted: (ele: Element) => loaded(ele),
  updated: (ele: Element) => loaded(ele)
}

interface iData {
  maxItem: number;
  observer: IntersectionObserver | null;
  observation: (entries: IntersectionObserverEntry[]) => void
}

const data: iData = {
  maxItem: constants.maxItemsToLoad,
  observer: null,
  observation: (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]
    if (!entry.isIntersecting) return
    loadMore()
    entry.target.classList.remove("last")
    data.observer?.unobserve(entry.target)
  }
}

const loadMore = () => {
  // const { globalState, addToRenderedStudents } = useGlobals()
  // const sLen = globalState.value.searchedStudents.length
  // const rLen = globalState.value.renderedStudents.length
  // const sIdx = rLen
  // const eIdx = sIdx + data.maxItem
  // const more = globalState.value.searchedStudents.slice(sIdx, eIdx)

  // rLen === sLen ? unobserveAll() : addToRenderedStudents(more)
}

const unobserveAll = () => {
  const lastStudents = all(`div[aria-label="studentwrap"]:last-child`)
  lastStudents.forEach(lastStudent => data.observer?.unobserve(lastStudent))
  data.observer = null
}

const initializeObserver = (ele: Element, from: string) => {
  const options = { threshold: 1, root: ele }
  data.observer = new IntersectionObserver(data.observation, options)
  const last = el(`.-laststudent`, ele as HTMLElement)
  if (last) data.observer.observe(last as Element)
}

export const vInfiniteScroll = {
  updated: (ele: Element) => initializeObserver(ele, "updated"),
  mounted: (ele: Element) => initializeObserver(ele, "mounted"),
  unmounted: () => unobserveAll()
}