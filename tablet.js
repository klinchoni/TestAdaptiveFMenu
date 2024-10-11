// tablet.js
const tabletStyles = `
body {
    font-size: 16px;
}

.header {
    width: 90%;
    padding: 20px;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = tabletStyles;
document.head.appendChild(styleSheet);
