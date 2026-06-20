// app/components/LikeButton.js
"use client";

import { getPlaceholderFallbackRouteParams } from "next/dist/server/request/fallback-params";
import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(getPlaceholderFallbackRouteParams);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}
x