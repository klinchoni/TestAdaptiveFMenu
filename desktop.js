// desktop.js
const desktopStyles = `
body {
    font-size: 18px;
}

.header,
.offer,
.our-team,
.motivation,
.blog-news,
footer {
    width: 80%;
    margin: 0 auto;
    padding: 30px;
}

.img img {
    max-width: 100%;
    height: auto;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = desktopStyles;
document.head.appendChild(styleSheet);
