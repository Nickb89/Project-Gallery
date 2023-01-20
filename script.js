fetch("imageInfo.json")
.then(response => response.json())
.then(data => {
    console.log(data[0].url)
    let galleryContainer = document.getElementById("gallery");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.setAttribute('class', 'galleryItem');
        div.innerHTML = '<img src=' + data[i].url + '>';
        galleryContainer.appendChild(div);
    }
})

   


