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
header nav{
    flex-direction: column;
    align-items: unset;
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
styleSheet.innerText = mobileStyles;
document.head.appendChild(styleSheet);
