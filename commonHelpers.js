import{S as m,i as l}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(o){if(o.ep)return;o.ep=!0;const e=r(o);fetch(o.href,e)}})();const f="41755914-7aa1ef8e2afd56281fb8e3373";function p(s){return fetch(`https://pixabay.com/api/?key=${f}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function g(s){const t=s.map(r=>`<li class="gallery-card"><a class="gallery-link" href="${r.href}"><img class="gallery-image" src="${r.src}" alt="${r.alt}" /><div class="image-stats-card"><div class="image-stats-block"><p>Likes</p>${r.likes}</div><div class="image-stats-block"><p>Views</p>${r.views}</div><div class="image-stats-block"><p>Comments</p>${r.comments}</div><div class="image-stats-block"><p>Downloads</p>${r.downloads}</div></div></a></li>`).join("");u.insertAdjacentHTML("beforeend",t),h.refresh()}const c=document.querySelector(".search-form"),d=document.querySelector(".loader"),u=document.querySelector(".gallery"),h=new m(".gallery .gallery-link",{captions:!0,captionsData:"alt",captionPosition:"bottom"});n();c.addEventListener("submit",y);function y(s){s.preventDefault(),v(),u.innerHTML="";let t=[];const r=encodeURIComponent(s.target.elements.search.value);p(r).then(i=>{r===""?(l.error({message:"Please enter your search query!",messageColor:"#FFF",messageSize:"16",backgroundColor:"#EF4040",position:"topRight",icon:"ico-error",iconColor:"#FFF"}),n()):i.total===0?(l.error({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#FFF",messageSize:"16",backgroundColor:"#EF4040",position:"topRight",icon:"ico-error",iconColor:"#FFF"}),n()):(t=i.hits.map(e=>({href:e.largeImageURL,src:e.webformatURL,alt:e.tags,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads})),g(t),n(),c.reset())}).catch(i=>{console.log(i),n()})}function v(){d.style.display="block"}function n(){d.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
