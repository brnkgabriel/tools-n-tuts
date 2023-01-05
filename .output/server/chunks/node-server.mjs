globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, lazyEventHandler, assertMethod, readBody, setCookie, createApp, createRouter as createRouter$1, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import { createIPX, createIPXMiddleware } from 'ipx';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{"pwaManifest":{"name":"Tools n Tuts","short_name":"Tools n Tuts","description":"The best of the open source tools and tutorials you need for work","lang":"en","start_url":"/","display":"standalone","background_color":"#fff","theme_color":"#fff","icons":[{"src":"/icon-192x192.png","sizes":"192x192","type":"image/png","purpose":"maskable"},{"src":"/icon-256x256.png","sizes":"256x256","type":"image/png","purpose":"maskable"},{"src":"/icon-384x384.png","sizes":"384x384","type":"image/png","purpose":"maskable"},{"src":"/icon-512x512.png","sizes":"512x512","type":"image/png","purpose":"maskable"},{"src":"/_nuxt/icons/64x64.83c3b610.png","type":"image/png","sizes":"64x64","purpose":"any"},{"src":"/_nuxt/icons/64x64.maskable.83c3b610.png","type":"image/png","sizes":"64x64","purpose":"maskable"},{"src":"/_nuxt/icons/120x120.83c3b610.png","type":"image/png","sizes":"120x120","purpose":"any"},{"src":"/_nuxt/icons/120x120.maskable.83c3b610.png","type":"image/png","sizes":"120x120","purpose":"maskable"},{"src":"/_nuxt/icons/144x144.83c3b610.png","type":"image/png","sizes":"144x144","purpose":"any"},{"src":"/_nuxt/icons/144x144.maskable.83c3b610.png","type":"image/png","sizes":"144x144","purpose":"maskable"},{"src":"/_nuxt/icons/152x152.83c3b610.png","type":"image/png","sizes":"152x152","purpose":"any"},{"src":"/_nuxt/icons/152x152.maskable.83c3b610.png","type":"image/png","sizes":"152x152","purpose":"maskable"},{"src":"/_nuxt/icons/192x192.83c3b610.png","type":"image/png","sizes":"192x192","purpose":"any"},{"src":"/_nuxt/icons/192x192.maskable.83c3b610.png","type":"image/png","sizes":"192x192","purpose":"maskable"},{"src":"/_nuxt/icons/384x384.83c3b610.png","type":"image/png","sizes":"384x384","purpose":"any"},{"src":"/_nuxt/icons/384x384.maskable.83c3b610.png","type":"image/png","sizes":"384x384","purpose":"maskable"},{"src":"/_nuxt/icons/512x512.83c3b610.png","type":"image/png","sizes":"512x512","purpose":"any"},{"src":"/_nuxt/icons/512x512.maskable.83c3b610.png","type":"image/png","sizes":"512x512","purpose":"maskable"}],"scope":"/"},"supabase":{"url":"https://esoxpbrbxabdqbplpgnk.supabase.co","key":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzb3hwYnJieGFiZHFicGxwZ25rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA5MzA4OTcsImV4cCI6MTk4NjUwNjg5N30.S0lPgS84K6ONNhEOKFJrvw4TiiwYqru5RxB_Tr5TDyc","client":{},"redirect":false,"cookies":{"name":"sb","lifetime":28800,"domain":"","path":"/","sameSite":"lax"}}},"ipx":{"dir":"","domains":[],"sharp":{},"alias":{}},"supabase":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$2 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$2;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const config$1 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config$1.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const _rRVVJmLwks = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(
      [
        "<script>",
        "if ('serviceWorker' in navigator) {",
        `  window.addEventListener('load', () => navigator.serviceWorker.register('${joinURL(useRuntimeConfig().app.baseURL, "sw.js")}'))`,
        "}",
        "<\/script>"
      ].join("\n")
    );
  });
});

const plugins = [
  _rRVVJmLwks
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": "\"1c3d-WV2E1h/ICMUtBTCNYVHlZ5LV204\"",
    "mtime": "2022-12-12T11:21:14.578Z",
    "size": 7229,
    "path": "../public/android-chrome-192x192.png"
  },
  "/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": "\"4293-u5PAJOUpbinQ1gZ7HXqWHoNaD7w\"",
    "mtime": "2022-12-12T11:21:14.645Z",
    "size": 17043,
    "path": "../public/android-chrome-512x512.png"
  },
  "/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"1513-Em2XzfUaFv4P4O+35R1kK7VZX3k\"",
    "mtime": "2022-12-12T11:21:14.660Z",
    "size": 5395,
    "path": "../public/apple-touch-icon.png"
  },
  "/browserconfig.xml": {
    "type": "application/xml",
    "etag": "\"f6-l0rqGL2lqVgCwGuAEmqx2W2R1wg\"",
    "mtime": "2022-12-12T11:21:14.671Z",
    "size": 246,
    "path": "../public/browserconfig.xml"
  },
  "/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"319-938YIbwIdu3m5vyiImO3LY2PrUU\"",
    "mtime": "2022-12-12T11:21:14.602Z",
    "size": 793,
    "path": "../public/favicon-16x16.png"
  },
  "/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"578-7GvD0CfKz1Dtbng7/XCnGsJbp+0\"",
    "mtime": "2022-12-12T11:21:14.683Z",
    "size": 1400,
    "path": "../public/favicon-32x32.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3aee-xP+UUFTVHzL4BZRQhbX4L/7Pk5M\"",
    "mtime": "2022-12-12T11:21:14.625Z",
    "size": 15086,
    "path": "../public/favicon.ico"
  },
  "/icon-192x192.png": {
    "type": "image/png",
    "etag": "\"1bf0-7ruHN/BRTS898cZaZFywrkB4740\"",
    "mtime": "2022-12-12T11:21:28.764Z",
    "size": 7152,
    "path": "../public/icon-192x192.png"
  },
  "/icon-256x256.png": {
    "type": "image/png",
    "etag": "\"1baa-JRrIK9UccV6BqyKeETXy3dOSG78\"",
    "mtime": "2022-12-12T11:21:28.791Z",
    "size": 7082,
    "path": "../public/icon-256x256.png"
  },
  "/icon-384x384.png": {
    "type": "image/png",
    "etag": "\"3fa0-/8T9+TpnWzUF15UCpwplf7SCzJc\"",
    "mtime": "2022-12-12T11:21:28.780Z",
    "size": 16288,
    "path": "../public/icon-384x384.png"
  },
  "/icon-512x512.png": {
    "type": "image/png",
    "etag": "\"3bf7-4JWpEIKmr9ayKrsERfu6+dzjJX0\"",
    "mtime": "2022-12-12T11:21:28.752Z",
    "size": 15351,
    "path": "../public/icon-512x512.png"
  },
  "/icon.png": {
    "type": "image/png",
    "etag": "\"4175-oizrM6t+ooU9B5KuFF2LrNgzFMc\"",
    "mtime": "2022-11-22T18:46:16.257Z",
    "size": 16757,
    "path": "../public/icon.png"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": "\"321-CT3R+/Iu/ranxTb4dE9hZw4KfV0\"",
    "mtime": "2022-12-22T14:48:24.060Z",
    "size": 801,
    "path": "../public/manifest.json"
  },
  "/mstile-150x150.png": {
    "type": "image/png",
    "etag": "\"ae1-3gjB3vO0KH3KARPt3yjziqGVho4\"",
    "mtime": "2022-12-12T11:21:14.591Z",
    "size": 2785,
    "path": "../public/mstile-150x150.png"
  },
  "/safari-pinned-tab.svg": {
    "type": "image/svg+xml",
    "etag": "\"531-zEUMhOKDQGl5wQvwgdWcc3xJMIk\"",
    "mtime": "2022-12-12T11:21:14.613Z",
    "size": 1329,
    "path": "../public/safari-pinned-tab.svg"
  },
  "/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": "\"1c2-jppgMjKMMI692jSgkKtzIp8i/Lg\"",
    "mtime": "2022-12-22T22:59:42.159Z",
    "size": 450,
    "path": "../public/site.webmanifest"
  },
  "/sw.js": {
    "type": "application/javascript",
    "etag": "\"5da-NlCSRKxt5TGXOOU2hPLWwjNQtMI\"",
    "mtime": "2022-12-24T14:38:07.828Z",
    "size": 1498,
    "path": "../public/sw.js"
  },
  "/images/prayer_452x452.png": {
    "type": "image/png",
    "etag": "\"2b02f-T3fLsUmZsIdoYyebRDZcSuN9Qg0\"",
    "mtime": "2022-12-13T17:38:38.722Z",
    "size": 176175,
    "path": "../public/images/prayer_452x452.png"
  },
  "/images/prayer_678x452.jpeg": {
    "type": "image/jpeg",
    "etag": "\"56d6-4wNI4wbEjBROfdA1YFAXq/bU7Tw\"",
    "mtime": "2022-12-11T09:26:36.979Z",
    "size": 22230,
    "path": "../public/images/prayer_678x452.jpeg"
  },
  "/images/rcn-logo.png": {
    "type": "image/png",
    "etag": "\"83de-FGcFCavJ+uG/oKkS5i/Xywk+/PA\"",
    "mtime": "2022-12-13T18:10:54.716Z",
    "size": 33758,
    "path": "../public/images/rcn-logo.png"
  },
  "/icons/avatar.svg": {
    "type": "image/svg+xml",
    "etag": "\"14b-FVB2qD2ys1V54nmg2AZOxp6aqlE\"",
    "mtime": "2022-08-19T21:33:33.015Z",
    "size": 331,
    "path": "../public/icons/avatar.svg"
  },
  "/icons/google-drive.svg": {
    "type": "image/svg+xml",
    "etag": "\"2f3-u+/7CSKzhB15zPogRADH3Cw5lig\"",
    "mtime": "2022-12-16T15:50:43.498Z",
    "size": 755,
    "path": "../public/icons/google-drive.svg"
  },
  "/icons/google.svg": {
    "type": "image/svg+xml",
    "etag": "\"3fa-z8M0ffuUpPp94+32jVUTCVGpwik\"",
    "mtime": "2022-12-22T07:38:01.743Z",
    "size": 1018,
    "path": "../public/icons/google.svg"
  },
  "/icons/image-placeholder.svg": {
    "type": "image/svg+xml",
    "etag": "\"449-kcQ56e8czsuKjZ3vCkQuONL1LlM\"",
    "mtime": "2022-12-21T09:53:19.060Z",
    "size": 1097,
    "path": "../public/icons/image-placeholder.svg"
  },
  "/icons/logo-colored.svg": {
    "type": "image/svg+xml",
    "etag": "\"557-MToDVyotjOpp+TqVO7mwzzoTxlE\"",
    "mtime": "2022-12-14T11:13:58.202Z",
    "size": 1367,
    "path": "../public/icons/logo-colored.svg"
  },
  "/icons/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"546-K8KFHp3sMAKmud+xTRVg22l2vNo\"",
    "mtime": "2022-12-12T10:18:33.390Z",
    "size": 1350,
    "path": "../public/icons/logo.svg"
  },
  "/icons/rcn-logo-white.svg": {
    "type": "image/svg+xml",
    "etag": "\"a32-cejEQKLYozfJTtDTyyYAR0eHaas\"",
    "mtime": "2022-10-23T14:05:59.713Z",
    "size": 2610,
    "path": "../public/icons/rcn-logo-white.svg"
  },
  "/icons/rcn-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"1134-div+4YUjZjlLoBiYTwEl/a1Wl0M\"",
    "mtime": "2022-12-12T10:27:12.382Z",
    "size": 4404,
    "path": "../public/icons/rcn-logo.svg"
  },
  "/icons/whatsapp.svg": {
    "type": "image/svg+xml",
    "etag": "\"1262-eLcnyyQaQnKt3tJV57Gfd0WutNI\"",
    "mtime": "2022-12-15T02:11:41.834Z",
    "size": 4706,
    "path": "../public/icons/whatsapp.svg"
  },
  "/icons/zoom.svg": {
    "type": "image/svg+xml",
    "etag": "\"e073-xaxQ74rY1tl3tmPbm5kBmohI/n4\"",
    "mtime": "2022-12-16T16:05:51.343Z",
    "size": 57459,
    "path": "../public/icons/zoom.svg"
  },
  "/_nuxt/composables.e839bac6.js": {
    "type": "application/javascript",
    "etag": "\"61-78y2SvHEffgSnMT7RYsmebcvPNU\"",
    "mtime": "2022-12-24T14:38:15.172Z",
    "size": 97,
    "path": "../public/_nuxt/composables.e839bac6.js"
  },
  "/_nuxt/entry.1b733099.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"149e-EZnzdHy7+U6O5E8ksr/ZynMd0wg\"",
    "mtime": "2022-12-24T14:38:15.172Z",
    "size": 5278,
    "path": "../public/_nuxt/entry.1b733099.css"
  },
  "/_nuxt/entry.2669a156.js": {
    "type": "application/javascript",
    "etag": "\"3802b-S4GETBSD0ame+7bul7Us1npD6Q4\"",
    "mtime": "2022-12-24T14:38:15.172Z",
    "size": 229419,
    "path": "../public/_nuxt/entry.2669a156.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2022-12-24T14:38:15.172Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.8259f5bd.js": {
    "type": "application/javascript",
    "etag": "\"904-nUnmLCeDARCNQ4MVNpx9zUbBsgM\"",
    "mtime": "2022-12-24T14:38:15.172Z",
    "size": 2308,
    "path": "../public/_nuxt/error-404.8259f5bd.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2022-12-24T14:38:15.172Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-500.b45f4e59.js": {
    "type": "application/javascript",
    "etag": "\"7b2-Sm56rccHQZCvDl41+DIuneBNleU\"",
    "mtime": "2022-12-24T14:38:15.172Z",
    "size": 1970,
    "path": "../public/_nuxt/error-500.b45f4e59.js"
  },
  "/_nuxt/error-component.6ab496b1.js": {
    "type": "application/javascript",
    "etag": "\"501-dny0N5PNRwuIsuMWo2iN0Hg+wU0\"",
    "mtime": "2022-12-24T14:38:15.172Z",
    "size": 1281,
    "path": "../public/_nuxt/error-component.6ab496b1.js"
  },
  "/_nuxt/index.82b0a707.js": {
    "type": "application/javascript",
    "etag": "\"ed-64QRvCJaKwmQlSDmVrgSQZb4OWY\"",
    "mtime": "2022-12-24T14:38:15.172Z",
    "size": 237,
    "path": "../public/_nuxt/index.82b0a707.js"
  },
  "/_nuxt/_plugin-vue_export-helper.a1a6add7.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2022-12-24T14:38:15.172Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.a1a6add7.js"
  },
  "/_nuxt/icons/120x120.83c3b610.png": {
    "type": "image/png",
    "etag": "\"16ba-krDnkRSAvcW61oNpVLY/+r93CBY\"",
    "mtime": "2022-12-24T14:38:08.067Z",
    "size": 5818,
    "path": "../public/_nuxt/icons/120x120.83c3b610.png"
  },
  "/_nuxt/icons/120x120.maskable.83c3b610.png": {
    "type": "image/png",
    "etag": "\"ef0-6p6idwjD6e6lMPRQTFLierr4Th0\"",
    "mtime": "2022-12-24T14:38:08.179Z",
    "size": 3824,
    "path": "../public/_nuxt/icons/120x120.maskable.83c3b610.png"
  },
  "/_nuxt/icons/144x144.83c3b610.png": {
    "type": "image/png",
    "etag": "\"1c4a-WaDYWMCXWyVN4nTNSQiw42FhGyc\"",
    "mtime": "2022-12-24T14:38:08.067Z",
    "size": 7242,
    "path": "../public/_nuxt/icons/144x144.83c3b610.png"
  },
  "/_nuxt/icons/144x144.maskable.83c3b610.png": {
    "type": "image/png",
    "etag": "\"1281-MvFm0Cva9m/Wyyi24NyR8p6dpSQ\"",
    "mtime": "2022-12-24T14:38:08.196Z",
    "size": 4737,
    "path": "../public/_nuxt/icons/144x144.maskable.83c3b610.png"
  },
  "/_nuxt/icons/152x152.83c3b610.png": {
    "type": "image/png",
    "etag": "\"1e12-lI5k3jRmmNHJi3IoChhRbKQgV9U\"",
    "mtime": "2022-12-24T14:38:08.067Z",
    "size": 7698,
    "path": "../public/_nuxt/icons/152x152.83c3b610.png"
  },
  "/_nuxt/icons/152x152.maskable.83c3b610.png": {
    "type": "image/png",
    "etag": "\"135d-atZxY5Y3DXL/YwgF+eLfeD2lwcc\"",
    "mtime": "2022-12-24T14:38:08.179Z",
    "size": 4957,
    "path": "../public/_nuxt/icons/152x152.maskable.83c3b610.png"
  },
  "/_nuxt/icons/192x192.83c3b610.png": {
    "type": "image/png",
    "etag": "\"2815-XOlQwPs0uYSzBlNkz779h0ikaYg\"",
    "mtime": "2022-12-24T14:38:08.099Z",
    "size": 10261,
    "path": "../public/_nuxt/icons/192x192.83c3b610.png"
  },
  "/_nuxt/icons/192x192.maskable.83c3b610.png": {
    "type": "image/png",
    "etag": "\"1957-WSQMtNDYKJy3N1dsF5OEmDeJjvU\"",
    "mtime": "2022-12-24T14:38:08.179Z",
    "size": 6487,
    "path": "../public/_nuxt/icons/192x192.maskable.83c3b610.png"
  },
  "/_nuxt/icons/384x384.83c3b610.png": {
    "type": "image/png",
    "etag": "\"6430-+/NClEres5jHlSql2f52ePNeQoU\"",
    "mtime": "2022-12-24T14:38:08.099Z",
    "size": 25648,
    "path": "../public/_nuxt/icons/384x384.83c3b610.png"
  },
  "/_nuxt/icons/384x384.maskable.83c3b610.png": {
    "type": "image/png",
    "etag": "\"3b5e-HUy6Az4QIXwlDkSmOaRfX6jxSbk\"",
    "mtime": "2022-12-24T14:38:08.196Z",
    "size": 15198,
    "path": "../public/_nuxt/icons/384x384.maskable.83c3b610.png"
  },
  "/_nuxt/icons/512x512.83c3b610.png": {
    "type": "image/png",
    "etag": "\"3422-RNEl50NBzjlh1C6wbGH0gB4TrQI\"",
    "mtime": "2022-12-24T14:38:08.103Z",
    "size": 13346,
    "path": "../public/_nuxt/icons/512x512.83c3b610.png"
  },
  "/_nuxt/icons/512x512.maskable.83c3b610.png": {
    "type": "image/png",
    "etag": "\"5670-MK76O/IPDng/Z837CvIrZBqkIB4\"",
    "mtime": "2022-12-24T14:38:08.196Z",
    "size": 22128,
    "path": "../public/_nuxt/icons/512x512.maskable.83c3b610.png"
  },
  "/_nuxt/icons/64x64.83c3b610.png": {
    "type": "image/png",
    "etag": "\"a3d-IoY221aOmUOsNa8fbXm/54q9pe8\"",
    "mtime": "2022-12-24T14:38:08.067Z",
    "size": 2621,
    "path": "../public/_nuxt/icons/64x64.83c3b610.png"
  },
  "/_nuxt/icons/64x64.maskable.83c3b610.png": {
    "type": "image/png",
    "etag": "\"6b9-D1Tq5OsgrAYEU3ub9HebwVw/fbk\"",
    "mtime": "2022-12-24T14:38:08.168Z",
    "size": 1721,
    "path": "../public/_nuxt/icons/64x64.maskable.83c3b610.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _QGXjtG = defineEventHandler(() => useRuntimeConfig().public.pwaManifest);

const _3xnc6O = lazyEventHandler(() => {
  const ipxOptions = {
    ...useRuntimeConfig().ipx || {},
    dir: fileURLToPath(new URL("../public", globalThis._importMeta_.url))
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.req, event.res);
  });
});

const config = useRuntimeConfig().public;
const _7Tjr1G = defineEventHandler(async (event) => {
  assertMethod(event, "POST");
  const body = await readBody(event);
  const cookieOptions = config.supabase.cookies;
  const { event: signEvent, session } = body;
  if (!event) {
    throw new Error("Auth event missing!");
  }
  if (signEvent === "SIGNED_IN" || signEvent === "TOKEN_REFRESHED") {
    if (!session) {
      throw new Error("Auth session missing!");
    }
    setCookie(
      event,
      `${cookieOptions.name}-access-token`,
      session.access_token,
      {
        domain: cookieOptions.domain,
        maxAge: cookieOptions.lifetime ?? 0,
        path: cookieOptions.path,
        sameSite: cookieOptions.sameSite
      }
    );
    setCookie(event, `${cookieOptions.name}-refresh-token`, session.refresh_token, {
      domain: cookieOptions.domain,
      maxAge: cookieOptions.lifetime ?? 0,
      path: cookieOptions.path,
      sameSite: cookieOptions.sameSite
    });
  }
  if (signEvent === "SIGNED_OUT") {
    setCookie(event, `${cookieOptions.name}-access-token`, "", {
      maxAge: -1,
      path: cookieOptions.path
    });
    setCookie(event, `${cookieOptions.name}-refresh-token`, "", {
      maxAge: -1,
      path: cookieOptions.path
    });
  }
  return "auth cookie set";
});

const _lazy_JF4fht = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_JF4fht, lazy: true, middleware: false, method: undefined },
  { route: '/manifest.json', handler: _QGXjtG, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _3xnc6O, lazy: false, middleware: false, method: undefined },
  { route: '/api/_supabase/session', handler: _7Tjr1G, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_JF4fht, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
