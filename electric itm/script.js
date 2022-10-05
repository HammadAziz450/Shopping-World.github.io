function onload() {
    let productnum = localStorage.getItem('cartnumber');
     if (productnum){
      document.querySelector('.span').textContent = productnum ;
       
     }
  }
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

let SingerSoloMachine =  document.getElementById("SingerSoloMachineb")
.addEventListener('click' ,function(){
let SingerSoloMachinet = document.getElementById('SingerSoloMachinet');
let SingerSoloMachineD = document.getElementById('SingerSoloMachined');
let SingerSoloMachineP = document.getElementById('SingerSoloMachinep');
 console.log(SingerSoloMachinet.innerText);
 console.log(SingerSoloMachineD.innerText);
 console.log(SingerSoloMachineP.innerText);
 localStorage.setItem('SingerSoloMachinet' ,SingerSoloMachinet.innerText)
 localStorage.setItem('SingerSoloMachined' ,SingerSoloMachineD.innerText)
 localStorage.setItem('SingerSoloMachinep' ,SingerSoloMachineP.innerText)
 add()
})

let AlhindMiniSewing =  document.getElementById("AlhindMiniSewingb")
.addEventListener('click' ,function(){
let AlhindMiniSewingt = document.getElementById('AlhindMiniSewingt');
let AlhindMiniSewingD = document.getElementById('AlhindMiniSewingd');
let AlhindMiniSewingP = document.getElementById('AlhindMiniSewingp');
 console.log(AlhindMiniSewingt.innerText);
 console.log(AlhindMiniSewingD.innerText);
 console.log(AlhindMiniSewingP.innerText);
 localStorage.setItem('AlhindMiniSewingt' ,AlhindMiniSewingt.innerText)
 localStorage.setItem('AlhindMiniSewingd' ,AlhindMiniSewingD.innerText)
 localStorage.setItem('AlhindMiniSewingp' ,AlhindMiniSewingP.innerText)
 add()
})

let StitchFunctions =  document.getElementById("StitchFunctionsb")
.addEventListener('click' ,function(){
let StitchFunctionst = document.getElementById('StitchFunctionst');
let StitchFunctionsD = document.getElementById('StitchFunctionsd');
let StitchFunctionsP = document.getElementById('StitchFunctionsp');
 console.log(StitchFunctionst.innerText);
 console.log(StitchFunctionsD.innerText);
 console.log(StitchFunctionsP.innerText);
 localStorage.setItem('StitchFunctionst' ,StitchFunctionst.innerText)
 localStorage.setItem('StitchFunctionsd' ,StitchFunctionsD.innerText)
 localStorage.setItem('StitchFunctionsp' ,StitchFunctionsP.innerText)
 add()
})

let Iron =  document.getElementById("Ironb")
.addEventListener('click' ,function(){
let Iront = document.getElementById('Iront');
let IronD = document.getElementById('Irond');
let IronP = document.getElementById('Ironp');
 console.log(Iront.innerText);
 console.log(IronD.innerText);
 console.log(IronP.innerText);
 localStorage.setItem('Iront' ,Iront.innerText)
 localStorage.setItem('Irond' ,IronD.innerText)
 localStorage.setItem('Ironp' ,IronP.innerText)
 add()
})

let PinkIron =  document.getElementById("PinkIronb")
.addEventListener('click' ,function(){
let PinkIront = document.getElementById('PinkIront');
let PinkIronD = document.getElementById('PinkIrond');
let PinkIronP = document.getElementById('PinkIronp');
 console.log(PinkIront.innerText);
 console.log(PinkIronD.innerText);
 console.log(PinkIronP.innerText);
 localStorage.setItem('PinkIront' ,PinkIront.innerText)
 localStorage.setItem('PinkIrond' ,PinkIronD.innerText)
 localStorage.setItem('PinkIronp' ,PinkIronP.innerText)
 add()
})

let PinkIront = localStorage.getItem('PinkIront')
let PinkIrond = localStorage.getItem('PinkIrond')
let PinkIronp = localStorage.getItem('PinkIronp')

onload()