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



 let firstT =  localStorage.getItem('firstT')
  let firstd = localStorage.getItem('firstd')
  let firstp =  localStorage.getItem('firstp')


  
  
  let divi = document.createElement('div')
  divi.classList.add("container");
  divi.innerHTML = `<div class="card mb-3" id='fl' style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
  <img src="./img/${firstT}.jpg"   class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
  <h5 class="card-title" id="kn">${firstT}</h5>
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>
  </div>
  <p class="card-text">${firstd}</p>
  <p class="card-text">${firstp}</p>
  </div>
  </div>
  </div>
  </div>`

  setTimeout(() => {
    let ko = document.getElementById('kn');
    let fl = document.getElementById('fl');
     console.log(ko);
     if (ko.innerText  = "null") {
      fl.classList.add('remove')
      fl.classList.remove('mb-3')

     if (firstT.valueOf()){
      fl.classList.add('mb-3')
      fl.classList.remove('remove')
      ko.innerText = `${firstT.valueOf()}` 
    }
     }
 }, 1);
  //  localStorage.setItem('divi',divi.innerHTML)

// let h = localStorage.getItem("divi")
// let cart = document.getElementById('shopping-cart')
//  let blow = h
// console.log(4+" . . .. .. .... ."+blow);
// blow.innerHTML  = cart 


 let title =  localStorage.getItem('secT')
  let dec = localStorage.getItem('secD')
  let pr =  localStorage.getItem('secP')





  let div = document.createElement('div')
   div.classList.add("container");
   div.innerHTML = `<div class="card mb-3" id="ff" style="max-width: 540px;">
   <div class="row g-0">
     <div class="col-md-4">
       <img src="./img/${title}.jpg" class="img-fluid rounded-start" alt="...">
     </div>
     <div class="col-md-8">
     <div class="card-body">
     <div class="d-flex">
     <h5 class="card-title" id="secr">${title}</h5>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
         <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
     </div>
         <p class="card-text">${dec}</p>
         <p class="card-text">${pr}</p>
       </div>
     </div>
   </div>
 </div>`


 setTimeout(() => {
  let secr = document.getElementById('secr');
  let ff = document.getElementById('ff');
   console.log(secr);
   if (secr.innerText  = "null") {
    ff.classList.add('remove')
    ff.classList.remove('mb-3')

     if (secr.valueOf()){
      ff.classList.remove('remove')
      ff.classList.add('mb-3')

      secr.innerText = `${title.valueOf()}` 
    }
   }
}, 1);
   

  let thridT =  localStorage.getItem('thridT')
  let thridD = localStorage.getItem('thridD')
  let thridp =  localStorage.getItem('thridP')
  

  let dvd = document.createElement('div')
  dvd.classList.add("container");
  dvd.innerHTML = `<div class="card mb-3" id='dr' style="max-width: 540px;">
   <div class="row g-0">
     <div class="col-md-4">
       <img src="./img/${thridT}.jpg" class="img-fluid rounded-start" alt="...">
     </div>
     <div class="col-md-8">
       <div class="card-body">
       <div class="d-flex">
       <h5 class="card-title" id='three' >${thridT}</h5>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
         <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
     </div>
         <p class="card-text">${thridD}</p>
         <p class="card-text">${thridp}</p>
       </div>
     </div>
   </div>
 </div>`;

 setTimeout(() => {
  let three = document.getElementById('three');
  let dr = document.getElementById('dr');
   console.log(secr);
   if (three.innerText  = "null") {
    dr.classList.add('remove')
    dr.classList.remove('mb-3')

     if (thridT.valueOf()){
      dr.classList.remove('remove')
      dr.classList.add('mb-3')

      three.innerText = `${thridT.valueOf()}` 
    }
   }
   


}, 1);
 let fourthT =  localStorage.getItem('fourthT')
 let fourthD = localStorage.getItem('fourthD')
 let fourthp =  localStorage.getItem('fourthp')

 let dvdi = document.createElement('div')
 dvdi.classList.add("container");
 dvdi.innerHTML = `<div class="card mb-3" id="s" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./img/${fourthT}.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <div class="d-flex">
      <h5 class="card-title" id="four">${fourthT}</h5>
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
    </div>
        <p class="card-text">${fourthD}</p>
        <p class="card-text">${fourthp}</p>
      </div>
    </div>
  </div>
</div>`;

setTimeout(() => {
  let four = document.getElementById('four');
  let s = document.getElementById('s');
  //  console.log(ko);
   if (four.innerText  = "null") {
    s.classList.add('remove')
    s.classList.remove('mb-3')

   if (fourthT.valueOf()){
    s.classList.remove('remove')
    s.classList.add('mb-3')
    four.innerText = `${fourthT.valueOf()}` 
  }
   }
}, 1);

let fifthT =  localStorage.getItem('fifthT')
let fifthD = localStorage.getItem('fifthD')
let fifthp =  localStorage.getItem('fifthp')

let ddi = document.createElement('div')
    ddi.classList.add("container");
    ddi.classList.add("hello");
    ddi.innerHTML = `<div class="card mb-3"id="a" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./img/${fifthT}.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <div class="d-flex">
      <h5 class="card-title"id="five" >${fifthT}</h5>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
    </div>
        <p class="card-text">${fifthD}</p>
        <p class="card-text">${fifthp}</p>
      </div>
    </div>
  </div>
</div>`;

setTimeout(() => {
  let five = document.getElementById('five');
  let a = document.getElementById('a');
  //  console.log(ko);
   if (five.innerText  = "null") {
    a.classList.add('remove')
    a.classList.remove('mb-3')

   if (fifthT.valueOf()){
    a.classList.remove('remove')
    a.classList.add('mb-3')

    five.innerText = `${fifthT.valueOf()}` 
  }
   }
}, 1);

let sixthT =  localStorage.getItem('sixthT')
  let sixthD = localStorage.getItem('sixthD')
  let sixthp =  localStorage.getItem('sixthp')


  let idd = document.createElement('div')
  idd.classList.add("container");
  idd.innerHTML = `<div class="card mb-3" id='hammad'  style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${sixthT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id="six" >${sixthT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${sixthD}</p>
      <p class="card-text">${sixthp}</p>
    </div>
  </div>
</div>
</div>`;

setTimeout(() => {
  let six = document.getElementById('six');
  let hammad = document.getElementById('hammad');
  //  console.log(ko);
   if (six.innerText  = "null") {
    hammad.classList.add('remove')
    hammad.classList.remove('mb-3')

  
   if (sixthT.valueOf()){
    hammad.classList.remove('remove')
    hammad.classList.add('mb-3')

    six.innerText = `${sixthT.valueOf()}` 
  }
   }
}, 1);

let saventhT =  localStorage.getItem('saventhT')
  let saventhD = localStorage.getItem('saventhD')
  let saventhp =  localStorage.getItem('saventhp')

  let iddd = document.createElement('div')
  iddd.classList.add("container");
  iddd.innerHTML = `<div class="card mb-3" id='hh'  style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${saventhT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='seven' >${saventhT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${saventhD}</p>
      <p class="card-text">${saventhp}</p>
    </div>
  </div>
</div>
</div>`;

setTimeout(() => {
  let seven = document.getElementById('seven');
  let hh = document.getElementById('hh');
  //  console.log(ko);
   if (seven.innerText  = "null") {
    hh.classList.add('remove')
    hh.classList.remove('mb-3')

   if (saventhT.valueOf()){
    hh.classList.remove('remove')
    hh.classList.add('mb-3')

    seven.innerText = `${saventhT.valueOf()}` 
  }
   }
}, 1);


let eightT =  localStorage.getItem('eightT')
let eightD = localStorage.getItem('eightD')
let eightp =  localStorage.getItem('eightp')


let didd = document.createElement('div')
  didd.classList.add("container");
  didd.innerHTML = `<div class="card mb-3" id='tt'  style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${eightT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='eight' >${eightT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${eightD}</p>
      <p class="card-text">${eightp}</p>
    </div>
  </div>
</div>
</div>`;


setTimeout(() => {
  let eight = document.getElementById('eight');
  let tt = document.getElementById('tt');
  //  console.log(ko);
   if (eight.innerText  = "null") {
    tt.classList.add('remove')
    tt.classList.remove('mb-3')

   if (eightT.valueOf()){
    tt.classList.remove('remove')
    tt.classList.add('mb-3')
    eight.innerText = `${eightT.valueOf()}` 
  }
   }
}, 1);


let ninthT =  localStorage.getItem('ninthT')
  let ninthD = localStorage.getItem('ninthD')
  let ninthp =  localStorage.getItem('ninthp')



  let didid = document.createElement('div')
  didid.classList.add("container");
  didid.innerHTML = `<div class="card mb-3" id='t'  style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${ninthT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='nine' >${ninthT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${ninthD}</p>
      <p class="card-text">${ninthp}</p>
    </div>
  </div>
</div>
</div>`;


setTimeout(() => {
  let nine = document.getElementById('nine');
  let t = document.getElementById('t');
  //  console.log(ko);
   if (nine.innerText  = "null") {
    t.classList.add('remove')
    t.classList.remove('mb-3')

   if (ninthT.valueOf()){
    t.classList.remove('remove')
    t.classList.add('mb-3')

    nine.innerText = `${ninthT.valueOf()}` 
  }
   }
}, 1);



let tanthT =  localStorage.getItem('tanthT')
let tanthD = localStorage.getItem('tanthD')
let tanthp =  localStorage.getItem('tanthp')

let didi = document.createElement('div')
  didi.classList.add("container");
  didi.innerHTML = `<div class="card mb-3" id='ddd'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${tanthT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='tan' >${tanthT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${tanthD}</p>
      <p class="card-text">${tanthp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let tan = document.getElementById('tan');
    let ddd = document.getElementById('ddd');
    //  console.log(ko);
     if (tan.innerText  = "null") {
      ddd.classList.add('remove')
      ddd.classList.remove('mb-3')

     if (tanthT.valueOf()){
      ddd.classList.remove('remove')
      ddd.classList.add('mb-3')

      tan.innerText = `${tanthT.valueOf()}` 
    }
     }
  }, 1);

  let eleT =  localStorage.getItem('eleT')
  let eleD = localStorage.getItem('eleD')
  let elep =  localStorage.getItem('elep')

  let dii = document.createElement('div')
  dii.classList.add("container");
  dii.innerHTML = `<div class="card mb-3" id='dd'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${eleT}.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='eleven' >${eleT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${eleD}</p>
      <p class="card-text">${elep}</p>
    </div>
  </div>
  </div>
  </div>`;
  setTimeout(() => {
    let eleven = document.getElementById('eleven');
    let  dd = document.getElementById('dd');
    //  console.log(ko);
     if (eleven.innerText  = "null") {
      dd.classList.add('remove')
      dd.classList.remove('mb-3')

     if (eleT.valueOf()){
      dd.classList.remove('remove')
      dd.classList.add('mb-3')
      eleven.innerText = `${eleT.valueOf()}` 
    }
     }
  }, 1);

  let twelT =  localStorage.getItem('twelT')
  let twelD = localStorage.getItem('twelD')
  let twelp =  localStorage.getItem('twelp')

  let iid = document.createElement('div')
  iid.classList.add("container");
  iid.innerHTML = `<div class="card mb-3" id='d'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${twelT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">

    <h5 class="card-title" id='twelve' >${twelT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${twelD}</p>
      <p class="card-text">${twelp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let twelve = document.getElementById('twelve');
    let d = document.getElementById('d');
    //  console.log(ko);
     if (twelve.innerText  = "null") {
      d.classList.add('remove')
      d.classList.remove('mb-3')
          
     if (twelT.valueOf()){
      d.classList.remove('remove')
      d.classList.add('mb-3')
      twelve.innerText = `${twelT.valueOf()}` 
    }
     }
  }, 1);


  let thirtT =  localStorage.getItem('thirtT')
  let thirtD = localStorage.getItem('thirtD')
  let thirtp =  localStorage.getItem('thirtp')

  let idi = document.createElement('div')
  idi.classList.add("container");
  idi.innerHTML = `<div class="card mb-3" id='ccc'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${thirtT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='thirteen' >${thirtT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${thirtD}</p>
      <p class="card-text">${thirtp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let thirteen = document.getElementById('thirteen');
    let ccc = document.getElementById('ccc');
    //  console.log(ko);
     if (thirteen.innerText  = "null") {
      ccc.classList.add('remove')
      ccc.classList.remove('mb-3')
          
     if (thirtT.valueOf()){
      ccc.classList.remove('remove')
      ccc.classList.add('mb-3')
      thirteen.innerText = `${thirtT.valueOf()}` 
    }
     }
  }, 1);


  let fteenT =  localStorage.getItem('fteenT')
  let fteenD = localStorage.getItem('fteenD')
  let fteenp =  localStorage.getItem('fteenp')

  let id = document.createElement('div')
  id.classList.add("container");
  id.innerHTML = `<div class="card mb-3" id='mmm'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${fteenT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id="fourteen" >${fteenT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${fteenD}</p>
      <p class="card-text">${fteenp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let fourteen = document.getElementById('fourteen');
    let mmm = document.getElementById('mmm');
    //  console.log(ko);
     if (fourteen.innerText  = "null") {
      mmm.classList.add('remove')
      mmm.classList.remove('mb-3')

     if (fteenT.valueOf()){
      mmm.classList.remove('remove')
      mmm.classList.add('mb-3')
      fourteen.innerText = `${fteenT.valueOf()}` 
    }
     }
  }, 1);

  let fiteenT =  localStorage.getItem('fiteenT')
  let fiteenD = localStorage.getItem('fiteenD')
  let fiteenp =  localStorage.getItem('fiteenp') 


  let iii = document.createElement('div')
  iii.classList.add("container");
  iii.innerHTML = `<div class="card mb-3" id='nnn'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${fiteenT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id="fiveteen" >${fiteenT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${fiteenD}</p>
      <p class="card-text">${fiteenp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let fiveteen = document.getElementById('fiveteen');
    let nnn = document.getElementById('nnn');
    //  console.log(ko);
     if (fiveteen.innerText  = "null") {
      nnn.classList.add('remove')
      nnn.classList.remove('mb-3')

     if (fteenT.valueOf()){
      nnn.classList.remove('remove')
      nnn.classList.add('mb-3')
      fiveteen.innerText = `${fteenT.valueOf()}` 
    }
     }
  }, 1);
  let steenT =  localStorage.getItem('steenT')
  let steenD = localStorage.getItem('steenD')
  let steenp =  localStorage.getItem('steenp')

  let iie = document.createElement('div')
  iie.classList.add("container");
  iie.innerHTML = `<div class="card mb-3" id='bbb'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${steenT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title"  id="svennteen" >${steenT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${steenD}</p>
      <p class="card-text">${steenp}</p>
    </div>
  </div>
  </div>
  </div>`;


  setTimeout(() => {
    let svennteen = document.getElementById('svennteen');
    let bbb = document.getElementById('bbb');
    //  console.log(ko);
     if (svennteen.innerText  = "null") {
      bbb.classList.add('remove')
      bbb.classList.remove('mb-3')

     if (steenT.valueOf()){
      bbb.classList.remove('remove')
      bbb.classList.add('mb-3')
      svennteen.innerText = `${steenT.valueOf()}` 
    }
     }
  }, 1);


  let seteenT =  localStorage.getItem('seteenT')
  let seteenD = localStorage.getItem('seteenD')
  let seteenp =  localStorage.getItem('seteenp')
  

  
  let iei = document.createElement('div')
  iei.classList.add("container");
  iei.innerHTML = `<div class="card mb-3" id='vvv'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${seteenT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title"id='nineteen'  >${seteenT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${seteenD}</p>
      <p class="card-text">${seteenp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let nineteen = document.getElementById('nineteen');
    let vvv = document.getElementById('vvv');
    //  console.log(ko);
     if (nineteen.innerText  = "null") {
      vvv.classList.add('remove')
      vvv.classList.remove('mb-3')

     if (seteenT.valueOf()){
      vvv.classList.remove('remove')
      vvv.classList.add('mb-3')
      nineteen.innerText = `${seteenT.valueOf()}` 
    }
     }
  }, 1);

  let eteenT =  localStorage.getItem('eteenT')
  let eteenD = localStorage.getItem('eteenD')
  let eteenp =  localStorage.getItem('eteenp')

  let eii = document.createElement('div')
  eii.classList.add("container");
  eii.innerHTML = `<div class="card mb-3" id='mm'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${eteenT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='twenty' >${eteenT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${eteenD}</p>
      <p class="card-text">${eteenp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let twenty = document.getElementById('twenty');
    let mm = document.getElementById('mm');
    //  console.log(ko);
     if (twenty.innerText  = "null") {
      mm.classList.add('remove')
      mm.classList.remove('mb-3')

     if (eteenT.valueOf()){
      mm.classList.remove('remove')
      mm.classList.add('mb-3')
      twenty.innerText = `${eteenT.valueOf()}` 
    }
     }
  }, 1);

  let twetyT =  localStorage.getItem('twetyT')
  let twetyD = localStorage.getItem('twetyD')
  let twetyp =  localStorage.getItem('twetyp')

  let uii = document.createElement('div')
  uii.classList.add("container");
  uii.innerHTML = `<div class="card mb-3" id='nn'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${twetyT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='twentyone' >${twetyT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${twetyD}</p>
      <p class="card-text">${twetyp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let twentyone = document.getElementById('twentyone');
    let nn = document.getElementById('nn');
    //  console.log(ko);
     if (twentyone.innerText  = "null") {
      nn.classList.add('remove')
      nn.classList.remove('mb-3')

     if (twetyT.valueOf()){
      nn.classList.remove('remove')
      nn.classList.add('mb-3')
      twentyone.innerText = `${twetyT.valueOf()}` 
    }
     }
  }, 1);

  let twetyoT =  localStorage.getItem('twetyoT')
  let twetyoD = localStorage.getItem('twetyoD')
  let twetyop =  localStorage.getItem('twetyop')


  let ii = document.createElement('div')
  ii.classList.add("container");
  ii.innerHTML = `<div class="card mb-3" id='bb'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${twetyoT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='twentytwo' >${twetyoT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${twetyoD}</p>
      <p class="card-text">${twetyop}</p>
    </div>
  </div>
  </div>
  </div>`;
  setTimeout(() => {
    let twentytwo = document.getElementById('twentytwo');
    let bb = document.getElementById('bb');
    //  console.log(ko);
     if (twentytwo.innerText  = "null") {
      bb.classList.add('remove')
      bb.classList.remove('mb-3')

     if (twetyoT.valueOf()){
      bb.classList.remove('remove')
      bb.classList.add('mb-3')
      twentytwo.innerText = `${twetyoT.valueOf()}` 
    }
     }
  }, 1);

  let twetytT =  localStorage.getItem('twetytT')
  let twetytD =  localStorage.getItem('twetytD')
  let twetytp =  localStorage.getItem('twetytp')

  let iui = document.createElement('div')
  iui.classList.add("container");
  iui.innerHTML = `<div class="card mb-3" id='vv'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${twetytT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title"  >${twetytT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${twetytD}</p>
      <p class="card-text">${twetytp}</p>
    </div>
  </div>
  </div>
  </div>`;
  setTimeout(() => {
    let twentytwo = document.getElementById('twentytwo');
    let vv = document.getElementById('vv');
    //  console.log(ko);
     if (twentytwo.innerText  = "null") {
      vv.classList.add('remove')
      vv.classList.remove('mb-3')

     if (twetyoT.valueOf()){
      vv.classList.remove('remove')
      vv.classList.add('mb-3')
      twentytwo.innerText = `${twetyoT.valueOf()}` 
    }
     }
  }, 1);


  let twetytreT =  localStorage.getItem('twetytreT')
  let twetytreD =  localStorage.getItem('twetytreD')
  let twetytrep =  localStorage.getItem('twetytrep')

  let iiu = document.createElement('div')
  iiu.classList.add("container");
  iiu.innerHTML = `<div class="card mb-3" id='v'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${twetytreT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='twentythere'  >${twetytreT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${twetytreD}</p>
      <p class="card-text">${twetytrep}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let twentythere = document.getElementById('twentythere');
    let v = document.getElementById('v');
    //  console.log(ko);
     if (twentythere.innerText  = "null") {
      v.classList.add('remove')
      v.classList.remove('mb-3')

     if (twetytreT.valueOf()){
      v.classList.remove('remove')
      v.classList.add('mb-3')
      twentythere.innerText = `${twetytreT.valueOf()}` 
    }
     }
  }, 1);
  let twetyfT =  localStorage.getItem('twetyfT')
  let twetyfD =  localStorage.getItem('twetyfD')
  let twetyfp =  localStorage.getItem('twetyfp')



  let ee = document.createElement('div')
  ee.classList.add("container");
  ee.innerHTML = `<div class="card mb-3" id='b'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${twetyfT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='twentyfour' >${twetyfT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${twetyfD}</p>
      <p class="card-text">${twetyfp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let twentyfour = document.getElementById('twentyfour');
    let b = document.getElementById('b');
    //  console.log(ko);
     if (twentyfour.innerText  = "null") {
      b.classList.add('remove')
      b.classList.remove('mb-3')

     if (twetyfT.valueOf()){
      b.classList.remove('remove')
      b.classList.add('mb-3')
      twentyfour.innerText = `${twetyfT.valueOf()}` 
    }
     }
  }, 1);

  let twetyfiT =  localStorage.getItem('twetyfiT')
  let twetyfiD =  localStorage.getItem('twetyfiD')
  let twetyfip =  localStorage.getItem('twetyfip')


  let eue = document.createElement('div')
  eue.classList.add("container");
  eue.innerHTML = `<div class="card mb-3" id='n'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${twetyfiT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='twentyfive'  >${twetyfiT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${twetyfiD}</p>
      <p class="card-text">${twetyfip}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let twentyfive = document.getElementById('twentyfive');
    let n = document.getElementById('n');
    //  console.log(ko);
     if (twentyfive.innerText  = "null") {
      n.classList.add('remove')
      n.classList.remove('mb-3')

     if (twetyfiT.valueOf()){
      n.classList.remove('remove')
      n.classList.add('mb-3')
      twentyfive.innerText = `${twetyfiT.valueOf()}` 
    }
     }
  }, 1);

  
  let twetysT =  localStorage.getItem('twetysT')
  let twetysD =  localStorage.getItem('twetysD')
  let twetysp =  localStorage.getItem('twetysp')


  let eie = document.createElement('div')
  eie.classList.add("container");
  eie.innerHTML = `<div class="card mb-3" id='m'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${twetysT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
  <h5 class="card-title" id='twentysix' >${twetysT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${twetysD}</p>
      <p class="card-text">${twetysp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let twentysix = document.getElementById('twentysix');
    let m = document.getElementById('m');
    //  console.log(ko);
     if (twentysix.innerText  = "null") {
      m.classList.add('remove')
      m.classList.remove('mb-3')

     if (twetysT.valueOf()){
      m.classList.remove('remove')
      m.classList.add('mb-3')
      twentysix.innerText = `${twetysT.valueOf()}` 
    }
     }
  }, 1);


  let twetyseT =  localStorage.getItem('twetyseT')
  let twetyseD =  localStorage.getItem('twetyseD')
  let twetysep =  localStorage.getItem('twetysep')


  let eoe = document.createElement('div')
  eoe.classList.add("container");
  eoe.innerHTML = `<div class="card mb-3" id='la'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${twetyseT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='twentyseven' >${twetyseT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${twetyseD}</p>
      <p class="card-text">${twetysep}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let twentyseven = document.getElementById('twentyseven');
    let la = document.getElementById('la');
    //  console.log(ko);
     if (twentyseven.innerText  = "null") {
      la.classList.add('remove')
      la.classList.remove('mb-3')

     if (twetyseT.valueOf()){
      la.classList.remove('remove')
      la.classList.add('mb-3')
      twentyseven.innerText = `${twetyseT.valueOf()}` 
    }
     }
  }, 1);


  let twetyeT =  localStorage.getItem('twetyeT')
  let twetyeD =  localStorage.getItem('twetyeD')
  let twetyep =  localStorage.getItem('twetyep')

  let oee = document.createElement('div')
  oee.classList.add("container");
  oee.innerHTML = `<div class="card mb-3" id='rpr'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${twetyeT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='twentyeight' >${twetyeT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${twetyeD}</p>
      <p class="card-text">${twetyep}</p>
    </div>
  </div>
  </div>
  </div>`;


  setTimeout(() => {
    let twentyeight = document.getElementById('twentyeight');
    let rpr = document.getElementById('rpr');
    //  console.log(ko);
     if (twentyeight.innerText  = "null") {
      rpr.classList.add('remove')
      rpr.classList.remove('mb-3')

     if (twetyeT.valueOf()){
      rpr.classList.remove('remove')
      rpr.classList.add('mb-3')
      twentyeight.innerText = `${twetyeT.valueOf()}` 
    }
     }
  }, 1);

  let twetynT =  localStorage.getItem('twetynT')
  let twetynD =  localStorage.getItem('twetynD')
  let twetynp =  localStorage.getItem('twetynp')

  let eeo = document.createElement('div')
  eeo.classList.add("container");
  eeo.innerHTML = `<div class="card mb-3" id='rp'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${twetynT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='twentynine'  >${twetynT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${twetynD}</p>
      <p class="card-text">${twetynp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let twentynine = document.getElementById('twentynine');
    let rp = document.getElementById('rp');
    //  console.log(ko);
     if (twentynine.innerText  = "null") {
      rp.classList.add('remove')
      rp.classList.remove('mb-3')

     if (twetynT.valueOf()){
      rp.classList.remove('remove')
      rp.classList.add('mb-3')
      twentynine.innerText = `${twetynT.valueOf()}` 
    }
     }
  }, 1);
  let tertynT =  localStorage.getItem('tertynT')
  let tertynD =  localStorage.getItem('tertynD')
  let tertynp =  localStorage.getItem('tertynp')

  let eo = document.createElement('div')
  eo.classList.add("container");
  eo.innerHTML = `<div class="card mb-3" id='p'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${tertynT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='tirty'>${tertynT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${tertynD}</p>
      <p class="card-text">${tertynp}</p>
    </div>
  </div>
  </div>
  </div>`;


  setTimeout(() => {
    let tirty = document.getElementById('tirty');
    let p = document.getElementById('p');
    //  console.log(ko);
     if (tirty.innerText  = "null") {
      p.classList.add('remove')
      p.classList.remove('mb-3')

     if (tertynT.valueOf()){
      p.classList.remove('remove')
      p.classList.add('mb-3')
      tirty.innerText = `${tertynT.valueOf()}` 
    }
     }
  }, 1);
  let tertyoT =  localStorage.getItem('tertyoT')
  let tertyoD =  localStorage.getItem('tertyoD')
  let tertyop =  localStorage.getItem('tertyop')




  let oe = document.createElement('div')
  oe.classList.add("container");
  oe.innerHTML = `<div class="card mb-3" id='iso'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${tertyoT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='thirtyone' >${tertyoT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${tertyoD}</p>
      <p class="card-text">${tertyop}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let thirtyone = document.getElementById('thirtyone');
    let iso = document.getElementById('iso');
    //  console.log(ko);
     if (thirtyone.innerText  = "null") {
      iso.classList.add('remove')
      iso.classList.remove('mb-3')

     if (tertyoT.valueOf()){
      iso.classList.remove('remove')
      iso.classList.add('mb-3')
      thirtyone.innerText = `${tertyoT.valueOf()}` 
    }
     }
  }, 1);

  let tertytT =  localStorage.getItem('tertytT')
  let tertytD =  localStorage.getItem('tertytD')
  let tertytp =  localStorage.getItem('tertytp')



  let o = document.createElement('div')
  o.classList.add("container");
  o.innerHTML = `<div class="card mb-3" id='ios'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${tertytT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='thirtytwo' >${tertytT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${tertytD}</p>
      <p class="card-text">${tertytp}</p>
    </div>
  </div>
  </div>
  </div>`;



  let tertyfT =  localStorage.getItem('tertyfT')
  let tertyfD =  localStorage.getItem('tertyfD')
  let tertyfp =  localStorage.getItem('tertyfp')

  setTimeout(() => {
    let thirtytwo = document.getElementById('thirtytwo');
    let ios = document.getElementById('ios');
    //  console.log(ko);
     if (thirtytwo.innerText  = "null") {
      ios.classList.add('remove')
      ios.classList.remove('mb-3')

     if (tertytT.valueOf()){
      ios.classList.remove('remove')
      ios.classList.add('mb-3')
      thirtytwo.innerText = `${tertytT.valueOf()}` 
    }
     }
  }, 1);


  let op = document.createElement('div')
  op.classList.add("container");
  op.innerHTML = `<div class="card mb-3" id='oi'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${tertyfT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='thirtythere'  >${tertyfT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${tertyfD}</p>
      <p class="card-text">${tertyfp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let thirtythere = document.getElementById('thirtythere');
    let oi = document.getElementById('oi');
    //  console.log(ko);
     if (thirtythere.innerText  = "null") {
      oi.classList.add('remove')
      oi.classList.remove('mb-3')

     if (tertyfT.valueOf()){
      oi.classList.remove('remove')
      oi.classList.add('mb-3')
      thirtythere.innerText = `${tertyfT.valueOf()}` 
    }
     }
  }, 1);


  let tertyfiT =  localStorage.getItem('tertyfiT')
  let tertyfiD =  localStorage.getItem('tertyfiD')
  let tertyfip =  localStorage.getItem('tertyfip')





  let po = document.createElement('div')
  po.classList.add("container");
  po.innerHTML = `<div class="card mb-3" id='pooo'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${tertyfiT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='thirtyfour'  >${tertyfiT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${tertyfiD}</p>
      <p class="card-text">${tertyfip}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let thirtyfour = document.getElementById('thirtyfour');
    let pooo = document.getElementById('pooo');
    //  console.log(ko);
     if (thirtyfour.innerText  = "null") {
      pooo.classList.add('remove')
      pooo.classList.remove('mb-3')

     if (tertyfiT.valueOf()){
      pooo.classList.remove('remove')
      pooo.classList.add('mb-3')
      thirtyfour.innerText = `${tertyfiT.valueOf()}` 
    }
     }
  }, 1);




  let tertysT =  localStorage.getItem('tertysT')
  let tertysD =  localStorage.getItem('tertysD')
  let tertysp =  localStorage.getItem('tertysp')



  let poo = document.createElement('div')
  poo.classList.add("container");
  poo.innerHTML = `<div class="card mb-3" id='xs'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${tertysT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='thirtyfive' >${tertysT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${tertysD}</p>
      <p class="card-text">${tertysp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let thirtyfive = document.getElementById('thirtyfive');
    let xs = document.getElementById('xs');
    //  console.log(ko);
     if (thirtyfive.innerText  = "null") {
      xs.classList.add('remove')
      xs.classList.remove('mb-3')

     if (tertysT.valueOf()){
      xs.classList.remove('remove')
      xs.classList.add('mb-3')
      thirtyfive.innerText = `${tertysT.valueOf()}` 
    }
     }
  }, 1);



  let tertyseT =  localStorage.getItem('tertyseT')
  let tertyseD =  localStorage.getItem('tertyseD')
  let tertysep =  localStorage.getItem('tertysep')




  let opo = document.createElement('div')
  opo.classList.add("container");
  opo.innerHTML = `<div class="card mb-3" id='ol'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${tertyseT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='thirtysix'  >${tertyseT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${tertyseD}</p>
      <p class="card-text">${tertysep}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let thirtysix = document.getElementById('thirtysix');
    let ol = document.getElementById('ol');
    //  console.log(ko);
     if (thirtysix.innerText  = "null") {
      ol.classList.add('remove')
      ol.classList.remove('mb-3')

     if (tertyseT.valueOf()){
      ol.classList.remove('remove')
      ol.classList.add('mb-3')
      thirtysix.innerText = `${tertyseT.valueOf()}` 
    }
     }
  }, 1);



  let tertyeT =  localStorage.getItem('tertyeT')
  let tertyeD =  localStorage.getItem('tertyeD')
  let tertyep =  localStorage.getItem('tertyep')




  let opoo = document.createElement('div')
  opoo.classList.add("container");
  opoo.innerHTML = `<div class="card mb-3" id='human'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${tertyeT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='thirtyseven' >${tertyeT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${tertyeD}</p>
      <p class="card-text">${tertyep}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let thirtyseven = document.getElementById('thirtyseven');
    let human = document.getElementById('human');
    //  console.log(ko);
     if (thirtyseven.innerText  = "null") {
      human.classList.add('remove')
      human.classList.remove('mb-3')

     if (tertyeT.valueOf()){
      human.classList.remove('remove')
      human.classList.add('mb-3')
      thirtyseven.innerText = `${tertyeT.valueOf()}` 
    }
     }
  }, 1);

  let tertyneT =  localStorage.getItem('tertyneT')
  let tertyneD =  localStorage.getItem('tertyneD')
  let tertynep =  localStorage.getItem('tertynep')



  let oopo = document.createElement('div')
  oopo.classList.add("container");
  oopo.innerHTML = `<div class="card mb-3" id='vg'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${tertyneT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='thirtyeight'  >${tertyneT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${tertyneD}</p>
      <p class="card-text">${tertynep}</p>
    </div>
  </div>
  </div>
  </div>`;


  setTimeout(() => {
    let thirtyeight = document.getElementById('thirtyeight');
    let vg = document.getElementById('vg');
    //  console.log(ko);
     if (thirtyeight.innerText  = "null") {
      vg.classList.add('remove')
      vg.classList.remove('mb-3')

     if (tertyneT.valueOf()){
      vg.classList.remove('remove')
      vg.classList.add('mb-3')
      thirtyeight.innerText = `${tertyneT.valueOf()}` 
    }
     }
  }, 1);

  let fourtyT =  localStorage.getItem('fourtyT')
  let fourtyD =  localStorage.getItem('fourtyD')
  let fourtyp =  localStorage.getItem('fourtyp')



  let ooop = document.createElement('div')
  ooop.classList.add("container");
  ooop.innerHTML = `<div class="card mb-3" id='fg'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${fourtyT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='fourtytwo' >${fourtyT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
     <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${fourtyD}</p>
      <p class="card-text">${fourtyp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let fourtytwo = document.getElementById('fourtytwo');
    let fg = document.getElementById('fg');
    //  console.log(ko);
     if (fourtytwo.innerText  = "null") {
      fg.classList.add('remove')
      fg.classList.remove('mb-3')

     if (fourtyT.valueOf()){
      fg.classList.remove('remove')
      fg.classList.add('mb-3')
      fourtytwo.innerText = `${fourtyT.valueOf()}` 
    }
     }
  }, 1);


  let fourtyoT =  localStorage.getItem('fourtyoT')
  let fourtyoD =  localStorage.getItem('fourtyoD')
  let fourtyop =  localStorage.getItem('fourtyop')




  let ooo = document.createElement('div')
  ooo.classList.add("container");
  ooo.innerHTML = `<div class="card mb-3" id='per'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${fourtyoT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='thirtynine' >${fourtyoT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${fourtyoD}</p>
      <p class="card-text">${fourtyop}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let thirtynine = document.getElementById('thirtynine');
    let per = document.getElementById('per');
    //  console.log(ko);
     if (thirtynine.innerText  = "null") {
      per.classList.add('remove')
      per.classList.remove('mb-3')

     if (fourtyoT.valueOf()){
      per.classList.remove('remove')
      per.classList.add('mb-3')
      thirtynine.innerText = `${fourtyoT.valueOf()}` 
    }
     }
  }, 1);


  let fourtytT =  localStorage.getItem('fourtytT')
  let fourtytD =  localStorage.getItem('fourtytD')
  let fourtytp =  localStorage.getItem('fourtytp')



  let oo = document.createElement('div')
  oo.classList.add("container");
  oo.innerHTML = `<div class="card mb-3" id='lasted'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="./img/${fourtytT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
    <h5 class="card-title" id='fourty' >${fourtytT}</h5>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
  </div>
      <p class="card-text">${fourtytD}</p>
      <p class="card-text">${fourtytp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let fourty = document.getElementById('fourty');
    let lasted = document.getElementById('lasted');
    //  console.log(ko);
     if (fourty.innerText  = "null") {
      lasted.classList.add('remove')
      lasted.classList.remove('mb-3')

     if (fourtytT.valueOf()){
      lasted.classList.remove('remove')
      lasted.classList.add('mb-3')
      fourty.innerText = `${fourtytT.valueOf()}` 
    }
     }
  }, 1);

  let fourtytriT =  localStorage.getItem('fourtytriT')
  let fourtytriD =  localStorage.getItem('fourtytriD')
  let fourtytrip =  localStorage.getItem('fourtytrip')




  let os = document.createElement('div')
  os.classList.add("container");
  os.innerHTML = `<div class="card mb-3" id='delet'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
  
    <img src="./img/${fourtytriT}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='fourtyone'>${fourtytriT}</h5>
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${fourtytriD}</p>
      <p class="card-text">${fourtytrip}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let fourtyone = document.getElementById('fourtyone');
    let delet = document.getElementById('delet');
    //  console.log(ko);
     if (fourtyone.innerText  = "null") {
      delet.classList.add('remove')
      delet.classList.remove('mb-3')

     if (fourtytriT.valueOf()){
      delet.classList.remove('remove')
      delet.classList.add('mb-3')
      fourtyone.innerText = `${fourtytriT.valueOf()}` 
    }
     }
  }, 1);


    let shoppingCart = document.getElementById('shopping-cart');
    shoppingCart.appendChild(divi)
    shoppingCart.appendChild(dvd)
    shoppingCart.appendChild(div)
    shoppingCart.appendChild(dvdi)
    shoppingCart.appendChild(ddi)
    shoppingCart.appendChild(idd)
    shoppingCart.appendChild(iddd)
    shoppingCart.appendChild(didd)
    shoppingCart.appendChild(didid)
    shoppingCart.appendChild(didi)
    shoppingCart.appendChild(dii)
    shoppingCart.appendChild(iid)
    shoppingCart.appendChild(idi)
    shoppingCart.appendChild(id)
    shoppingCart.appendChild(iii)
    shoppingCart.appendChild(iie)
    shoppingCart.appendChild(iei)
    shoppingCart.appendChild(eii)
    shoppingCart.appendChild(uii)
    shoppingCart.appendChild(ii)
    shoppingCart.appendChild(iui)
    shoppingCart.appendChild(iiu)
    shoppingCart.appendChild(ee)
    shoppingCart.appendChild(eue)
    shoppingCart.appendChild(eie)
    shoppingCart.appendChild(eoe)
    shoppingCart.appendChild(oee)
    shoppingCart.appendChild(eeo)
    shoppingCart.appendChild(eo)
    shoppingCart.appendChild(oe)
    shoppingCart.appendChild(o)
    shoppingCart.appendChild(op)
    shoppingCart.appendChild(po)
    shoppingCart.appendChild(poo)
    shoppingCart.appendChild(opo)
    shoppingCart.appendChild(opoo)
    shoppingCart.appendChild(oopo)
    shoppingCart.appendChild(ooop)
    shoppingCart.appendChild(ooo)
    shoppingCart.appendChild(oo)
    shoppingCart.appendChild(os)

    // let g = document.getElementById('fl')

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
  function move() {
  
    let productnum = localStorage.getItem('cartnumber');
    productnum = JSON.parse(productnum);
    
    if(productnum){
      localStorage.setItem('cartnumber' , productnum - 1)
      document.querySelector('.span').textContent = productnum - 1
    }
    else{
      localStorage.setItem('cartnumber' , 1)
      document.querySelector('.span').textContent = 0
    }
}

  function onload() {
    let productnum = localStorage.getItem('cartnumber');
     if (productnum){
      document.querySelector('.span').textContent = productnum ;
       
     }
  }
  onload()

    let re = document.getElementById('delet')
    .addEventListener('click' , function(){
      console.log('ham');
      let ree = document.getElementById('delet')
      ree.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        ree.innerHTML= ""
        ree.classList.remove('card')
      }, 2000);
    })

    let rere = document.getElementById('lasted')
    .addEventListener('click' , function(){
      console.log('ham');
      let reee = document.getElementById('lasted')
      reee.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        reee.innerHTML= ""
        reee.classList.remove('card')
      }, 2000);
    })

    let per = document.getElementById('per')
    .addEventListener('click' , function(){
      console.log('ham');
      let r = document.getElementById('per')
      r.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        r.innerHTML= ""
        r.classList.remove('card')
      }, 2000);
    })

    let vg = document.getElementById('vg')
    .addEventListener('click' , function(){
      console.log('ham');
      let pr = document.getElementById('vg')
      pr.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        pr.innerHTML= ""
        pr.classList.remove('card')
      }, 2000);
    })

    let fg = document.getElementById('fg')
    .addEventListener('click' , function(){
      console.log('ham');
      let human = document.getElementById('fg')
      human.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        human.innerHTML= ""
        human.classList.remove('card')
      }, 2000);
    })
    let human = document.getElementById('human')
    .addEventListener('click' , function(){
      console.log('ham');
      let human = document.getElementById('human')
      human.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        human.innerHTML= ""
        human.classList.remove('card')
      }, 2000);
    })
    let ol = document.getElementById('ol')
    .addEventListener('click' , function(){
      console.log('ham');
      let ol = document.getElementById('ol')
      move()
      ol.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      setTimeout(() => {
        ol.innerHTML= ""
        ol.classList.remove('card')
      }, 2000);
    })
    let xs = document.getElementById('xs')
    .addEventListener('click' , function(){
      console.log('ham');
      let xs = document.getElementById('xs')
      xs.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        xs.innerHTML= ""
        xs.classList.remove('card')
      }, 2000);
    })
    let pooo = document.getElementById('pooo')
    .addEventListener('click' , function(){
      console.log('ham');
      let pooo = document.getElementById('pooo')
      pooo.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        pooo.innerHTML= ""
        pooo.classList.remove('card')
      }, 2000);
    })
    let oi = document.getElementById('oi')
    .addEventListener('click' , function(){
      console.log('ham');
      let oi = document.getElementById('oi')
      oi.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        oi.innerHTML= ""
        oi.classList.remove('card')
      }, 2000);
    })
    let ios = document.getElementById('ios')
    .addEventListener('click' , function(){
      console.log('ham');
      let ios = document.getElementById('ios')
      ios.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        ios.innerHTML= ""
        ios.classList.remove('card')
      }, 2000);
    })  
      let iso = document.getElementById('iso')
    .addEventListener('click' , function(){
      console.log('ham');
      let iso = document.getElementById('iso')
      iso.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        iso.innerHTML= ""
        iso.classList.remove('card')
      }, 2000);
    })
    let rp = document.getElementById('rp')
    .addEventListener('click' , function(){
      console.log('ham');
      let rp = document.getElementById('rp')
      rp.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        rp.innerHTML= ""
        rp.classList.remove('card')
      }, 2000);
    })
    let p = document.getElementById('p')
    .addEventListener('click' , function(){
      console.log('ham');
      let p = document.getElementById('p')
      p.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        p.innerHTML= ""
        p.classList.remove('card')
      }, 2000);
    })    
    let rpr = document.getElementById('rpr')
    .addEventListener('click' , function(){
      console.log('ham');
      let rpr = document.getElementById('rpr')
      rpr.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        rpr.innerHTML= ""
        rpr.classList.remove('card')
      }, 2000);
    })
    let la = document.getElementById('la')
    .addEventListener('click' , function(){
      console.log('ham');
      let la = document.getElementById('la')
      la.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        la.innerHTML= ""
        la.classList.remove('card')
      }, 2000);
    })
    let v = document.getElementById('v')
    .addEventListener('click' , function(){
      console.log('ham');
      let v = document.getElementById('v')
      v.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        v.innerHTML= ""
        v.classList.remove('card')
      }, 2000);
    })
    let b = document.getElementById('b')
    .addEventListener('click' , function(){
      console.log('ham');
      let b = document.getElementById('b')
      b.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        b.innerHTML= ""
        b.classList.remove('card')
      }, 2000);
    })
    let n = document.getElementById('n')
    .addEventListener('click' , function(){
      console.log('ham');
      let n = document.getElementById('n')
      n.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        n.innerHTML= ""
        n.classList.remove('card')
      }, 2000);
    })
    let m = document.getElementById('m')
    .addEventListener('click' , function(){
      console.log('ham');
      let m = document.getElementById('m')
      m.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        m.innerHTML= ""
        m.classList.remove('card')
      }, 2000);
    })



    let vv = document.getElementById('vv')
    .addEventListener('click' , function(){
      console.log('ham');
      let vv = document.getElementById('vv')
      vv.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        vv.innerHTML= ""
        vv.classList.remove('card')
      }, 2000);
    })
    let bb = document.getElementById('bb')
    .addEventListener('click' , function(){
      console.log('ham');
      let bb = document.getElementById('bb')
      bb.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        bb.innerHTML= ""
        bb.classList.remove('card')
      }, 2000);
    })
    let nn = document.getElementById('nn')
    .addEventListener('click' , function(){
      console.log('ham');
      let nn = document.getElementById('nn')
      nn.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        nn.innerHTML= ""
        nn.classList.remove('card')
      }, 2000);
    })
    let mm = document.getElementById('mm')
    .addEventListener('click' , function(){
      console.log('ham');
      let mm = document.getElementById('mm')
      mm.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        mm.innerHTML= ""
        mm.classList.remove('card')
      }, 2000);
    })
    let vvv = document.getElementById('vvv')
    .addEventListener('click' , function(){
      console.log('ham');
      let vvv = document.getElementById('vvv')
      vvv.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        vvv.innerHTML= ""
        vvv.classList.remove('card')
      }, 2000);
    })
    let bbb = document.getElementById('bbb')
    .addEventListener('click' , function(){
      console.log('ham');
      let bbb = document.getElementById('bbb')
      bbb.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        bbb.innerHTML= ""
        bbb.classList.remove('card')
      }, 2000);
    })
    let nnn = document.getElementById('nnn')
    .addEventListener('click' , function(){
      console.log('ham');
      let nnn = document.getElementById('nnn')
      nnn.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        nnn.innerHTML= ""
        nnn.classList.remove('card')
      }, 2000);
    })
    let mmm = document.getElementById('mmm')
    .addEventListener('click' , function(){
      console.log('ham');
      let mmm = document.getElementById('mmm')
      mmm.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        mmm.innerHTML= ""
        mmm.classList.remove('card')
      }, 2000);
    })
    let ccc = document.getElementById('ccc')
    .addEventListener('click' , function(){
      console.log('ham');
      let ccc = document.getElementById('ccc')
      ccc.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        ccc.innerHTML= ""
        ccc.classList.remove('card')
      }, 2000);
    })

    let d = document.getElementById('d')
    .addEventListener('click' , function(){
      console.log('ham');
      let d = document.getElementById('d')
      d.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        d.innerHTML= ""
        d.classList.remove('card')
      }, 2000);
    })
    let dd = document.getElementById('dd')
    .addEventListener('click' , function(){
      console.log('hamd');
      let dd = document.getElementById('dd')
      dd.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        dd.innerHTML= ""
        dd.classList.remove('card')
      }, 2000);
    })
    let ddd = document.getElementById('ddd')
    .addEventListener('click' , function(){
      console.log('ham');
      let ddd = document.getElementById('ddd')
      ddd.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        ddd.innerHTML= ""
        ddd.classList.remove('card')
      }, 2000);
    })
    let t = document.getElementById('t')
    .addEventListener('click' , function(){
      console.log('ham');
      let t = document.getElementById('t')
      t.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        t.innerHTML= ""
        t.classList.remove('card')
      }, 2000);
    })
    let tt = document.getElementById('tt')
    .addEventListener('click' , function(){
      console.log('ham');
      let tt = document.getElementById('tt')
      tt.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        tt.innerHTML= ""
        tt.classList.remove('card')
      }, 2000);
    })
    let hh = document.getElementById('hh')
    .addEventListener('click' , function(){
      console.log('ham');
      let hh = document.getElementById('hh')
      hh.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        hh.innerHTML= ""
        hh.classList.remove('card')
      }, 2000);
    })
    let hammad = document.getElementById('hammad')
    .addEventListener('click' , function(){
      console.log('ham');
      let hammad = document.getElementById('hammad')
      hammad.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        hammad.innerHTML= ""
        hammad.classList.remove('card')
      }, 2000);
    })
    let ff = document.getElementById('ff')
    .addEventListener('click' , function(){
      console.log('ham');
      let ff = document.getElementById('ff')
      ff.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        ff.innerHTML= ""
        ff.classList.remove('card')
      }, 2000);
    })

    let a = document.getElementById('a')
    .addEventListener('click' , function(){
      console.log('ham');
      let a = document.getElementById('a')
      a.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        a.innerHTML= ""
        a.classList.remove('card')
      }, 2000);
    })
    let s = document.getElementById('s')
    .addEventListener('click' , function(){
      console.log('ham');
      let s = document.getElementById('s')
      s.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        s.innerHTML= ""
        s.classList.remove('card')
      }, 2000);
    })
    let dr = document.getElementById('dr')
    .addEventListener('click' , function(){
      console.log('ham');
      let dr = document.getElementById('dr')
      dr.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        dr.innerHTML = ""
        dr.classList.remove('card')
      }, 2000);
     
    })
    let fl = document.getElementById('fl')
    .addEventListener('click' , function(){
      let fl = document.getElementById('fl')
      fl.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        fl.innerHTML= ""
        fl.classList.remove('card')
      }, 2000);
    })
