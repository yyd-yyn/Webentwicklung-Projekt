// details
document.querySelectorAll(".new_detail_entry").forEach((details) => {
  const radios = details.querySelectorAll("input[type='radio']");
  const summary = details.querySelector("summary");

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      const label = radio.nextElementSibling;
      if (radio.checked) {
        summary.textContent = label.textContent;
        setTimeout(() => {
          details.removeAttribute("open");
        }, 100);
      }
    });
  });
});

// icon
document.getElementById("new-current-icon").addEventListener("click", () => {
  document.getElementById("iconModal").style.display = "block";
});
function closeModal() {
  document.getElementById("iconModal").style.display = "none";
}
function selectIcon(src) {
  const currentIcon = document.getElementById("new-current-icon");
  if (currentIcon) {
    currentIcon.src = src;
  }
  closeModal();
}
// top
document.getElementById("scrollToTopBtn").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
});

