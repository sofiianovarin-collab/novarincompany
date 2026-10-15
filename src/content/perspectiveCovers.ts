import type { PerspectiveImage } from "../types/perspectives";

/** Editorial cover art for published perspectives. Swap files under public/images/perspectives/ independently. */
export const perspectiveCoverImages: Record<string, PerspectiveImage> = {
  "real-business-need": {
    src: "/images/perspectives/golden_harbor_connections.png",
    alt: "Editorial illustration of a harbor city at sunset, with glowing arcs connecting a glass office terrace, shipping lanes and the skyline.",
    objectPosition: "52% 42%",
  },
  "payment-to-payout": {
    src: "/images/perspectives/global_trade_harbor_at_twilight.png",
    alt: "Editorial illustration of a container port and cargo ship at twilight, with light trails linking cranes, a bridge and the city skyline.",
    objectPosition: "58% 48%",
  },
  "one-corridor-built-well": {
    src: "/images/perspectives/twilight_skyline_bridge_connection.png",
    alt: "Editorial illustration of a lit bridge crossing a bay at twilight, with a golden arc linking two shores and a coastal skyline.",
    objectPosition: "62% 46%",
  },
  "small-teams-clear-responsibilities": {
    src: "/images/perspectives/twilight_harbor_boardroom_connections.png",
    alt: "Editorial illustration of a small team meeting in a glass boardroom overlooking a harbor city at sunset, with glowing connection arcs between the figures.",
    objectPosition: "72% 44%",
  },
};

export function perspectiveCoverFor(id: string): PerspectiveImage | undefined {
  return perspectiveCoverImages[id];
}
