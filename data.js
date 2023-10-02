const students = JSON.parse(localStorage.getItem('local')) || [
  {
    name:"Kitt",
    chn: true,
    mth: false
  }, 
  {
    name:"Chloe",
    chn: true,
    mth: true
  }, 
  {
    name:"Lian",
    chn: false,
    mth: true
  }, 
  {
    name:"Jackson",
    chn: true,
    mth: true
  }, 
  {
    name:"Ani",
    chn: true,
    mth: true
  }, 
  {
    name:"Taj",
    chn: true,
    mth: true
  }, 
  {
    name:"Sebastian",
    chn: true,
    mth: true
  }, 
  {
    name:"Elsa",
    chn: true,
    mth: true
  }, 
  {
    name:"Fred",
    chn: true,
    mth: true
  }, 
  {
    name:"Brynlee",
    chn: true,
    mth: true
  }, 
  {
    name:"Nolan",
    chn: true,
    mth: true
  }, 
  {
    name:"Layla",
    chn: true,
    mth: true
  }, 
  {
    name:"Avery",
    chn: true,
    mth: true
  }, 
  {
    name:"Sofia",
    chn: true,
    mth: true
  }, 
  {
    name:"Sam",
    chn: true,
    mth: true
  }, 
  {
    name:"Teddy",
    chn: true,
    mth: true
  }, 
  {
    name:"Lucy",
    chn: true,
    mth: true
  }, 
  {
    name:"Elan",
    chn: true,
    mth: true
  }, 
  {
    name:"Audrey",
    chn: true,
    mth: true
  }, 
  {
    name:"Oliver",
    chn: true,
    mth: true
  }, 
  {
    name:"David",
    chn: true,
    mth: true
  }, 
  {
    name:"Coco",
    chn: true,
    mth: true
  }, 
  {
    name:"Quinn",
    chn: true,
    mth: true
  }, 
  {
    name:"Eli",
    chn: true,
    mth: true
  }, 
  {
    name:"Geza",
    chn: true,
    mth: true
  }, 
  {
    name:"Micah",
    chn: true,
    mth: true
  }, 
  {
    name:"Phin",
    chn: true,
    mth: true
  }, 
  {
    name:"Yuna",
    chn: true,
    mth: true
  }, 
  {
    name:"Ella",
    chn: true,
    mth: true
  }, 
];

function reset() {
  for(let i = 0; i < students.length; i++) {
    let std = students[i];
    std.chn = false;
    std.mth = false;

    let chbtn = document.getElementById('chbtn' + i);
    let mathbutton = document.getElementById('mthbtn' + i);
    chbtn.style.backgroundColor = 'lightcoral';
    mathbutton.style.backgroundColor = 'lightcoral';
  }
  
  localStorage.setItem('local', JSON.stringify(students));
}

function setChinese() {
  for(let i = 0; i < students.length; i++) {
    let std = students[i];
    std.chn = true;

    let chbtn = document.getElementById('chbtn' + i);
    chbtn.style.backgroundColor = 'lightgreen';
  }
  
  localStorage.setItem('local', JSON.stringify(students));
}

function setMath() {
  for(let i = 0; i < students.length; i++) {
    let std = students[i];
    std.mth = false;

    let mathbutton = document.getElementById('mthbtn' + i);
    mathbutton.style.backgroundColor = 'lightgreen';
  }
  
  localStorage.setItem('local', JSON.stringify(students));
}