'use strict';
(() => {
 const root=document.documentElement;
 const button=document.getElementById('motion-toggle');
 const progress=document.getElementById('reading-progress');
 const backTop=document.querySelector('.back-top');
 const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
 let paused=preference.matches;
 let observer=null;
 let ticking=false;
 const showEverything=()=>document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('is-visible'));
 function applyMotion(){
  root.dataset.motion=paused||preference.matches?'off':'on';
  button.hidden=false;
  button.disabled=preference.matches;
  button.setAttribute('aria-pressed',String(paused||preference.matches));
  button.querySelector('.motion-label').textContent=preference.matches?'Reduced motion':paused?'Play animations':'Pause animations';
  button.querySelector('.motion-symbol').textContent=paused||preference.matches?'▷':'Ⅱ';
  if(paused||preference.matches){observer?.disconnect();showEverything();}
  else registerReveals();
 }
 function registerReveals(){
  if(paused||preference.matches||!observer)return;
  const groups=[document.querySelectorAll('.about-heading,.about-content,.learning-block .section-heading,.learning-card,.event-photo,.event-copy,.resources-section .section-heading,.resource-card,.resource-quote,.gallery-section .section-heading,.join-inner>div'),document.querySelectorAll('.gallery-card')];
  groups.forEach(group=>group.forEach((el,index)=>{
   if(el.hasAttribute('data-reveal'))return;
   el.setAttribute('data-reveal','');
   el.style.setProperty('--reveal-delay',`${index%4*65}ms`);
   if(el.getBoundingClientRect().top<window.innerHeight*.94){el.classList.add('is-visible');return;}
   observer.observe(el);
  }));
 }
 if('IntersectionObserver' in window){
  observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.07,rootMargin:'0px 0px -12px 0px'});
  root.classList.add('motion-ready');
 }
 button.addEventListener('click',()=>{paused=!paused;applyMotion();});
 preference.addEventListener('change',()=>{paused=preference.matches;applyMotion();});
 const gallery=document.getElementById('gallery-grid');
 if(gallery&&'MutationObserver' in window)new MutationObserver(registerReveals).observe(gallery,{childList:true});
 function updateScroll(){
  const available=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=`${available>0?Math.min(100,Math.max(0,window.scrollY/available*100)):0}%`;
  backTop.hidden=window.scrollY<500;
  ticking=false;
 }
 window.addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(updateScroll);}},{passive:true});
 window.addEventListener('resize',updateScroll,{passive:true});
 applyMotion();updateScroll();
})();
