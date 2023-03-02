const container = document.querySelector('#container');

const new_paragraph =  document.createElement('p');
const new_header = document.createElement('h3');
const new_div = document.createElement('div');

// Insert new 'p'
new_paragraph.classList.add('new_paragraph');
new_paragraph.textContent = "Hey I'm red!";
new_paragraph.setAttribute('style', 'color: red');

// Insert new 'H3', no class assigned
new_header.textContent = "I'm a blue h3!";
new_header.setAttribute('style', 'color: blue');

// Insert new div
new_div.classList.add('new_div'); // is this id or class?
new_div.textContent = "debug";
new_div.setAttribute('style', 'background-color: pink; border-color: black; border-style: solid;');

/// --WIP
    // Insert new properties within div 
    const div_2 = document.querySelector('new_div');

    const header_1 = document.createElement('h1');

    header_1.textContent = "I'm in a div";
    header_1.setAttribute('style', 'color:black');



container.appendChild(new_paragraph);
container.appendChild(new_header);
container.appendChild(new_div);

div_2.appendChild(header_1);
