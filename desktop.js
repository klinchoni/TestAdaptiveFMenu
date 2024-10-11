// desktop.js
const desktopStyles = `
body {
    font-size: 18px;
}

.header {
    margin: 0 auto;
    padding: 30px;
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = desktopStyles;
document.head.appendChild(styleSheet);
