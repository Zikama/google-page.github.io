/*
//    Andela Level Up Program
//    Nehemie Zikama
//   I love expressing what I've learnt, we learn by doing
 */
////////////////Registration for The Game Changer/Service Worker...thanks to @Jake Archibald Google Developer/////////
 if("serviceWorker" in navigator){
	 navigator.serviceWorker.register("./sw.js",{"scope":"./"}).then((rg)=>{
		 console.log("Sw Registered Succefully");
	 }).catch(err=>{
		 console.log("Sw Registration Failed",err); 
	 });
 }/////////////////////////////////////////////////////Done/////////////////////////////////////////////////////////
let set = document.getElementById("alltheway"),
    at  = document.getElementById("input"),
    dtv = document.getElementById("dtv"),
    btn = document.getElementById("btn"),
	crl = document.getElementById("circle"),
	mcr = document.getElementById("microphone"),
	cls = document.getElementById("close");
///////////////////Input on focus /////////////////////////////////////////////////////////////////////////
 focus =()=>{
at.addEventListener('focus',()=>{
	btn.innerHTML="Something else";
	at.setAttribute("placeholder"," ");
	//at.setAttribute("class","boxS");
	dtv.innerHTML="About to type...";
	
});}
focus();
/////////////////Input on keyup, when user types anything in the input//////////////////////////////////////////
 press =()=>{
at.addEventListener('keyup',()=>{
	btn.innerHTML=at.value;
	dtv.innerHTML="typing...";
});}
press();
//////////Input blurred/loses focus, return into normal//////////////////////////////////////////////////////////
blur =()=>{
at.addEventListener('blur',()=>{
	btn.innerHTML="I'm luck to be here";
	at.setAttribute("placeholder","Search Google or type URL");
	//at.classList("boxS").toggle();
	dtv.innerHTML="I'm A Ditactor...";
});
}
blur();
////////////////show and hide the fake-recorder//////////////////////////////////////////////////////////////
show =()=>{
	mcr.addEventListener('click',()=>{
		crl.setAttribute('class','');
	});	
	
	cls.addEventListener('click',()=>{
		crl.setAttribute('class','container');
	});	
	
}
show()

