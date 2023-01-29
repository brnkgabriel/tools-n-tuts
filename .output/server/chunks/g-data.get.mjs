import { defineEventHandler, getQuery } from 'h3';

const gData_get = defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    console.log(query);
    const path = query.path;
    const url = `https://script.google.com/macros/s/AKfycbyzfNWhPnxgEcbt4tSiCMKsoSurroruxBs2w2DpnXIMlRI-unma1s4bPBK8BnvA4Xbi/exec?path=${path}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    return { error: error.message };
  }
});

export { gData_get as default };
//# sourceMappingURL=g-data.get.mjs.map
