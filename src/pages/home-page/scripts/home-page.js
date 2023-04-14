import "../styles/home-page.scss";

const dots = document.querySelectorAll(".dots");
const songIcons = document.querySelector(".playlist-component__song-icons");

function createElementWithClassAndText(tag, className, text) {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.textContent = text;
  return element;
}

function createListItem(className, text) {
  const li = createElementWithClassAndText("li", className, text);
  return li;
}

function createArrow(text) {
  const div = createElementWithClassAndText("div", "list-arrow", "");
  const img = document.createElement("img");
  img.classList.add("arrow");
  img.src = "/images/arrow.svg";
  div.innerText = text;
  div.appendChild(img);
  return div;
}

function showList() {
  const ul = document.createElement("ul");
  ul.classList.add("playlist-component__showing-list");

  const listGroup = createElementWithClassAndText("div", "list-group");

  const { li1, li2, li3, li4, li5, li6, li7, li8 } = {
    li1: createListItem("playlist-component__showing-list-el", "Add to queue"),
    li2: createListItem(
      "playlist-component__showing-list-el",
      "Go to the track"
    ),
    li3: createListItem(
      "playlist-component__showing-list-el",
      "Go to the artist"
    ),
    li4: createListItem(
      "playlist-component__showing-list-el",
      "Go to the album"
    ),
    li5: createListItem(
      "playlist-component__showing-list-el",
      "Show content authors"
    ),
    li6: createListItem(
      "playlist-component__showing-list-el",
      "Add to playlist"
    ),
    li7: createListItem("playlist-component__showing-list-el", ""),
    li8: createListItem("playlist-component__showing-list-el", ""),
  };

  li8.classList.add("share");

  ul.appendChild(li1);
  ul.appendChild(listGroup);
  listGroup.appendChild(li2);
  listGroup.appendChild(li3);
  listGroup.appendChild(li4);
  ul.appendChild(li5);
  ul.appendChild(li6);
  ul.appendChild(li7);
  li7.appendChild(createArrow("Show content authors"));
  ul.appendChild(li8);
  li8.appendChild(createArrow("Share"));

  songIcons.appendChild(ul);
}

for (const dot of dots) {
  dot.addEventListener("click", showList);
}
