import "../styles/home-page.scss";

const showingList = `
<ul class="playlist-component__showing-list">
    <li class="playlist-component__showing-list-el">
        Add to queue
    </li>
    <div class="line"></div>
    <li class="playlist-component__showing-list-el">
        Go to the track
    </li>
    <li class="playlist-component__showing-list-el">
        Go to the artist
    </li>
    <li class="playlist-component__showing-list-el">
        Go to the album
    </li>
    <div class="line"></div>
    <li class="playlist-component__showing-list-el">
        Show content authors
    </li>
    <li class="playlist-component__showing-list-el">
        Add to playlist
    </li>
    <li class="playlist-component__showing-list-el">
    <div class="list-arrow">
        Show content authors<img
        class="arrow"
        src="/images/arrow.svg"
        />
    </div>
    </li>
    <div class="line"></div>
    <li class="playlist-component__showing-list-el">
    <div class="list-arrow">
        Share<img class="arrow" src="/images/arrow.svg" />
    </div>
    </li>
</ul>`;

const listContainer = document.querySelectorAll(".list-container");
const dots = document.querySelectorAll(".dots");

const showList = () => {
  for (const list of listContainer) {
    list.innerHTML = showingList;
  }

  
  const dropdown = document.querySelector(".playlist-component__showing-list");
  let windowHeightBelowElement = 0;

  const calculateWindowHeight = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const elementBottom = rect.bottom;
     windowHeightBelowElement = windowHeight - elementBottom;

    return windowHeightBelowElement;
  };
  calculateWindowHeight(dropdown);

  const checkHeight = () => {
    if (dropdown.offsetHeight > windowHeightBelowElement) {
      dropdown.classList.add("reverse");
      console.log("checkHeight() called")
    }
  };
  checkHeight();
};

for (const dot of dots) {
  dot.addEventListener("click", showList);
}

const hideList = (event) => {
  if (event) {
    const container = event.target
      .closest(".dots-container")
      .querySelector(".list-container");
    container.innerHTML = "";
  } else {
    for (const list of listContainer) {
      list.innerHTML = "";
    }
  }
};

document.addEventListener("click", (event) => {
  if (!event.target.closest(".dots")) {
    hideList();
  }
});
