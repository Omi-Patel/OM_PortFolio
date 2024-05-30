import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 26,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "lightgreen",
          borderRadius:"30%"
        }}
      >
        O
      </div>
    ),
    { ...size }
  );
}
