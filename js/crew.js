const nav = document.getElementById("nav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("change");
});

const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabs.forEach((tab) => {
  tab.addEventListener("click", changePanel);
});

function changePanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const targetImg = targetTab.getAttribute("data-image");
  const tabContainer = targetTab.parentNode;
  const colContainer = tabContainer.parentNode;
  const rowContainer = colContainer.parentNode;
  const tabPanel = document.querySelectorAll('[role="tabpanel"]');
  const images = document.querySelector(".images");
  const imgArr = Array.from(images.children);

  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);

  tabPanel.forEach((panel) => {
    panel.setAttribute("hidden", true);
  });

  imgArr.forEach((image) => {
    image.setAttribute("hidden", true);
  });

  colContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden");

  rowContainer.querySelector([`#${targetImg}`]).removeAttribute("hidden");
}
