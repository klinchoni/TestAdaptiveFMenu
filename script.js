function getDeviceType() {
  const userAgent = navigator.userAgent;

  // Regex for detecting tablets
  const isTablet = /iPad|Tablet|PlayBook|Silk|android(?!.*mobi)/i.test(userAgent);

  // Regex for detecting mobile devices
  const isMobile = /Mobi|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);


  if (isTablet) {
    return "table";
  } else if (isMobile) {
    return "mobile";
  } else {
    return "desktop";
  }
}


// Example
const device = getDeviceType();
console.log(`${device} device detected`);

if (device === "mobile") {
  const script = document.createElement('script');
  script.src = 'mobile.js';
  document.head.appendChild(script);
} else if (device === "tablet") {
  const script = document.createElement('script');
  script.src = 'tablet.js';
  document.head.appendChild(script);
} else {
  const script = document.createElement('script');
  script.src = 'desktop.js';
  document.head.appendChild(script);
}
