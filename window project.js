const btns_Open=document.querySelectorAll('.show-modal');
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const close_modal=document.querySelector('.close-modal');
console.log(btns_Open);
for(let i=0; i<btns_Open.length; i++)
    btns_Open[i].addEventListener('click',function(){
modal.classList.remove('hidden');
overlay.classList.remove('hidden');
    })
    // ...........model window close on X button
    close_modal.addEventListener('click',function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    })
 // ...........model window close on clicking on overlay
 overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})
// .....pressing on any keyboard button
document.addEventListener('keydown',function(e)
{
    if(e.key=='3'){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})


