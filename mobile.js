// mobile.js
const mobileStyles = `
body {
    font-size: 14px;
}

.header{
    width: 100%;
    padding: 10px;
}
header nav{
    flex-direction: column;
    align-items: unset;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mobileStyles;
document.head.appendChild(styleSheet);
