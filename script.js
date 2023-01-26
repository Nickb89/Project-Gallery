fetch("imageInfo.json")
.then(response => response.json())
.then(data => {

    let galleryContainer = document.getElementById("gallery");
    for (let i = 0; i < data.length; i++) {
        let itemDiv = document.createElement("div");
        itemDiv.className = "itemDiv";
        itemDiv.innerHTML = 
        '<div class="textContainer"><button type="button" class="collapsible">' + data[i].caption + '</button>' + 
        '<div class="description"><p>' +
        data[i].description + '<a href="' + data[i].githubURL + '"> Link</a></p></div></div>' 
        + '<img src=' + data[i].url + '>';
        galleryContainer.appendChild(itemDiv);
    }
});

window.addEventListener('load', (event) => {
  
    let coll = document.getElementsByClassName("collapsible");
    let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    Array.from(document.querySelectorAll('.description')).forEach(el => {
      if (el !== content)
        el.style.display = 'none';
    });
 
  });
}
});


// Fetch all the details element.
const details = document.querySelectorAll("collapsible");

// Add the onclick listeners.
details.forEach((targetButton) => {
  targetButton.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.style.display = "none";
      }
    });
  });
});



