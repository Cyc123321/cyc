window.onload=function(){
	var gun=document.getElementsByClassName('gun')[0];
	var wudian=document.getElementsByClassName('wudian');
	var left=document.getElementsByClassName('left')[0];
	var right=document.getElementsByClassName('right')[0];
	var mm=0;
	
	function qiehuan(){
		for(var i=0;i<wudian.length;i++){
			wudian[i].classList.remove('shidian');
		}
		gun.style.marginLeft=-1306*[mm]+'px';
		wudian[mm].classList.add('shidian');
	}
	for(var i=0;i<wudian.length;i++){
		wudian[i].index=i;
		wudian[i].onclick=function(){
			mm=this.index;
			qiehuan();
		}
		right.onclick=function(){
			mm++;
			if(mm>=wudian.length){
				mm=0;
			}
			qiehuan();
		}
		left.onclick=function(){
			mm--;
			if(mm<0){
				mm=wudian.length-1;
			}
			qiehuan();
		}
	}
	
	
// 	for(var i=0;i<wudian.length;i++){
// 		wudian[i].o=i;
// 		wudian[i].onclick=function(){
// 			for(var i=0;i<wudian.length;i++){
// 				wudian[i].classList.remove('shidian');
// 			}
// 			this.classList.add('shidian');
// 			gun.style.marginLeft=-1306*[this.o]+'px';
// 		}
// 		
// 		right.onclick=function(){
// 			mm++;
// 			if(mm>=wudian.length){
// 				mm=0;
// 			}
// 			console.log(mm)
// 		}
// 		
// 	}
}

window.onscroll=function(){
	var gao=document.documentElement.scrollTop||document.body.scrollTop;
	var header=document.getElementsByClassName('header')[0];
	var logo=document.getElementsByClassName('logo')[0];
	var nav=document.getElementsByClassName('nav')[0];
	var daohang=document.getElementsByClassName('daohang')[0];
	var li=daohang.getElementsByTagName('li')
	if(gao>100){
		header.style.height='70px';
		header.style.position='fixed';
		nav.style.height='70px';
		daohang.style.height='70px';
		logo.style.width='165px';
		for(var i=0;i<li.length;i++){
			li[i].style.height='70px'
		}
	}else{
		header.style.position='absolute';
		header.style.height='100px';
		nav.style.height='100px';
		daohang.style.height='100px';
		logo.style.width='207px';
		for(var i=0;i<li.length;i++){
			li[i].style.height='100px'
		}
	}
}
