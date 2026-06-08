(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`https://rickandmortyapi.com/api`,t=async()=>{let t=await fetch(`${e}/character`);if(t.ok)return await t.json()},n={characters:[]},r=e=>{n.characters=e},i=document.querySelector(`.list`),a=()=>{i.innerHTML=n.characters.map(e=>`
    <li class="character-card" data-id="${e.id}">
      <div class="card-header">
        <img class="avatar" src="${e.image}" alt="${e.name}" />

        <div class="basic-info">
          <h2>${e.name}</h2>
          <p class="status ${e.status.toLowerCase()}">${e.status}</p>
        </div>

      </div>
    </li>`).join(``)};document.addEventListener(`DOMContentLoaded`,async()=>{console.log(`First render!`);let{results:e}=await t();r(e),a()});