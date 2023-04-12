
import '../styles/home-page.scss'

const dots = document.querySelectorAll(".dots");
const songElement = document.querySelector(".playlist-component__song-element");

function showList() {
    const ul = document.createElement("ul");
    ul.classList.add("playlist-component__showing-list");
    const li1 = document.createElement("li");
    ul.appendChild(li1);
    li1.innerHTML = "Add to queue";
    
    songElement.appendChild(ul);
}

for(const dot of dots){
    dot.addEventListener("click", showList);
}
