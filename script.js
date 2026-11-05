// 1. Our data: an array of objects (each object is one photo)
// The photos are inside the "images" folder.
const images = [
  {
    id: 1,
    src: "images/mountain.jpg",
    title: "Golden Light",
    description: "Sun rays break through the clouds above a wide mountain valley."
  },
  {
    id: 2,
    src: "images/forest.jpg",
    title: "Misty Forest",
    description: "A small stream runs through a green and quiet forest."
  },
  {
    id: 3,
    src: "images/desert.jpg",
    title: "Desert Sunset",
    description: "Soft sand dunes glowing in the last light of the day."
  },
  {
    id: 4,
    src: "images/sea.jpg",
    title: "Sunset Bay",
    description: "Clear blue water between the rocks as the sun goes down."
  },
  {
    id: 5,
    src: "images/valley.jpg",
    title: "Northern Lights",
    description: "Green lights across a starry sky above a snowy valley."
  }
];

// 2. Get the elements from the page
const thumbnails = document.getElementById("thumbnails");
const bigImage = document.getElementById("big-image");
const titleEl = document.getElementById("title");
const descriptionEl = document.getElementById("description");
const counterEl = document.getElementById("counter");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// 3. Remember which photo is open now (0 = first photo)
let currentIndex = 0;

// 4. Create the small photos from the array
images.forEach(function (item, index) {
  const thumb = document.createElement("img");
  thumb.src = item.src;
  thumb.alt = item.title;
  thumb.tabIndex = 0; // lets the keyboard reach it with Tab

  thumb.addEventListener("click", function () {
    showImage(index);
  });

  // Enter key works like a click
  thumb.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      showImage(index);
    }
  });

  thumbnails.appendChild(thumb);
});

// 5. Show one photo in the big place
function showImage(index) {
  currentIndex = index;
  const item = images[index];

  bigImage.src = item.src;
  bigImage.alt = item.title;
  titleEl.textContent = item.title;
  descriptionEl.textContent = item.description;
  counterEl.textContent = index + 1 + " / " + images.length;

  // mark the active small photo
  const allThumbs = thumbnails.querySelectorAll("img");
  allThumbs.forEach(function (thumb, i) {
    if (i === index) {
      thumb.classList.add("active");
    } else {
      thumb.classList.remove("active");
    }
  });
}

// 6. Next and previous photo (after the last one we go back to the first)
function showNext() {
  if (currentIndex === images.length - 1) {
    showImage(0);
  } else {
    showImage(currentIndex + 1);
  }
}

function showPrev() {
  if (currentIndex === 0) {
    showImage(images.length - 1);
  } else {
    showImage(currentIndex - 1);
  }
}

nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

// 7. Arrow keys on the keyboard
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") showNext();
  if (event.key === "ArrowLeft") showPrev();
});

// 8. Show the first photo when the page opens
showImage(0);