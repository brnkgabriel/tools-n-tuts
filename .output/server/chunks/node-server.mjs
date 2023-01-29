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

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{"pwaManifest":{"name":"Tools n Tuts","short_name":"TnTs","description":"The best of the open source tools and tutorials you need for work","lang":"en","start_url":"/","display":"standalone","background_color":"#fff","theme_color":"#fff","icons":[{"src":"/icon-192x192.png","sizes":"192x192","type":"image/png","purpose":"maskable"},{"src":"/icon-256x256.png","sizes":"256x256","type":"image/png","purpose":"maskable"},{"src":"/icon-384x384.png","sizes":"384x384","type":"image/png","purpose":"maskable"},{"src":"/icon-512x512.png","sizes":"512x512","type":"image/png","purpose":"maskable"}],"scope":"/"},"supabase":{"url":"https://esoxpbrbxabdqbplpgnk.supabase.co","key":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzb3hwYnJieGFiZHFicGxwZ25rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA5MzA4OTcsImV4cCI6MTk4NjUwNjg5N30.S0lPgS84K6ONNhEOKFJrvw4TiiwYqru5RxB_Tr5TDyc","client":{},"redirect":false,"cookies":{"name":"sb","lifetime":28800,"domain":"","path":"/","sameSite":"lax"}}},"ipx":{"dir":"","domains":[],"sharp":{},"alias":{}},"supabase":{}};
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
  "/browserconfig.xml": {
    "type": "application/xml",
    "etag": "\"f6-l0rqGL2lqVgCwGuAEmqx2W2R1wg\"",
    "mtime": "2022-12-12T11:21:14.671Z",
    "size": 246,
    "path": "../public/browserconfig.xml"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3aee-xP+UUFTVHzL4BZRQhbX4L/7Pk5M\"",
    "mtime": "2022-12-12T11:21:14.625Z",
    "size": 15086,
    "path": "../public/favicon.ico"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": "\"315-bgbqfUvwOkQC18Yd6TsJtpW5A+s\"",
    "mtime": "2023-01-24T21:25:10.355Z",
    "size": 789,
    "path": "../public/manifest.json"
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
    "mtime": "2023-01-28T10:58:30.944Z",
    "size": 1498,
    "path": "../public/sw.js"
  },
  "/icons/audacity.svg": {
    "type": "image/svg+xml",
    "etag": "\"f39-fqJOQf65w1M7Iarx8xEFdNddMsE\"",
    "mtime": "2023-01-26T12:09:46.114Z",
    "size": 3897,
    "path": "../public/icons/audacity.svg"
  },
  "/icons/avatar.svg": {
    "type": "image/svg+xml",
    "etag": "\"14b-FVB2qD2ys1V54nmg2AZOxp6aqlE\"",
    "mtime": "2022-08-19T21:33:33.015Z",
    "size": 331,
    "path": "../public/icons/avatar.svg"
  },
  "/icons/blender.svg": {
    "type": "image/svg+xml",
    "etag": "\"d3a-WFX51uY3MXWmUam9Nz3SHysBsSA\"",
    "mtime": "2023-01-26T12:11:48.844Z",
    "size": 3386,
    "path": "../public/icons/blender.svg"
  },
  "/icons/css.svg": {
    "type": "image/svg+xml",
    "etag": "\"46d-+jZvMR3CZXlvWHBEJu0itOUqU7M\"",
    "mtime": "2023-01-26T12:05:11.528Z",
    "size": 1133,
    "path": "../public/icons/css.svg"
  },
  "/icons/donate.svg": {
    "type": "image/svg+xml",
    "etag": "\"b72-RMqkdQaGmny9fV7Q4IBkyeQTRCQ\"",
    "mtime": "2023-01-27T10:21:01.116Z",
    "size": 2930,
    "path": "../public/icons/donate.svg"
  },
  "/icons/drawing.svg": {
    "type": "image/svg+xml",
    "etag": "\"cce-LDI7wG+eAWBN4hc3WCXRZthqAj4\"",
    "mtime": "2023-01-26T12:08:34.516Z",
    "size": 3278,
    "path": "../public/icons/drawing.svg"
  },
  "/icons/figma.svg": {
    "type": "image/svg+xml",
    "etag": "\"694-44DTNIAMoJhibAXP9GsaCciRPFI\"",
    "mtime": "2023-01-26T12:08:52.000Z",
    "size": 1684,
    "path": "../public/icons/figma.svg"
  },
  "/icons/firebase.svg": {
    "type": "image/svg+xml",
    "etag": "\"8e2-uj2BoLrIXyadeKs01EhNAPpOviM\"",
    "mtime": "2023-01-26T12:04:59.862Z",
    "size": 2274,
    "path": "../public/icons/firebase.svg"
  },
  "/icons/flaticons.svg": {
    "type": "image/svg+xml",
    "etag": "\"3f6-sLNW5IfkAi/qOYLyNghcQ75AcUk\"",
    "mtime": "2023-01-26T12:04:12.102Z",
    "size": 1014,
    "path": "../public/icons/flaticons.svg"
  },
  "/icons/flaticon_negative.svg": {
    "type": "image/svg+xml",
    "etag": "\"6f5-BSA9pfVduL9JqMZSOSMySfG7xIE\"",
    "mtime": "2023-01-26T12:03:33.288Z",
    "size": 1781,
    "path": "../public/icons/flaticon_negative.svg"
  },
  "/icons/freecad.svg": {
    "type": "image/svg+xml",
    "etag": "\"a7d-X7/RuBPDc83Q02oYCQqlVqpfYCM\"",
    "mtime": "2023-01-26T12:08:11.715Z",
    "size": 2685,
    "path": "../public/icons/freecad.svg"
  },
  "/icons/freeoffice.svg": {
    "type": "image/svg+xml",
    "etag": "\"dc6-hTxYDi1J8O2vcHjPHF3Nbo71X7Q\"",
    "mtime": "2023-01-26T12:01:23.372Z",
    "size": 3526,
    "path": "../public/icons/freeoffice.svg"
  },
  "/icons/gimp.svg": {
    "type": "image/svg+xml",
    "etag": "\"323c-EC0U0fExGb/qQ4C9vDM7EKIROhg\"",
    "mtime": "2023-01-26T12:07:48.363Z",
    "size": 12860,
    "path": "../public/icons/gimp.svg"
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
  "/icons/heroicons.svg": {
    "type": "image/svg+xml",
    "etag": "\"306-rTCZPu0b3kXWwJtlmTcKJi8k6Po\"",
    "mtime": "2023-01-26T12:11:28.478Z",
    "size": 774,
    "path": "../public/icons/heroicons.svg"
  },
  "/icons/html.svg": {
    "type": "image/svg+xml",
    "etag": "\"44b-/5V6wDwPuxIwezYXiutSz48q0zA\"",
    "mtime": "2023-01-26T11:58:02.680Z",
    "size": 1099,
    "path": "../public/icons/html.svg"
  },
  "/icons/iconfinder.svg": {
    "type": "image/svg+xml",
    "etag": "\"a1d-1wuHXCfLrOaM6LgQH+HKo04ijlw\"",
    "mtime": "2023-01-26T12:01:44.938Z",
    "size": 2589,
    "path": "../public/icons/iconfinder.svg"
  },
  "/icons/image-placeholder.svg": {
    "type": "image/svg+xml",
    "etag": "\"449-kcQ56e8czsuKjZ3vCkQuONL1LlM\"",
    "mtime": "2022-12-21T09:53:19.060Z",
    "size": 1097,
    "path": "../public/icons/image-placeholder.svg"
  },
  "/icons/inkscape.svg": {
    "type": "image/svg+xml",
    "etag": "\"159e1-rIulkwrFdYA0HOcuDD1QVid/qvM\"",
    "mtime": "2023-01-26T11:55:22.282Z",
    "size": 88545,
    "path": "../public/icons/inkscape.svg"
  },
  "/icons/java.svg": {
    "type": "image/svg+xml",
    "etag": "\"aab-slAwFdHSBB6wSHVQZ2juwBXyG+M\"",
    "mtime": "2023-01-26T12:00:14.992Z",
    "size": 2731,
    "path": "../public/icons/java.svg"
  },
  "/icons/javascript.svg": {
    "type": "image/svg+xml",
    "etag": "\"7eb-zTfnsDWW80kcUF8dgAvqFlfrvIg\"",
    "mtime": "2023-01-26T12:02:59.889Z",
    "size": 2027,
    "path": "../public/icons/javascript.svg"
  },
  "/icons/krita.svg": {
    "type": "image/svg+xml",
    "etag": "\"12d1-CYLUxstOw6ZKE22KBwGK8COTyks\"",
    "mtime": "2023-01-26T12:07:05.553Z",
    "size": 4817,
    "path": "../public/icons/krita.svg"
  },
  "/icons/laravel.svg": {
    "type": "image/svg+xml",
    "etag": "\"d40-EXgQ7p01WILvoN42AjUXhQsNoPU\"",
    "mtime": "2023-01-26T12:10:47.832Z",
    "size": 3392,
    "path": "../public/icons/laravel.svg"
  },
  "/icons/librecad.svg": {
    "type": "image/svg+xml",
    "etag": "\"571-JXHCasLIbHneFFzhZ7TT4uvxpTc\"",
    "mtime": "2023-01-26T12:18:05.494Z",
    "size": 1393,
    "path": "../public/icons/librecad.svg"
  },
  "/icons/lmms.svg": {
    "type": "image/svg+xml",
    "etag": "\"355-vUUPLuiIHYNPWw9DTUTYbKBmfkI\"",
    "mtime": "2023-01-26T11:59:07.338Z",
    "size": 853,
    "path": "../public/icons/lmms.svg"
  },
  "/icons/logo-colored.svg": {
    "type": "image/svg+xml",
    "etag": "\"557-MToDVyotjOpp+TqVO7mwzzoTxlE\"",
    "mtime": "2022-12-14T11:13:58.202Z",
    "size": 1367,
    "path": "../public/icons/logo-colored.svg"
  },
  "/icons/logo-img-generator.svg": {
    "type": "image/svg+xml",
    "etag": "\"16b2-K+1AUYBiXvy6f3dxzDOOdPbOh5I\"",
    "mtime": "2023-01-27T13:17:18.484Z",
    "size": 5810,
    "path": "../public/icons/logo-img-generator.svg"
  },
  "/icons/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"175a-foHi+D1wR7DI5HK2bhxVBZ5oYZ0\"",
    "mtime": "2023-01-27T13:18:55.568Z",
    "size": 5978,
    "path": "../public/icons/logo.svg"
  },
  "/icons/nextjs.svg": {
    "type": "image/svg+xml",
    "etag": "\"943-Xt7bi6d5dNCcvR7d6fCx0UkVnuo\"",
    "mtime": "2023-01-26T11:58:55.009Z",
    "size": 2371,
    "path": "../public/icons/nextjs.svg"
  },
  "/icons/nodejs.svg": {
    "type": "image/svg+xml",
    "etag": "\"2a00-QXC+q6iJtaajwl/Kb8Ggy6I+zy8\"",
    "mtime": "2023-01-26T11:55:48.136Z",
    "size": 10752,
    "path": "../public/icons/nodejs.svg"
  },
  "/icons/nuxtjs.svg": {
    "type": "image/svg+xml",
    "etag": "\"679-SOATeE1NNiQT9IZdZazGsla2jvI\"",
    "mtime": "2023-01-26T11:59:49.216Z",
    "size": 1657,
    "path": "../public/icons/nuxtjs.svg"
  },
  "/icons/octave.svg": {
    "type": "image/svg+xml",
    "etag": "\"9ab-ZrKssUvJpI7d1tmoOAetEMFk+b4\"",
    "mtime": "2023-01-26T11:59:37.966Z",
    "size": 2475,
    "path": "../public/icons/octave.svg"
  },
  "/icons/pencil.svg": {
    "type": "image/svg+xml",
    "etag": "\"3c61-yjNLMEbdUPqo4/yIfGKqR7uANEU\"",
    "mtime": "2023-01-26T12:09:22.163Z",
    "size": 15457,
    "path": "../public/icons/pencil.svg"
  },
  "/icons/penpot.svg": {
    "type": "image/svg+xml",
    "etag": "\"730-cN48bGWTKMmHcBT8dzvu72E8fmw\"",
    "mtime": "2023-01-26T12:05:40.923Z",
    "size": 1840,
    "path": "../public/icons/penpot.svg"
  },
  "/icons/php.svg": {
    "type": "image/svg+xml",
    "etag": "\"983-i2zD9NoSpC7zn6R0OjEZQZzaR+o\"",
    "mtime": "2023-01-26T12:10:29.321Z",
    "size": 2435,
    "path": "../public/icons/php.svg"
  },
  "/icons/pwa.svg": {
    "type": "image/svg+xml",
    "etag": "\"588-tc012fu8w6c2EdF6Sbs2LN8rxd8\"",
    "mtime": "2023-01-26T11:57:36.765Z",
    "size": 1416,
    "path": "../public/icons/pwa.svg"
  },
  "/icons/python.svg": {
    "type": "image/svg+xml",
    "etag": "\"521-2yQccBc1ORGtjMuoEgPSCdQJSAI\"",
    "mtime": "2023-01-26T12:06:39.175Z",
    "size": 1313,
    "path": "../public/icons/python.svg"
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
  "/icons/reactjs.svg": {
    "type": "image/svg+xml",
    "etag": "\"4b7-VCOU7Pz2YJEwKaVq+S+JfoJiPwU\"",
    "mtime": "2023-01-26T12:10:05.648Z",
    "size": 1207,
    "path": "../public/icons/reactjs.svg"
  },
  "/icons/removebg.svg": {
    "type": "image/svg+xml",
    "etag": "\"671-RVchnbCJNsj0gfteA1MSZXMu3ek\"",
    "mtime": "2023-01-26T12:02:15.783Z",
    "size": 1649,
    "path": "../public/icons/removebg.svg"
  },
  "/icons/supabase.svg": {
    "type": "image/svg+xml",
    "etag": "\"746-jFNyr+Ck8wFXvQwiX6YpV3Z59g8\"",
    "mtime": "2023-01-26T12:06:13.115Z",
    "size": 1862,
    "path": "../public/icons/supabase.svg"
  },
  "/icons/tailwindcss.svg": {
    "type": "image/svg+xml",
    "etag": "\"4aa-7Yghg5/SI9QSi86KpaBo+PQ+xTs\"",
    "mtime": "2023-01-26T12:02:50.976Z",
    "size": 1194,
    "path": "../public/icons/tailwindcss.svg"
  },
  "/icons/tools.svg": {
    "type": "image/svg+xml",
    "etag": "\"43d-I6NfAVHA0UdM9KPphiSatPk4XQI\"",
    "mtime": "2022-12-24T14:42:20.388Z",
    "size": 1085,
    "path": "../public/icons/tools.svg"
  },
  "/icons/trello.svg": {
    "type": "image/svg+xml",
    "etag": "\"62a-BkKCXP0Wl9kZcVNHeji65mrz7kw\"",
    "mtime": "2023-01-26T11:57:14.171Z",
    "size": 1578,
    "path": "../public/icons/trello.svg"
  },
  "/icons/tuts.svg": {
    "type": "image/svg+xml",
    "etag": "\"66e-12cgsYMxMnyz9e84QwkabDyVZHo\"",
    "mtime": "2023-01-27T11:24:44.414Z",
    "size": 1646,
    "path": "../public/icons/tuts.svg"
  },
  "/icons/typescript.svg": {
    "type": "image/svg+xml",
    "etag": "\"b41-iT/R3LyDmRvMlKeUNEsj1nBMKQc\"",
    "mtime": "2023-01-26T12:02:22.498Z",
    "size": 2881,
    "path": "../public/icons/typescript.svg"
  },
  "/icons/user-with-laptop-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"580-x3CzF/bliFEVbciwxMaL2Xmi+RY\"",
    "mtime": "2023-01-27T13:12:36.640Z",
    "size": 1408,
    "path": "../public/icons/user-with-laptop-icon.svg"
  },
  "/icons/vscode.svg": {
    "type": "image/svg+xml",
    "etag": "\"6b4-M7SfJUp2DEbzDk0BezbzQIiUtlo\"",
    "mtime": "2023-01-26T11:57:00.354Z",
    "size": 1716,
    "path": "../public/icons/vscode.svg"
  },
  "/icons/vuejs.svg": {
    "type": "image/svg+xml",
    "etag": "\"315-jnCnuzYo3Nr7lysTxa7+XKpgj00\"",
    "mtime": "2023-01-26T12:07:24.140Z",
    "size": 789,
    "path": "../public/icons/vuejs.svg"
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
  "/images/background_1920x1080.jpg": {
    "type": "image/jpeg",
    "etag": "\"44364-NOkWkLDhgXi7f617x+O9nTF2mVc\"",
    "mtime": "2023-01-26T16:45:06.257Z",
    "size": 279396,
    "path": "../public/images/background_1920x1080.jpg"
  },
  "/images/background_1920x1080v2.jpg": {
    "type": "image/jpeg",
    "etag": "\"4248e-0xNduYXPs6YDfe9Jo1dImJtPoJs\"",
    "mtime": "2023-01-26T16:54:19.658Z",
    "size": 271502,
    "path": "../public/images/background_1920x1080v2.jpg"
  },
  "/images/background_1920x1080v3.jpg": {
    "type": "image/jpeg",
    "etag": "\"3ccde-NYE3cLZhinRgCeYLtm6A2VmhqWE\"",
    "mtime": "2023-01-26T16:55:37.464Z",
    "size": 249054,
    "path": "../public/images/background_1920x1080v3.jpg"
  },
  "/images/logo.png": {
    "type": "image/png",
    "etag": "\"4d58-7k7saBoKp43sT0qgY4ms8Da1zmE\"",
    "mtime": "2023-01-27T13:25:58.325Z",
    "size": 19800,
    "path": "../public/images/logo.png"
  },
  "/_nuxt/catalog.95f1d1db.js": {
    "type": "application/javascript",
    "etag": "\"358-XOQSzqboG/G1pbeqnhVdkCyfy58\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 856,
    "path": "../public/_nuxt/catalog.95f1d1db.js"
  },
  "/_nuxt/composables.4409316d.js": {
    "type": "application/javascript",
    "etag": "\"5c-bauxtqiKPUFs1YYoJCht+u9al8E\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 92,
    "path": "../public/_nuxt/composables.4409316d.js"
  },
  "/_nuxt/donate.1fa3ff05.js": {
    "type": "application/javascript",
    "etag": "\"5fd7-QFCTWeNIK/vYlRM2txg3X3HS2CM\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 24535,
    "path": "../public/_nuxt/donate.1fa3ff05.js"
  },
  "/_nuxt/donate.6b72e6b7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"f5-IU04n0APaqLK9RDgFkpRsS4Pw+o\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 245,
    "path": "../public/_nuxt/donate.6b72e6b7.css"
  },
  "/_nuxt/entry.74a160eb.js": {
    "type": "application/javascript",
    "etag": "\"38788-nWNBl2vOYnPWKBFvlUEFk7nClPQ\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 231304,
    "path": "../public/_nuxt/entry.74a160eb.js"
  },
  "/_nuxt/entry.a9ea3280.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4f8f-mTaItzKu5oAGkZsq7NogkhzePOw\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 20367,
    "path": "../public/_nuxt/entry.a9ea3280.css"
  },
  "/_nuxt/error-404.0cd4f3dd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-xSUIdUjWxTJYnmfP1riaGwPeEHA\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.0cd4f3dd.css"
  },
  "/_nuxt/error-404.a913e927.js": {
    "type": "application/javascript",
    "etag": "\"8d4-lD2mu5dMLpdQ550jRcaU+ukoSvY\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 2260,
    "path": "../public/_nuxt/error-404.a913e927.js"
  },
  "/_nuxt/error-500.748cb764.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-LfCvP8U7J9Fa9L8g6sKzV6Rcp+A\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.748cb764.css"
  },
  "/_nuxt/error-500.f84b575c.js": {
    "type": "application/javascript",
    "etag": "\"77d-kafm2alPYcs6ZUUQPXa0OUNla+A\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 1917,
    "path": "../public/_nuxt/error-500.f84b575c.js"
  },
  "/_nuxt/error-component.a1a97cfc.js": {
    "type": "application/javascript",
    "etag": "\"4ad-EdpkVYuxGNNEU0Ihi/FrKzXAoZI\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 1197,
    "path": "../public/_nuxt/error-component.a1a97cfc.js"
  },
  "/_nuxt/home.22ff87cf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"23-AwEqAO3uyfF08GPkGKxramkL2LA\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 35,
    "path": "../public/_nuxt/home.22ff87cf.css"
  },
  "/_nuxt/home.6ff8daa9.js": {
    "type": "application/javascript",
    "etag": "\"42b-ECEQJjBZeHQ4o3WOAv3KiJ15B5k\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 1067,
    "path": "../public/_nuxt/home.6ff8daa9.js"
  },
  "/_nuxt/index.1590855d.js": {
    "type": "application/javascript",
    "etag": "\"f0-50WmSdKyLJ1ZQVFhz30nvOYIdFI\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 240,
    "path": "../public/_nuxt/index.1590855d.js"
  },
  "/_nuxt/index.3334e9f0.js": {
    "type": "application/javascript",
    "etag": "\"2081-J2oXOAoBSJJPuS8am7yiaE70r2s\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 8321,
    "path": "../public/_nuxt/index.3334e9f0.js"
  },
  "/_nuxt/successful.50b98aaa.js": {
    "type": "application/javascript",
    "etag": "\"b3-vlT9h4CAhH0+UuXo/QvUSTZ9hbI\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 179,
    "path": "../public/_nuxt/successful.50b98aaa.js"
  },
  "/_nuxt/TopNav.vue_vue_type_script_setup_true_lang.90a61476.js": {
    "type": "application/javascript",
    "etag": "\"2aa-Z16EvlDKdB/NoRdbEiAajhop0eQ\"",
    "mtime": "2023-01-28T10:58:36.017Z",
    "size": 682,
    "path": "../public/_nuxt/TopNav.vue_vue_type_script_setup_true_lang.90a61476.js"
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

const _lazy_mYX8hw = () => import('./p-payment.post.mjs');
const _lazy_HNjv2Z = () => import('./g-data.get.mjs');
const _lazy_JF4fht = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/p-payment', handler: _lazy_mYX8hw, lazy: true, middleware: false, method: "post" },
  { route: '/api/g-data', handler: _lazy_HNjv2Z, lazy: true, middleware: false, method: "get" },
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
