fetch("imageInfo.json")
.then(response => response.json())
.then(data => {
    console.log(data[0].url)
    let galleryContainer = document.getElementById("gallery");
    for (let i = 0; i < data.length; i++) {
        let figure = document.createElement("figure");
        figure.innerHTML = '<img src=' + data[i].url + '>' 
        + '<figcaption><p>' + data[i].caption + '</p></figcaption>';
        galleryContainer.appendChild(figure);
    }
})

   


