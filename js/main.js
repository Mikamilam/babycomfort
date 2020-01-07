const popular = [{
	title: "Эрго-хипсит",
	text: "Комфорт для мамы и малыша",
	url: "img/hipseat3.jpg",
	category: "hipseat"
},
{
	title: "Эрго-хипсит",
	text: "Комфорт для мамы и малыша",
	url: "img/hipseat4.jpg",
	category: "hipseat"
},
{
	title: "Эрго-хипсит",
	text: "Комфорт для мамы и малыша",
	url: "img/hipseat5.jpg",
	category: "hipseat"
},
{
	title: "Эрго-хипсит",
	text: "Комфорт для мамы и малыша",
	url: "img/hipseat6.jpg",
	category: "hipseat"
},
{
	title: "Эрго-хипсит",
	text: "Комфорт для мамы и малыша",
	url: "img/hipseat7.jpg",
	category: "hipseat"
},
{
	title: "Эрго-хипсит",
	text: "Комфорт для мамы и малыша",
	url: "img/hipseat8.jpg",
	category: "hipseat"
},
{
	title: "Кокон",
	text: "Коконы для детей",
	url: "img/cocoon.jpg",
	category: "cocoon"
},
{
	title: "Бортики",
	text: "Безопасность малыша",
	url: "img/bumber.jpg",
	category: "bumper"
},
{
	title: "Бортики",
	text: "Безопасность малыша",
	url: "img/bumper2.jpg",
	category: "bumper"
},
{
	title: "Бортики",
	text: "Безопасность малыша",
	url: "img/bumper3.jpg",
	category: "bumper"
},
{
	title: "Бортики",
	text: "Безопасность малыша",
	url: "img/bumper4.jpg",
	category: "bumper"
},
{
	title: "Бортики",
	text: "Безопасность малыша",
	url: "img/bumper5.jpg",
	category: "bumper"
},
{
	title: "Бортики",
	text: "Безопасность малыша",
	url: "img/bumper6.jpg",
	category: "bumper"
},
{
	title: "Кокон",
	text: "Коконы для детей",
	url: "img/cocoon2.jpg",
	category: "cocoon"
},
{
	title: "Бортики",
	text: "Безопасность малыша",
	url: "img/bumper7.jpg",
	category: "bumper"
},
{
	title: "Бортики",
	text: "Безопасность малыша",
	url: "img/bumper8.jpg",
	category: "bumper"
}]

function showMenu() {
    var menu = document.getElementById('menu')
    menu.classList.toggle('open')
}

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]')
    let filterItems = document.querySelectorAll('#popular > ul > li')
   	filterPopular('all')
   	for(let i=0;i<filterItems.length;i++){
    		filterItems[i].addEventListener('click', function(){
     		filterPopular(this.id)
    		})
   	}



		document.querySelectorAll('a[href^="#"]')
			.forEach(anchor => {
	    		anchor.addEventListener('click',
	    			function (e) {
	        			e.preventDefault();

	       	 			document.querySelector(this.getAttribute('href')).scrollIntoView({
	            			behavior: 'smooth'
	        			});

	    			});
			});
});

function modalClose() {
    document.querySelector('.modal-over').classList.remove('show')
    document.querySelector('body').style.overflowY = 'scroll'
}


function FuncImages() {
  document.querySelector('.popular-items').style.height = "100%";
  document.getElementById("click").style.display = "none";
	document.getElementById("close").style.display = "block";
}

function CloseImg() {
	document.querySelector('.popular-items').style.height = "320px";
	document.getElementById("close").style.display = "none";
	document.getElementById("click").style.display = "block";
}

function filterPopular(filter) {
	let popularItems = document.querySelector('.popular-items')
	popularItems.innerHTML = ""
		for(let i=0; i<popular.length; i++){
		    if(filter === 'all' || filter === popular[i].category) {
		      let popular1 =
		        `<img src='${popular[i].url}'>
		        <div>
		          <img src='img/eye.png'>
		          <h1>${popular[i].title}</h1>
		          <p>${popular[i].category}</p>
		        </div>`
			  	let popularDiv = document.createElement('div')
			    popularDiv.innerHTML = popular1
			    popularItems.appendChild(popularDiv)
		    }
		}
		var popular2 = document.querySelectorAll('.popular-items > div')
		const modalInnerHtml = document.querySelector('.modal').innerHTML
			for(var i=0;i<popular2.length;i++){
					popular2[i].addEventListener('click',
							function(e){
									document.querySelector('.modal-over').classList.add('show')
									var modal = document.querySelector('.modal')
									modal.innerHTML = this.innerHTML
									document.querySelector('body').style.overflowY = 'hidden'
					})
			}
}







window.onscroll = function () {
    var top = document.getElementById('top')
    var header = document.getElementsByTagName('header')[0]
    if (window.pageYOffset > 65) {
        top.classList.add('show')
        header.classList.add('scroll')
    }else{
        top.classList.remove('show')
        header.classList.remove('scroll')
    }
}


var countDownDate = new Date("Jan 15, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	document.getElementById("demo").innerHTML = days + "дн. " + hours + "ч. "
	+ minutes + "мин. " + seconds + "сек. ";

	// If the count down is over, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "EXPIRED";
	}
}, 1000);


var index = 0;
document.addEventListener('DOMContentLoaded', function(){
    var right = document.querySelector('.right')
    var left = document.querySelector('.left')
    var sliderUnits = document.querySelectorAll('.slider')
    var slider = document.querySelector('.slider-gen')
    var buttons = document.querySelectorAll('.slider-dots > li')

	    right.addEventListener('click', function(){
	        buttons[index].classList.remove('current')
	        if(index === sliderUnits.length-1) index=0
	            else index++
	        slider.style.marginLeft = index * (-1324) + 'px'
	        buttons[index].classList.add('current')
	    })
	    left.addEventListener('click', function(){
	        buttons[index].classList.remove('current')
	        if(index === 0) index=sliderUnits.length-1
	            else index--
	        slider.style.marginLeft = index * (-1324) + 'px'
	        buttons[index].classList.add('current')
	    })
	    for(var i=0; i<buttons.length; i++){
	        buttons[i].addEventListener('click', function(e){
	            buttons[index].classList.remove('current')
	            index = +this.id
	            slider.style.marginLeft = index * (-1324) + 'px'
	            buttons[index].classList.add('current')
	        })
	    }

})

var index = 0;
document.addEventListener('DOMContentLoaded', function(){
		var sliderParts = document.querySelectorAll('.slider-part')
    var sliderMobile = document.querySelector('.slider-mobile')
    var dots = document.querySelectorAll('.slider-mobile-dots > li')

    for(var i=0; i<dots.length; i++){
        dots[i].addEventListener('click', function(e){
            dots[index].classList.remove('current')
            index = +this.id
            sliderMobile.style.marginLeft = index * (-320) + 'px'
            dots[index].classList.add('current')
        })
    }

})
