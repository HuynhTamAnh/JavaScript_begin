var divElement=document.createElement('div');
divElement.classList.add('myClass');

var paragraphElement=document.createElement('p');
paragraphElement.textContent='nhấn vào dòng chữ bên dưới';

var linkElement=document.createElement('a');
linkElement.setAttribute('href','https://www.youtube.com');
linkElement.textContent='youtube';

document.body.appendChild(divElement);
document.body.appendChild(paragraphElement);
document.body.appendChild(linkElement);