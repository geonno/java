const images = [
    "0.jpg", "1.jpg", "2.jpg","3.jpg","4.jpg"
]

const chosenimage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
console.log(image)

image.src=`img/${chosenimage}`

document.body.appendChild(image);