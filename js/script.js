let counter1 = 0;
let counter2 = 1;

const sections = document.querySelectorAll("section");
const progress = document.querySelector(".progress h2");
const circles = document.querySelectorAll(".circle");

for (var i = 0; i < sections.length; ++i)
{
  if (sections[i].className != "section-1")
  {
    sections[i].style.opacity = 0.0;
    sections[i].style.zIndex = "10";
  }
  else
  {
    sections[i].style.zIndex = "20";
  }
}
// Circle Progress Logic
const progressCounter = () => {
  progress.textContent = `${counter2}/${sections.length}`;

  Array.from(circles).forEach((circle) => {
    circle.style.backgroundColor = "transparent";
  });
  document.querySelector(`.circle-${counter2}`).style.backgroundColor = "#ddd";
};
function pauseVideo()
{
  document.getElementById("video"+counter2).onpause();
}
// Controls which page appears via Scaling // CHANGED

const pageController = () => {
  // If it reaches the last page, then return back to the first page
  if (counter1 === 7) {
    counter1 = 0;
    counter2 = 1;
    progressCounter();
  }

  if (counter1 === -1) { // If you scroll backwards from the first page, it will bring you back to the last page
    counter1 = 6;
    counter2 = 7;
    progressCounter();
  }
  progressCounter();
};


// Left Button Logic
document.querySelector(".left-btn").addEventListener("click", () => {
  //pauseVideo();
  console.log(counter1, counter2);
  counter1--;
  counter2--;
  pageController();
    for (var i = 0; i < sections.length; ++i)
    {
      if (sections[i].className != "section-"+counter2)
      {
        sections[i].style.opacity = 0.0;
        sections[i].style.zIndex = "10";

      }
      else
      {
        sections[i].style.transitionProperty = "opacity";
        sections[i].style.transitionDuration = "1s";
        sections[i].style.opacity = 1.0;
        sections[i].style.zIndex = "20";
      }
    

    /*document.querySelector(`.section-${counter2}-wrapper`).style.opacity =
      "0.0";
    document.querySelector(`.section-${counter2 + 1}-wrapper`).style.opacity =
      "1.0";*/
  }
});

// Right Button Logic
document.querySelector(".right-btn").addEventListener("click", () => {
  //pauseVideo();
  counter1++;
  counter2++;

  pageController();
  console.log(counter1, counter2);

  for (var i = 0; i < sections.length; ++i)
  {
    if (sections[i].className != "section-"+counter2)
    {
      sections[i].style.opacity = 0.0;
      sections[i].style.zIndex = "10";
    }
    else
    {
      sections[i].style.transitionProperty = "opacity";
      sections[i].style.transitionDuration = "1s";
      sections[i].style.opacity = 1.0;
      sections[i].style.zIndex = "20";
    }
  /*document.querySelector(`.section-${counter2}-wrapper`).style.opacity =
    "1.0";
  document.querySelector(`.section-${counter1}-wrapper`).style.transform =
    "0.0";*/
  
}});