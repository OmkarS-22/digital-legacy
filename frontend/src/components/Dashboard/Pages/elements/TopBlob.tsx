export default function TopBlob(): JSX.Element {
  return (
    <svg
      id="top-blob"
      viewBox="0 0 100 100"
      version="1.1"
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "50%",
        height: "50%",
        zIndex: 0,
        opacity: 0.3,
      }}
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%" />
          <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%" />
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M10.2,-14.8C17.3,-13.6,29.9,-19.1,31.7,-17.7C33.4,-16.3,24.4,-8.2,19.5,-2.8C14.6,2.5,13.7,5,14.3,10.4C14.9,15.9,16.9,24.3,14.8,27.2C12.6,30.1,6.3,27.4,1.7,24.5C-3,21.6,-6,18.5,-10.9,17.2C-15.8,16,-22.6,16.5,-27.8,13.9C-33,11.3,-36.5,5.7,-38.8,-1.3C-41.1,-8.3,-42.2,-16.6,-38.9,-22.5C-35.6,-28.4,-28,-31.9,-20.8,-33C-13.6,-34,-6.8,-32.7,-2.6,-28.2C1.6,-23.6,3.1,-15.9,10.2,-14.8Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
        style={{ transition: "0.3s" }}
      />
    </svg>
  );
}
