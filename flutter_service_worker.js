'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e75de5f57b8289ceac9278d1ef4eda37",
".git/config": "e73baa49941cc92576d4128a75d71fbe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4ed8630bc80a09a6f215f61a0371ff5f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "acac2058221a37a53f876a2058c38efd",
".git/logs/refs/heads/main": "68d6b5be521af65a0b87cc4304f5082c",
".git/logs/refs/remotes/origin/main": "4f11e80b4b0e4b44ad8ceaebddb00d68",
".git/objects/03/c23cef6e95df0bb52e49aba79177a450c401ba": "8502e7ab4b1aaaaff33fedfcc332285d",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/08/5e8d406eaad2a53ae0ad87b0a17f3afe2c3cff": "421d69ec0cd313a386a2024662d7de63",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/e7ee3719287e66e6b1aaa917720de8e46786ca": "99490a85d83c2e75a078f2af212c614b",
".git/objects/11/5290eaf1b07270f85eefec8e31fc84f522c1af": "f88357ed39770c30bef98d76d4bd4c2b",
".git/objects/14/5ef8a93a083a84dea7826e6751b102dfdbe366": "6f4845caefc900f191fe7b12296b6d5b",
".git/objects/15/8eda70546b78b005e9b4df5c5b27f853495889": "def17c825d4a71234c42a6a9f4008b23",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/dd419821357abaf7a60e82e4cc747ec6cc333d": "2c4d7efb778d1441527d4da1749801bd",
".git/objects/2a/9ef99b971d2a776eb6cdffa33bc0df65730e67": "37f1a9505e6804799dc8f2fdb4f46e9b",
".git/objects/2b/be5c70ae574260f4027b1599657b27ce58fb9f": "4224f47c79bddd5cd32f27d04fce8f4b",
".git/objects/30/3eee2bbaf60da0cc02cc194987cfc530fa3a37": "6bb41f4b00cedfe64477aa6284c1dc10",
".git/objects/37/1d9b8491d10b7a0724f14d4dda3655f600c7fc": "7557ca37f84e716ee06715cdece69268",
".git/objects/48/ad47436af56d64b3c562301e2229a208b6dd2f": "4efc01d0b4097264247c28bbc9a4f7e1",
".git/objects/49/1311ca6ee8fc6a445cce55871201fda1698959": "bd9b7454fea90ad2bbd55874cc79303b",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/db2a93dd23014dd4271c613a429341df39d4af": "6a2fc24c94a95080cc9e1d05e5bbcb60",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/7de2a7ff0590d9b805d886c35819b352417555": "75014b2f674b4ff5016dedcb86489670",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/dea3da90344f10b03aeac220a9916cf4d8a0f9": "9b1970f119bbd2cfb1b81d982c181dd1",
".git/objects/9f/1cd4cdb5a89414a8e2d2369e8e62ac063f87b0": "86d1b1a6fd3f747b08a950bd19e95e4f",
".git/objects/a4/208b94a9a21fc5da7cbfbbb918bac8ee858957": "958b356da18489d3a2cbf9029a069fba",
".git/objects/aa/62e867d34e2644fd34237d49dbf1a71f454ece": "2322f4c15b3d10dd1edd5729ce5c1a62",
".git/objects/ad/758ec785a59bf372daa964951eac671f6cb9ff": "15e77194b6f772992fb7547fef66f01b",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ab349a2696f978d1eaf88d40e25d6e132ad9f9": "275d76d5a915479e81d11afdbed3bdfb",
".git/objects/c1/a88c9a84dd89febd1faaa1400d259a6a455e00": "9ba246c0a83bf8a4ae2fed0b1fb25360",
".git/objects/c7/f8d59f999e82ac4429c6f565aa77a94f947146": "08deaf577e33aa2ecb634815c7631f64",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/87a43903b8a5113baf994f7c9f70b1373f8088": "4cb814c3df8e784dac1f611676860bdd",
".git/objects/cc/1ab68234bfec7aef6d93dbd0ada4fb94e38e60": "e70ad4ae9bce803e6f3f8b1252f23c7a",
".git/objects/d0/e67e4beb51ae90b84ea6ce6d1869bf46ab44fb": "1a10020f40605e3079616cf3b31053c4",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/cc9e9ab2b11c8af27f6321eba9ece68dc5a64d": "623aee590326a090cc7aae5afd115983",
".git/objects/e3/490bb8278ee76b0f34568aa684918b6b13e8e7": "7476c94e8180b4a8f5e2fc46a76afc66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/825d05ec73db7aa101e0540e9dc0f306324387": "4d0fdde952ca4c54a0b51048bf0dc006",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "1b70f3bf0026c9ba93be0b05e49c02fa",
".git/refs/remotes/origin/main": "1b70f3bf0026c9ba93be0b05e49c02fa",
"assets/AssetManifest.bin": "143936f53feb1a3661b99de959fc47df",
"assets/AssetManifest.bin.json": "e043714ddeb9bc511bc242a1565a84a5",
"assets/AssetManifest.json": "84d306b7456e764f22f4a9d6e1babe7b",
"assets/assets/fonts/cairo/Cairo.ttf": "d5664f46ff376cb597c2e18ec22f9b38",
"assets/assets/fonts/rubik/Rubik.ttf": "6d3102fa33194bef395536d580f91b56",
"assets/assets/lang/ar.json": "58a03e8f6bde720ede845fbd84a67d07",
"assets/assets/lang/en.json": "d7669568b36c69e241cc5ba8bb273653",
"assets/FontManifest.json": "466bb22bfb26491ef9c23e10b49c1623",
"assets/fonts/MaterialIcons-Regular.otf": "135db0980bf1753fe696dece5e36c5c1",
"assets/NOTICES": "f84e1287cfee813d2498e725045ad4d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "515b5d1e22b85a67a6fe820df59113e5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "fdf51dbf5e0132f51878e3893bad5327",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "77377800e3a090865109b318687f638c",
"icons/Icon-192.png": "4ce14cfdc9a77939c39b40cc39f37927",
"icons/Icon-512.png": "13c3bd79ad88a427e03468fbcdc3b5c8",
"icons/Icon-maskable-192.png": "4ce14cfdc9a77939c39b40cc39f37927",
"icons/Icon-maskable-512.png": "13c3bd79ad88a427e03468fbcdc3b5c8",
"index.html": "000185eb50d0d46e4405df08515f752d",
"/": "000185eb50d0d46e4405df08515f752d",
"main.dart.js": "d60d3cd6f08c65a48c1872c85bf8f286",
"manifest.json": "caec55bb2e90fb91d4ba58a723f86b11",
"version.json": "4c8b7f32441854df4ab5b3486b02ed1b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
