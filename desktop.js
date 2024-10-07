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
    margin: 0 auto;
    padding: 30px;
}
.blog-news ul .news {
    list-style: none outside;
    display: flex;
    text-align: center;
    flex: 0 0 35%;
    box-shadow: 0 0.3rem 1rem 0.3rem rgba(0, 0, 0, 0.3);
    width: 50%;
}
.img img {
    max-width: 100%;
    height: auto;
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = desktopStyles;
document.head.appendChild(styleSheet);
