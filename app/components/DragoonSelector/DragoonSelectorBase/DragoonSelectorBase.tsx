import { FC } from "react";

const DragoonItemBase: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="350"
      height="350"
      viewBox="0 0 350 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        outlineColor: "#000",
        outlineWidth: "4px",
        outlineStyle: "solid",
      }}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M166.297 83.9461C96.8547 91.1161 35.1767 160.996 56.1647 208.721C61.5067 220.869 65.1017 222.415 72.4207 215.713C79.4867 209.243 82.6967 209.642 87.7307 217.616C92.6077 225.342 110.544 236.731 117.797 236.708C128.875 236.672 148.015 227.296 160.984 215.551C167.558 209.599 167.123 209.59 179.529 215.937C194.438 223.566 198.554 223.669 211.746 216.748C221.547 211.605 221.634 211.582 224.062 213.395C225.407 214.399 226.42 215.631 226.313 216.131C226.206 216.632 226.833 217.442 227.707 217.931C228.689 218.48 229.297 220.162 229.297 222.33C229.297 224.808 229.664 225.653 230.547 225.206C231.235 224.858 231.01 225.218 230.047 226.007C229.085 226.796 228.294 228.292 228.291 229.331C228.287 230.371 227.596 232.541 226.755 234.155C225.913 235.769 225.457 237.695 225.741 238.436C226.033 239.197 225.271 240.231 223.985 240.817C222.735 241.387 221.646 242.734 221.565 243.812C221.484 244.889 219.815 247.327 217.857 249.228C215.899 251.13 214.295 253.031 214.292 253.453C214.282 254.889 200.78 267.721 199.279 267.721C198.739 267.721 198.297 268.122 198.297 268.613C198.297 269.103 197.142 269.794 195.731 270.148C192.568 270.942 192.785 274.074 196.034 274.538C198.804 274.933 225.505 267.291 230.468 264.682C232.488 263.62 236.615 261.826 239.641 260.694C244.64 258.823 247.561 256.332 253.387 248.971C254.057 248.123 257.53 247.721 264.176 247.721C301.755 247.721 312.63 228.108 286.984 206.589C278.464 199.441 278.375 199.947 288.938 195.448C301.437 190.123 302.797 188.536 302.797 179.269C302.797 169.13 297.953 164.052 281.101 156.527C279.024 155.6 277.534 153.248 274.618 146.294C271.256 138.277 266.247 130.11 262.921 127.221C262.288 126.671 259.413 123.231 256.532 119.577C246.786 107.215 232.436 95.4971 225.297 94.0711C223.372 93.6871 219.547 92.0421 216.797 90.4151C205.333 83.6351 189.255 81.5751 166.297 83.9461ZM244.952 193.974C249.396 195.998 251.523 203.504 248.547 206.661C242.499 213.078 233.217 214.185 226.76 209.26C215.84 200.931 231.445 187.819 244.952 193.974ZM134.733 277.053C127.908 280.921 119.213 291.085 114.004 301.283C112.381 304.461 102.086 338.011 100.445 345.471L99.5097 349.721H104.773H110.036L110.153 344.527C110.217 341.671 110.769 337.822 111.378 335.974C111.988 334.127 112.211 331.514 111.873 330.168C111.506 328.705 111.693 327.721 112.337 327.721C112.93 327.721 113.137 327.271 112.797 326.721C112.457 326.171 112.626 325.721 113.172 325.721C113.718 325.721 113.961 324.596 113.711 323.221C113.447 321.766 113.729 320.721 114.384 320.721C115.004 320.721 115.257 320.06 114.948 319.253C114.638 318.446 114.822 317.515 115.357 317.184C115.892 316.853 116.071 316.164 115.754 315.652C115.438 315.14 115.641 314.721 116.207 314.721C116.772 314.721 116.975 314.046 116.659 313.221C116.342 312.396 116.581 311.721 117.19 311.721C117.799 311.721 118.201 311.384 118.085 310.971C117.968 310.558 118.449 309.18 119.154 307.907C120.149 306.11 120.17 305.272 119.244 304.157C118.287 303.004 118.389 302.721 119.758 302.721C120.696 302.721 121.294 302.212 121.086 301.589C120.879 300.966 121.823 299.188 123.184 297.636C124.546 296.085 125.814 293.801 126.004 292.562C126.193 291.322 126.674 290.063 127.072 289.764C127.471 289.466 127.943 288.546 128.122 287.721C128.301 286.896 128.863 286.071 129.372 285.888C129.881 285.704 130.297 285.069 130.297 284.476C130.297 283.883 131.965 281.914 134.004 280.1C137.88 276.651 138.263 275.052 134.733 277.053ZM194.297 277.656C194.297 278.17 194.724 279.715 195.247 281.089C195.905 282.821 195.85 283.703 195.067 283.964C194.343 284.206 194.239 285.037 194.779 286.281C195.242 287.348 195.748 289.346 195.904 290.721C196.06 292.096 196.673 295.021 197.267 297.221C199.624 305.965 200.778 339.378 198.968 346.471L198.138 349.721H218.659C232.426 349.721 239.401 349.361 239.855 348.628C243.879 342.116 229.078 308.073 216.1 293.993C207.465 284.623 194.297 274.757 194.297 277.656Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DragoonItemBase;
