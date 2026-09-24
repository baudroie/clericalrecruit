const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mobile-nav');
function closeMenu(){ menu.hidden = true; toggle.setAttribute('aria-expanded','false'); }
toggle.addEventListener('click',()=>{const opening=menu.hidden; menu.hidden=!opening;toggle.setAttribute('aria-expanded',String(opening));});
menu.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!menu.hidden){closeMenu();toggle.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))closeMenu();});
window.matchMedia('(min-width: 901px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
