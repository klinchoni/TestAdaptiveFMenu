// Function to detect the device type
function getDeviceType() {
    const ua = navigator.userAgent;
    console.log(ua);
    if (/tablet|ipad|playbook|silk|android(?!.*mobi)/i.test(ua)) {
      return 'tablet';
    } else if (/mobi|android|iphone|ipod/i.test(ua)) {
      return 'mobile';
    }
    return 'desktop';
  }
  
  // Load specific JavaScript based on device type
  function loadScript(scriptSrc) {
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    document.head.appendChild(script);
  }
  
  // Main logic
  const deviceType = getDeviceType();
  loadScript(deviceType+'.js');
  