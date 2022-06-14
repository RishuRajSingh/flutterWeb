'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "196078b1ae002ef01cee9a80102e62f7",
".git/config": "3182b471afd705536b3ef4dd6c9e4b8e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4ebe39987d8f0ae920c86db005ea5efd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "81851665d617f3baa5a3a8709a3ad3d9",
".git/logs/refs/heads/main": "cae2081c472709c64e25cb9897df5ba9",
".git/logs/refs/remotes/origin/main": "d43ac00dae159c147bdb50df80ff8c51",
".git/objects/08/72bd85fa6e6081cdc436fb7c206384c5c31079": "071fd4960c13cb5583027c80a2287b15",
".git/objects/0a/0d00792518001061ed936b4d2051c89613f936": "740bac1ab52759f891c208c4e1923323",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/1e/6d7fac5f21b8844ea669bb5822835de8facf27": "8a5b702af864888b0fae3d2ec3d479bb",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/781bd223e1661f772af7ef89842f95d813286c": "156a908f9839ecdb1d1ff6da36548e91",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/9b5c7ec18a77d620dcddef5b0202a198d07dfb": "a7e3db1a042a09a0dec30369aa13ae84",
".git/objects/2f/01a3b93f595665151c8b47a3e3918a4f67d2fc": "5a08e774a1bc0ebf0b071ec486addc51",
".git/objects/32/4041f8eed49cd60b2c2024bc4f603c11ce6369": "d6e67278520b94c6a887fa958d1d1184",
".git/objects/3a/b766c056f1c2aab26bd1d8b6ed98c7c3e19131": "21fc49108a31269e9385e18e7df25a4f",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3c/e014ece9762eadd9cd91ba970f8569993c3a91": "0b095f8149abb5aa7fd509e3b7db8bd6",
".git/objects/42/efc421d355a945eb60641b193793638e513fef": "e816aa0785c8a4750ead527cc7953ef6",
".git/objects/43/33e94796d4989e718169a85d48c8e397d8f9f9": "0ff3ffb92dcfdbee59df7a25545d7fde",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/5e/5ee7510b5285f24cd7c313c43e5cfef4bce4b8": "e22b5f4cf8cd69c7d3de4f54af93a2b7",
".git/objects/60/df331e54e41d737546f29aaa582c1c232639ab": "2dd675c72b2217fc8f086d3b422029e1",
".git/objects/61/d8e47d2ec9a6ed5fa0c4f3a70f0b27e1e6b10b": "b13a13c6086a5eb287e9dd56a0ea3306",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/6c/2a85292f9cb54187545dd933be5106f726830f": "849fb6a9e8f7d769a9ca60bd91f7ae37",
".git/objects/6d/a52c000c5860ab183a5e71fc19f31f1074ef8f": "676dd98272e0fc744018444efd2da554",
".git/objects/6f/ca6543b3fee56a6f0bbcac497a4f857a381ffd": "019532293fd2f8089fede119a68441c8",
".git/objects/74/8519fd285f4507f024f4474aaf9c48a762f4b6": "1da55f5d1d4cc7a6957d6cf849228729",
".git/objects/74/b4ebed6e5abaf6a38ec37d64816bf2bf627cdb": "bea41d157111915870321fe8dd5aa9e7",
".git/objects/75/b4517eb611c1311962ecc46b9e61fd498e2473": "5a6c9c1f2a8e9e6cf4bc3ba3587b9506",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/bc2dfb6603dae219f9809922ad74b18fac7c60": "78a7fc07d1f1a704512164f42b86d5e5",
".git/objects/7e/805227ef8f3d5c9ee5ac9973008988de72e43a": "21b56b4da34ff9021dffe976d4ad36d7",
".git/objects/82/876163003f8679007cc9cbc684ee326915ec5a": "f301c100a70b49b34c420eb85cb33f65",
".git/objects/88/5fd2fb17a827e2833611eeb3ec3427f5cacde6": "da9c7671dea642dbfdb35646ac5910d2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/f44dd3d3317fd987e8dbbbd5b03d180e077cce": "5694e60f860d4c179592ca208d0f27eb",
".git/objects/92/07746626f6a79bdeea7c87b70dab8572aa87db": "e6fd062ff53f3a7c63bb99ef30e42d37",
".git/objects/9a/7dcac8683604c70dfb70ede1727a34d1339c93": "ce470fbc871a4b55b88c439b5a6f979e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b0/55cdd2e8c8961ccf0828026e53302e6c0313ba": "4d37f92a9d2a271fedb78e9e3752f5e0",
".git/objects/b2/1327d39a6667f1b16c3b0cd400919f1e431b87": "86cfba66f9ddb46296e16069132002bf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/5c91cd29d5a82ddb517558c41af315a4f95631": "85dd9f70502f2575e8c374c9be05bf02",
".git/objects/cc/772d716e0492607c2dd1a80093843c1ac002f5": "d8e3485f9dfa419a0f53ac631723ada1",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebb511de34ee165871a50e1ca422b538ee0e27": "ff4a4ac7630430a1a3f18b9930e8a269",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/ee8b06e6a234c8017ff65e76b64ec1f5cb6744": "89ca1c147fa164f2bd96942b7ad1c028",
".git/objects/e8/c40749418bb8b973f0ef861fbed5baa33e2c8b": "c09cd4a127b34173b961fdf9531aa7e0",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/55495adb44c76cf9fa52e0cc7c731d6255efd1": "b19a1ccd8a8db4457eb6dc2fe93ecefe",
".git/objects/ef/f26ba41b2604d555693c3d675195928e3da984": "790d6884799440c6458a6ff6b785f6c8",
".git/objects/f5/60b26eb56a357d0f2f3670605e0f82d6864fa7": "d29702a4a854aad24e96ef18590cf603",
".git/objects/fc/bd1768d4960c5bc288b87917932c31d5556a40": "b63ca95b21d8a130a059fe180263b456",
".git/refs/heads/main": "fd35311756234f4499f5f205206f6740",
".git/refs/remotes/origin/main": "fd35311756234f4499f5f205206f6740",
"assets/AssetManifest.json": "fd5feeabf12b151829849e3504f1b3cf",
"assets/assets/geipl_logo.jpg": "8f4cec37c740152d52004e1a0957cdc1",
"assets/assets/integ_logo.png": "48fc84b191c9bd8ccf244e4332272a62",
"assets/assets/login.png": "70d4c169754258233072fb3bb399a03a",
"assets/assets/logo_geipl.png": "b5b22fa9e4f56a6520afd0e9c178e6e9",
"assets/assets/logo_integrat.png": "46e01e328b521adacb83645b530e3a14",
"assets/assets/register.png": "9be6775185b2178e08206cd9335a73c7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "bb082e9ce0cb59c48dfd27ab01316ef9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5df90f1c4a0d1309aa10978f3787fe31",
"/": "5df90f1c4a0d1309aa10978f3787fe31",
"js/barcode.js": "3e8467ce82246574b0ebb8ed60b89622",
"main.dart.js": "21833d274c7f574b735a4ad64babb20f",
"manifest.json": "eb515098ce4acb4e227d8a0c64b93554",
"version.json": "aace130f85d866ebdcc291baa51d1a74"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
