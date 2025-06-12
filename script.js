function toggleBox(clickedBox) {
  const allBoxes = document.querySelectorAll(".box");

  allBoxes.forEach(box => {
    const content = box.querySelector(".box-content");
    if (box === clickedBox) {
      const isActive = box.classList.contains("active");
      allBoxes.forEach(b => {
        b.classList.remove("active");
        b.querySelector(".box-content").style.display = "none";
      });

      if (!isActive) {
        box.classList.add("active");
        content.style.display = "flex";
      }
    } else {
      box.classList.remove("active");
      box.querySelector(".box-content").style.display = "none";
    }
  });
}
