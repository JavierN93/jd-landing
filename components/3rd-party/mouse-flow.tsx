import Script from 'next/script';

export default function MouseFlow() {
  return <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window._mfq = window._mfq || [];(function() {var mf = document.createElement("script");mf.type = "text/javascript"; mf.defer = true;mf.src = "//cdn.mouseflow.com/projects/0810ca44-c34e-459d-b3ee-1a4948405ea6.js";document.getElementsByTagName("head")[0].appendChild(mf);})();` }} />;
}
