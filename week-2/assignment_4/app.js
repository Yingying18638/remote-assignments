// ------------welcome text--------------------------
const welcome= document.querySelector(".welcome");
welcome.addEventListener('click',()=>{
    welcome.textContent='Have a Good Time!';
})

//--------------menu-trigger----------------------------
const menu = document.querySelector(".menu");
const fixed = document.querySelector('.fixed');
const btnX = document.querySelector("#X");
menu.addEventListener('click',()=>{
	
	if ( fixed.style.display = 'none' ){
		fixed.style.display= 'block';
		btnX.addEventListener('click',()=>{
			fixed.removeAttribute('style');
		})
	}

})

// -------------call to action-------------------
const btnAction = document.querySelector(".btnAction");
const callContainer = document.querySelector(".callContainer");
btnAction.addEventListener('click',()=>{
	callContainer.className='container';
})


