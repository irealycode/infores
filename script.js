function resetForm() {
    const ftt = document.querySelectorAll("#recycle input, #recycle textarea, #recycle select");
    ftt.forEach(element => {
        if (element.tagName === "SELECT") {
          element.selectedIndex = 0;
        } else {
          element.value = "";
        }
      });
    popup("Thank you for helping us save the planet.");
}
function resetForm1() {
    const ftt = document.querySelectorAll("#submit input, #submit textarea, #submit select");
    ftt.forEach(element => {
        if (element.tagName === "SELECT") {
          element.selectedIndex = 0;
        } else {
          element.value = "";
        }
      });
    popup("Thank you for listing you product with us.");
}

function popup(text){
    const popup = document.createElement("div");
    popup.innerText = text;
    popup.classList.add("popup");
    document.body.appendChild(popup);
}