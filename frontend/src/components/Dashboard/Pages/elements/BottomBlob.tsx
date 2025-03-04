export default function BottomBlob(): JSX.Element {
  return (
    <svg
      id="bottom-blob"
      viewBox="0 0 100 100"
      version="1.1"
      style={{
        position: "absolute",
        bottom: "0",
        right: "0",
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
        d="M8.8,-15.5C9.7,-14.8,7.5,-8.9,13.1,-5.5C18.8,-2,32.4,-1,35.2,1.6C38,4.3,30.1,8.5,25.3,13.6C20.6,18.7,19.2,24.7,15.5,30.7C11.8,36.8,5.9,42.9,1.9,39.6C-2,36.2,-4,23.3,-8.4,17.6C-12.7,12,-19.4,13.5,-21.9,11.8C-24.4,10.1,-22.7,5,-23.7,-0.6C-24.7,-6.2,-28.3,-12.3,-28,-17.7C-27.6,-23.1,-23.2,-27.8,-17.8,-26C-12.5,-24.1,-6.3,-15.8,-1.1,-13.8C4,-11.8,7.9,-16.2,8.8,-15.5Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
        style={{ transition: "0.3s" }}
      />
    </svg>
  );
}
