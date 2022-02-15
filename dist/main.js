const toggleBtn = document.querySelector(".share-button");
const contentShare = document.querySelector(".content-share");
const contentSocial = document.querySelector(".content-social");
const svgPath = document.querySelector(".svg-path");

const showSocials = () => {
  if (contentSocial.classList.contains("flex-row")) {
    contentSocial.classList.remove("flex-row");
    contentShare.classList.add("flex-row");
    toggleBtn.classList.add("share-button__active");
    svgPath.classList.add("share-button__fill");
  } else {
    contentSocial.classList.add("flex-row");
    contentShare.classList.remove("flex-row");
    toggleBtn.classList.remove("share-button__active");
    svgPath.classList.remove("share-button__fill");
  }
};

toggleBtn.addEventListener("click", showSocials);

//Arreglar Estilos contentShare
//Desktop version contentShare.
