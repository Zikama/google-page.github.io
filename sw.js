/*
//    Andela Level Up Program
//    Nehemie Zikama
//   I love expressing what I've learnt, we learn by doing
 */
let cachesNM="Google_page-v1",
    contentsURL=[
	              "./",
	              "./index.html",
				  "./css/style.css",
				  "./script/index.js"
	];

self.addEventListener("install",(event)=>{
	event.waitUntil(
	  caches.open(cachesNM).then((cache)=>{
		  cache.addAll(contentsURL);
	  console.log(`[sw is caching]`,cache);
	  }
	).catch(err=>{
		console.log(`ERROR:`,err);
	})
	);
});
self.addEventListener('activate',event=>{
	event.waitUntil(
	 caches.keys().then(namesChs=>{
		 return Promise.all(
		 namesChs.filter((cacheN)=>{
			 return cacheN.startsWith('Google_page-') && !cachesNM.includes(cacheN);
		 }).map(cacheN=>{
			 return caches.delete(cacheN);
		 }));
	 })
	);
});
self.addEventListener("fetch",event=>{
	const requests= new URL(event.request.url);	
	if(requests == location.origin){
		if(requests.pathname =="./"){
			event.respondWith(caches.match("./index.html"))
		}
	}
event.respondWith(
       caches.match(event.request).then((response)=> {
       return response || fetch(event.request);
   }));
});