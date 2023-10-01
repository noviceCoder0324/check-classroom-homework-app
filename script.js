

let allButtonDiv = document.getElementById("all-buttons");

for (let i = 0; i < students.length; i++) {
  let std = students[i];

  //create a div
  let oneDiv = document.createElement('div');
  oneDiv.classList.add('one-set-button');

  //make the name para
  let name = document.createElement('div');
  let node = document.createTextNode(std.name);
  name.appendChild(node);
  oneDiv.appendChild(name);

  //make the chinese buttons
  let chbutton = document.createElement('button');
  let ctext = document.createTextNode("中文");
  chbutton.setAttribute('id', 'chbtn' + i);
  chbutton.addEventListener('click', ()=>{
    let button = document.getElementById('chbtn' + i)
    
    if (button.style.backgroundColor === 'lightcoral') {
      button.style.backgroundColor = 'lightgreen';
      std.chn = true;
    } else {
      button.style.backgroundColor = 'lightcoral';
      std.chn = false;
    }
    localStorage.setItem('local', JSON.stringify(students));
  })
  chbutton.appendChild(ctext);
  oneDiv.appendChild(chbutton);

  //make the chinese buttons
  let mathbutton = document.createElement('button');
  let mtext = document.createTextNode("数学");
  mathbutton.setAttribute('id', 'mthbtn' + i);
  mathbutton.addEventListener('click', ()=>{
    let button = document.getElementById('mthbtn' + i)
    
    if (button.style.backgroundColor === 'lightcoral') {
      button.style.backgroundColor = 'lightgreen';
      std.mth = true;
    } else {
      button.style.backgroundColor = 'lightcoral';
      std.mth = false;
    }
    localStorage.setItem('local', JSON.stringify(students));
  })
  mathbutton.appendChild(mtext);
  oneDiv.appendChild(mathbutton);

  allButtonDiv.appendChild(oneDiv);
}

for (let i = 0; i < students.length; i++) {
  let student = students[i];

  let button = document.getElementById('chbtn' + i);
  if (student.chn === true) {
    button.style.backgroundColor = 'lightgreen';
  } else {
    button.style.backgroundColor = 'lightcoral';
  }

  button = document.getElementById('mthbtn' + i);
  if (student.mth === true) {
    button.style.backgroundColor = 'lightgreen';
  } else {
    button.style.backgroundColor = 'lightcoral';
  }
}