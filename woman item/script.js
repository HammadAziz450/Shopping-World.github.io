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


let PHEASANT =  document.getElementById("PHEASANTb")
  .addEventListener('click' ,function(){
  let PHEASANTt = document.getElementById('PHEASANTt');
  let PHEASANTD = document.getElementById('PHEASANTd');
  let PHEASANTP = document.getElementById('PHEASANTp');
   console.log(PHEASANTt.innerText);
   console.log(PHEASANTD.innerText);
   console.log(PHEASANTP.innerText);
   localStorage.setItem('PHEASANTt' , PHEASANTt.innerText)
   localStorage.setItem('PHEASANTd' ,PHEASANTD.innerText)
   localStorage.setItem('PHEASANTp' ,PHEASANTP.innerText)
   add()
  })
  let MishitaEnterprise =  document.getElementById("MishitaEnterpriseb")
  .addEventListener('click' ,function(){
  let MishitaEnterpriset = document.getElementById('MishitaEnterpriset');
  let MishitaEnterpriseD = document.getElementById('MishitaEnterprised');
  let MishitaEnterpriseP = document.getElementById('MishitaEnterprisep');
   console.log(MishitaEnterpriset.innerText);
   console.log(MishitaEnterpriseD.innerText);
   console.log(MishitaEnterpriseP.innerText);
   localStorage.setItem('MishitaEnterpriset' , MishitaEnterpriset.innerText)
   localStorage.setItem('MishitaEnterprised' ,MishitaEnterpriseD.innerText)
   localStorage.setItem('MishitaEnterprisep' ,MishitaEnterpriseP.innerText)
   add()
  })
  let PDCLOTHVILLA =  document.getElementById("PDCLOTHVILLAb")
  .addEventListener('click' ,function(){
  let PDCLOTHVILLAt = document.getElementById('PDCLOTHVILLAt');
  let PDCLOTHVILLAD = document.getElementById('PDCLOTHVILLAd');
  let PDCLOTHVILLAP = document.getElementById('PDCLOTHVILLAp');
   console.log(PDCLOTHVILLAt.innerText);
   console.log(PDCLOTHVILLAD.innerText);
   console.log(PDCLOTHVILLAP.innerText);
   localStorage.setItem('PDCLOTHVILLAt' , PDCLOTHVILLAt.innerText)
   localStorage.setItem('PDCLOTHVILLAd' ,PDCLOTHVILLAD.innerText)
   localStorage.setItem('PDCLOTHVILLAp' ,PDCLOTHVILLAP.innerText)
   add()
  })

  let OffirraInternational =  document.getElementById("OffirraInternationalb")
  .addEventListener('click' ,function(){
  let OffirraInternationalt = document.getElementById('OffirraInternationalt');
  let OffirraInternationalD = document.getElementById('OffirraInternationald');
  let OffirraInternationalP = document.getElementById('OffirraInternationalp');
   console.log(OffirraInternationalt.innerText);
   console.log(OffirraInternationalD.innerText);
   console.log(OffirraInternationalP.innerText);
   localStorage.setItem('OffirraInternationalt' ,OffirraInternationalt.innerText)
   localStorage.setItem('OffirraInternationald' ,OffirraInternationalD.innerText)
   localStorage.setItem('OffirraInternationalp' ,OffirraInternationalP.innerText)
   add()
  })

  let DulhanSaree =  document.getElementById("DulhanSareeb")
  .addEventListener('click' ,function(){
  let DulhanSareet = document.getElementById('DulhanSareet');
  let DulhanSareeD = document.getElementById('DulhanSareed');
  let DulhanSareeP = document.getElementById('DulhanSareep');
   console.log(DulhanSareet.innerText);
   console.log(DulhanSareeD.innerText);
   console.log(DulhanSareeP.innerText);
   localStorage.setItem('DulhanSareet' ,DulhanSareet.innerText)
   localStorage.setItem('DulhanSareed' ,DulhanSareeD.innerText)
   localStorage.setItem('DulhanSareep' ,DulhanSareeP.innerText)
   add()
  })

  let Siril =  document.getElementById("Sirilb")
  .addEventListener('click' ,function(){
  let Sirilt = document.getElementById('Sirilt');
  let SirilD = document.getElementById('Sirild');
  let SirilP = document.getElementById('Sirilp');
   console.log(Sirilt.innerText);
   console.log(SirilD.innerText);
   console.log(SirilP.innerText);
   localStorage.setItem('Sirilt' ,Sirilt.innerText)
   localStorage.setItem('Sirild' ,SirilD.innerText)
   localStorage.setItem('Sirilp' ,SirilP.innerText)
   add()
  })
  let FAMOUSZONE =  document.getElementById("FAMOUSZONEb")
  .addEventListener('click' ,function(){
  let FAMOUSZONEt = document.getElementById('FAMOUSZONEt');
  let FAMOUSZONED = document.getElementById('FAMOUSZONEd');
  let FAMOUSZONEP = document.getElementById('FAMOUSZONEp');
   console.log(FAMOUSZONEt.innerText);
   console.log(FAMOUSZONED.innerText);
   console.log(FAMOUSZONEP.innerText);
   localStorage.setItem('FAMOUSZONEt' ,FAMOUSZONEt.innerText)
   localStorage.setItem('FAMOUSZONEd' ,FAMOUSZONED.innerText)
   localStorage.setItem('FAMOUSZONEp' ,FAMOUSZONEP.innerText)
   add()
  })
  
  let koijofashion =  document.getElementById("koijofashionb")
  .addEventListener('click' ,function(){
  let koijofashiont = document.getElementById('koijofashiont');
  let koijofashionD = document.getElementById('koijofashiond');
  let koijofashionP = document.getElementById('koijofashionp');
   console.log(koijofashiont.innerText);
   console.log(koijofashionD.innerText);
   console.log(koijofashionP.innerText);
   localStorage.setItem('koijofashiont' ,koijofashiont.innerText)
   localStorage.setItem('koijofashiond' ,koijofashionD.innerText)
   localStorage.setItem('koijofashionp' ,koijofashionP.innerText)
   add()
  })
  
  let bbellacreation =  document.getElementById("bbellacreationb")
  .addEventListener('click' ,function(){
  let bbellacreationt = document.getElementById('bbellacreationt');
  let bbellacreationD = document.getElementById('bbellacreationd');
  let bbellacreationP = document.getElementById('bbellacreationp');
   console.log(bbellacreationt.innerText);
   console.log(bbellacreationD.innerText);
   console.log(bbellacreationP.innerText);
   localStorage.setItem('bbellacreationt' ,bbellacreationt.innerText)
   localStorage.setItem('bbellacreationd' ,bbellacreationD.innerText)
   localStorage.setItem('bbellacreationp' ,bbellacreationP.innerText)
   add()
  })
  let CuteAngels =  document.getElementById("CuteAngelsb")
  .addEventListener('click' ,function(){
  let CuteAngelst = document.getElementById('CuteAngelst');
  let CuteAngelsD = document.getElementById('CuteAngelsd');
  let CuteAngelsP = document.getElementById('CuteAngelsp');
   console.log(CuteAngelst.innerText);
   console.log(CuteAngelsD.innerText);
   console.log(CuteAngelsP.innerText);
   localStorage.setItem('CuteAngelst' ,CuteAngelst.innerText)
   localStorage.setItem('CuteAngelsd' ,CuteAngelsD.innerText)
   localStorage.setItem('CuteAngelsp' ,CuteAngelsP.innerText)
   add()
  })
  let Solid =  document.getElementById("Solidb")
  .addEventListener('click' ,function(){
  let Solidt = document.getElementById('Solidt');
  let SolidD = document.getElementById('Solidd');
  let SolidP = document.getElementById('Solidp');
   console.log(Solidt.innerText);
   console.log(SolidD.innerText);
   console.log(SolidP.innerText);
   localStorage.setItem('Solidt' ,Solidt.innerText)
   localStorage.setItem('Solidd' ,SolidD.innerText)
   localStorage.setItem('Solidp' ,SolidP.innerText)
   add()
  })
  let ICONHALL =  document.getElementById("ICONHALLb")
  .addEventListener('click' ,function(){
  let ICONHALLt = document.getElementById('ICONHALLt');
  let ICONHALLD = document.getElementById('ICONHALLd');
  let ICONHALLP = document.getElementById('ICONHALLp');
   console.log(ICONHALLt.innerText);
   console.log(ICONHALLD.innerText);
   console.log(ICONHALLP.innerText);
   localStorage.setItem('ICONHALLt' ,ICONHALLt.innerText)
   localStorage.setItem('ICONHALLd' ,ICONHALLD.innerText)
   localStorage.setItem('ICONHALLp' ,ICONHALLP.innerText)
   add()
  })

  let Frock =  document.getElementById("Frockb")
  .addEventListener('click' ,function(){
  let Frockt = document.getElementById('Frockt');
  let FrockD = document.getElementById('Frockd');
  let FrockP = document.getElementById('Frockp');
   console.log(Frockt.innerText);
   console.log(FrockD.innerText);
   console.log(FrockP.innerText);
   localStorage.setItem('Frockt' ,Frockt.innerText)
   localStorage.setItem('Frockd' ,FrockD.innerText)
   localStorage.setItem('Frockp' ,FrockP.innerText)
   add()
  })
  let SHARVI =  document.getElementById("SHARVIb")
  .addEventListener('click' ,function(){
  let SHARVIt = document.getElementById('SHARVIt');
  let SHARVID = document.getElementById('SHARVId');
  let SHARVIP = document.getElementById('SHARVIp');
   console.log(SHARVIt.innerText);
   console.log(SHARVID.innerText);
   console.log(SHARVIP.innerText);
   localStorage.setItem('SHARVIt' ,SHARVIt.innerText)
   localStorage.setItem('SHARVId' ,SHARVID.innerText)
   localStorage.setItem('SHARVIp' ,SHARVIP.innerText)
   add()
  })
  let Vaimiya =  document.getElementById("Vaimiyab")
  .addEventListener('click' ,function(){
  let Vaimiyat = document.getElementById('Vaimiyat');
  let VaimiyaD = document.getElementById('Vaimiyad');
  let VaimiyaP = document.getElementById('Vaimiyap');
   console.log(Vaimiyat.innerText);
   console.log(VaimiyaD.innerText);
   console.log(VaimiyaP.innerText);
   localStorage.setItem('Vaimiyat' ,Vaimiyat.innerText)
   localStorage.setItem('Vaimiyad' ,VaimiyaD.innerText)
   localStorage.setItem('Vaimiyap' ,VaimiyaP.innerText)
   add()
  })
  let AnnshApparel =  document.getElementById("AnnshApparelb")
  .addEventListener('click' ,function(){
  let AnnshApparelt = document.getElementById('AnnshApparelt');
  let AnnshApparelD = document.getElementById('AnnshAppareld');
  let AnnshApparelP = document.getElementById('AnnshApparelp');
   console.log(AnnshApparelt.innerText);
   console.log(AnnshApparelD.innerText);
   console.log(AnnshApparelP.innerText);
   localStorage.setItem('AnnshApparelt' ,AnnshApparelt.innerText)
   localStorage.setItem('AnnshAppareld' ,AnnshApparelD.innerText)
   localStorage.setItem('AnnshApparelp' ,AnnshApparelP.innerText)
   add()
  })
  let skyasia =  document.getElementById("skyasiab")
  .addEventListener('click' ,function(){
  let skyasiat = document.getElementById('skyasiat');
  let skyasiaD = document.getElementById('skyasiad');
  let skyasiaP = document.getElementById('skyasiap');
   console.log(skyasiat.innerText);
   console.log(skyasiaD.innerText);
   console.log(skyasiaP.innerText);
   localStorage.setItem('skyasiat' ,skyasiat.innerText)
   localStorage.setItem('skyasiad' ,skyasiaD.innerText)
   localStorage.setItem('skyasiap' ,skyasiaP.innerText)
   add()
  })
  let PINKSHARVI =  document.getElementById("PINKSHARVIb")
  .addEventListener('click' ,function(){
  let PINKSHARVIt = document.getElementById('PINKSHARVIt');
  let PINKSHARVID = document.getElementById('PINKSHARVId');
  let PINKSHARVIP = document.getElementById('PINKSHARVIp');
   console.log(PINKSHARVIt.innerText);
   console.log(PINKSHARVID.innerText);
   console.log(PINKSHARVIP.innerText);
   localStorage.setItem('PINKSHARVIt' ,PINKSHARVIt.innerText)
   localStorage.setItem('PINKSHARVId' ,PINKSHARVID.innerText)
   localStorage.setItem('PINKSHARVIp' ,PINKSHARVIP.innerText)
   add()
  })
  let pider =  document.getElementById("piderb")
  .addEventListener('click' ,function(){
  let pidert = document.getElementById('pidert');
  let piderD = document.getElementById('piderd');
  let piderP = document.getElementById('piderp');
   console.log(pidert.innerText);
   console.log(piderD.innerText);
   console.log(piderP.innerText);
   localStorage.setItem('pidert' ,pidert.innerText)
   localStorage.setItem('piderd' ,piderD.innerText)
   localStorage.setItem('piderp' ,piderP.innerText)
   add()
  })
  let RudraFashionMart =  document.getElementById("RudraFashionMartb")
  .addEventListener('click' ,function(){
  let RudraFashionMartt = document.getElementById('RudraFashionMartt');
  let RudraFashionMartD = document.getElementById('RudraFashionMartd');
  let RudraFashionMartP = document.getElementById('RudraFashionMartp');
   console.log(RudraFashionMartt.innerText);
   console.log(RudraFashionMartD.innerText);
   console.log(RudraFashionMartP.innerText);
   localStorage.setItem('RudraFashionMartt' ,RudraFashionMartt.innerText)
   localStorage.setItem('RudraFashionMartd' ,RudraFashionMartD.innerText)
   localStorage.setItem('RudraFashionMartp' ,RudraFashionMartP.innerText)
   add()
  })
  let SILAISTYLE =  document.getElementById("SILAISTYLEb")
  .addEventListener('click' ,function(){
  let SILAISTYLEt = document.getElementById('SILAISTYLEt');
  let SILAISTYLED = document.getElementById('SILAISTYLEd');
  let SILAISTYLEP = document.getElementById('SILAISTYLEp');
   console.log(SILAISTYLEt.innerText);
   console.log(SILAISTYLED.innerText);
   console.log(SILAISTYLEP.innerText);
   localStorage.setItem('SILAISTYLEt' ,SILAISTYLEt.innerText)
   localStorage.setItem('SILAISTYLEd' ,SILAISTYLED.innerText)
   localStorage.setItem('SILAISTYLEp' ,SILAISTYLEP.innerText)
   add()
  })
  let JokerShoes =  document.getElementById("JokerShoesb")
  .addEventListener('click' ,function(){
  let JokerShoest = document.getElementById('JokerShoest');
  let JokerShoesD = document.getElementById('JokerShoesd');
  let JokerShoesP = document.getElementById('JokerShoesp');
   console.log(JokerShoest.innerText);
   console.log(JokerShoesD.innerText);
   console.log(JokerShoesP.innerText);
   localStorage.setItem('JokerShoest' ,JokerShoest.innerText)
   localStorage.setItem('JokerShoesd' ,JokerShoesD.innerText)
   localStorage.setItem('JokerShoesp' ,JokerShoesP.innerText)
   add()
  })
  let PurpleFlamingo =  document.getElementById("PurpleFlamingob")
  .addEventListener('click' ,function(){
  let PurpleFlamingot = document.getElementById('PurpleFlamingot');
  let PurpleFlamingoD = document.getElementById('PurpleFlamingod');
  let PurpleFlamingoP = document.getElementById('PurpleFlamingop');
   console.log(PurpleFlamingot.innerText);
   console.log(PurpleFlamingoD.innerText);
   console.log(PurpleFlamingoP.innerText);
   localStorage.setItem('PurpleFlamingot' ,PurpleFlamingot.innerText)
   localStorage.setItem('PurpleFlamingod' ,PurpleFlamingoD.innerText)
   localStorage.setItem('PurpleFlamingop' ,PurpleFlamingoP.innerText)
   add()
  })
  let WONDERNATION =  document.getElementById("WONDERNATIONb")
  .addEventListener('click' ,function(){
  let WONDERNATIONt = document.getElementById('WONDERNATIONt');
  let WONDERNATIOND = document.getElementById('WONDERNATIONd');
  let WONDERNATIONP = document.getElementById('WONDERNATIONp');
   console.log(WONDERNATIONt.innerText);
   console.log(WONDERNATIOND.innerText);
   console.log(WONDERNATIONP.innerText);
   localStorage.setItem('WONDERNATIONt' ,WONDERNATIONt.innerText)
   localStorage.setItem('WONDERNATIONd' ,WONDERNATIOND.innerText)
   localStorage.setItem('WONDERNATIONp' ,WONDERNATIONP.innerText)
   add()
  })
  
  let SPPIF =  document.getElementById("SPPIFb")
  .addEventListener('click' ,function(){
  let SPPIFt = document.getElementById('SPPIFt');
  let SPPIFD = document.getElementById('SPPIFd');
  let SPPIFP = document.getElementById('SPPIFp');
   console.log(SPPIFt.innerText);
   console.log(SPPIFD.innerText);
   console.log(SPPIFP.innerText);
   localStorage.setItem('SPPIFt' ,SPPIFt.innerText)
   localStorage.setItem('SPPIFd' ,SPPIFD.innerText)
   localStorage.setItem('SPPIFp' ,SPPIFP.innerText)
   add()
  })
  let RedMisto =  document.getElementById("RedMistob")
  .addEventListener('click' ,function(){
  let RedMistot = document.getElementById('RedMistot');
  let RedMistoD = document.getElementById('RedMistod');
  let RedMistoP = document.getElementById('RedMistop');
   console.log(RedMistot.innerText);
   console.log(RedMistoD.innerText);
   console.log(RedMistoP.innerText);
   localStorage.setItem('RedMistot' ,RedMistot.innerText)
   localStorage.setItem('RedMistod' ,RedMistoD.innerText)
   localStorage.setItem('RedMistop' ,RedMistoP.innerText)
   add()
  })

  let Misto =  document.getElementById("Mistob")
  .addEventListener('click' ,function(){
  let Mistot = document.getElementById('Mistot');
  let MistoD = document.getElementById('Mistod');
  let MistoP = document.getElementById('Mistop');
   console.log(Mistot.innerText);
   console.log(MistoD.innerText);
   console.log(MistoP.innerText);
   localStorage.setItem('Mistot' ,Mistot.innerText)
   localStorage.setItem('Mistod' ,MistoD.innerText)
   localStorage.setItem('Mistop' ,MistoP.innerText)
   add()
  })

  let TIMEX =  document.getElementById("TIMEXb")
  .addEventListener('click' ,function(){
  let TIMEXt = document.getElementById('TIMEXt');
  let TIMEXD = document.getElementById('TIMEXd');
  let TIMEXP = document.getElementById('TIMEXp');
   console.log(TIMEXt.innerText);
   console.log(TIMEXD.innerText);
   console.log(TIMEXP.innerText);
   localStorage.setItem('TIMEXt' ,TIMEXt.innerText)
   localStorage.setItem('TIMEXd' ,TIMEXD.innerText)
   localStorage.setItem('TIMEXp' ,TIMEXP.innerText)
   add()
  })

  let MarieClaire =  document.getElementById("MarieClaireb")
  .addEventListener('click' ,function(){
  let MarieClairet = document.getElementById('MarieClairet');
  let MarieClaireD = document.getElementById('MarieClaired');
  let MarieClaireP = document.getElementById('MarieClairep');
   console.log(MarieClairet.innerText);
   console.log(MarieClaireD.innerText);
   console.log(MarieClaireP.innerText);
   localStorage.setItem('MarieClairet' ,MarieClairet.innerText)
   localStorage.setItem('MarieClaired' ,MarieClaireD.innerText)
   localStorage.setItem('MarieClairep' ,MarieClaireP.innerText)
   add()
  })

  let WHITEBIRD =  document.getElementById("WHITEBIRDb")
  .addEventListener('click' ,function(){
  let WHITEBIRDt = document.getElementById('WHITEBIRDt');
  let WHITEBIRDD = document.getElementById('WHITEBIRDd');
  let WHITEBIRDP = document.getElementById('WHITEBIRDp');
   console.log(WHITEBIRDt.innerText);
   console.log(WHITEBIRDD.innerText);
   console.log(WHITEBIRDP.innerText);
   localStorage.setItem('WHITEBIRDt' ,WHITEBIRDt.innerText)
   localStorage.setItem('WHITEBIRDd' ,WHITEBIRDD.innerText)
   localStorage.setItem('WHITEBIRDp' ,WHITEBIRDP.innerText)
   add()
  })

  let SONATA =  document.getElementById("SONATAb")
  .addEventListener('click' ,function(){
  let SONATAt = document.getElementById('SONATAt');
  let SONATAD = document.getElementById('SONATAd');
  let SONATAP = document.getElementById('SONATAp');
   console.log(SONATAt.innerText);
   console.log(SONATAD.innerText);
   console.log(SONATAP.innerText);
   localStorage.setItem('SONATAt' ,SONATAt.innerText)
   localStorage.setItem('SONATAd' ,SONATAD.innerText)
   localStorage.setItem('SONATAp' ,SONATAP.innerText)
   add()
  })

  let Rizzly =  document.getElementById("Rizzlyb")
  .addEventListener('click' ,function(){
  let Rizzlyt = document.getElementById('Rizzlyt');
  let RizzlyD = document.getElementById('Rizzlyd');
  let RizzlyP = document.getElementById('Rizzlyp');
   console.log(Rizzlyt.innerText);
   console.log(RizzlyD.innerText);
   console.log(RizzlyP.innerText);
   localStorage.setItem('Rizzlyt' ,Rizzlyt.innerText)
   localStorage.setItem('Rizzlyd' ,RizzlyD.innerText)
   localStorage.setItem('Rizzlyp' ,RizzlyP.innerText)
   add()
  })
  let Marclex =  document.getElementById("Marclexb")
  .addEventListener('click' ,function(){
  let Marclext = document.getElementById('Marclext');
  let MarclexD = document.getElementById('Marclexd');
  let MarclexP = document.getElementById('Marclexp');
   console.log(Marclext.innerText);
   console.log(MarclexD.innerText);
   console.log(MarclexP.innerText);
   localStorage.setItem('Marclext' ,Marclext.innerText)
   localStorage.setItem('Marclexd' ,MarclexD.innerText)
   localStorage.setItem('Marclexp' ,MarclexP.innerText)
   add()
  })

  let JohnPhillips =  document.getElementById("JohnPhillipsb")
  .addEventListener('click' ,function(){
  let JohnPhillipst = document.getElementById('JohnPhillipst');
  let JohnPhillipsD = document.getElementById('JohnPhillipsd');
  let JohnPhillipsP = document.getElementById('JohnPhillipsp');
   console.log(JohnPhillipst.innerText);
   console.log(JohnPhillipsD.innerText);
   console.log(JohnPhillipsP.innerText);
   localStorage.setItem('JohnPhillipst' ,JohnPhillipst.innerText)
   localStorage.setItem('JohnPhillipsd' ,JohnPhillipsD.innerText)
   localStorage.setItem('JohnPhillipsp' ,JohnPhillipsP.innerText)
   add()
  })

  let StylishParfum =  document.getElementById("StylishParfumb")
  .addEventListener('click' ,function(){
  let StylishParfumt = document.getElementById('StylishParfumt');
  let StylishParfumD = document.getElementById('StylishParfumd');
  let StylishParfumP = document.getElementById('StylishParfump');
   console.log(StylishParfumt.innerText);
   console.log(StylishParfumD.innerText);
   console.log(StylishParfumP.innerText);
   localStorage.setItem('StylishParfumt' ,StylishParfumt.innerText)
   localStorage.setItem('StylishParfumd' ,StylishParfumD.innerText)
   localStorage.setItem('StylishParfump' ,StylishParfumP.innerText)
   add()
  })
  let ForGirls =  document.getElementById("ForGirlsb")
  .addEventListener('click' ,function(){
  let ForGirlst = document.getElementById('ForGirlst');
  let ForGirlsD = document.getElementById('ForGirlsd');
  let ForGirlsP = document.getElementById('ForGirlsp');
   console.log(ForGirlst.innerText);
   console.log(ForGirlsD.innerText);
   console.log(ForGirlsP.innerText);
   localStorage.setItem('ForGirlst' ,ForGirlst.innerText)
   localStorage.setItem('ForGirlsd' ,ForGirlsD.innerText)
   localStorage.setItem('ForGirlsp' ,ForGirlsP.innerText)
   add()
  })


  let StylishParfumt = localStorage.getItem('StylishParfumt')
  let StylishParfumd = localStorage.getItem('StylishParfumd')
  let StylishParfump = localStorage.getItem('StylishParfump')

onload()
