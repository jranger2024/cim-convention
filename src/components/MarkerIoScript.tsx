import Script from 'next/script'

export const MarkerIoScript = () => {
  return process.env?.NEXT_PUBLIC_MARKER_IO_ENABLED === 'true' ? (
    <Script
      id="marker.io"
      dangerouslySetInnerHTML={{
        __html: `
            window.markerConfig = {
              project: '${process.env.NEXT_PUBLIC_MARKER_IO_PROJECT_ID}',
              source: 'snippet'
            };

            !function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);
  `,
      }}
    />
  ) : null
}
