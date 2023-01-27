import { iAuthType, iColor, iDynamicObject, iSwitch} from "../types"

export const imgSrc = (url: string) => url.length > 0 ? url : '/icons/avatar.svg'

const subline = "text-xs"
const tiny = "text-xxxs font-bold"
const grayText = "text-rcngray-900"
const flexCenterCenter = "flex justify-center items-center"
const mainline = "text-rcnblue-500 font-semibold text-sm"
const center = "absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
const flex_center = "flex flex-col justify-center items-center"
const btn = "rounded-full bg-white shadow-custom py-2 px-4 text-center cursor-pointer text-rcnblue-500 border-2 text-xs flex justify-center items-center gap-x-2"
export const useUi = () => {
  return {
    btmnavwrap: "grid gap-x-2 bg-white z-10 w-full max-w-md",
    comboinputwrap: "relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md md:text-sm",
    combobutton: "absolute inset-y-0 right-0 flex items-center pr-2",
    chevronupdownicon: "h-5 w-5 text-gray-400",
    comboboxoptions: "absolute mt-1 h-[150px] w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg md:text-sm",
    nothingfound: "relative cursor-default select-none py-2 px-4 text-gray-700",
    comboboxoptionli: "relative cursor-default select-none py-2 pl-10 pr-4",
    comboboxoptionspanicon: "absolute inset-y-0 left-0 flex items-center pl-3",
    cropperwrap: "fixed inset-0 overflow-y-auto",
    cropperblankdiv: "fixed inset-0 bg-black bg-opacity-25",
    cropperinnerwrap: "flex min-h-full items-center justify-center p-4 text-center",
    cropperdialogpanel: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
    cropperdialogtitle: "text-lg font-medium leading-6 text-gray-900",
    cropperbutton: "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
    disclosurewrap: "w-full",
    disclosureinnerwrap: "mx-auto w-full max-w-md rounded-2xl bg-white p-2",
    disclosurebutton: "flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-rcnblue-500 hover:bg-rcnblue-200 focus:outline-none focus-visible:ring focus-visible:ring-rcnblue-100 focus-visible:ring-opacity-75",
    disclosurepanel: "px-4 pt-4 pb-2 text-sm text-gray-500",
    listinnerwrap: "relative mt-1",
    listbutton: "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 md:text-sm",
    listspantruncate: "block truncate",
    listiconspan: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
    listicon: "h-5 w-5 text-gray-400",
    listboxoptions: "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:text-sm z-10",
    listboxoptionli: "relative cursor-default select-none py-2 pl-10 pr-4",
    listboxoptionspan: "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600",
    loginwrap: "w-full h-full",
    logintopslides: "relative w-full h-40% overflow-hidden",
    logintopslide: "h-full w-full flex items-center justify-center",
    loginbottomcontent: "flex flex-col gap-y-2 h-60% justify-center items-center",
    logintitle: "text-center text-rcnblue-500 px-4",
    loginnavigation: "flex flex-col justify-center items-center gap-y-2 capitalize",
    loginnavicon: "w-[20px] absolute top-1/2 left-[8px] -translate-y-1/2",
    wfull: "w-full",
    hfull: "h-full",
    slidetitlenstatus: "card-subtitle flex justify-between items-center",
    slidebody: "card-slide-wrapper relative max-h-[225px] md:h-slide md:max-h-full sm:landscape:h-slide sm:landscape:max-h-full",
    // todo: put grid layout css in tailwindcss form
    // thumbnailwrap: "bg-white rounded shadow-custom inline-block mx-1 w-[100px] align-top cursor-pointer basis-[100px] flex-grow relative overflow-hidden md:m-0 md:w-1/4 sm:landscape:m-0 sm:landscape:w-1/4",
    thumbnailwrap: "bg-white rounded shadow-custom inline-block w-[100px] h-[100px] sm:w-full sm:h-full mx-1 sm:mx-0 relative cursor-pointer overflow-hidden",
    studentavatar: "w-full rounded opacity-0",
    studentnamewrap: "px-1/2 py-1 flex items-center justify-center text-xs tracking-wider font-body w-full absolute text-white bottom-0 left-1/2 -translate-x-1/2 bg-rcngray-100",
    studentname: "w-3/4 text-center overflow-hidden text-ellipsis whitespace-nowrap",
    personswrap: "h-full flex flex-col sm:flex-row sm:gap-x-2 sm:landscape:flex-row sm:landscape:gap-x-2",
    personslist: "mb-2 w-full md:w-1/2 md:h-full sm:landscape:w-1/2 sm:landscape:h-full",
    personslistfilternstatus: "pb-2 flex justify-between items-center sticky z-10",
    personsliststatus: "text-xxs uppercase text-rcnblue-500 my-2 font-bold opacity-50 w-1/4 overflow-hidden whitespace-nowrap text-ellipsis text-right",
    // personslistcards: "whitespace-nowrap overflow-y-hidden overflow-x-auto md:flex md:flex-wrap md:gap-2 md:overflow-y-auto md:overflow-x-hidden sm:landscape:flex sm:landscape:flex-wrap sm:landscape:gap-2 sm:landscape:overflow-y-auto sm:landscape:overflow-x-hidden landscape:h-thumbnails",
    personslistcards: "whitespace-nowrap sm:grid sm:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:auto-rows-[minmax(180px,_0fr)] md:auto-rows-[minmax(150px,_0fr)] lg:auto-rows-[minmax(120px,_0fr)] overflow-x-auto overflow-y-hidden sm:overflow-x-hidden sm:overflow-y-auto h-[100px] sm:h-thumbnails",
    personslistselection: "w-full md:w-1/2 sm:landscape:w-1/2",
    switchwrap: "flex gap-2 justify-center items-center capitalize",
    homelayoutbottomcontentwrap: "flex flex-col gap-y-6 w-full sm:w-60% h-60% sm:h-full justify-center items-center",
    numpad: "rounded-full w-[40px] h-[40px] flex items-center justify-center text-lg bg-white shadow-custom border border-gray-500 cursor-pointer",
    switchcomponent: (options: iSwitch) => {
      const common = "relative inline-flex h-6 w-11 items-center rounded-full"
      const { enabled, left, right } = options
      return `${common} ${enabled ? left : right}`
    },
    switchcomponentspan: (options: iSwitch) => {
      const common = "inline-block h-4 w-4 transform rounded-full bg-white transition"
      const { enabled, left, right } = options
      return `${common} ${enabled ? left : right}`
    },
    tabwrap: "w-full max-w-md md:px-0 sm:landscape:px-0",
    tablist: "flex space-x-1 rounded-xl bg-blue-900/20 p-1",
    tabbuttoncolor: "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
    tabbuttonring: "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
    tabbuttonselected: (selected: boolean) => {
      return selected
        ? 'bg-white shadow'
        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
    },
    tabpanelcolor: "rounded-xl bg-white p-3",
    tabpanelring: "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
    tabpanelli: "relative rounded-md p-3 hover:bg-gray-100",
    tabpanelh3: "text-sm font-medium leading-5",
    tabpanelinnerul: "mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500",
    tabpanelacolor: "absolute inset-0 rounded-md",
    tabpanelaring: "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2",
    teacherswrap: "h-full overflow-auto",
    topnavwrap: "shadow-custom bg-white flex justify-between items-center relative",
    topnavnotification: "rounded-full border-2 border-bglight-700 p-[2px] h-[40px] w-[40px] cursor-pointer",
    topnavavatar: "rounded-full",
    topnavlogo: "h-[32px]",
    topnavsitename: `${center} ${flex_center} ${mainline} uppercase font-bold font-body`,
    // common styles below
    texttrim: "w-full overflow-hidden whitespace-nowrap text-ellipsis",
    mainline_small: "text-rcnblue-500 font-semibold",
    subline_small: subline,
    mainline,
    center,
    flex_center,
    subline,
    grayText,
    breadcrumb: grayText + " uppercase mb-1 " + tiny,
    logo: flexCenterCenter + " bg-white shadow-custom absolute top-[40%] left-[16px] w-[50px] h-[50px] landscape:top-[50%] landscape:left-[40%] landscape:-translate-x-1/2 rounded-full p-2 z-10 -translate-y-1/2",
    bottomNavLink: flexCenterCenter + " flex-col cursor-pointer",
    bottomNavLinkIcon: flexCenterCenter + " w-[32px] h-[32px]",
    btn,
    submitbtn: `${btn} flex justify-center justify-self-center col-start-1 col-end-2 sm:col-end-3 items-center capitalize gap-x-2`,
    // button: "rounded-full bg-rcnblue-500 shadow-custom p-3 w-full text-center cursor-pointer text-white border-2 text-xs uppercase",
    input: `bg-white border border-gray-300 text-base text-gray-900 rounded-lg focus:ring-rcnblue-500 focus:border-rcnblue-500 block w-full h-[42px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rcnblue-500 dark:focus:border-rcnblue-500`,
    studentItem: "flex flex-col flex-grow w-1/2 overflow-hidden rounded-md shadow-custom bg-white cursor-pointer md:w-1/4 sm:landscape:w-1/4",
    studentItemOccupationIcon: "w-[16px] h-[16px]",
    cardTimeline: "",
    selectedComponent: "selected h-reverseprofile flex flex-col sm:landscape:h-full",
    search: "absolute w-[32px] h-[32px] right-[4px] top-half -translate-y-1/2 bg-rcnblue-500 rounded-md flex justify-center items-center cursor-pointer",
    searchIcon: "w-[24px] h-[24px] text-white",
    dropdown: "absolute top-full right-[8px] z-[100] w-fit mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none capitalize overflow-hidden",
    dropdownLogout: "text-gray-700 block px-4 py-2 text-sm cursor-pointer",
  }
}

export const obj2Str = (obj: iDynamicObject) => Object.keys(obj)
  .reduce((acc, cur) => acc + `${cur}:${obj[cur]};`, "")

export const constants = {
  donateApiUrl: "/api/p-payment"
}