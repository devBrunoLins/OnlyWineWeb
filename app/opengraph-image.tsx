import { ImageResponse } from "next/og";

/**
 * Imagem de compartilhamento. O site anterior não tinha nenhuma tag Open Graph,
 * então qualquer link colado no WhatsApp/Slack aparecia sem prévia.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "OnlyWine — descubra, aprenda e receba vinho em casa";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#5A1226",
          padding: 76,
          color: "#F5DFE5",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#C89B3C",
          }}
        >
          <div style={{ width: 56, height: 2, background: "#C89B3C" }} />
          Aplicativo de vinho · Brasil
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.05,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: -2,
            }}
          >
            Encontre seu
          </div>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.05,
              fontWeight: 700,
              color: "#E58AA4",
              letterSpacing: -2,
            }}
          >
            próximo vinho
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 32,
              lineHeight: 1.4,
              color: "rgba(245,223,229,0.75)",
              maxWidth: 820,
            }}
          >
            Curadoria, loja com entrega em casa e videoaulas gratuitas num app só.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 28,
            color: "rgba(245,223,229,0.6)",
          }}
        >
          <div style={{ display: "flex", fontWeight: 700, color: "#FFFFFF" }}>
            OnlyWine
          </div>
          <div style={{ display: "flex" }}>onlywine.app</div>
        </div>
      </div>
    ),
    size,
  );
}
