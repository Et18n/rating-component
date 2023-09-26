let next= document.getElementById('submit');

const rating=document.getElementById('rating')
const rates= document.querySelectorAll('#btn');

next.addEventListener('click', function(){
    let thanks= document.getElementById('thanks');
    thanks.classList.remove('hidden')
    
} );


rates.forEach((rate)=>{
    rate.addEventListener('click', ()=>{
        rating.innerHTML=rate.innerHTML;
    })
})