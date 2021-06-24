// const urlSearchParams = new URLSearchParams(window.location.search);
// const params = Object.fromEntries(urlSearchParams.entries());
import images from './images.js'
// document.querySelector("#hello").remove();

export default function pdfLayout() {
    const section = document.querySelector('#home');
    section.setAttribute('display', 'block')
    const imagePreview = document.createElement('div');

    let content = images.map((image, index) => {
        return (
            `<div class="content" style="page-break-after:always;">
                                <h2>${image.title}<h2>
                                <img src=${image.previewImage} alt="${image.title}"></img>
                        </div>`
        );
    }).join("");

    imagePreview.innerHTML = content;
    section.innerHTML = "";
    section.appendChild(imagePreview);
    //alert('hello everyone')
}
