import { shared } from "./components/shared.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  shared("post-share", ".post-card__share");
});
