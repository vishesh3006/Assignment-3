const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
import images from './images.js'
// document.querySelector("#hello").remove();
if (params.pdf) {
    const section = document.querySelector('#home');
    section.setAttribute('display', 'block')
    const imagePreview = document.createElement('div');

    let content = await images.map((image, index) => {
        return (
            `<div class="content" style="page-break-after:always;">
                                <h2>${image.title}<h2>
                                <img src=${image.previewImage} alt="${image.title}"></img>
                        </div>`
        );
    }).join("");

    // content += `<div class="content">

    // <img class="content-img" src=${images[images.length - 1].previewImage} alt="${images[images.length - 1].title}></img>
    //         </div>`
    imagePreview.innerHTML = content;
    section.innerHTML = "";
    section.appendChild(imagePreview);
}