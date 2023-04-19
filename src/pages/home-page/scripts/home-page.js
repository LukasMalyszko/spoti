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
for (const dot of dots) {
  dot.addEventListener("click", () => {
    showList(dot);
  });
}

/// wyswietla listę po kliknięciu w dot
///
///
function showList(element) {
  const songElement = element.closest(".playlist-component__song-element");
  songElement.setAttribute("data-active", "1");

  const listContainer = element.parentElement.querySelector(".list-container");
  listContainer.innerHTML = showingList;

  const allSongElements = document.querySelectorAll(
    ".playlist-component__song-element"
  );

  // ustawia data-active=0 pozostałym songElement
  allSongElements.forEach((el) => {
    if (el !== songElement) {
      el.setAttribute("data-active", "0");
    }
  });

  const dropdown = document.querySelector(".playlist-component__showing-list");
  // console.log(dropdown);
  
  let windowHeightBelowElement = 0;
  function calculateWindowHeight(element) {
    //   console.log(element.offsetTop)
    //   const rect = element.getBoundingClientRect();

    const windowHeight = window.innerHeight;
///wysokość rodzica songelement
///
    const elementBottom = element.closest(".playlist-component__song-element").offsetTop;
    //   console.log(` windowHeight: ${windowHeight}, elementBottom: ${elementBottom}`)

    ///oblicza pozostałą wysokość strony
    ///

    /// można dodać wysokość elementu head zamiast liczby
    windowHeightBelowElement = windowHeight - elementBottom + 420;

    return windowHeightBelowElement;
  }
  calculateWindowHeight(dropdown);

  console.log(windowHeightBelowElement)

  ///sprawdza czy lista ma większą wysokość niż pozostała wysokość strony
  ///
//   console.log(dropdown.offsetHeight)
  function checkHeight() {
    if (dropdown.offsetHeight > windowHeightBelowElement) {
      dropdown.classList.add("reverse");
    }
  }
  checkHeight();
//   console.log(dropdown.offsetHeight);
}

/// ukrywa listę oraz przywraca domyślną wartość songElement
///
///
document.addEventListener("click", (event) => {
  /// jeśli klikniętym el nie są ikony, zamyka listę
  ///
  if (!event.target.closest(".playlist-component__showing-list")) {
    if (!event.target.closest(".playlist-component__song-icons")) {
      hideList();
    }
  }
});

/// sprawdza czy obiekt event został zdefiniowany
/// ukrywanie listy po klinkięciu poza elementem
///

function hideList(event) {
  if (event && event.target) {
    const songElement = event.target.closest(
      ".playlist-component__song-element"
    );
    songElement.setAttribute("data-active", "0");
    const container = event.target
      .closest(".dots-container")
      .querySelector(".list-container");
    container.innerHTML = "";
  } else {
    const songElements = document.querySelectorAll(
      ".playlist-component__song-element"
    );
    for (const songElement of songElements) {
      songElement.setAttribute("data-active", "0");
      const listContainers = songElement.querySelectorAll(".list-container");
      for (const listContainer of listContainers) {
        listContainer.innerHTML = "";
      }
    }
  }
}
