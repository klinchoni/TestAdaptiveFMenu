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
    width: 90px;
    padding: 20px;
}
.blog-news ul{
    flex-direction: column;
}
.blog-news ul .news {
    list-style: none outside;
    display: flex;
    text-align: center;
    flex: 0 0 35%;
    box-shadow: 0 0.3rem 1rem 0.3rem rgba(0, 0, 0, 0.3);
    margin-top: 10px;
}
.motivation ul{
    flex-direction: column;
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