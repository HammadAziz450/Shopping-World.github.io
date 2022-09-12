const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

  // console.log(card);
   
function onload() {
  let productnum = localStorage.getItem('cartnumber');
   if (productnum){
    document.querySelector('.span').textContent = productnum ;
     
   }
}


let firstB =  document.getElementById("Darkb")
  .addEventListener('click' ,function(){
  let firstT = document.getElementById('Dark');
  let firstD = document.getElementById('Darkdes');
  let firstP = document.getElementById('DarkP');
   console.log(firstT.innerText);
   console.log(firstD.innerText);
   console.log(firstP.innerText);
   localStorage.setItem('firstT' , firstT.innerText)
   localStorage.setItem('firstd' ,firstD.innerText)
   localStorage.setItem('firstp' ,firstP.innerText)
   
   add()
  })
  let secB =  document.getElementById("Russianb")
  .addEventListener('click' ,function(){
    // add(card[i])
  let secT = document.getElementById('Russian');
  let secD = document.getElementById('Russiandes');
  let secP = document.getElementById('Russianp');
   console.log(secT.innerText);
   console.log(secD.innerText);
   console.log(secP.innerText);
   localStorage.setItem('secT' ,secT.innerText)
   localStorage.setItem('secD' ,secD.innerText)
   localStorage.setItem('secP' ,secP.innerText)
   add()
   

  })
  let light =  document.getElementById("lightb")
  .addEventListener('click' ,function(){
    // add(card[i])
  let thridT = document.getElementById('light');
  let thridD = document.getElementById('lightd');
  let thridP = document.getElementById('lightp');
   console.log(thridT.innerText);
   console.log(thridD.innerText);
   console.log(thridP.innerText);
   localStorage.setItem('thridT' ,thridT.innerText)
   localStorage.setItem('thridD' ,thridD.innerText)
   localStorage.setItem('thridP' ,thridP.innerText)
   add()
  })
  
  let white =  document.getElementById("whiteb")
  .addEventListener('click' ,function(){
  let fourthT = document.getElementById('white');
  let fourthD = document.getElementById('whited');
  let fourthp = document.getElementById('whitep');
   console.log(fourthT.innerText);
   console.log(fourthD.innerText);
   console.log(fourthp.innerText);
   localStorage.setItem('fourthT' ,fourthT.innerText)
   localStorage.setItem('fourthD' ,fourthD.innerText)
   localStorage.setItem('fourthp' ,fourthp.innerText)
   add()
  })

  let damege =  document.getElementById("damegeb")
  .addEventListener('click' ,function(){
  let fifthT = document.getElementById('dameget');
  let fifthD = document.getElementById('dameged');
  let fifthp = document.getElementById('damegep');
   console.log(fifthT.innerText);
   console.log(fifthD.innerText);
   console.log(fifthp.innerText);
   localStorage.setItem('fifthT' ,fifthT.innerText)
   localStorage.setItem('fifthD' ,fifthD.innerText)
   localStorage.setItem('fifthp' ,fifthp.innerText)
   add()
  })

  let green =  document.getElementById("greenb")
  .addEventListener('click' ,function(){
  let sixthT = document.getElementById('greent');
  let sixthD = document.getElementById('greend');
  let sixthp = document.getElementById('greenp');
   console.log(sixthT.innerText);
   console.log(sixthD.innerText);
   console.log(sixthp.innerText);
   localStorage.setItem('sixthT' ,sixthT.innerText)
   localStorage.setItem('sixthD' ,sixthD.innerText)
   localStorage.setItem('sixthp' ,sixthp.innerText)
   add()
  })

  let skinny =  document.getElementById("skinnyb")
  .addEventListener('click' ,function(){
  let saventhT = document.getElementById('skinnyt');
  let saventhD = document.getElementById('skinnyd');
  let saventhp = document.getElementById('skinnyt');
   console.log(saventhT.innerText);
   console.log(saventhD.innerText);
   console.log(saventhp.innerText);
   localStorage.setItem('saventhT' ,saventhT.innerText)
   localStorage.setItem('saventhD' ,saventhD.innerText)
   localStorage.setItem('saventhp' ,saventhp.innerText)
   add()
  })

  let brown =  document.getElementById("brownb")
  .addEventListener('click' ,function(){
  let eightT = document.getElementById('brownt');
  let eightD = document.getElementById('brownd');
  let eightp = document.getElementById('brownp');
   console.log(eightT.innerText);
   console.log(eightD.innerText);
   console.log(eightp.innerText);
   localStorage.setItem('eightT' ,eightT.innerText)
   localStorage.setItem('eightD' ,eightD.innerText)
   localStorage.setItem('eightp' ,eightp.innerText)
   add()
  })

  let beige =  document.getElementById("beigeb")
  .addEventListener('click' ,function(){
  let ninthT = document.getElementById('beiget');
  let ninthD = document.getElementById('beiged');
  let ninthp = document.getElementById('beigep');
   console.log(ninthT.innerText);
   console.log(ninthD.innerText);
   console.log(ninthp.innerText);
   localStorage.setItem('ninthT' ,ninthT.innerText)
   localStorage.setItem('ninthD' ,ninthD.innerText)
   localStorage.setItem('ninthp' ,ninthp.innerText)
   add()
  })

  let Multicolor =  document.getElementById("Multicolortb")
  .addEventListener('click' ,function(){
  let tanthT = document.getElementById('Multicolortt');
  let tanthD = document.getElementById('Multicolortd');
  let tanthp = document.getElementById('Multicolortp');
   console.log(tanthT.innerText);
   console.log(tanthD.innerText);
   console.log(tanthp.innerText);
   localStorage.setItem('tanthT' ,tanthT.innerText)
   localStorage.setItem('tanthD' ,tanthD.innerText)
   localStorage.setItem('tanthp' ,tanthp.innerText)
   add()
  })
  let Printed =  document.getElementById("Printedb")
  .addEventListener('click' ,function(){
  let eleT = document.getElementById('Printedt');
  let eleD = document.getElementById('Printedd');
  let elep = document.getElementById('Printedp');
   console.log(eleT.innerText);
   console.log(eleD.innerText);
   console.log(elep.innerText);
   localStorage.setItem('eleT' ,eleT.innerText)
   localStorage.setItem('eleD' ,eleD.innerText)
   localStorage.setItem('elep' ,elep.innerText)
   add()
  })
  let simple =  document.getElementById("simpleb")
  .addEventListener('click' ,function(){
  let twelT = document.getElementById('simplet');
  let twelD = document.getElementById('simpled');
  let twelp = document.getElementById('simplep');
   console.log(twelT.innerText);
   console.log(twelD.innerText);
   console.log(twelp.innerText);
   localStorage.setItem('twelT' ,twelT.innerText)
   localStorage.setItem('twelD' ,twelD.innerText)
   localStorage.setItem('twelp' ,twelp.innerText)
   add()
  })

  let VeBNoR =  document.getElementById("VeBNoRb")
  .addEventListener('click' ,function(){
  let thirtT = document.getElementById('VeBNoRt');
  let thirtD = document.getElementById('VeBNoRd');
  let thirtp = document.getElementById('VeBNoRp');
   console.log(thirtT.innerText);
   console.log(thirtD.innerText);
   console.log(thirtp.innerText);
   localStorage.setItem('thirtT' ,thirtT.innerText)
   localStorage.setItem('thirtD' ,thirtD.innerText)
   localStorage.setItem('thirtp' ,thirtp.innerText)
   add()
  })
  let casual =  document.getElementById("casualb")
  .addEventListener('click' ,function(){
  let fteenT = document.getElementById('casualt');
  let fteenD = document.getElementById('casuald');
  let fteenp = document.getElementById('casualp');
   console.log(fteenT.innerText);
   console.log(fteenD.innerText);
   console.log(fteenp.innerText);
   localStorage.setItem('fteenT' ,fteenT.innerText)
   localStorage.setItem('fteenD' ,fteenD.innerText)
   localStorage.setItem('fteenp' ,fteenp.innerText)
   add()
  })

  let trijal =  document.getElementById("trijalb")
  .addEventListener('click' ,function(){
  let fiteenT = document.getElementById('trijalt');
  let fiteenD = document.getElementById('trijald');
  let fiteenp = document.getElementById('trijalp');
   console.log(fiteenT.innerText);
   console.log(fiteenD.innerText);
   console.log(fiteenp.innerText);
   localStorage.setItem('fiteenT' ,fiteenT.innerText)
   localStorage.setItem('fiteenD' ,fiteenD.innerText)
   localStorage.setItem('fiteenp' ,fiteenp.innerText)
   add()
  })

  let Milytry =  document.getElementById("Milytryb")
  .addEventListener('click' ,function(){
  let steenT = document.getElementById('Milytryt');
  let steenD = document.getElementById('Milytryd');
  let steenp = document.getElementById('Milytryp');
   console.log(steenT.innerText);
   console.log(steenD.innerText);
   console.log(steenp.innerText);
   localStorage.setItem('steenT' ,steenT.innerText)
   localStorage.setItem('steenD' ,steenD.innerText)
   localStorage.setItem('steenp' ,steenp.innerText)
   add()
  })


  let HELMONT =  document.getElementById("HELMONTb")
  .addEventListener('click' ,function(){
  let seteenT = document.getElementById('HELMONTt');
  let seteenD = document.getElementById('HELMONTd');
  let seteenp = document.getElementById('HELMONTp');
   console.log(seteenT.innerText);
   console.log(seteenD.innerText);
   console.log(seteenp.innerText);
   localStorage.setItem('seteenT' ,seteenT.innerText)
   localStorage.setItem('seteenD' ,seteenD.innerText)
   localStorage.setItem('seteenp' ,seteenp.innerText)
   add()
  })


  let Leather =  document.getElementById("Leatherb")
  .addEventListener('click' ,function(){
  let eteenT = document.getElementById('Leathert');
  let eteenD = document.getElementById('Leatherd');
  let eteenp = document.getElementById('Leatherp');
   console.log(eteenT.innerText);
   console.log(eteenD.innerText);
   console.log(eteenp.innerText);
   localStorage.setItem('eteenT' ,eteenT.innerText)
   localStorage.setItem('eteenD' ,eteenD.innerText)
   localStorage.setItem('eteenp' ,eteenp.innerText)
   add()
  })

  let Eyebogler =  document.getElementById("Eyeboglerb")
  .addEventListener('click' ,function(){
  let twetyT = document.getElementById('Eyeboglert');
  let twetyD = document.getElementById('Eyeboglerd');
  let twetyp = document.getElementById('Eyeboglerp');
   console.log(twetyT.innerText);
   console.log(twetyD.innerText);
   console.log(twetyp.innerText);
   localStorage.setItem('twetyT' ,twetyT.innerText)
   localStorage.setItem('twetyD' ,twetyD.innerText)
   localStorage.setItem('twetyp' ,twetyp.innerText)
   add()
  })
  let MONTREZ =  document.getElementById("MONTREZb")
  .addEventListener('click' ,function(){
  let twetyoT = document.getElementById('MONTREZt');
  let twetyoD = document.getElementById('MONTREZd');
  let twetyop = document.getElementById('MONTREZp');
   console.log(twetyoT.innerText);
   console.log(twetyoD.innerText);
   console.log(twetyop.innerText);
   localStorage.setItem('twetyoT' ,twetyoT.innerText)
   localStorage.setItem('twetyoD' ,twetyoD.innerText)
   localStorage.setItem('twetyop' ,twetyop.innerText)
   add()
  })
  

  let MOONVELLY =  document.getElementById("MOONVELLYb")
  .addEventListener('click' ,function(){
  let twetytT = document.getElementById('MOONVELLYt');
  let twetytD = document.getElementById('MOONVELLYd');
  let twetytp = document.getElementById('MOONVELLYp');
   console.log(twetytT.innerText);
   console.log(twetytD.innerText);
   console.log(twetytp.innerText);
   localStorage.setItem('twetytT' ,twetytT.innerText)
   localStorage.setItem('twetytD' ,twetytD.innerText)
   localStorage.setItem('twetytp' ,twetytp.innerText)
   add()
  })
  let WAAN =  document.getElementById("WAANb")
  .addEventListener('click' ,function(){
  let twetytreT = document.getElementById('WAANt');
  let twetytreD = document.getElementById('WAANd');
  let twetytrep = document.getElementById('WAANp');
   console.log(twetytreT.innerText);
   console.log(twetytreD.innerText);
   console.log(twetytrep.innerText);
   localStorage.setItem('twetytreT' ,twetytreT.innerText)
   localStorage.setItem('twetytreD' ,twetytreD.innerText)
   localStorage.setItem('twetytrep' ,twetytrep.innerText)
   add()
  })

  let Bata =  document.getElementById("Batab")
  .addEventListener('click' ,function(){
  let twetyfT = document.getElementById('Batat');
  let twetyfD = document.getElementById('Batad');
  let twetyfp = document.getElementById('Batap');
   console.log(twetyfT.innerText);
   console.log(twetyfD.innerText);
   console.log(twetyfp.innerText);
   localStorage.setItem('twetyfT' ,twetyfT.innerText)
   localStorage.setItem('twetyfD' ,twetyfD.innerText)
   localStorage.setItem('twetyfp' ,twetyfp.innerText)
   add()
  })

  let HOTSTYLE =  document.getElementById("HOTSTYLEb")
  .addEventListener('click' ,function(){
  let twetyfiT = document.getElementById('HOTSTYLEt');
  let twetyfiD = document.getElementById('HOTSTYLEd');
  let twetyfip = document.getElementById('HOTSTYLEp');
   console.log(twetyfiT.innerText);
   console.log(twetyfiD.innerText);
   console.log(twetyfip.innerText);
   localStorage.setItem('twetyfiT' ,twetyfiT.innerText)
   localStorage.setItem('twetyfiD' ,twetyfiD.innerText)
   localStorage.setItem('twetyfip' ,twetyfip.innerText)
   add()
  })

  let density =  document.getElementById("densityb")
  .addEventListener('click' ,function(){
  let twetysT = document.getElementById('densityt');
  let twetysD = document.getElementById('densityd');
  let twetysp = document.getElementById('densityp');
   console.log(twetysT.innerText);
   console.log(twetysD.innerText);
   console.log(twetysp.innerText);
   localStorage.setItem('twetysT' ,twetysT.innerText)
   localStorage.setItem('twetysD' ,twetysD.innerText)
   localStorage.setItem('twetysp' ,twetysp.innerText)
   add()
  })

  let Footwear =  document.getElementById("Footwearb")
  .addEventListener('click' ,function(){
  let twetyseT = document.getElementById('Footweart');
  let twetyseD = document.getElementById('Footweard');
  let twetysep = document.getElementById('Footwearp');
   console.log(twetyseT.innerText);
   console.log(twetyseD.innerText);
   console.log(twetysep.innerText);
   localStorage.setItem('twetyseT' ,twetyseT.innerText)
   localStorage.setItem('twetyseD' ,twetyseD.innerText)
   localStorage.setItem('twetysep' ,twetysep.innerText)
   add()
  })

  let VECHLO =  document.getElementById("VECHLOb")
  .addEventListener('click' ,function(){
  let twetyeT = document.getElementById('VECHLOt');
  let twetyeD = document.getElementById('VECHLOd');
  let twetyep = document.getElementById('VECHLOp');
   console.log(twetyeT.innerText);
   console.log(twetyeD.innerText);
   console.log(twetyep.innerText);
   localStorage.setItem('twetyeT' ,twetyeT.innerText)
   localStorage.setItem('twetyeD' ,twetyeD.innerText)
   localStorage.setItem('twetyep' ,twetyep.innerText)
   add()
  })

  let Chhapo =  document.getElementById("Chhapob")
  .addEventListener('click' ,function(){
  let twetynT = document.getElementById('Chhapot');
  let twetynD = document.getElementById('Chhapod');
  let twetynp = document.getElementById('Chhapop');
   console.log(twetynT.innerText);
   console.log(twetynD.innerText);
   console.log(twetynp.innerText);
   localStorage.setItem('twetynT' ,twetynT.innerText)
   localStorage.setItem('twetynD' ,twetynD.innerText)
   localStorage.setItem('twetynp' ,twetynp.innerText)
   add()
  })

  let Roshan =  document.getElementById("Roshanb")
  .addEventListener('click' ,function(){
  let tertynT = document.getElementById('Roshant');
  let tertynD = document.getElementById('Roshand');
  let tertynp = document.getElementById('Roshanp');
   console.log(tertynT.innerText);
   console.log(tertynD.innerText);
   console.log(tertynp.innerText);
   localStorage.setItem('tertynT' ,tertynT.innerText)
   localStorage.setItem('tertynD' ,tertynD.innerText)
   localStorage.setItem('tertynp' ,tertynp.innerText)
   add()
  })

  let aferelle =  document.getElementById("aferelleb")
  .addEventListener('click' ,function(){
  let tertyoT = document.getElementById('aferellet');
  let tertyoD = document.getElementById('aferelled');
  let tertyop = document.getElementById('aferellep');
   console.log(tertyoT.innerText);
   console.log(tertyoD.innerText);
   console.log(tertyop.innerText);
   localStorage.setItem('tertyoT' ,tertyoT.innerText)
   localStorage.setItem('tertyoD' ,tertyoD.innerText)
   localStorage.setItem('tertyop' ,tertyop.innerText)
   add()
  })

  let EECEE =  document.getElementById("EECEEb")
  .addEventListener('click' ,function(){
  let tertytT = document.getElementById('EECEEt');
  let tertytD = document.getElementById('EECEEd');
  let tertytp = document.getElementById('EECEEp');
   console.log(tertytT.innerText);
   console.log(tertytD.innerText);
   console.log(tertytp.innerText);
   localStorage.setItem('tertytT' ,tertytT.innerText)
   localStorage.setItem('tertytD' ,tertytD.innerText)
   localStorage.setItem('tertytp' ,tertytp.innerText)
   add()
  })


  let specs =  document.getElementById("Specsb")
  .addEventListener('click' ,function(){
  let tertyfT = document.getElementById('Specst');
  let tertyfD = document.getElementById('Specsd');
  let tertyfp = document.getElementById('Specsp');
   console.log(tertyfT.innerText);
   console.log(tertyfD.innerText);
   console.log(tertyfp.innerText);
   localStorage.setItem('tertyfT' ,tertyfT.innerText)
   localStorage.setItem('tertyfD' ,tertyfD.innerText)
   localStorage.setItem('tertyfp' ,tertyfp.innerText)
   add()
  })

  let Espoir =  document.getElementById("Espoirb")
  .addEventListener('click' ,function(){
  let tertyfiT = document.getElementById('Espoirt');
  let tertyfiD = document.getElementById('Espoird');
  let tertyfip = document.getElementById('Espoirp');
   console.log(tertyfiT.innerText);
   console.log(tertyfiD.innerText);
   console.log(tertyfip.innerText);
   localStorage.setItem('tertyfiT' ,tertyfiT.innerText)
   localStorage.setItem('tertyfiD' ,tertyfiD.innerText)
   localStorage.setItem('tertyfip' ,tertyfip.innerText)
   add()
  })

  let Stylish =  document.getElementById("Stylishb")
  .addEventListener('click' ,function(){
  let tertysT = document.getElementById('Stylisht');
  let tertysD = document.getElementById('Stylishd');
  let tertysp = document.getElementById('Stylishp');
   console.log(tertysT.innerText);
   console.log(tertysD.innerText);
   console.log(tertysp.innerText);
   localStorage.setItem('tertysT' ,tertysT.innerText)
   localStorage.setItem('tertysD' ,tertysD.innerText)
   localStorage.setItem('tertysp' ,tertysp.innerText)
   add()
  })
  let ajblinker =  document.getElementById("ajblinkerb")
  .addEventListener('click' ,function(){
  let tertyseT = document.getElementById('ajblinkert');
  let tertyseD = document.getElementById('ajblinkerd');
  let tertysep = document.getElementById('ajblinkerp');
   console.log(tertyseT.innerText);
   console.log(tertyseD.innerText);
   console.log(tertysep.innerText);
   localStorage.setItem('tertyseT' ,tertyseT.innerText)
   localStorage.setItem('tertyseD' ,tertyseD.innerText)
   localStorage.setItem('tertysep' ,tertysep.innerText)
   add()
  })

  let GAZZIFY =  document.getElementById("GAZZIFYb")
  .addEventListener('click' ,function(){
  let tertyeT = document.getElementById('GAZZIFYt');
  let tertyeD = document.getElementById('GAZZIFYd');
  let tertyep = document.getElementById('GAZZIFYp');
   console.log(tertyeT.innerText);
   console.log(tertyeD.innerText);
   console.log(tertyep.innerText);
   localStorage.setItem('tertyeT' ,tertyeT.innerText)
   localStorage.setItem('tertyeD' ,tertyeD.innerText)
   localStorage.setItem('tertyep' ,tertyep.innerText)
   add()
  })


  let SKMEI =  document.getElementById("SKMEIb")
  .addEventListener('click' ,function(){
  let tertyneT = document.getElementById('SKMEIt');
  let tertyneD = document.getElementById('SKMEId');
  let tertynep = document.getElementById('SKMEIp');
   console.log(tertyneT.innerText);
   console.log(tertyneD.innerText);
   console.log(tertynep.innerText);
   localStorage.setItem('tertyneT' ,tertyneT.innerText)
   localStorage.setItem('tertyneD' ,tertyneD.innerText)
   localStorage.setItem('tertynep' ,tertynep.innerText)
   add()
  })


  let Smart =  document.getElementById("Smartb")
  .addEventListener('click' ,function(){
  let fourtyT = document.getElementById('Smartt');
  let fourtyD = document.getElementById('Smartd');
  let fourtyp = document.getElementById('Smartp');
   console.log(fourtyT.innerText);
   console.log(fourtyD.innerText);
   console.log(fourtyp.innerText);
   localStorage.setItem('fourtyT' ,fourtyT.innerText)
   localStorage.setItem('fourtyD' ,fourtyD.innerText)
   localStorage.setItem('fourtyp' ,fourtyp.innerText)
   add()
  })


  let Joker =  document.getElementById("Jokerb")
  .addEventListener('click' ,function(){
  let fourtyoT = document.getElementById('Jokert');
  let fourtyoD = document.getElementById('Jokerd');
  let fourtyop = document.getElementById('Jokerp');
   console.log(fourtyoT.innerText);
   console.log(fourtyoD.innerText);
   console.log(fourtyop.innerText);
   localStorage.setItem('fourtyoT' ,fourtyoT.innerText)
   localStorage.setItem('fourtyoD' ,fourtyoD.innerText)
   localStorage.setItem('fourtyop' ,fourtyop.innerText)
   add()
  })


  
  let Parfumes =  document.getElementById("Parfumesb")
  .addEventListener('click' ,function(){
  let fourtytT = document.getElementById('Parfumest');
  let fourtytD = document.getElementById('Parfumesd');
  let fourtytp = document.getElementById('Parfumesp');
   console.log(fourtytT.innerText);
   console.log(fourtytD.innerText);
   console.log(fourtytp.innerText);
   localStorage.setItem('fourtytT' ,fourtytT.innerText)
   localStorage.setItem('fourtytD' ,fourtytD.innerText)
   localStorage.setItem('fourtytp' ,fourtytp.innerText)
   add()
  })
  

  let Brand =  document.getElementById("Brandb")
  .addEventListener('click' ,function(){
  let fourtytriT = document.getElementById('Brandt');
  let fourtytriD = document.getElementById('Brandd');
  let fourtytrip = document.getElementById('Brandp');
   console.log(fourtytriT.innerText);
   console.log(fourtytriD.innerText);
   console.log(fourtytrip.innerText);
   localStorage.setItem('fourtytriT' ,fourtytriT.innerText)
   localStorage.setItem('fourtytriD' ,fourtytriD.innerText)
   localStorage.setItem('fourtytrip' ,fourtytrip.innerText)
   add()
  })
  


  function add() {
  
    let productnum = localStorage.getItem('cartnumber');
    productnum = JSON.parse(productnum);
    
    if(productnum){
      localStorage.setItem('cartnumber' , productnum + 1)
      document.querySelector('.span').textContent = productnum + 1
    }
    else{
      localStorage.setItem('cartnumber' , 1)
      document.querySelector('.span').textContent = 1
    }
}

  
onload()
