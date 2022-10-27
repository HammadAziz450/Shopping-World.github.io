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
let IronBlackColor =  document.getElementById("IronBlackColorb")
.addEventListener('click' ,function(){
let IronBlackColort = document.getElementById('IronBlackColort');
let IronBlackColorD = document.getElementById('IronBlackColord');
let IronBlackColorP = document.getElementById('IronBlackColorp');
 console.log(IronBlackColort.innerText);
 console.log(IronBlackColorD.innerText);
 console.log(IronBlackColorP.innerText);
 localStorage.setItem('IronBlackColort' ,IronBlackColort.innerText)
 localStorage.setItem('IronBlackColord' ,IronBlackColorD.innerText)
 localStorage.setItem('IronBlackColorp' ,IronBlackColorP.innerText)
 add()
})
let Nokia =  document.getElementById("Nokiab")
.addEventListener('click' ,function(){
let Nokiat = document.getElementById('Nokiat');
let NokiaD = document.getElementById('Nokiad');
let NokiaP = document.getElementById('Nokiap');
 console.log(Nokiat.innerText);
 console.log(NokiaD.innerText);
 console.log(NokiaP.innerText);
 localStorage.setItem('Nokiat' ,Nokiat.innerText)
 localStorage.setItem('Nokiad' ,NokiaD.innerText)
 localStorage.setItem('Nokiap' ,NokiaP.innerText)
 add()
})


let LG =  document.getElementById("LGb")
.addEventListener('click' ,function(){
let LGt = document.getElementById('LGt');
let LGD = document.getElementById('LGd');
let LGP = document.getElementById('LGp');
 console.log(LGt.innerText);
 console.log(LGD.innerText);
 console.log(LGP.innerText);
 localStorage.setItem('LGt' ,LGt.innerText)
 localStorage.setItem('LGd' ,LGD.innerText)
 localStorage.setItem('LGp' ,LGP.innerText)
 add()
})



let SAMSUNG =  document.getElementById("SAMSUNGb")
.addEventListener('click' ,function(){
let SAMSUNGt = document.getElementById('SAMSUNGt');
let SAMSUNGD = document.getElementById('SAMSUNGd');
let SAMSUNGP = document.getElementById('SAMSUNGp');
 console.log(SAMSUNGt.innerText);
 console.log(SAMSUNGD.innerText);
 console.log(SAMSUNGP.innerText);
 localStorage.setItem('SAMSUNGt' ,SAMSUNGt.innerText)
 localStorage.setItem('SAMSUNGd' ,SAMSUNGD.innerText)
 localStorage.setItem('SAMSUNGp' ,SAMSUNGP.innerText)
 add()
})


let BiggVacuumCleaner =  document.getElementById("BiggVacuumCleanerb")
.addEventListener('click' ,function(){
let BiggVacuumCleanert = document.getElementById('BiggVacuumCleanert');
let BiggVacuumCleanerD = document.getElementById('BiggVacuumCleanerd');
let BiggVacuumCleanerP = document.getElementById('BiggVacuumCleanerp');
 console.log(BiggVacuumCleanert.innerText);
 console.log(BiggVacuumCleanerD.innerText);
 console.log(BiggVacuumCleanerP.innerText);
 localStorage.setItem('BiggVacuumCleanert' ,BiggVacuumCleanert.innerText)
 localStorage.setItem('BiggVacuumCleanerd' ,BiggVacuumCleanerD.innerText)
 localStorage.setItem('BiggVacuumCleanerp' ,BiggVacuumCleanerP.innerText)
 add()
})


let RoboticFloorCleaner =  document.getElementById("RoboticFloorCleanerb")
.addEventListener('click' ,function(){
let RoboticFloorCleanert = document.getElementById('RoboticFloorCleanert');
let RoboticFloorCleanerD = document.getElementById('RoboticFloorCleanerd');
let RoboticFloorCleanerP = document.getElementById('RoboticFloorCleanerp');
 console.log(RoboticFloorCleanert.innerText);
 console.log(RoboticFloorCleanerD.innerText);
 console.log(RoboticFloorCleanerP.innerText);
 localStorage.setItem('RoboticFloorCleanert' ,RoboticFloorCleanert.innerText)
 localStorage.setItem('RoboticFloorCleanerd' ,RoboticFloorCleanerD.innerText)
 localStorage.setItem('RoboticFloorCleanerp' ,RoboticFloorCleanerP.innerText)
 add()
})

let VacuumCleaner =  document.getElementById("VacuumCleanerb")
.addEventListener('click' ,function(){
let VacuumCleanert = document.getElementById('VacuumCleanert');
let VacuumCleanerD = document.getElementById('VacuumCleanerd');
let VacuumCleanerP = document.getElementById('VacuumCleanerp');
 console.log(VacuumCleanert.innerText);
 console.log(VacuumCleanerD.innerText);
 console.log(VacuumCleanerP.innerText);
 localStorage.setItem('VacuumCleanert' ,VacuumCleanert.innerText)
 localStorage.setItem('VacuumCleanerd' ,VacuumCleanerD.innerText)
 localStorage.setItem('VacuumCleanerp' ,VacuumCleanerP.innerText)
 add()
})

let AutomaticFan =  document.getElementById("AutomaticFanb")
.addEventListener('click' ,function(){
let AutomaticFant = document.getElementById('AutomaticFant');
let AutomaticFanD = document.getElementById('AutomaticFand');
let AutomaticFanP = document.getElementById('AutomaticFanp');
 console.log(AutomaticFant.innerText);
 console.log(AutomaticFanD.innerText);
 console.log(AutomaticFanP.innerText);
 localStorage.setItem('AutomaticFant' ,AutomaticFant.innerText)
 localStorage.setItem('AutomaticFand' ,AutomaticFanD.innerText)
 localStorage.setItem('AutomaticFanp' ,AutomaticFanP.innerText)
 add()
})

let OrientElectricFan =  document.getElementById("OrientElectricFanb")
.addEventListener('click' ,function(){
let OrientElectricFant = document.getElementById('OrientElectricFant');
let OrientElectricFanD = document.getElementById('OrientElectricFand');
let OrientElectricFanP = document.getElementById('OrientElectricFanp');
 console.log(OrientElectricFant.innerText);
 console.log(OrientElectricFanD.innerText);
 console.log(OrientElectricFanP.innerText);
 localStorage.setItem('OrientElectricFant' ,OrientElectricFant.innerText)
 localStorage.setItem('OrientElectricFand' ,OrientElectricFanD.innerText)
 localStorage.setItem('OrientElectricFanp' ,OrientElectricFanP.innerText)
 add()
})

let HomeTreeFan =  document.getElementById("HomeTreeFanb")
.addEventListener('click' ,function(){
let HomeTreeFant = document.getElementById('HomeTreeFant');
let HomeTreeFanD = document.getElementById('HomeTreeFand');
let HomeTreeFanP = document.getElementById('HomeTreeFanp');
 console.log(HomeTreeFant.innerText);
 console.log(HomeTreeFanD.innerText);
 console.log(HomeTreeFanP.innerText);
 localStorage.setItem('HomeTreeFant' ,HomeTreeFant.innerText)
 localStorage.setItem('HomeTreeFand' ,HomeTreeFanD.innerText)
 localStorage.setItem('HomeTreeFanp' ,HomeTreeFanP.innerText)
 add()
})

let RefrigeratorSingleDoor =  document.getElementById("RefrigeratorSingleDoorb")
.addEventListener('click' ,function(){
let RefrigeratorSingleDoort = document.getElementById('RefrigeratorSingleDoort');
let RefrigeratorSingleDoorD = document.getElementById('RefrigeratorSingleDoord');
let RefrigeratorSingleDoorP = document.getElementById('RefrigeratorSingleDoorp');
 console.log(RefrigeratorSingleDoort.innerText);
 console.log(RefrigeratorSingleDoorD.innerText);
 console.log(RefrigeratorSingleDoorP.innerText);
 localStorage.setItem('RefrigeratorSingleDoort' ,RefrigeratorSingleDoort.innerText)
 localStorage.setItem('RefrigeratorSingleDoord' ,RefrigeratorSingleDoorD.innerText)
 localStorage.setItem('RefrigeratorSingleDoorp' ,RefrigeratorSingleDoorP.innerText)
 add()
})
let RefrigeratorDoubleDoor =  document.getElementById("RefrigeratorDoubleDoorb")
.addEventListener('click' ,function(){
let RefrigeratorDoubleDoort = document.getElementById('RefrigeratorDoubleDoort');
let RefrigeratorDoubleDoorD = document.getElementById('RefrigeratorDoubleDoord');
let RefrigeratorDoubleDoorP = document.getElementById('RefrigeratorDoubleDoorp');
 console.log(RefrigeratorDoubleDoort.innerText);
 console.log(RefrigeratorDoubleDoorD.innerText);
 console.log(RefrigeratorDoubleDoorP.innerText);
 localStorage.setItem('RefrigeratorDoubleDoort' ,RefrigeratorDoubleDoort.innerText)
 localStorage.setItem('RefrigeratorDoubleDoord' ,RefrigeratorDoubleDoorD.innerText)
 localStorage.setItem('RefrigeratorDoubleDoorp' ,RefrigeratorDoubleDoorP.innerText)
 add()
})

let tripleDoor =  document.getElementById("tripleDoorb")
.addEventListener('click' ,function(){
let tripleDoort = document.getElementById('tripleDoort');
let tripleDoorD = document.getElementById('tripleDoord');
let tripleDoorP = document.getElementById('tripleDoorp');
 console.log(tripleDoort.innerText);
 console.log(tripleDoorD.innerText);
 console.log(tripleDoorP.innerText);
 localStorage.setItem('tripleDoort' ,tripleDoort.innerText)
 localStorage.setItem('tripleDoord' ,tripleDoorD.innerText)
 localStorage.setItem('tripleDoorp' ,tripleDoorP.innerText)
 add()
})

let LGOven =  document.getElementById("LGOvenb")
.addEventListener('click' ,function(){
let LGOvent = document.getElementById('LGOvent');
let LGOvenD = document.getElementById('LGOvend');
let LGOvenP = document.getElementById('LGOvenp');
 console.log(LGOvent.innerText);
 console.log(LGOvenD.innerText);
 console.log(LGOvenP.innerText);
 localStorage.setItem('LGOvent' ,LGOvent.innerText)
 localStorage.setItem('LGOvend' ,LGOvenD.innerText)
 localStorage.setItem('LGOvenp' ,LGOvenP.innerText)
 add()
})

let SoloMicrowave =  document.getElementById("SoloMicrowaveb")
.addEventListener('click' ,function(){
let SoloMicrowavet = document.getElementById('SoloMicrowavet');
let SoloMicrowaveD = document.getElementById('SoloMicrowaved');
let SoloMicrowaveP = document.getElementById('SoloMicrowavep');
 console.log(SoloMicrowavet.innerText);
 console.log(SoloMicrowaveD.innerText);
 console.log(SoloMicrowaveP.innerText);
 localStorage.setItem('SoloMicrowavet' ,SoloMicrowavet.innerText)
 localStorage.setItem('SoloMicrowaved' ,SoloMicrowaveD.innerText)
 localStorage.setItem('SoloMicrowavep' ,SoloMicrowaveP.innerText)
 add()
})

let MicrowaveOven =  document.getElementById("MicrowaveOvenb")
.addEventListener('click' ,function(){
let MicrowaveOvent = document.getElementById('MicrowaveOvent');
let MicrowaveOvenD = document.getElementById('MicrowaveOvend');
let MicrowaveOvenP = document.getElementById('MicrowaveOvenp');
 console.log(MicrowaveOvent.innerText);
 console.log(MicrowaveOvenD.innerText);
 console.log(MicrowaveOvenP.innerText);
 localStorage.setItem('MicrowaveOvent' ,MicrowaveOvent.innerText)
 localStorage.setItem('MicrowaveOvend' ,MicrowaveOvenD.innerText)
 localStorage.setItem('MicrowaveOvenp' ,MicrowaveOvenP.innerText)
 add()
})

let BlueGrinder =  document.getElementById("BlueGrinderb")
.addEventListener('click' ,function(){
let BlueGrindert = document.getElementById('BlueGrindert');
let BlueGrinderD = document.getElementById('BlueGrinderd');
let BlueGrinderP = document.getElementById('BlueGrinderp');
 console.log(BlueGrindert.innerText);
 console.log(BlueGrinderD.innerText);
 console.log(BlueGrinderP.innerText);
 localStorage.setItem('BlueGrindert' ,BlueGrindert.innerText)
 localStorage.setItem('BlueGrinderd' ,BlueGrinderD.innerText)
 localStorage.setItem('BlueGrinderp' ,BlueGrinderP.innerText)
 add()
})

let MixerGrinder =  document.getElementById("MixerGrinderb")
.addEventListener('click' ,function(){
let MixerGrindert = document.getElementById('MixerGrindert');
let MixerGrinderD = document.getElementById('MixerGrinderd');
let MixerGrinderP = document.getElementById('MixerGrinderp');
 console.log(MixerGrindert.innerText);
 console.log(MixerGrinderD.innerText);
 console.log(MixerGrinderP.innerText);
 localStorage.setItem('MixerGrindert' ,MixerGrindert.innerText)
 localStorage.setItem('MixerGrinderd' ,MixerGrinderD.innerText)
 localStorage.setItem('MixerGrinderp' ,MixerGrinderP.innerText)
 add()
})

let ElectricStove =  document.getElementById("ElectricStoveb")
.addEventListener('click' ,function(){
let ElectricStovet = document.getElementById('ElectricStovet');
let ElectricStoveD = document.getElementById('ElectricStoved');
let ElectricStoveP = document.getElementById('ElectricStovep');
 console.log(ElectricStovet.innerText);
 console.log(ElectricStoveD.innerText);
 console.log(ElectricStoveP.innerText);
 localStorage.setItem('ElectricStovet' ,ElectricStovet.innerText)
 localStorage.setItem('ElectricStoved' ,ElectricStoveD.innerText)
 localStorage.setItem('ElectricStovep' ,ElectricStoveP.innerText)
 add()
})

let JKREnterprise =  document.getElementById("JKREnterpriseb")
.addEventListener('click' ,function(){
let JKREnterpriset = document.getElementById('JKREnterpriset');
let JKREnterpriseD = document.getElementById('JKREnterprised');
let JKREnterpriseP = document.getElementById('JKREnterprisep');
 console.log(JKREnterpriset.innerText);
 console.log(JKREnterpriseD.innerText);
 console.log(JKREnterpriseP.innerText);
 localStorage.setItem('JKREnterpriset' ,JKREnterpriset.innerText)
 localStorage.setItem('JKREnterprised' ,JKREnterpriseD.innerText)
 localStorage.setItem('JKREnterprisep' ,JKREnterpriseP.innerText)
 add()
})
let ElectricRiceCooker =  document.getElementById("ElectricRiceCookerb")
.addEventListener('click' ,function(){
let ElectricRiceCookert = document.getElementById('ElectricRiceCookert');
let ElectricRiceCookerD = document.getElementById('ElectricRiceCookerd');
let ElectricRiceCookerP = document.getElementById('ElectricRiceCookerp');
 console.log(ElectricRiceCookert.innerText);
 console.log(ElectricRiceCookerD.innerText);
 console.log(ElectricRiceCookerP.innerText);
 localStorage.setItem('ElectricRiceCookert' ,ElectricRiceCookert.innerText)
 localStorage.setItem('ElectricRiceCookerd' ,ElectricRiceCookerD.innerText)
 localStorage.setItem('ElectricRiceCookerp' ,ElectricRiceCookerP.innerText)
 add()
})





let ElectricRiceCookert = localStorage.getItem('ElectricRiceCookert')
let ElectricRiceCookerd = localStorage.getItem('ElectricRiceCookerd')
let ElectricRiceCookerp = localStorage.getItem('ElectricRiceCookerp')
onload()