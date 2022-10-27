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
  <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
 }, 0);



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
     <h5 class="card-title" id="two">${title}</h5>
        <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  let two = document.getElementById('two');
  let ff = document.getElementById('ff');
  //  console.log(secr);
   if (two.innerText  = "null") {
    ff.classList.add('remove')
    ff.classList.remove('mb-3')

     if (title.valueOf()){
      ff.classList.remove('remove')
      ff.classList.add('mb-3')

      two.innerText = `${title.valueOf()}` 
    }
   }
}, 0);
   

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
        <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  //  console.log(secr);
   if (three.innerText  = "null") {
    dr.classList.add('remove')
    dr.classList.remove('mb-3')

     if (thridT.valueOf()){
      dr.classList.remove('remove')
      dr.classList.add('mb-3')

      three.innerText = `${thridT.valueOf()}` 
    }
   }
   


}, 0);

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
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
}, 0);

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
      <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
}, 0);

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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
}, 0);

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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
}, 0);


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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
}, 0);


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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
}, 0);



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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);

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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);

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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);


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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);


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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);

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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);
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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);


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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);

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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);

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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);

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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);

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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);


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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);
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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);

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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);

  
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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);


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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);


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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);

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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);
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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);
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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);

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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);


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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);


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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);




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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);



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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);



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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);

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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);

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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);


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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);


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
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);

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
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
  }, 0);
  let PHEASANTt = localStorage.getItem('PHEASANTt')
  let PHEASANTd = localStorage.getItem('PHEASANTd')
  let PHEASANTp = localStorage.getItem('PHEASANTp')

  let PHEASAN = document.createElement('div')
  PHEASAN.classList.add("container");
  PHEASAN.innerHTML = `<div class="card mb-3" id='PHEASAN'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
  
    <img src="../woman item/img/PHEASANTt.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='women'>${PHEASANTt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${PHEASANTd}</p>
      <p class="card-text">${PHEASANTp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let women = document.getElementById('women');
    let PHEASAN = document.getElementById('PHEASAN');
    //  console.log(ko);
     if (women.innerText  = "null") {
      PHEASAN.classList.add('remove')
      PHEASAN.classList.remove('mb-3')

     if (PHEASANTt.valueOf()){
      PHEASAN.classList.remove('remove')
      PHEASAN.classList.add('mb-3')
      women.innerText = `${PHEASANTt.valueOf()}` 
    }
     }
  }, 0);

  let MishitaEnterpriset = localStorage.getItem('MishitaEnterpriset')
  let MishitaEnterprised = localStorage.getItem('MishitaEnterprised')
  let MishitaEnterprisep = localStorage.getItem('MishitaEnterprisep')

  let MishitaEnterprise = document.createElement('div')
  MishitaEnterprise.classList.add("container");
  MishitaEnterprise.innerHTML = `<div class="card mb-3" id='Enterprise'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/Mishita Enterprise.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='Mishita'>${MishitaEnterpriset}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${MishitaEnterprised}</p>
      <p class="card-text">${MishitaEnterprisep}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let Mishita = document.getElementById('Mishita');
    let Enterprise = document.getElementById('Enterprise');
    //  console.log(ko);
     if (Mishita.innerText  = "null") {
      Enterprise.classList.add('remove')
      Enterprise.classList.remove('mb-3')

     if (MishitaEnterpriset.valueOf()){
      Enterprise.classList.remove('remove')
      Enterprise.classList.add('mb-3')
      Mishita.innerText = `${MishitaEnterpriset.valueOf()}` 
    }
     }
  }, 0);

  let PDCLOTHVILLAt = localStorage.getItem('PDCLOTHVILLAt')
  let PDCLOTHVILLAd = localStorage.getItem('PDCLOTHVILLAd')
  let PDCLOTHVILLAp = localStorage.getItem('PDCLOTHVILLAp')

  let PDCLOTHVILLA = document.createElement('div')
  PDCLOTHVILLA.classList.add("container");
  PDCLOTHVILLA.innerHTML = `<div class="card mb-3" id='cardhy'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/PD CLOTH VILLA.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='PDCLOTHVILLAtitle'>${PDCLOTHVILLAt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${PDCLOTHVILLAd}</p>
      <p class="card-text">${PDCLOTHVILLAp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let PDCLOTHVILLAtitle = document.getElementById('PDCLOTHVILLAtitle');
    let cardhy = document.getElementById('cardhy');
    //  console.log(ko);
     if (PDCLOTHVILLAtitle.innerText  = "null") {
      cardhy.classList.add('remove')
      cardhy.classList.remove('mb-3')

     if (PDCLOTHVILLAt.valueOf()){
      cardhy.classList.remove('remove')
      cardhy.classList.add('mb-3')
      PDCLOTHVILLAtitle.innerText = `${PDCLOTHVILLAt.valueOf()}` 
    }
     }
  }, 0);

  let OffirraInternationalt = localStorage.getItem('OffirraInternationalt')
  let OffirraInternationald = localStorage.getItem('OffirraInternationald')
  let OffirraInternationalp = localStorage.getItem('OffirraInternationalp')

  let OffirraInternational = document.createElement('div')
  OffirraInternational.classList.add("container");
  OffirraInternational.innerHTML = `<div class="card mb-3" id='cardtha'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/Offirra International.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='OffirraInternationaltitle'>${OffirraInternationalt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${OffirraInternationald}</p>
      <p class="card-text">${OffirraInternationalp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let OffirraInternationaltitle = document.getElementById('OffirraInternationaltitle');
    let cardtha = document.getElementById('cardtha');
    //  console.log(ko);
     if (OffirraInternationaltitle.innerText  = "null") {
      cardtha.classList.add('remove')
      cardtha.classList.remove('mb-3')

     if (OffirraInternationalt.valueOf()){
      cardtha.classList.remove('remove')
      cardtha.classList.add('mb-3')
      OffirraInternationaltitle.innerText = `${OffirraInternationalt.valueOf()}` 
    }
     }
  }, 0);

  let DulhanSareet = localStorage.getItem('DulhanSareet')
  let DulhanSareed = localStorage.getItem('DulhanSareed')
  let DulhanSareep = localStorage.getItem('DulhanSareep')

  let Dulhan = document.createElement('div')
  Dulhan.classList.add("container");
  Dulhan.innerHTML = `<div class="card mb-3" id='halim'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${DulhanSareet}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='lun'>${DulhanSareet}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${DulhanSareed}</p>
      <p class="card-text">${DulhanSareep}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let lun = document.getElementById('lun');
    let halim = document.getElementById('halim');
    //  console.log(ko);
     if (lun.innerText  = "null") {
      halim.classList.add('remove')
      halim.classList.remove('mb-3')

     if (DulhanSareet.valueOf()){
      halim.classList.remove('remove')
      halim.classList.add('mb-3')
      lun.innerText = `${DulhanSareet.valueOf()}` 
    }
     }
  }, 0);

  let Sirilt = localStorage.getItem('Sirilt')
  let Sirild = localStorage.getItem('Sirild')
  let Sirilp = localStorage.getItem('Sirilp')

  let Siril = document.createElement('div')
  Siril.classList.add("container");
  Siril.innerHTML = `<div class="card mb-3" id='malim'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${Sirilt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='pun'>${Sirilt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${Sirild}</p>
      <p class="card-text">${Sirilp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let pun = document.getElementById('pun');
    let malim = document.getElementById('malim');
    //  console.log(ko);
     if (pun.innerText  = "null") {
      malim.classList.add('remove')
      malim.classList.remove('mb-3')

     if (Sirilt.valueOf()){
      malim.classList.remove('remove')
      malim.classList.add('mb-3')
      pun.innerText = `${Sirilt.valueOf()}` 
    }
     }
  }, 0);

  let FAMOUSZONEt = localStorage.getItem('FAMOUSZONEt')
  let FAMOUSZONEd = localStorage.getItem('FAMOUSZONEd')
  let FAMOUSZONEp = localStorage.getItem('FAMOUSZONEp')

  let FAMOUSZONE = document.createElement('div')
  FAMOUSZONE.classList.add("container");
  FAMOUSZONE.innerHTML = `<div class="card mb-3" id='tum'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${FAMOUSZONEt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='hum'>${FAMOUSZONEt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${FAMOUSZONEd}</p>
      <p class="card-text">${FAMOUSZONEp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let hum = document.getElementById('hum');
    let tum = document.getElementById('tum');
    //  console.log(ko);
     if (hum.innerText  = "null") {
      tum.classList.add('remove')
      tum.classList.remove('mb-3')

     if (FAMOUSZONEt.valueOf()){
      tum.classList.remove('remove')
      tum.classList.add('mb-3')
      hum.innerText = `${FAMOUSZONEt.valueOf()}` 
    }
     }
  }, 0);

  let koijofashiont = localStorage.getItem('koijofashiont')
  let koijofashiond = localStorage.getItem('koijofashiond')
  let koijofashionp = localStorage.getItem('koijofashionp')

  let koijofashion = document.createElement('div')
  koijofashion.classList.add("container");
  koijofashion.innerHTML = `<div class="card mb-3" id='num'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${koijofashiont}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='boost'>${koijofashiont}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${koijofashiond}</p>
      <p class="card-text">${koijofashionp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let boost = document.getElementById('boost');
    let num = document.getElementById('num');
    //  console.log(ko);
     if (boost.innerText  = "null") {
      num.classList.add('remove')
      num.classList.remove('mb-3')

     if (koijofashiont.valueOf()){
      num.classList.remove('remove')
      num.classList.add('mb-3')
      boost.innerText = `${koijofashiont.valueOf()}` 
    }
     }
  }, 0);

  let bbellacreationt = localStorage.getItem('bbellacreationt')
  let bbellacreationd = localStorage.getItem('bbellacreationd')
  let bbellacreationp = localStorage.getItem('bbellacreationp')

  let mona = document.createElement('div')
  mona.classList.add("container");
  mona.innerHTML = `<div class="card mb-3" id='money'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${bbellacreationt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='pasiy'>${bbellacreationt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${bbellacreationd}</p>
      <p class="card-text">${bbellacreationp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let pasiy = document.getElementById('pasiy');
    let money = document.getElementById('money');
    //  console.log(ko);
     if (pasiy.innerText  = "null") {
      money.classList.add('remove')
      money.classList.remove('mb-3')

     if (bbellacreationt.valueOf()){
      money.classList.remove('remove')
      money.classList.add('mb-3')
      pasiy.innerText = `${bbellacreationt.valueOf()}` 
    }
     }
  }, 0)
  let CuteAngelst = localStorage.getItem('CuteAngelst')
  let CuteAngelsd = localStorage.getItem('CuteAngelsd')
  let CuteAngelsp = localStorage.getItem('CuteAngelsp')

  let shona = document.createElement('div')
  shona.classList.add("container");
  shona.innerHTML = `<div class="card mb-3" id='mone'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${CuteAngelst}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='pasi'>${CuteAngelst}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${CuteAngelsd}</p>
      <p class="card-text">${CuteAngelsp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let pasi = document.getElementById('pasi');
    let mone = document.getElementById('mone');
    //  console.log(ko);
     if (pasi.innerText  = "null") {
      mone.classList.add('remove')
      mone.classList.remove('mb-3')

     if (CuteAngelst.valueOf()){
      mone.classList.remove('remove')
      mone.classList.add('mb-3')
      pasi.innerText = `${CuteAngelst.valueOf()}` 
    }
     }
  }, 0)

  let Solidt = localStorage.getItem('Solidt')
  let Solidd = localStorage.getItem('Solidd')
  let Solidp = localStorage.getItem('Solidp')
  
  let bin = document.createElement('div')
  bin.classList.add("container");
  bin.innerHTML = `<div class="card mb-3" id='oyon'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${Solidt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='masi'>${Solidt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${Solidd}</p>
      <p class="card-text">${Solidp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let masi = document.getElementById('masi');
    let oyon = document.getElementById('oyon');
    //  console.log(ko);
     if (masi.innerText  = "null") {
      oyon.classList.add('remove')
      oyon.classList.remove('mb-3')

     if (Solidt.valueOf()){
      oyon.classList.remove('remove')
      oyon.classList.add('mb-3')
      masi.innerText = `${Solidt.valueOf()}` 
    }
     }
  }, 0)

  let ICONHALLt = localStorage.getItem('ICONHALLt')
  let ICONHALLd = localStorage.getItem('ICONHALLd')
  let ICONHALLp = localStorage.getItem('ICONHALLp')

  let pin = document.createElement('div')
  pin.classList.add("container");
  pin.innerHTML = `<div class="card mb-3" id='poyon'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${ICONHALLt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='uasi'>${ICONHALLt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${ICONHALLd}</p>
      <p class="card-text">${ICONHALLp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let uasi = document.getElementById('uasi');
    let poyon = document.getElementById('poyon');
    //  console.log(ko);
     if (uasi.innerText  = "null") {
      poyon.classList.add('remove')
      poyon.classList.remove('mb-3')

     if (ICONHALLt.valueOf()){
      poyon.classList.remove('remove')
      poyon.classList.add('mb-3')
      uasi.innerText = `${ICONHALLt.valueOf()}` 
    }
     }
  }, 0)

  let Frockt = localStorage.getItem('Frockt')
  let Frockd = localStorage.getItem('Frockd')
  let Frockp = localStorage.getItem('Frockp')

  let unik = document.createElement('div')
  unik.classList.add("container");
  unik.innerHTML = `<div class="card mb-3" id='loyon'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${Frockt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='basi'>${Frockt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${Frockd}</p>
      <p class="card-text">${Frockp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let basi = document.getElementById('basi');
    let loyon = document.getElementById('loyon');
    //  console.log(ko);
     if (basi.innerText  = "null") {
      loyon.classList.add('remove')
      loyon.classList.remove('mb-3')

     if (Frockt.valueOf()){
      loyon.classList.remove('remove')
      loyon.classList.add('mb-3')
      basi.innerText = `${Frockt.valueOf()}` 
    }
     }
  }, 0)

  let SHARVIt = localStorage.getItem('SHARVIt')
  let SHARVId = localStorage.getItem('SHARVId')
  let SHARVIp = localStorage.getItem('SHARVIp')

  let uniktha = document.createElement('div')
  uniktha.classList.add("container");
  uniktha.innerHTML = `<div class="card mb-3" id='aoyon'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${SHARVIt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='asi'>${SHARVIt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${SHARVId}</p>
      <p class="card-text">${SHARVIp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let asi = document.getElementById('asi');
    let aoyon = document.getElementById('aoyon');
    //  console.log(ko);
     if (asi.innerText  = "null") {
      aoyon.classList.add('remove')
      aoyon.classList.remove('mb-3')

     if (SHARVIt.valueOf()){
      aoyon.classList.remove('remove')
      aoyon.classList.add('mb-3')
      asi.innerText = `${SHARVIt.valueOf()}` 
    }
     }
  }, 0)
  let Vaimiyat = localStorage.getItem('Vaimiyat')
  let Vaimiyad = localStorage.getItem('Vaimiyad')
  let Vaimiyap = localStorage.getItem('Vaimiyap')

  let unikthaabnha = document.createElement('div')
  unikthaabnha.classList.add("container");
  unikthaabnha.innerHTML = `<div class="card mb-3" id='koyon'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${Vaimiyat}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='sia'>${Vaimiyat}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${Vaimiyad}</p>
      <p class="card-text">${Vaimiyap}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let sia = document.getElementById('sia');
    let koyon = document.getElementById('koyon');
    //  console.log(ko);
     if (sia.innerText  = "null") {
      koyon.classList.add('remove')
      koyon.classList.remove('mb-3')

     if (Vaimiyat.valueOf()){
      koyon.classList.remove('remove')
      koyon.classList.add('mb-3')
      sia.innerText = `${Vaimiyat.valueOf()}` 
    }
     }
  }, 0)
  let AnnshApparelt = localStorage.getItem('AnnshApparelt')
  let AnnshAppareld = localStorage.getItem('AnnshAppareld')
  let AnnshApparelp = localStorage.getItem('AnnshApparelp')
  
  let unk = document.createElement('div')
  unk.classList.add("container");
  unk.innerHTML = `<div class="card mb-3" id='yonal'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${AnnshApparelt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='pas'>${AnnshApparelt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${AnnshAppareld}</p>
      <p class="card-text">${AnnshApparelp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let pas = document.getElementById('pas');
    let yonal = document.getElementById('yonal');
    //  console.log(ko);
     if (pas.innerText  = "null") {
      yonal.classList.add('remove')
      yonal.classList.remove('mb-3')

     if (AnnshApparelt.valueOf()){
      yonal.classList.remove('remove')
      yonal.classList.add('mb-3')
      pas.innerText = `${AnnshApparelt.valueOf()}` 
    }
     }
  }, 0)

  let skyasiat = localStorage.getItem('skyasiat')
  let skyasiad = localStorage.getItem('skyasiad')
  let skyasiap = localStorage.getItem('skyasiap')

  let unside = document.createElement('div')
  unside.classList.add("container");
  unside.innerHTML = `<div class="card mb-3" id='yona'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${skyasiat}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='pasnhi'>${skyasiat}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${skyasiad}</p>
      <p class="card-text">${skyasiap}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let pasnhi = document.getElementById('pasnhi');
    let yona = document.getElementById('yona');
    //  console.log(ko);
     if (pasnhi.innerText  = "null") {
      yona.classList.add('remove')
      yona.classList.remove('mb-3')

     if (skyasiat.valueOf()){
      yona.classList.remove('remove')
      yona.classList.add('mb-3')
      pasnhi.innerText = `${skyasiat.valueOf()}` 
    }
     }
  }, 0)

  let PINKSHARVIt = localStorage.getItem('PINKSHARVIt')
  let PINKSHARVId = localStorage.getItem('PINKSHARVId')
  let PINKSHARVIp = localStorage.getItem('PINKSHARVIp')

  let unsidehy = document.createElement('div')
  unsidehy.classList.add("container");
  unsidehy.innerHTML = `<div class="card mb-3" id='ona'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${PINKSHARVIt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='pasthy'>${PINKSHARVIt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${PINKSHARVId}</p>
      <p class="card-text">${PINKSHARVIp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let pasthy = document.getElementById('pasthy');
    let ona = document.getElementById('ona');
    //  console.log(ko);
     if (pasthy.innerText  = "null") {
      ona.classList.add('remove')
      ona.classList.remove('mb-3')

     if (PINKSHARVIt.valueOf()){
      ona.classList.remove('remove')
      ona.classList.add('mb-3')
      pasthy.innerText = `${PINKSHARVIt.valueOf()}` 
    }
     }
  }, 0)
  let pidert = localStorage.getItem('pidert')
  let piderd = localStorage.getItem('piderd')
  let piderp = localStorage.getItem('piderp')

  let unsidetha = document.createElement('div')
  unsidetha.classList.add("container");
  unsidetha.innerHTML = `<div class="card mb-3" id='nana'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${pidert}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='pasnananana'>${pidert}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${piderd}</p>
      <p class="card-text">${piderp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let pasnananana = document.getElementById('pasnananana');
    let nana = document.getElementById('nana');
    //  console.log(ko);
     if (pasnananana.innerText  = "null") {
      nana.classList.add('remove')
      nana.classList.remove('mb-3')

     if (pidert.valueOf()){
      nana.classList.remove('remove')
      nana.classList.add('mb-3')
      pasnananana.innerText = `${pidert.valueOf()}` 
    }
     }
  }, 0)

  let RudraFashionMartt = localStorage.getItem('RudraFashionMartt')
  let RudraFashionMartd = localStorage.getItem('RudraFashionMartd')
  let RudraFashionMartp = localStorage.getItem('RudraFashionMartp')

  let nhihai = document.createElement('div')
  nhihai.classList.add("container");
  nhihai.innerHTML = `<div class="card mb-3" id='carthana'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${RudraFashionMartt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='keloooo'>${RudraFashionMartt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${RudraFashionMartd}</p>
      <p class="card-text">${RudraFashionMartp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let keloooo = document.getElementById('keloooo');
    let carthana = document.getElementById('carthana');
    //  console.log(ko);
     if (keloooo.innerText  = "null") {
      carthana.classList.add('remove')
      carthana.classList.remove('mb-3')

     if (RudraFashionMartt.valueOf()){
      carthana.classList.remove('remove')
      carthana.classList.add('mb-3')
      keloooo.innerText = `${RudraFashionMartt.valueOf()}` 
    }
     }
  }, 0)

  let SILAISTYLEt = localStorage.getItem('SILAISTYLEt')
  let SILAISTYLEd = localStorage.getItem('SILAISTYLEd')
  let SILAISTYLEp = localStorage.getItem('SILAISTYLEp')

  let hahahaha = document.createElement('div')
  hahahaha.classList.add("container");
  hahahaha.innerHTML = `<div class="card mb-3" id='tasla'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${SILAISTYLEt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='car'>${SILAISTYLEt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${SILAISTYLEd}</p>
      <p class="card-text">${SILAISTYLEp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let car = document.getElementById('car');
    let tasla = document.getElementById('tasla');
    //  console.log(ko);
     if (car.innerText  = "null") {
      tasla.classList.add('remove')
      tasla.classList.remove('mb-3')

     if (SILAISTYLEt.valueOf()){
      tasla.classList.remove('remove')
      tasla.classList.add('mb-3')
      car.innerText = `${SILAISTYLEt.valueOf()}` 
    }
     }
  }, 0)
  let JokerShoest = localStorage.getItem('JokerShoest')
  let JokerShoesd = localStorage.getItem('JokerShoesd')
  let JokerShoesp = localStorage.getItem('JokerShoesp')

  let ahahaha = document.createElement('div')
  ahahaha.classList.add("container");
  ahahaha.innerHTML = `<div class="card mb-3" id='Lamborghini'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${JokerShoest}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='diablo'>${JokerShoest}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${JokerShoesd}</p>
      <p class="card-text">${JokerShoesp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let diablo = document.getElementById('diablo');
    let Lamborghini = document.getElementById('Lamborghini');
    //  console.log(ko);
     if (diablo.innerText  = "null") {
      Lamborghini.classList.add('remove')
      Lamborghini.classList.remove('mb-3')

     if (JokerShoest.valueOf()){
      Lamborghini.classList.remove('remove')
      Lamborghini.classList.add('mb-3')
      diablo.innerText = `${JokerShoest.valueOf()}` 
    }
     }
  }, 0)
  let PurpleFlamingot = localStorage.getItem('PurpleFlamingot')
  let PurpleFlamingod = localStorage.getItem('PurpleFlamingod')
  let PurpleFlamingop = localStorage.getItem('PurpleFlamingop')

  let hahaha = document.createElement('div')
  hahaha.classList.add("container");
  hahaha.innerHTML = `<div class="card mb-3" id='Ford'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${PurpleFlamingot}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='Raptor'>${PurpleFlamingot}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${PurpleFlamingod}</p>
      <p class="card-text">${PurpleFlamingop}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let Raptor = document.getElementById('Raptor');
    let Ford = document.getElementById('Ford');
    //  console.log(ko);
     if (Raptor.innerText  = "null") {
      Ford.classList.add('remove')
      Ford.classList.remove('mb-3')

     if (PurpleFlamingot.valueOf()){
      Ford.classList.remove('remove')
      Ford.classList.add('mb-3')
      Raptor.innerText = `${PurpleFlamingot.valueOf()}` 
    }
     }
  }, 0.1)

  let WONDERNATIONt = localStorage.getItem('WONDERNATIONt')
  let WONDERNATIONd = localStorage.getItem('WONDERNATIONd')
  let WONDERNATIONp = localStorage.getItem('WONDERNATIONp')

  let ahaha = document.createElement('div')
  ahaha.classList.add("container");
  ahaha.innerHTML = `<div class="card mb-3" id='Ferrari'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${WONDERNATIONt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='Testarossa'>${WONDERNATIONt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${WONDERNATIONd}</p>
      <p class="card-text">${WONDERNATIONp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let Testarossa = document.getElementById('Testarossa');
    let Ferrari = document.getElementById('Ferrari');
    //  console.log(ko);
     if (Testarossa.innerText  = "null") {
      Ferrari.classList.add('remove')
      Ferrari.classList.remove('mb-3')

     if (WONDERNATIONt.valueOf()){
      Ferrari.classList.remove('remove')
      Ferrari.classList.add('mb-3')
      Testarossa.innerText = `${WONDERNATIONt.valueOf()}` 
    }
     }
  }, 0.1)

  let SPPIFt = localStorage.getItem('SPPIFt')
  let SPPIFd = localStorage.getItem('SPPIFd')
  let SPPIFp = localStorage.getItem('SPPIFp')

  let haha = document.createElement('div')
  haha.classList.add("container");
  haha.innerHTML = `<div class="card mb-3" id='Jensen'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${SPPIFt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='Interceptor'>${SPPIFt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${SPPIFd}</p>
      <p class="card-text">${SPPIFp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let Interceptor = document.getElementById('Interceptor');
    let Jensen = document.getElementById('Jensen');
    //  console.log(ko);
     if (Interceptor.innerText  = "null") {
      Jensen.classList.add('remove')
      Jensen.classList.remove('mb-3')

     if (SPPIFt.valueOf()){
      Jensen.classList.remove('remove')
      Jensen.classList.add('mb-3')
      Interceptor.innerText = `${SPPIFt.valueOf()}` 
    }
     }
  }, 0.1)
  let RedMistot = localStorage.getItem('RedMistot')
  let RedMistod = localStorage.getItem('RedMistod')
  let RedMistop = localStorage.getItem('RedMistop')
 
  let aha = document.createElement('div')
  aha.classList.add("container");
  aha.innerHTML = `<div class="card mb-3" id='Jeep'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${RedMistot}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='Gladiator'>${RedMistot}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${RedMistod}</p>
      <p class="card-text">${RedMistop}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let Gladiator = document.getElementById('Gladiator');
    let Jeep = document.getElementById('Jeep');
    //  console.log(ko);
     if (Gladiator.innerText  = "null") {
      Jeep.classList.add('remove')
      Jeep.classList.remove('mb-3')

     if (RedMistot.valueOf()){
      Jeep.classList.remove('remove')
      Jeep.classList.add('mb-3')
      Gladiator.innerText = `${RedMistot.valueOf()}` 
    }
     }
  }, 0.1)
  
  let Mistot = localStorage.getItem('Mistot')
  let Mistod = localStorage.getItem('Mistod')
  let Mistop = localStorage.getItem('Mistop')

  let  paha = document.createElement('div')
  paha.classList.add("container");
  paha.innerHTML = `<div class="card mb-3" id='Seat'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${Mistot}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='Tarraco'>${Mistot}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${Mistod}</p>
      <p class="card-text">${Mistop}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let Tarraco = document.getElementById('Tarraco');
    let Seat = document.getElementById('Seat');
    //  console.log(ko);
     if (Tarraco.innerText  = "null") {
      Seat.classList.add('remove')
      Seat.classList.remove('mb-3')

     if (Mistot.valueOf()){
      Seat.classList.remove('remove')
      Seat.classList.add('mb-3')
      Tarraco.innerText = `${Mistot.valueOf()}` 
    }
     }
  }, 0.1)

  let TIMEXt = localStorage.getItem('TIMEXt')
  let TIMEXd = localStorage.getItem('TIMEXd')
  let TIMEXp = localStorage.getItem('TIMEXp')

  let pahap = document.createElement('div')
  pahap.classList.add("container");
  pahap.innerHTML = `<div class="card mb-3" id='Rolls'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${TIMEXt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='Royce'>${TIMEXt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${TIMEXd}</p>
      <p class="card-text">${TIMEXp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let Royce = document.getElementById('Royce');
    let Rolls = document.getElementById('Rolls');
    //  console.log(ko);
     if (Royce.innerText  = "null") {
      Rolls.classList.add('remove')
      Rolls.classList.remove('mb-3')

     if (TIMEXt.valueOf()){
      Rolls.classList.remove('remove')
      Rolls.classList.add('mb-3')
      Royce.innerText = `${TIMEXt.valueOf()}` 
    }
     }
  }, 0.1)

  
  let MarieClairet = localStorage.getItem('MarieClairet')
  let MarieClaired = localStorage.getItem('MarieClaired')
  let MarieClairep = localStorage.getItem('MarieClairep')

  let paap = document.createElement('div')
  paap.classList.add("container");
  paap.innerHTML = `<div class="card mb-3" id='Shopping'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${MarieClairet}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='world'>${MarieClairet}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${MarieClaired}</p>
      <p class="card-text">${MarieClairep}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let world = document.getElementById('world');
    let Shopping = document.getElementById('Shopping');
    //  console.log(ko);
     if (world.innerText  = "null") {
      Shopping.classList.add('remove')
      Shopping.classList.remove('mb-3')

     if (MarieClairet.valueOf()){
      Shopping.classList.remove('remove')
      Shopping.classList.add('mb-3')
      world.innerText = `${MarieClairet.valueOf()}` 
    }
     }
  }, 0.1)

  
  let WHITEBIRDt = localStorage.getItem('WHITEBIRDt')
  let WHITEBIRDd = localStorage.getItem('WHITEBIRDd')
  let WHITEBIRDp = localStorage.getItem('WHITEBIRDp')

  let pap = document.createElement('div')
  pap.classList.add("container");
  pap.innerHTML = `<div class="card mb-3" id='Suzuki'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${WHITEBIRDt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='Samurai'>${WHITEBIRDt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${WHITEBIRDd}</p>
      <p class="card-text">${WHITEBIRDp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let Samurai = document.getElementById('Samurai');
    let Suzuki = document.getElementById('Suzuki');
    //  console.log(ko);
     if (Samurai.innerText  = "null") {
      Suzuki.classList.add('remove')
      Suzuki.classList.remove('mb-3')

     if (WHITEBIRDt.valueOf()){
      Suzuki.classList.remove('remove')
      Suzuki.classList.add('mb-3')
      Samurai.innerText = `${WHITEBIRDt.valueOf()}` 
    }
     }
  }, 0.1)

  let SONATAt = localStorage.getItem('SONATAt')
  let SONATAd = localStorage.getItem('SONATAd')
  let SONATAp = localStorage.getItem('SONATAp')


  let ppp = document.createElement('div')
  ppp.classList.add("container");
  ppp.innerHTML = `<div class="card mb-3" id='Beetle'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${SONATAt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='Volkswagen'>${SONATAt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${SONATAd}</p>
      <p class="card-text">${SONATAp}</p>
    </div>
  </div>
  </div>
  </div>`;

  setTimeout(() => {
    let Volkswagen = document.getElementById('Volkswagen');
    let Beetle = document.getElementById('Beetle');
    //  console.log(ko);
     if (Volkswagen.innerText  = "null") {
      Beetle.classList.add('remove')
      Beetle.classList.remove('mb-3')

     if (SONATAt.valueOf()){
      Beetle.classList.remove('remove')
      Beetle.classList.add('mb-3')
      Volkswagen.innerText = `${SONATAt.valueOf()}` 
    }
     }
  }, 0.1)

  
  
  
  let Marclext = localStorage.getItem('Marclext')
  let Marclexd = localStorage.getItem('Marclexd')
  let Marclexp = localStorage.getItem('Marclexp')

  let pppa = document.createElement('div')
  pppa.classList.add("container");
  pppa.innerHTML = `<div class="card mb-3" id='Echo'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${Marclext}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='Artemis'>${Marclext}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${Marclexd}</p>
      <p class="card-text">${Marclexp}</p>
    </div>
  </div>
  </div>
  </div>`;
  
  setTimeout(() => {
    let Artemis = document.getElementById('Artemis');
    let Echo = document.getElementById('Echo');
    //  console.log(ko);
     if (Artemis.innerText  = "null") {
      Echo.classList.add('remove')
      Echo.classList.remove('mb-3')

     if (Marclext.valueOf()){
      Echo.classList.remove('remove')
      Echo.classList.add('mb-3')
      Artemis.innerText = `${Marclext.valueOf()}` 
    }
     }
  }, 0.1)  
  
  let JohnPhillipst = localStorage.getItem('JohnPhillipst')
  let JohnPhillipsd = localStorage.getItem('JohnPhillipsd')
  let JohnPhillipsp = localStorage.getItem('JohnPhillipsp')

  let papp = document.createElement('div')
  papp.classList.add("container");
  papp.innerHTML = `<div class="card mb-3" id='Katana'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
  <img src="../woman item/img/${JohnPhillipst}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
  <h5 class="card-title" id='Nefertiti'>${JohnPhillipst}</h5>
  <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>
</div>
<p class="card-text">${JohnPhillipsd}</p>
      <p class="card-text">${JohnPhillipsp}</p>
      </div>
      </div>
  </div>
  </div>`;

  setTimeout(() => {
    let Nefertiti = document.getElementById('Nefertiti');
    let Katana = document.getElementById('Katana');
    //  console.log(ko);
     if (Nefertiti.innerText  = "null") {
      Katana.classList.add('remove')
      Katana.classList.remove('mb-3')

     if (JohnPhillipst.valueOf()){
      Katana.classList.remove('remove')
      Katana.classList.add('mb-3')
      Nefertiti.innerText = `${JohnPhillipst.valueOf()}` 
    }
     }
  }, 0.1) 
  
  let StylishParfumt = localStorage.getItem('StylishParfumt')
  let StylishParfumd = localStorage.getItem('StylishParfumd')
  let StylishParfump = localStorage.getItem('StylishParfump')

  let wow = document.createElement('div')
  wow.classList.add("container");
  wow.innerHTML = `<div class="card mb-3" id='Samsung'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../woman item/img/${StylishParfumt}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='Apple'>${StylishParfumt}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
       <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
</div>
      <p class="card-text">${StylishParfumd}</p>
      <p class="card-text">${StylishParfump}</p>
    </div>
    </div>
  </div>
  </div>`;

  setTimeout(() => {
    let Apple = document.getElementById('Apple');
    let Samsung = document.getElementById('Samsung');
    //  console.log(ko);
    if (Apple.innerText  = "null") {
      Samsung.classList.add('remove')
      Samsung.classList.remove('mb-3')
      
     if (StylishParfumt.valueOf()){
      Samsung.classList.remove('remove')
      Samsung.classList.add('mb-3')
      Apple.innerText = `${StylishParfumt.valueOf()}` 
    }
  }
}, 0.1) 

let Rizzlyt = localStorage.getItem('Rizzlyt')
let Rizzlyd = localStorage.getItem('Rizzlyd')
let Rizzlyp = localStorage.getItem('Rizzlyp')

let acha = document.createElement('div')
acha.classList.add("container");
acha.innerHTML = `<div class="card mb-3" id='laptop'  style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="../woman item/img/${Rizzlyt}.jpg" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
    <h5 class="card-title" id='Art'>${Rizzlyt}</h5>
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
</div>
    <p class="card-text">${Rizzlyd}</p>
    <p class="card-text">${Rizzlyp}</p>
  </div>
</div>
</div>
</div>`;

setTimeout(() => {
  let Art = document.getElementById('Art');
  let laptop = document.getElementById('laptop');
  //  console.log(ko);
   if (Art.innerText  = "null") {
    laptop.classList.add('remove')
    laptop.classList.remove('mb-3')

   if (Rizzlyt.valueOf()){
    laptop.classList.remove('remove')
    laptop.classList.add('mb-3')
    Art.innerText = `${Rizzlyt.valueOf()}` 
  }
   }
}, 0.1)  

let ForGirlst = localStorage.getItem('ForGirlst')
let ForGirlsd = localStorage.getItem('ForGirlsd')
let ForGirlsp = localStorage.getItem('ForGirlsp')

let achahai = document.createElement('div')
achahai.classList.add("container");
achahai.innerHTML = `<div class="card mb-3" id='laptoptha'  style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="../woman item/img/${ForGirlst}.jpg" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
    <h5 class="card-title" id='Arttha'>${ForGirlst}</h5>
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
</div>
    <p class="card-text">${ForGirlsd}</p>
    <p class="card-text">${ForGirlsp}</p>
  </div>
</div>
</div>
</div>`;

setTimeout(() => {
  let Arttha = document.getElementById('Arttha');
  let laptoptha = document.getElementById('laptoptha');
  //  console.log(ko);
   if (Arttha.innerText  = "null") {
    laptoptha.classList.add('remove')
    laptoptha.classList.remove('mb-3')

   if (ForGirlst.valueOf()){
    laptoptha.classList.remove('remove')
    laptoptha.classList.add('mb-3')
    Arttha.innerText = `${ForGirlst.valueOf()}` 
  }
   }
}, 0.1)  

let SingerSoloMachinet = localStorage.getItem('SingerSoloMachinet')
let SingerSoloMachined = localStorage.getItem('SingerSoloMachined')
let SingerSoloMachinep = localStorage.getItem('SingerSoloMachinep')

let attahai = document.createElement('div')
attahai.classList.add("container");
attahai.innerHTML = `<div class="card mb-3" id='laptophai'  style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="../electric itm/img/${SingerSoloMachinet}.jpg" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
    <h5 class="card-title" id='papappapapappa'>${SingerSoloMachinet}</h5>
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
</div>
    <p class="card-text">${SingerSoloMachined}</p>
    <p class="card-text">${SingerSoloMachinep}</p>
  </div>
</div>
</div>
</div>`;

setTimeout(() => {
  let papappapapappa = document.getElementById('papappapapappa');
  let laptophai = document.getElementById('laptophai');
  //  console.log(ko);
   if (papappapapappa.innerText  = "null") {
    laptophai.classList.add('remove')
    laptophai.classList.remove('mb-3')

   if (SingerSoloMachinet.valueOf()){
    laptophai.classList.remove('remove')
    laptophai.classList.add('mb-3')
    papappapapappa.innerText = `${SingerSoloMachinet.valueOf()}` 
  }
   }
}, 0.1)  

let AlhindMiniSewingt = localStorage.getItem('AlhindMiniSewingt')
let AlhindMiniSewingd = localStorage.getItem('AlhindMiniSewingd')
let AlhindMiniSewingp = localStorage.getItem('AlhindMiniSewingp')

let attanhihai = document.createElement('div')
attanhihai.classList.add("container");
attanhihai.innerHTML = `<div class="card mb-3" id='ooogi'  style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="../electric itm/img/${AlhindMiniSewingt}.jpg" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
    <h5 class="card-title" id='ophai'>${AlhindMiniSewingt}</h5>
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
</div>
    <p class="card-text">${AlhindMiniSewingd}</p>
    <p class="card-text">${AlhindMiniSewingp}</p>
  </div>
</div>
</div>
</div>`;

setTimeout(() => {
  let ophai = document.getElementById('ophai');
  let ooogi = document.getElementById('ooogi');
  //  console.log(ko);
   if (ophai.innerText  = "null") {
    ooogi.classList.add('remove')
    ooogi.classList.remove('mb-3')

   if (AlhindMiniSewingt.valueOf()){
    ooogi.classList.remove('remove')
    ooogi.classList.add('mb-3')
    ophai.innerText = `${AlhindMiniSewingt.valueOf()}` 
  }
   }
}, 0.1)  

let StitchFunctionst = localStorage.getItem('StitchFunctionst')
let StitchFunctionsd = localStorage.getItem('StitchFunctionsd')
let StitchFunctionsp = localStorage.getItem('StitchFunctionsp')

let ttata = document.createElement('div')
ttata.classList.add("container");
ttata.innerHTML = `<div class="card mb-3" id='oogi'  style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="../electric itm/img/${StitchFunctionst}.jpg" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
    <h5 class="card-title" id='ohai'>${StitchFunctionst}</h5>
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
</div>
    <p class="card-text">${StitchFunctionsd}</p>
    <p class="card-text">${StitchFunctionsp}</p>
  </div>
</div>
</div>
</div>`;

setTimeout(() => {
  let ohai = document.getElementById('ohai');
  let oogi = document.getElementById('oogi');
  //  console.log(ko);
   if (ohai.innerText  = "null") {
    oogi.classList.add('remove')
    oogi.classList.remove('mb-3')

   if (StitchFunctionst.valueOf()){
    oogi.classList.remove('remove')
    oogi.classList.add('mb-3')
    ohai.innerText = `${StitchFunctionst.valueOf()}` 
  }
   }
}, 0.1)  

let Iront = localStorage.getItem('Iront')
let Irond = localStorage.getItem('Irond')
let Ironp = localStorage.getItem('Ironp')

let Sony = document.createElement('div')
Sony.classList.add("container");
Sony.innerHTML = `<div class="card mb-3" id='pogi'  style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="../electric itm/img/${Iront}.jpg" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
    <h5 class="card-title" id='onahihai'>${Iront}</h5>
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
</div>
    <p class="card-text">${Irond}</p>
    <p class="card-text">${Ironp}</p>
  </div>
</div>
</div>
</div>`;

setTimeout(() => {
  let onahihai = document.getElementById('onahihai');
  let pogi = document.getElementById('pogi');
  //  console.log(ko);
   if (onahihai.innerText  = "null") {
    pogi.classList.add('remove')
    pogi.classList.remove('mb-3')

   if (Iront.valueOf()){
    pogi.classList.remove('remove')
    pogi.classList.add('mb-3')
    onahihai.innerText = `${Iront.valueOf()}` 
  }
   }
}, 0.1)  

let PinkIront = localStorage.getItem('PinkIront')
let PinkIrond = localStorage.getItem('PinkIrond')
let PinkIronp = localStorage.getItem('PinkIronp')

let YouTube = document.createElement('div')
YouTube.classList.add("container");
YouTube.innerHTML = `<div class="card mb-3" id='poki'  style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="../electric itm/img/${PinkIront}.jpg" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
    <h5 class="card-title" id='loki'>${PinkIront}</h5>
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
</div>
    <p class="card-text">${PinkIrond}</p>
    <p class="card-text">${PinkIronp}</p>
  </div>
</div>
</div>
</div>`;

setTimeout(() => {
  let loki = document.getElementById('loki');
  let poki = document.getElementById('poki');
  //  console.log(ko);
   if (loki.innerText  = "null") {
    poki.classList.add('remove')
    poki.classList.remove('mb-3')

   if (PinkIront.valueOf()){
    poki.classList.remove('remove')
    poki.classList.add('mb-3')
    loki.innerText = `${PinkIront.valueOf()}` 
  }
   }
}, 0.1)

let IronBlackColort = localStorage.getItem('IronBlackColort')
let IronBlackColord = localStorage.getItem('IronBlackColord')
let IronBlackColorp = localStorage.getItem('IronBlackColorp')

let Facebook = document.createElement('div')
Facebook.classList.add("container");
Facebook.innerHTML = `<div class="card mb-3" id='poti'  style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="../electric itm/img/${IronBlackColort}.jpg" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
    <h5 class="card-title" id='loya'>${IronBlackColort}</h5>
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
</div>
    <p class="card-text">${IronBlackColord}</p>
    <p class="card-text">${IronBlackColorp}</p>
  </div>
</div>
</div>
</div>`;

setTimeout(() => {
  let loya = document.getElementById('loya');
  let poti = document.getElementById('poti');
  //  console.log(ko);
   if (loya.innerText  = "null") {
    poti.classList.add('remove')
    poti.classList.remove('mb-3')

   if (IronBlackColort.valueOf()){
    poti.classList.remove('remove')
    poti.classList.add('mb-3')
    loya.innerText = `${IronBlackColort.valueOf()}` 
  }
   }
}, 0.1)

let Nokiat = localStorage.getItem('Nokiat')
let Nokiad = localStorage.getItem('Nokiad')
let Nokiap = localStorage.getItem('Nokiap')

let Twitter = document.createElement('div')
Twitter.classList.add("container");
Twitter.innerHTML = `<div class="card mb-3" id='pota'  style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="../electric itm/img/${Nokiat}.jpg" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
    <h5 class="card-title" id='loypa'>${Nokiat}</h5>
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
</div>
    <p class="card-text">${Nokiad}</p>
    <p class="card-text">${Nokiap}</p>
  </div>
</div>
</div>
</div>`;

setTimeout(() => {
  let loypa = document.getElementById('loypa');
  let pota = document.getElementById('pota');
  //  console.log(ko);
   if (loypa.innerText  = "null") {
    pota.classList.add('remove')
    pota.classList.remove('mb-3')

   if (Nokiat.valueOf()){
    pota.classList.remove('remove')
    pota.classList.add('mb-3')
    loypa.innerText = `${Nokiat.valueOf()}` 
  }
   }
}, 0.1)






let LGt = localStorage.getItem('LGt')
let LGd = localStorage.getItem('LGd')
let LGp = localStorage.getItem('LGp')

let Wikipedia = document.createElement('div')
Wikipedia.classList.add("container");
Wikipedia.innerHTML = `<div class="card mb-3" id='potesi'  style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="../electric itm/img/${LGt}.jpg" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
    <h5 class="card-title" id='lpmasoya'>${LGt}</h5>
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
</div>
    <p class="card-text">${LGd}</p>
    <p class="card-text">${LGp}</p>
  </div>
</div>
</div>
</div>`;

setTimeout(() => {
  let lpmasoya = document.getElementById('lpmasoya');
  let potesi = document.getElementById('potesi');
  //  console.log(ko);
   if (lpmasoya.innerText  = "null") {
    potesi.classList.add('remove')
    potesi.classList.remove('mb-3')

   if (LGt.valueOf()){
    potesi.classList.remove('remove')
    potesi.classList.add('mb-3')
    lpmasoya.innerText = `${LGt.valueOf()}` 
  }
   }
}, 0.1)


let SAMSUNGt = localStorage.getItem('SAMSUNGt')
let SAMSUNGd = localStorage.getItem('SAMSUNGd')
let SAMSUNGp = localStorage.getItem('SAMSUNGp')

let Amazon = document.createElement('div')
Amazon.classList.add("container");
Amazon.innerHTML = `<div class="card mb-3" id='jaldikar'  style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="../electric itm/img/${SAMSUNGt}.jpg" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
    <h5 class="card-title" id='ofofofo'>${SAMSUNGt}</h5>
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
</div>
    <p class="card-text">${SAMSUNGd}</p>
    <p class="card-text">${SAMSUNGp}</p>
  </div>
</div>
</div>
</div>`;

setTimeout(() => {
  let ofofofo = document.getElementById('ofofofo');
  let jaldikar = document.getElementById('jaldikar');
  //  console.log(ko);
   if (ofofofo.innerText  = "null") {
    jaldikar.classList.add('remove')
    jaldikar.classList.remove('mb-3')

   if (SAMSUNGt.valueOf()){
    jaldikar.classList.remove('remove')
    jaldikar.classList.add('mb-3')
    ofofofo.innerText = `${SAMSUNGt.valueOf()}` 
  }
   }
}, 0.1)


let BiggVacuumCleanert = localStorage.getItem('BiggVacuumCleanert')
let BiggVacuumCleanerd = localStorage.getItem('BiggVacuumCleanerd')
let BiggVacuumCleanerp = localStorage.getItem('BiggVacuumCleanerp')

let Google = document.createElement('div')
Google.classList.add("container");
Google.innerHTML = `<div class="card mb-3" id='jaldikarna'  style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="../electric itm/img/${BiggVacuumCleanert}.jpg" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
    <h5 class="card-title" id='ofoooofofo'>${BiggVacuumCleanert}</h5>
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
</div>
    <p class="card-text">${BiggVacuumCleanerd}</p>
    <p class="card-text">${BiggVacuumCleanerp}</p>
  </div>
</div>
</div>
</div>`;

setTimeout(() => {
  let ofoooofofo = document.getElementById('ofoooofofo');
  let jaldikarna = document.getElementById('jaldikarna');
  //  console.log(ko);
   if (ofoooofofo.innerText  = "null") {
    jaldikarna.classList.add('remove')
    jaldikarna.classList.remove('mb-3')

   if (BiggVacuumCleanert.valueOf()){
    jaldikarna.classList.remove('remove')
    jaldikarna.classList.add('mb-3')
    ofoooofofo.innerText = `${BiggVacuumCleanert.valueOf()}` 
  }
   }
}, 0.1)


let RoboticFloorCleanert = localStorage.getItem('RoboticFloorCleanert')
let RoboticFloorCleanerd = localStorage.getItem('RoboticFloorCleanerd')
let RoboticFloorCleanerp = localStorage.getItem('RoboticFloorCleanerp')


let Play = document.createElement('div')
Play.classList.add("container");
Play.innerHTML = `<div class="card mb-3" id='jaldikarnabhai'  style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="../electric itm/img/${RoboticFloorCleanert}.jpg" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
    <h5 class="card-title" id='ofoooofotuutufo'>${RoboticFloorCleanert}</h5>
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
</div>
    <p class="card-text">${RoboticFloorCleanerd}</p>
    <p class="card-text">${RoboticFloorCleanerp}</p>
  </div>
</div>
</div>
</div>`;

setTimeout(() => {
  let ofoooofotuutufo = document.getElementById('ofoooofotuutufo');
  let jaldikarnabhai = document.getElementById('jaldikarnabhai');
  //  console.log(ko);
   if (ofoooofotuutufo.innerText  = "null") {
    jaldikarnabhai.classList.add('remove')
    jaldikarnabhai.classList.remove('mb-3')

   if (RoboticFloorCleanert.valueOf()){
    jaldikarnabhai.classList.remove('remove')
    jaldikarnabhai.classList.add('mb-3')
    ofoooofotuutufo.innerText = `${RoboticFloorCleanert.valueOf()}` 
  }
   }
}, 0.1)

let VacuumCleanert = localStorage.getItem('VacuumCleanert')
let VacuumCleanerd = localStorage.getItem('VacuumCleanerd')
let VacuumCleanerp = localStorage.getItem('VacuumCleanerp')

let Instagram = document.createElement('div')
Instagram.classList.add("container");
Instagram.innerHTML = `<div class="card mb-3" id='realme'  style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="../electric itm/img/${VacuumCleanert}.jpg" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
    <h5 class="card-title" id='pad'>${VacuumCleanert}</h5>
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
</div>
    <p class="card-text">${VacuumCleanerd}</p>
    <p class="card-text">${VacuumCleanerp}</p>
  </div>
</div>
</div>
</div>`;

setTimeout(() => {
  let pad = document.getElementById('pad');
  let realme = document.getElementById('realme');
  //  console.log(ko);
   if (pad.innerText  = "null") {
    realme.classList.add('remove')
    realme.classList.remove('mb-3')

   if (VacuumCleanert.valueOf()){
    realme.classList.remove('remove')
    realme.classList.add('mb-3')
    pad.innerText = `${VacuumCleanert.valueOf()}` 
  }
   }
}, 0.1)


let AutomaticFant = localStorage.getItem('AutomaticFant')
let AutomaticFand = localStorage.getItem('AutomaticFand')
let AutomaticFanp = localStorage.getItem('AutomaticFanp')


let Netflix = document.createElement('div')
Netflix.classList.add("container");
Netflix.innerHTML = `<div class="card mb-3" id='realmee'  style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="../electric itm/img/${AutomaticFant}.jpg" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
  <div class="d-flex">
    <h5 class="card-title" id='padpad'>${AutomaticFant}</h5>
     <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
</div>
    <p class="card-text">${AutomaticFand}</p>
    <p class="card-text">${AutomaticFanp}</p>
  </div>
</div>
</div>
</div>`;

setTimeout(() => {
  let padpad = document.getElementById('padpad');
  let realmee = document.getElementById('realmee');
  //  console.log(ko);
   if (padpad.innerText  = "null") {
    realmee.classList.add('remove')
    realmee.classList.remove('mb-3')

   if (AutomaticFant.valueOf()){
    realmee.classList.remove('remove')
    realmee.classList.add('mb-3')
    padpad.innerText = `${AutomaticFant.valueOf()}` 
  }
   }
}, 0.1)


  let OrientElectricFant = localStorage.getItem('OrientElectricFant')
  let OrientElectricFand = localStorage.getItem('OrientElectricFand')
  let OrientElectricFanp = localStorage.getItem('OrientElectricFanp')
 

  let Netflixs = document.createElement('div')
  Netflixs.classList.add("container");
  Netflixs.innerHTML = `<div class="card mb-3" id='realmeee'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../electric itm/img/${OrientElectricFant}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='padpadd'>${OrientElectricFant}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
  </div>
      <p class="card-text">${OrientElectricFand}</p>
      <p class="card-text">${OrientElectricFanp}</p>
    </div>
  </div>
  </div>
  </div>`;
  
  setTimeout(() => {
    let padpadd = document.getElementById('padpadd');
    let realmeee = document.getElementById('realmeee');
    //  console.log(ko);
     if (padpadd.innerText  = "null") {
      realmeee.classList.add('remove')
      realmeee.classList.remove('mb-3')
  
     if (OrientElectricFant.valueOf()){
      realmeee.classList.remove('remove')
      realmeee.classList.add('mb-3')
      padpadd.innerText = `${OrientElectricFant.valueOf()}` 
    }
     }
  }, 0.1)



  let HomeTreeFant = localStorage.getItem('HomeTreeFant')
  let HomeTreeFand = localStorage.getItem('HomeTreeFand')
  let HomeTreeFanp = localStorage.getItem('HomeTreeFanp')
  

  let Netflixss = document.createElement('div')
  Netflixss.classList.add("container");
  Netflixss.innerHTML = `<div class="card mb-3" id='realmeeee'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../electric itm/img/${HomeTreeFant}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='padpaddd'>${HomeTreeFant}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
  </div>
      <p class="card-text">${HomeTreeFand}</p>
      <p class="card-text">${HomeTreeFanp}</p>
    </div>
  </div>
  </div>
  </div>`;
  
  setTimeout(() => {
    let padpaddd = document.getElementById('padpaddd');
    let realmeeee = document.getElementById('realmeeee');
    //  console.log(ko);
     if (padpaddd.innerText  = "null") {
      realmeeee.classList.add('remove')
      realmeeee.classList.remove('mb-3')
  
     if (HomeTreeFant.valueOf()){
      realmeeee.classList.remove('remove')
      realmeeee.classList.add('mb-3')
      padpaddd.innerText = `${HomeTreeFant.valueOf()}` 
    }
     }
  }, 0.1)

  let RefrigeratorSingleDoort = localStorage.getItem('RefrigeratorSingleDoort')
  let RefrigeratorSingleDoord = localStorage.getItem('RefrigeratorSingleDoord')
  let RefrigeratorSingleDoorp = localStorage.getItem('RefrigeratorSingleDoorp')
  
  let computer = document.createElement('div')
  computer.classList.add("container");
  computer.innerHTML = `<div class="card mb-3" id='realmeeeeee'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../electric itm/img/${RefrigeratorSingleDoort}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='padpadddd'>${RefrigeratorSingleDoort}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
  </div>
      <p class="card-text">${RefrigeratorSingleDoord}</p>
      <p class="card-text">${RefrigeratorSingleDoorp}</p>
    </div>
  </div>
  </div>
  </div>`;
  
  setTimeout(() => {
    let padpadddd = document.getElementById('padpadddd');
    let realmeeeeee = document.getElementById('realmeeeeee');
    //  console.log(ko);
     if (padpadddd.innerText  = "null") {
      realmeeeeee.classList.add('remove')
      realmeeeeee.classList.remove('mb-3')
  
     if (RefrigeratorSingleDoort.valueOf()){
      realmeeeeee.classList.remove('remove')
      realmeeeeee.classList.add('mb-3')
      padpadddd.innerText = `${RefrigeratorSingleDoort.valueOf()}` 
    }
     }
  }, 0.1)



  let RefrigeratorDoubleDoort = localStorage.getItem('RefrigeratorDoubleDoort')
  let RefrigeratorDoubleDoord = localStorage.getItem('RefrigeratorDoubleDoord')
  let RefrigeratorDoubleDoorp = localStorage.getItem('RefrigeratorDoubleDoorp')


  let programming = document.createElement('div')
  programming.classList.add("container");
  programming.innerHTML = `<div class="card mb-3" id='realmeeeee'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../electric itm/img/${RefrigeratorDoubleDoort}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='padpaddddd'>${RefrigeratorDoubleDoort}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
  </div>
      <p class="card-text">${RefrigeratorDoubleDoord}</p>
      <p class="card-text">${RefrigeratorDoubleDoorp}</p>
    </div>
  </div>
  </div>
  </div>`;
  
  setTimeout(() => {
    let padpaddddd = document.getElementById('padpaddddd');
    let realmeeeee = document.getElementById('realmeeeee');
    //  console.log(ko);
     if (padpaddddd.innerText  = "null") {
      realmeeeee.classList.add('remove')
      realmeeeee.classList.remove('mb-3')
  
     if (RefrigeratorDoubleDoort.valueOf()){
      realmeeeee.classList.remove('remove')
      realmeeeee.classList.add('mb-3')
      padpaddddd.innerText = `${RefrigeratorDoubleDoort.valueOf()}` 
    }
     }
  }, 0.1)


  let tripleDoort = localStorage.getItem('tripleDoort')
  let tripleDoord = localStorage.getItem('tripleDoord')
  let tripleDoorp = localStorage.getItem('tripleDoorp')


  let Professional = document.createElement('div')
  Professional.classList.add("container");
  Professional.innerHTML = `<div class="card mb-3" id='me'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../electric itm/img/${tripleDoort}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='ad'>${tripleDoort}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
  </div>
      <p class="card-text">${tripleDoord}</p>
      <p class="card-text">${tripleDoorp}</p>
    </div>
  </div>
  </div>
  </div>`;
  
  setTimeout(() => {
    let ad = document.getElementById('ad');
    let me = document.getElementById('me');
    //  console.log(ko);
     if (ad.innerText  = "null") {
      me.classList.add('remove')
      me.classList.remove('mb-3')
  
     if (tripleDoort.valueOf()){
      me.classList.remove('remove')
      me.classList.add('mb-3')
      ad.innerText = `${tripleDoort.valueOf()}` 
    }
     }
  }, 0.1)


  let LGOvent = localStorage.getItem('LGOvent')
  let LGOvend = localStorage.getItem('LGOvend')
  let LGOvenp = localStorage.getItem('LGOvenp')


  let Discussing = document.createElement('div')
  Discussing.classList.add("container");
  Discussing.innerHTML = `<div class="card mb-3" id='maa'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../electric itm/img/${LGOvent}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='addi'>${LGOvent}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
  </div>
      <p class="card-text">${LGOvend}</p>
      <p class="card-text">${LGOvenp}</p>
    </div>
  </div>
  </div>
  </div>`;
  
  setTimeout(() => {
    let addi = document.getElementById('addi');
    let maa = document.getElementById('maa');
    //  console.log(ko);
     if (addi.innerText  = "null") {
      maa.classList.add('remove')
      maa.classList.remove('mb-3')
  
     if (LGOvent.valueOf()){
      maa.classList.remove('remove')
      maa.classList.add('mb-3')
      addi.innerText = `${LGOvent.valueOf()}` 
    }
     }
  }, 0.1)

  let SoloMicrowavet = localStorage.getItem('SoloMicrowavet')
  let SoloMicrowaved = localStorage.getItem('SoloMicrowaved')
  let SoloMicrowavep = localStorage.getItem('SoloMicrowavep')

  let abandon = document.createElement('div')
  abandon.classList.add("container");
  abandon.innerHTML = `<div class="card mb-3" id='ability'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../electric itm/img/${SoloMicrowavet}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='tady'>${SoloMicrowavet}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
  </div>
      <p class="card-text">${SoloMicrowaved}</p>
      <p class="card-text">${SoloMicrowavep}</p>
    </div>
  </div>
  </div>
  </div>`;
  
  setTimeout(() => {
    let tady = document.getElementById('tady');
    let ability = document.getElementById('ability');
    //  console.log(ko);
     if (tady.innerText  = "null") {
      ability.classList.add('remove')
      ability.classList.remove('mb-3')
  
     if (SoloMicrowavet.valueOf()){
      ability.classList.remove('remove')
      ability.classList.add('mb-3')
      tady.innerText = `${SoloMicrowavet.valueOf()}` 
    }
     }
  }, 0.1)


  let MicrowaveOvent = localStorage.getItem('MicrowaveOvent')
  let MicrowaveOvend = localStorage.getItem('MicrowaveOvend')
  let MicrowaveOvenp = localStorage.getItem('MicrowaveOvenp')

  let able = document.createElement('div')
  able.classList.add("container");
  able.innerHTML = `<div class="card mb-3" id='Vocabulary'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../electric itm/img/${MicrowaveOvent}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='pady'>${MicrowaveOvent}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
  </div>
      <p class="card-text">${MicrowaveOvend}</p>
      <p class="card-text">${MicrowaveOvenp}</p>
    </div>
  </div>
  </div>
  </div>`;
  
  setTimeout(() => {
    let pady = document.getElementById('pady');
    let Vocabulary = document.getElementById('Vocabulary');
    //  console.log(ko);
     if (pady.innerText  = "null") {
      Vocabulary.classList.add('remove')
      Vocabulary.classList.remove('mb-3')
  
     if (MicrowaveOvent.valueOf()){
      Vocabulary.classList.remove('remove')
      Vocabulary.classList.add('mb-3')
      pady.innerText = `${MicrowaveOvent.valueOf()}` 
    }
     }
  }, 0.1)

  let Grindert = localStorage.getItem('Grindert')
  let Grinderd = localStorage.getItem('Grinderd')
  let Grinderp = localStorage.getItem('Grinderp')

  let appendChild = document.createElement('div')
  appendChild.classList.add("container");
  appendChild.innerHTML = `<div class="card mb-3" id='mean'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../electric itm/img/${Grindert}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='moti'>${Grindert}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
  </div>
      <p class="card-text">${Grinderd}</p>
      <p class="card-text">${Grinderp}</p>
    </div>
  </div>
  </div>
  </div>`;
  
  setTimeout(() => {
    let moti = document.getElementById('moti');
    let mean = document.getElementById('mean');
    //  console.log(ko);
     if (moti.innerText  = "null") {
      mean.classList.add('remove')
      mean.classList.remove('mb-3')
  
     if (Grindert.valueOf()){
      mean.classList.remove('remove')
      mean.classList.add('mb-3')
      moti.innerText = `${Grindert.valueOf()}` 
    }
     }
  }, 0.1)

  let BlueGrindert = localStorage.getItem('BlueGrindert')
  let BlueGrinderd = localStorage.getItem('BlueGrinderd')
  let BlueGrinderp = localStorage.getItem('BlueGrinderp')

  let Spider = document.createElement('div')
  Spider.classList.add("container");
  Spider.innerHTML = `<div class="card mb-3" id='Thor'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../electric itm/img/${BlueGrindert}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='Hulk'>${BlueGrindert}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
  </div>
      <p class="card-text">${BlueGrinderd}</p>
      <p class="card-text">${BlueGrinderp}</p>
    </div>
  </div>
  </div>
  </div>`;
  
  setTimeout(() => {
    let Hulk = document.getElementById('Hulk');
    let Thor = document.getElementById('Thor');
    //  console.log(ko);
     if (Hulk.innerText  = "null") {
      Thor.classList.add('remove')
      Thor.classList.remove('mb-3')
  
     if (BlueGrindert.valueOf()){
      Thor.classList.remove('remove')
      Thor.classList.add('mb-3')
      Hulk.innerText = `${BlueGrindert.valueOf()}` 
    }
     }
  }, 0.1)

  
  let MixerGrindert = localStorage.getItem('MixerGrindert')
  let MixerGrinderd = localStorage.getItem('MixerGrinderd')
  let MixerGrinderp = localStorage.getItem('MixerGrinderp')

  let Captain = document.createElement('div')
  Captain.classList.add("container");
  Captain.innerHTML = `<div class="card mb-3" id='America'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../electric itm/img/${MixerGrindert}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='Daredevil'>${MixerGrindert}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
  </div>
      <p class="card-text">${MixerGrinderd}</p>
      <p class="card-text">${MixerGrinderp}</p>
    </div>
  </div>
  </div>
  </div>`;
  
  setTimeout(() => {
    let Daredevil = document.getElementById('Daredevil');
    let America = document.getElementById('America');
    //  console.log(ko);
     if (Daredevil.innerText  = "null") {
      America.classList.add('remove')
      America.classList.remove('mb-3')
  
     if (MixerGrindert.valueOf()){
      America.classList.remove('remove')
      America.classList.add('mb-3')
      Daredevil.innerText = `${MixerGrindert.valueOf()}` 
    }
     }
  }, 0.1)


  let ElectricStovet = localStorage.getItem('ElectricStovet')
  let ElectricStoved = localStorage.getItem('ElectricStoved')
  let ElectricStovep = localStorage.getItem('ElectricStovep')

  let Punisher = document.createElement('div')
  Punisher.classList.add("container");
  Punisher.innerHTML = `<div class="card mb-3" id='Deadpool'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../electric itm/img/${ElectricStovet}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='Silver'>${ElectricStovet}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
  </div>
      <p class="card-text">${ElectricStoved}</p>
      <p class="card-text">${ElectricStovep}</p>
    </div>
  </div>
  </div>
  </div>`;
  
  setTimeout(() => {
    let Silver = document.getElementById('Silver');
    let Deadpool = document.getElementById('Deadpool');
    //  console.log(ko);
     if (Silver.innerText  = "null") {
      Deadpool.classList.add('remove')
      Deadpool.classList.remove('mb-3')
  
     if (ElectricStovet.valueOf()){
      Deadpool.classList.remove('remove')
      Deadpool.classList.add('mb-3')
      Silver.innerText = `${ElectricStovet.valueOf()}` 
    }
     }
  }, 0.1)


  let JKREnterpriset = localStorage.getItem('JKREnterpriset')
  let JKREnterprised = localStorage.getItem('JKREnterprised')
  let JKREnterprisep = localStorage.getItem('JKREnterprisep')


  let Surfer = document.createElement('div')
  Surfer.classList.add("container");
  Surfer.innerHTML = `<div class="card mb-3" id='Gambit'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../electric itm/img/${JKREnterpriset}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='Cyclops'>${JKREnterpriset}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
  </div>
      <p class="card-text">${JKREnterprised}</p>
      <p class="card-text">${JKREnterprisep}</p>
    </div>
  </div>
  </div>
  </div>`;
  
  setTimeout(() => {
    let Cyclops = document.getElementById('Cyclops');
    let Gambit = document.getElementById('Gambit');
    //  console.log(ko);
     if (Cyclops.innerText  = "null") {
      Gambit.classList.add('remove')
      Gambit.classList.remove('mb-3')
  
     if (JKREnterpriset.valueOf()){
      Gambit.classList.remove('remove')
      Gambit.classList.add('mb-3')
      Cyclops.innerText = `${JKREnterpriset.valueOf()}` 
    }
     }
  }, 0.1)

  let ElectricRiceCookert = localStorage.getItem('ElectricRiceCookert')
  let ElectricRiceCookerd = localStorage.getItem('ElectricRiceCookerd')
  let ElectricRiceCookerp = localStorage.getItem('ElectricRiceCookerp')

  let Fantastic = document.createElement('div')
  Fantastic.classList.add("container");
  Fantastic.innerHTML = `<div class="card mb-3" id='Iceman'  style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4">
    <img src="../electric itm/img/${ElectricRiceCookert}.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="d-flex">
      <h5 class="card-title" id='Sentry'>${ElectricRiceCookert}</h5>
       <svg class='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
  </div>
      <p class="card-text">${ElectricRiceCookerd}</p>
      <p class="card-text">${ElectricRiceCookerp}</p>
    </div>
  </div>
  </div>
  </div>`;
  
  setTimeout(() => {
    let Sentry = document.getElementById('Sentry');
    let Iceman = document.getElementById('Iceman');
    //  console.log(ko);
     if (Sentry.innerText  = "null") {
      Iceman.classList.add('remove')
      Iceman.classList.remove('mb-3')
  
     if (ElectricRiceCookert.valueOf()){
      Iceman.classList.remove('remove')
      Iceman.classList.add('mb-3')
      Sentry.innerText = `${ElectricRiceCookert.valueOf()}` 
    }
     }
  }, 0.1)


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
    shoppingCart.appendChild(PHEASAN)
    shoppingCart.appendChild(MishitaEnterprise)
    shoppingCart.appendChild(PDCLOTHVILLA)
    shoppingCart.appendChild(OffirraInternational)
    shoppingCart.appendChild(Dulhan)
    shoppingCart.appendChild(Siril)
    shoppingCart.appendChild(FAMOUSZONE)
    shoppingCart.appendChild(koijofashion)
    shoppingCart.appendChild(mona)
    shoppingCart.appendChild(shona)
    shoppingCart.appendChild(bin)
    shoppingCart.appendChild(pin)
    shoppingCart.appendChild(unik)
    shoppingCart.appendChild(uniktha)
    shoppingCart.appendChild(unikthaabnha)
    shoppingCart.appendChild(unk)
    shoppingCart.appendChild(unside)
    shoppingCart.appendChild(unsidehy)
    shoppingCart.appendChild(unsidetha)
    shoppingCart.appendChild(nhihai)
    shoppingCart.appendChild(hahahaha)
    shoppingCart.appendChild(ahahaha)
    shoppingCart.appendChild(hahaha)
    shoppingCart.appendChild(ahaha)
    shoppingCart.appendChild(haha)
    shoppingCart.appendChild(aha)
    shoppingCart.appendChild(paha)
    shoppingCart.appendChild(pahap)
    shoppingCart.appendChild(paap)
    shoppingCart.appendChild(pap)
    shoppingCart.appendChild(ppp)
    shoppingCart.appendChild(pppa)
    shoppingCart.appendChild(acha)
    shoppingCart.appendChild(papp)
    shoppingCart.appendChild(wow)
    shoppingCart.appendChild(achahai)
    shoppingCart.appendChild(attahai)
    shoppingCart.appendChild(attanhihai)
    shoppingCart.appendChild(ttata)
    shoppingCart.appendChild(Sony)
    shoppingCart.appendChild(YouTube)
    shoppingCart.appendChild(Facebook)
    shoppingCart.appendChild(Twitter)
    shoppingCart.appendChild(Wikipedia)
    shoppingCart.appendChild(Amazon)
    shoppingCart.appendChild(Google)
    shoppingCart.appendChild(Play)
    shoppingCart.appendChild(Instagram)
    shoppingCart.appendChild(Netflix)
    shoppingCart.appendChild(Netflixs)
    shoppingCart.appendChild(Netflixss)
    shoppingCart.appendChild(computer)
    shoppingCart.appendChild(programming)
    shoppingCart.appendChild(Professional)
    shoppingCart.appendChild(Discussing)
    shoppingCart.appendChild(abandon)
    shoppingCart.appendChild(appendChild)
    shoppingCart.appendChild(Spider)
    shoppingCart.appendChild(Captain)
    shoppingCart.appendChild(Punisher)
    shoppingCart.appendChild(Surfer)
    shoppingCart.appendChild(Fantastic)




    

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

  let Shopping = document.getElementById('Shopping')
  .addEventListener('click' , function(){
    console.log('ham');
    let Shopping = document.getElementById('Shopping')
    Shopping.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Shopping.innerHTML= ""
      Shopping.classList.remove('card')
    }, 2000);
  })

  let Iceman = document.getElementById('Iceman')
  .addEventListener('click' , function(){
    console.log('ham');
    let Iceman = document.getElementById('Iceman')
    Iceman.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Iceman.innerHTML= ""
      Iceman.classList.remove('card')
    }, 2000);
  })


  let Gambit = document.getElementById('Gambit')
  .addEventListener('click' , function(){
    console.log('ham');
    let Gambit = document.getElementById('Gambit')
    Gambit.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Gambit.innerHTML= ""
      Gambit.classList.remove('card')
    }, 2000);
  })

  let America = document.getElementById('America')
  .addEventListener('click' , function(){
    console.log('ham');
    let America = document.getElementById('America')
    America.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      America.innerHTML= ""
      America.classList.remove('card')
    }, 2000);
  })

  let Deadpool = document.getElementById('Deadpool')
  .addEventListener('click' , function(){
    console.log('ham');
    let Deadpool = document.getElementById('Deadpool')
    Deadpool.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Deadpool.innerHTML= ""
      Deadpool.classList.remove('card')
    }, 2000);
  })

  let Thor = document.getElementById('Thor')
  .addEventListener('click' , function(){
    console.log('ham');
    let Thor = document.getElementById('Thor')
    Thor.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Thor.innerHTML= ""
      Thor.classList.remove('card')
    }, 2000);
  })
  

  let ability = document.getElementById('ability')
  .addEventListener('click' , function(){
    console.log('ham');
    let ability = document.getElementById('ability')
    ability.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      ability.innerHTML= ""
      ability.classList.remove('card')
    }, 2000);
  })

  let mean = document.getElementById('mean')
  .addEventListener('click' , function(){
    console.log('ham');
    let mean = document.getElementById('mean')
    mean.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      mean.innerHTML= ""
      mean.classList.remove('card')
    }, 2000);
  })


  let maa = document.getElementById('maa')
  .addEventListener('click' , function(){
    console.log('ham');
    let maa = document.getElementById('maa')
    maa.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      maa.innerHTML= ""
      maa.classList.remove('card')
    }, 2000);
  })

  let me = document.getElementById('me')
  .addEventListener('click' , function(){
    console.log('ham');
    let me = document.getElementById('me')
    me.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      me.innerHTML= ""
      me.classList.remove('card')
    }, 2000);
  })
  


  let realmeeee = document.getElementById('realmeeee')
  .addEventListener('click' , function(){
    console.log('ham');
    let realmeeee = document.getElementById('realmeeee')
    realmeeee.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      realmeeee.innerHTML= ""
      realmeeee.classList.remove('card')
    }, 2000);
  })
  let realmeeeee = document.getElementById('realmeeeee')
  .addEventListener('click' , function(){
    console.log('ham');
    let realmeeeee = document.getElementById('realmeeeee')
    realmeeeee.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      realmeeeee.innerHTML= ""
      realmeeeee.classList.remove('card')
    }, 2000);
  })

  let realmeeeeee = document.getElementById('realmeeeeee')
  .addEventListener('click' , function(){
    console.log('ham');
    let realmeeeeee = document.getElementById('realmeeeeee')
    realmeeeeee.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      realmeeeeee.innerHTML= ""
      realmeeeeee.classList.remove('card')
    }, 2000);
  })


  let realmeee = document.getElementById('realmeee')
  .addEventListener('click' , function(){
    console.log('ham');
    let realmeee = document.getElementById('realmeee')
    realmeee.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      realmeee.innerHTML= ""
      realmeee.classList.remove('card')
    }, 2000);
  })

  let realme = document.getElementById('realme')
  .addEventListener('click' , function(){
    console.log('ham');
    let realme = document.getElementById('realme')
    realme.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      realme.innerHTML= ""
      realme.classList.remove('card')
    }, 2000);
  })
  let realmee = document.getElementById('realmee')
  .addEventListener('click' , function(){
    console.log('ham');
    let realmee = document.getElementById('realmee')
    realmee.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      realmee.innerHTML= ""
      realmee.classList.remove('card')
    }, 2000);
  })

  let jaldikarnabhai = document.getElementById('jaldikarnabhai')
  .addEventListener('click' , function(){
    console.log('ham');
    let jaldikarnabhai = document.getElementById('jaldikarnabhai')
    jaldikarnabhai.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      jaldikarnabhai.innerHTML= ""
      jaldikarnabhai.classList.remove('card')
    }, 2000);
  })

  let jaldikarna = document.getElementById('jaldikarna')
  .addEventListener('click' , function(){
    console.log('ham');
    let jaldikarna = document.getElementById('jaldikarna')
    jaldikarna.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      jaldikarna.innerHTML= ""
      jaldikarna.classList.remove('card')
    }, 2000);
  })
  let jaldikar = document.getElementById('jaldikar')
  .addEventListener('click' , function(){
    console.log('ham');
    let jaldikar = document.getElementById('jaldikar')
    jaldikar.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      jaldikar.innerHTML= ""
      jaldikar.classList.remove('card')
    }, 2000);
  })

  let pota = document.getElementById('pota')
  .addEventListener('click' , function(){
    console.log('ham');
    let pota = document.getElementById('pota')
    pota.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      pota.innerHTML= ""
      pota.classList.remove('card')
    }, 2000);
  })

  let potesi = document.getElementById('potesi')
  .addEventListener('click' , function(){
    console.log('ham');
    let potesi = document.getElementById('potesi')
    potesi.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      potesi.innerHTML= ""
      potesi.classList.remove('card')
    }, 2000);
  })

  let oogi = document.getElementById('oogi')
  .addEventListener('click' , function(){
    console.log('ham');
    let oogi = document.getElementById('oogi')
    oogi.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      oogi.innerHTML= ""
      oogi.classList.remove('card')
    }, 2000);
  })
  
  let pogi = document.getElementById('pogi')
  .addEventListener('click' , function(){
    console.log('ham');
    let pogi = document.getElementById('pogi')
    pogi.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      pogi.innerHTML= ""
      pogi.classList.remove('card')
    }, 2000);
  })
  
  let poki = document.getElementById('poki')
  .addEventListener('click' , function(){
    console.log('ham');
    let poki = document.getElementById('poki')
    poki.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      poki.innerHTML= ""
      poki.classList.remove('card')
    }, 2000);
  })


  let laptop = document.getElementById('laptop')
  .addEventListener('click' , function(){
    console.log('ham');
    let laptop = document.getElementById('laptop')
    laptop.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      laptop.innerHTML= ""
      laptop.classList.remove('card')
    }, 2000);
  })

  let ooogi = document.getElementById('ooogi')
  .addEventListener('click' , function(){
    console.log('ham');
    let ooogi = document.getElementById('ooogi')
    ooogi.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      ooogi.innerHTML= ""
      ooogi.classList.remove('card')
    }, 2000);
  })

  let laptophai = document.getElementById('laptophai')
  .addEventListener('click' , function(){
    console.log('ham');
    let laptophai = document.getElementById('laptophai')
    laptophai.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      laptophai.innerHTML= ""
      laptophai.classList.remove('card')
    }, 2000);
  })

  let laptoptha = document.getElementById('laptoptha')
  .addEventListener('click' , function(){
    console.log('ham');
    let laptoptha = document.getElementById('laptoptha')
    laptoptha.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      laptoptha.innerHTML= ""
      laptoptha.classList.remove('card')
    }, 2000);
  })

  let Seat = document.getElementById('Seat')
  .addEventListener('click' , function(){
    console.log('ham');
    let Seat = document.getElementById('Seat')
    Seat.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Seat.innerHTML= ""
      Seat.classList.remove('card')
    }, 2000);
  })


  let Samsung = document.getElementById('Samsung')
  .addEventListener('click' , function(){
    console.log('ham');
    let Samsung = document.getElementById('Samsung')
    Samsung.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Samsung.innerHTML= ""
      Samsung.classList.remove('card')
    }, 2000);
  })

  let Katana = document.getElementById('Katana')
  .addEventListener('click' , function(){
    console.log('ham');
    let Katana = document.getElementById('Katana')
    Katana.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Katana.innerHTML= ""
      Katana.classList.remove('card')
    }, 2000);
  })

  let Nefertiti = document.getElementById('Nefertiti')
  .addEventListener('click' , function(){
    console.log('ham');
    let Nefertiti = document.getElementById('Nefertiti')
    Nefertiti.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Nefertiti.innerHTML= ""
      Nefertiti.classList.remove('card')
    }, 2000);
  })

  let Echo = document.getElementById('Echo')
  .addEventListener('click' , function(){
    console.log('ham');
    let Echo = document.getElementById('Echo')
    Echo.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Echo.innerHTML= ""
      Echo.classList.remove('card')
    }, 2000);
  })



  let Beetle = document.getElementById('Beetle')
  .addEventListener('click' , function(){
    console.log('ham');
    let Beetle = document.getElementById('Beetle')
    Beetle.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
    Beetle.innerHTML= ""
    Beetle.classList.remove('card')
    }, 2000);
  })

  let Suzuki = document.getElementById('Suzuki')
  .addEventListener('click' , function(){
    console.log('ham');
    let Suzuki = document.getElementById('Suzuki')
    Suzuki.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Suzuki.innerHTML= ""
      Suzuki.classList.remove('card')
    }, 2000);
  })


  let tasla = document.getElementById('tasla')
  .addEventListener('click' , function(){
    console.log('ham');
    let tasla = document.getElementById('tasla')
    tasla.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      tasla.innerHTML= ""
      tasla.classList.remove('card')
    }, 2000);
  })

  let Tarraco = document.getElementById('Tarraco')
  .addEventListener('click' , function(){
    console.log('ham');
    let Tarraco = document.getElementById('Tarraco')
    Tarraco.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Tarraco.innerHTML= ""
      Tarraco.classList.remove('card')
    }, 2000);
  })
  let Rolls = document.getElementById('Rolls')
  .addEventListener('click' , function(){
    console.log('ham');
    let Rolls = document.getElementById('Rolls')
    Rolls.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Rolls.innerHTML= ""
      Rolls.classList.remove('card')
    }, 2000);
  })

  let Jeep = document.getElementById('Jeep')
  .addEventListener('click' , function(){
    console.log('ham');
    let Jeep = document.getElementById('Jeep')
    Jeep.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Jeep.innerHTML= ""
      Jeep.classList.remove('card')
    }, 2000);
  })

    let Jensen = document.getElementById('Jensen')
  .addEventListener('click' , function(){
    console.log('ham');
    let Jensen = document.getElementById('Jensen')
    Jensen.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Jensen.innerHTML= ""
      Jensen.classList.remove('card')
    }, 2000);
  })
  let Ford = document.getElementById('Ford')
  .addEventListener('click' , function(){
    console.log('ham');
    let Ford = document.getElementById('Ford')
    Ford.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Ford.innerHTML= ""
      Ford.classList.remove('card')
    }, 2000);
  })
  let Lamborghini = document.getElementById('Lamborghini')
  .addEventListener('click' , function(){
    console.log('ham');
    let Lamborghini = document.getElementById('Lamborghini')
    Lamborghini.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      Lamborghini.innerHTML= ""
      Lamborghini.classList.remove('card')
    }, 2000);
  })
  let carthana = document.getElementById('carthana')
    .addEventListener('click' , function(){
      console.log('ham');
      let carthana = document.getElementById('carthana')
      carthana.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        carthana.innerHTML= ""
        carthana.classList.remove('card')
      }, 2000);
    })

    let Ferrari = document.getElementById('Ferrari')
    .addEventListener('click' , function(){
      console.log('ham');
      let Ferrari = document.getElementById('Ferrari')
      Ferrari.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        Ferrari.innerHTML= ""
        Ferrari.classList.remove('card')
      }, 2000);
    })


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
    let loyon = document.getElementById('loyon')
    .addEventListener('click' , function(){
      console.log('ham');
      let loyon = document.getElementById('loyon')
      loyon.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        loyon.innerHTML= ""
        loyon.classList.remove('card')
      }, 2000);
    })
    let yonal = document.getElementById('yonal')
    .addEventListener('click' , function(){
      console.log('ham');
      let yonal = document.getElementById('yonal')
      yonal.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        yonal.innerHTML= ""
        yonal.classList.remove('card')
      }, 2000);
    })
    let yona = document.getElementById('yona')
    .addEventListener('click' , function(){
      console.log('ham');
      let yona = document.getElementById('yona')
      yona.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        yona.innerHTML= ""
        yona.classList.remove('card')
      }, 2000);
    })
    let ona = document.getElementById('ona')
    .addEventListener('click' , function(){
      console.log('ham');
      let ona = document.getElementById('ona')
      ona.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        ona.innerHTML= ""
        ona.classList.remove('card')
      }, 2000);
    })
    let nana = document.getElementById('nana')
    .addEventListener('click' , function(){
      console.log('ham');
      let nana = document.getElementById('nana')
      nana.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        nana.innerHTML= ""
        nana.classList.remove('card')
      }, 2000);
    })
    let aoyon = document.getElementById('aoyon')
    .addEventListener('click' , function(){
      console.log('ham');
      let aoyon = document.getElementById('aoyon')
      aoyon.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        aoyon.innerHTML= ""
        aoyon.classList.remove('card')
      }, 2000);
    })
    let cardtha = document.getElementById('cardtha')
    .addEventListener('click' , function(){
      console.log('ham');
      let cardtha = document.getElementById('cardtha')
      cardtha.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        cardtha.innerHTML= ""
        cardtha.classList.remove('card')
      }, 2000);
    })
    let oyon = document.getElementById('oyon')
    .addEventListener('click' , function(){
      console.log('ham');
      let oyon = document.getElementById('oyon')
      oyon.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        oyon.innerHTML= ""
        oyon.classList.remove('card')
      }, 2000);
    })
    let poyon = document.getElementById('poyon')
    .addEventListener('click' , function(){
      console.log('ham');
      let poyon = document.getElementById('poyon')
      poyon.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        poyon.innerHTML= ""
        poyon.classList.remove('card')
      }, 2000);
    })
    let koyon = document.getElementById('koyon')
    .addEventListener('click' , function(){
      console.log('ham');
      let koyon = document.getElementById('koyon')
      koyon.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        koyon.innerHTML= ""
        koyon.classList.remove('card')
      }, 2000);
    })
    let malim = document.getElementById('malim')
    .addEventListener('click' , function(){
      console.log('ham');
      let malim = document.getElementById('malim')
      malim.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        malim.innerHTML= ""
        malim.classList.remove('card')
      }, 2000);
    })

    let tum = document.getElementById('tum')
    .addEventListener('click' , function(){
      console.log('ham');
      let tum = document.getElementById('tum')
      tum.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        tum.innerHTML= ""
        tum.classList.remove('card')
      }, 2000);
    })

    let num = document.getElementById('num')
    .addEventListener('click' , function(){
      console.log('ham');
      let num = document.getElementById('num')
      num.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        num.innerHTML= ""
        num.classList.remove('card')
      }, 2000);
    })

    let money = document.getElementById('money')
    .addEventListener('click' , function(){
      console.log('ham');
      let money = document.getElementById('money')
      money.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        money.innerHTML= ""
        money.classList.remove('card')
      }, 2000);
    })
    let mone = document.getElementById('mone')
    .addEventListener('click' , function(){
      console.log('ham');
      let mone = document.getElementById('mone')
      mone.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        mone.innerHTML= ""
        mone.classList.remove('card')
      }, 2000);
    })

    let halim = document.getElementById('halim')
    .addEventListener('click' , function(){
      console.log('ham');
      let halim = document.getElementById('halim')
      halim.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        halim.innerHTML= ""
        halim.classList.remove('card')
      }, 2000);
    })

    let PHEASA = document.getElementById('PHEASAN')
    .addEventListener('click' , function(){
      console.log('ham');
      let PHEASA = document.getElementById('PHEASAN')
      PHEASA.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        PHEASA.innerHTML= ""
        PHEASA.classList.remove('card')
      }, 2000);
    })

    let PDCLOTHVILL = document.getElementById('cardhy')
    .addEventListener('click' , function(){
      console.log('ham');
      let PDCLOTHVILL = document.getElementById('cardhy')
      PDCLOTHVILL.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        PDCLOTHVILL.innerHTML= ""
        PDCLOTHVILL.classList.remove('card')
      }, 2000);
    })

    
    let Enterprise = document.getElementById('Enterprise')
    .addEventListener('click' , function(){
      console.log('ham');
      let Enterprise = document.getElementById('Enterprise')
      Enterprise.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
      move()
      setTimeout(() => {
        Enterprise.innerHTML= ""
        Enterprise.classList.remove('card')
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

    let poti = document.getElementById('poti')
  .addEventListener('click' , function(){
    console.log('ham');
    let poti = document.getElementById('poti')
    poti.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      poti.innerHTML= ""
      poti.classList.remove('card')
    }, 2000);
  })
  let SpiderMan = document.getElementById('SpiderMan')
  .addEventListener('click' , function(){
    console.log('ham');
    let SpiderMan = document.getElementById('SpiderMan')
    SpiderMan.innerHTML = `<div class="alert alert-light " role="alert">This  item  removed</div>`;
    move()
    setTimeout(() => {
      SpiderMan.innerHTML= ""
      SpiderMan.classList.remove('card')
    }, 2000);
  })