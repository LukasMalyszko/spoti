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

const dots = document.querySelectorAll(".dots");

///przechodzi przez pętle dots i rozwija listę do klikniętego dota
///
dots.forEach((dot) => {
  dot.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    showList(dot);
  });
});

/// wyswietla listę po kliknięciu w dot
///
///
function showList(element) {
  hideAllList();
  const songElement = element.closest(".playlist-component__song-element");
  songElement.dataset.active = "1";

  const listContainer = element.parentElement.querySelector(".list-container");
  listContainer.innerHTML = showingList;

  /// oblicza pozostałą wysokość strony
  ///
  const windowHeight = window.innerHeight;
  const elementBottom = songElement.getBoundingClientRect().bottom;
  const windowHeightBelowElement = windowHeight - elementBottom;
  const dropdown = document.querySelector(".playlist-component__showing-list");

  /// sprawdza czy lista ma większą wysokość niż pozostała wysokość strony
  ///
  if (elementBottom > windowHeightBelowElement) {
    dropdown.classList.add("reverse");
  }
}

/// ukrywanie list
///
///
function hideAllList() {
  const songElements = document.querySelectorAll(
    ".playlist-component__song-element"
  );
  songElements.forEach((songElement) => {
    songElement.dataset.active = "0";
    const listContainers = songElement.querySelectorAll(".list-container");
    listContainers.forEach((listContainer) => {
      listContainer.innerHTML = "";
    });
  });
}
