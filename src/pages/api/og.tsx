import { ImageResponse } from "@vercel/og";
import { NextApiRequest } from "next";

export const config = {
  runtime: "edge",
};

const loadGoogleFont = async (text: string) => {
  const url = `https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@600&display=swap&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
};

export default async (req: NextApiRequest) => {
  const { searchParams } = new URL(req.url as string);

  const title = searchParams.get("title") ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.25'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Image Section */}
        <div
          style={{
            position: "absolute",
            top: "32px",
            left: "32px",
            width: "50px",
            height: "50px",
            overflow: "hidden",
            display: "flex",
          }}
        >
          <img
            src="https://ventivo.co/logo-transparent.png"
            alt="Blog Post"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Title Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <h1
            style={{
              paddingLeft: "32px",
              paddingRight: "32px",
              fontSize: "72px", // Increased font size
              lineHeight: "1.2", // Adjust line height for better spacing
              fontWeight: "700",
              textAlign: "center",
              color: "#1f2937", // Retaining the current color
              width: "80%", // Adjust width to prevent text overflow
              wordWrap: "break-word", // Ensure the text breaks nicely on multiple lines
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Instrument Sans",
          data: await loadGoogleFont(title),
          style: "normal",
        },
      ],
    }
  );
};
