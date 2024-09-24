// tablet.js
const tabletStyles = `
body {
    font-size: 16px;
}

.header,
.offer,
.our-team,
.motivation,
.blog-news,
footer {
    width: 90%;
    padding: 20px;
}

.img img {
    max-width: 100%;
    height: auto;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = tabletStyles;
document.head.appendChild(styleSheet);
