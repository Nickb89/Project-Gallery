//Get JSON file and create html elements for each item in JSON list.

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
        data[i].description + '<a href="' + data[i].githubURL + '"><img src="images/arrow-right.png" width="12px" height="12px"></a></p></div></div>' 
        + '<img src=' + data[i].url + '>';
        galleryContainer.appendChild(itemDiv);
    }
}); 
//learnt next time I should avoid innerHTML for security reasons.

//Once document is loaded, get all of the newly added HTML elements.

window.addEventListener('load', (event) => {
  
    let coll = document.getElementsByClassName("collapsible");
    let i;


//add a click event listener to each button with class "collapsible"  
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    //change state to active
    this.classList.toggle("active");
    //get the nextElementSibling which in this case is the description to expand when clicked.
    let content = this.nextElementSibling;
    //if description is showing, set to dissapear, else show the description.
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    //select all of the description elements
    //if the description doesn't match the clicked description it should not show and the buttons active class should be removed.
    Array.from(document.querySelectorAll('.description')).forEach(el => {
      if (el !== content){
       el.style.display = 'none';
       el.previousElementSibling.classList.remove("active");
       } 
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



