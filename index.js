function thankYou(){
    document.querySelector('.container').style.display = "none";
    document.querySelector('.thank-u-container').style.display = "flex";

}

function hover(div) {
    if (div.style.backgroundColor = "#7c8798") {
        div.style.color = "white";
    }

    let element = document.querySelector('span');
    let newElement = document.createElement('p');
    let number = div.innerHTML;
    newElement.textContent = number;
    newElement.style.margin = "3px"; // Add margin bottom to create space

    element.appendChild(newElement);}
