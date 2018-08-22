/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["1/1/1/index.html","f158bbd29d8d4ee503d484c750b7756f"],["1/1/2/index.html","2e4442d71250a63e87ebdb994600f12f"],["1/1/index.html","1b886bfee6446cb2fe7e41236a4b4e51"],["1/2/1/index.html","a7955ea8fec1e91e251d2f6fc6b34caf"],["1/2/2/index.html","7f08873a7709fba710bad5eb839fe196"],["1/2/index.html","1b886bfee6446cb2fe7e41236a4b4e51"],["1/index.html","a770e49c8bdf2ede6a1f023e83691871"],["2/1/1/index.html","127875901554145054d8f821df1c71ce"],["2/1/2/index.html","050124aaa29b4ecdc6c85fda8dcd081c"],["2/1/index.html","1b886bfee6446cb2fe7e41236a4b4e51"],["2/2/1/index.html","abc8bb7d7b218b6425d0fa942718f1ac"],["2/2/2/index.html","09d1b6d1bebb8c5f90d44456a6e9ddd2"],["2/2/index.html","1b886bfee6446cb2fe7e41236a4b4e51"],["2/index.html","a770e49c8bdf2ede6a1f023e83691871"],["3/1/1/index.html","b513f5e47ebdc733b3f3ba37f8e7b6ec"],["3/1/2/index.html","960bd70b30d30a1cccccecc253ac2ca5"],["3/1/index.html","1b886bfee6446cb2fe7e41236a4b4e51"],["3/2/1/index.html","960bd70b30d30a1cccccecc253ac2ca5"],["3/2/2/index.html","9f05750bd0b01725fa2e5e0ec1fc24a9"],["3/2/index.html","1b886bfee6446cb2fe7e41236a4b4e51"],["3/index.html","a770e49c8bdf2ede6a1f023e83691871"],["4/1/1/index.html","2a48bf181807d8a5431771ad46053af3"],["4/1/2/index.html","7b50fa705a6ee12a3ff6ee5250aaaf12"],["4/1/index.html","1b886bfee6446cb2fe7e41236a4b4e51"],["4/2/1/index.html","43f080ce4253af83ca1ab4cb3715c40c"],["4/2/2/index.html","1efce48e23e056ff3e07332f1c7d799f"],["4/2/index.html","1b886bfee6446cb2fe7e41236a4b4e51"],["4/index.html","a770e49c8bdf2ede6a1f023e83691871"],["css/lora-bold-webfont.woff","79800e0f88316fc99798b58890821077"],["css/lora-bold-webfont.woff2","1ac27d4bf8ab0e8dbb4587b892e460d8"],["css/lora-regular-webfont.woff","2194a10f1f61b0396493f91680f463b8"],["css/lora-regular-webfont.woff2","6293188b41e5ce1613a8f97713d4e3bc"],["css/style.css","8e43e297004ed7d940fcc73c6b94ea95"],["css/varelaround-regular-webfont.woff","414e3e258392e1a4553f33fe3595cecf"],["css/varelaround-regular-webfont.woff2","02e251a1e12aaac70eada5c1b105321f"],["img/avec.jpg","c173ce369a3d865673b3303ec6c44a5b"],["img/benevolat.png","e8ac961efd695961489ed32bb31fdc4a"],["img/et.jpg","7eaefed9e1c4ac4bb85c8141cf387192"],["img/icons/icon-128x128.png","b5149d251c0aa22eb838dd911bcef0cc"],["img/icons/icon-144x144.png","56fba5bbc8c26ed2fed2b6718b94459d"],["img/icons/icon-152x152.png","c4c723d1aba7ee3a92ca8f6d2b99810d"],["img/icons/icon-192x192.png","96b42c0eeec3a08fdc251cd7634c7284"],["img/icons/icon-384x384.png","c0553d377ad03cde8234858787af629a"],["img/icons/icon-512x512.png","e4a649f7f78474957c95ffeeccd43f12"],["img/icons/icon-72x72.png","54376033895ed15b05ff3f2e76b1d280"],["img/icons/icon-96x96.png","213a2011a627d88e3d96ddad2111473d"],["img/pour.jpg","5d38c2e3187befddb6bac4104c0082c3"],["index.html","0775539f325d59890173153a5869970b"],["js/baffle.min.js","689f6c0d42bcaf2d4839249f797e59d1"],["manifest.json","95e482d8f009010480f441d7be00eb3e"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







