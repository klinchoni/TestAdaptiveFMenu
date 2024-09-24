// mobile.js
const mobileStyles = `
body {
    font-size: 14px;
}

.header,
.offer,
.our-team,
.motivation,
.blog-news,
footer {
    width: 100%;
    padding: 10px;
}

.img img {
    max-width: 100%;
    height: auto;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mobileStyles;
document.head.appendChild(styleSheet);
