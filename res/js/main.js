const mainImage = document.getElementById("mainImage");
const menuImages = document.getElementsByClassName("menuImage");

[...menuImages].forEach((img) => {
    img.onclick = () => {
        mainImage.src = img.src;
    }
});