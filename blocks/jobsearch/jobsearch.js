const blocks = document.getElementsByClassName("jobsearch block");


for (let block of blocks) {
    const div = document.createElement("div");
    div.classList.add("formWrapper");
   
    const divs = block.querySelectorAll('div');
    console.log(divs); 

    div.appendChild(divs[3]);
    div.appendChild(divs[5]);
    const inputa = document.createElement("input");
    div.appendChild(inputa);
    div.appendChild(divs[7]);
    const inputb = document.createElement("input");
    div.appendChild(inputb);
    div.appendChild(divs[9]);
    const link = document.createElement("p");
    link.innerHTML = "Jobs bei Hays intern"
    div.appendChild(link);
    
    //block.appendChild(div);
    block.insertBefore(div, block.children[1]);
}