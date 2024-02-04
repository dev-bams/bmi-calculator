function KG() {
  const cls1 = {
    fill: "none",
    stroke: "#808080",
    strokeMiterlimit: "10",
    strokeWidth: "1.91px",
  };

  return (
    <svg
      className="self-center m-2"
      width="32px"
      height="32px"
      viewBox="0 0 24 24"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <rect style={cls1} x="1.5" y="1.5" width="21" height="21" rx="1.91" />

        <path
          style={cls1}
          d="M5.32,7.23c4.17-3.82,9.19-3.82,13.36,0l-1.91,2.86a11.51,11.51,0,0,0-9.54,0Z"
        />

        <line style={cls1} x1="12" y1="6.27" x2="12" y2="9.14" />

        <line style={cls1} x1="12" y1="12.95" x2="12" y2="19.64" />
      </g>
    </svg>
  );
}

export default KG;
