#!/usr/bin/env node
/**
 * Downloads a subset of "Material Symbols Rounded" containing only the icons the
 * site uses, into app/fonts/material-symbols-rounded.woff2 (~15 KB instead of
 * ~5 MB for the full font).
 *
 * Using a new icon? Add its name to ICONS below, then run:  npm run icons
 * Browse names at https://fonts.google.com/icons?icon.style=Rounded
 */
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const ICONS = [
  "add", "arrow_back", "arrow_downward", "arrow_upward", "bolt",
  "calendar_month", "call", "check_circle", "checklist", "cloud", "contactless",
  "description", "design_services", "download", "edit", "error", "flag",
  "folder_special", "format_quote", "group", "language", "link", "local_cafe",
  "lock", "loyalty", "mail", "more_horiz", "notifications", "person_add",
  "point_of_sale", "qr_code_2", "radio_button_unchecked", "redeem", "remove",
  "restaurant", "rocket_launch", "schedule", "school", "search", "send", "settings",
  "smart_toy", "smartphone", "space_dashboard", "storefront", "support_agent",
  "two_wheeler", "view_kanban", "workspace_premium",
];

// Optical size follows the font size (20–48); weight 400, no fill, no grade.
const AXES = "opsz,wght,FILL,GRAD@20..48,400,0,0";
const OUT = fileURLToPath(new URL("../app/fonts/material-symbols-rounded.woff2", import.meta.url));

const names = [...new Set(ICONS)].sort().join(",");
const cssUrl = `https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:${AXES}&icon_names=${names}&display=block`;

// A modern browser UA makes Google Fonts answer with woff2.
const ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
const css = await (await fetch(cssUrl, { headers: { "User-Agent": ua } })).text();
const fontUrl = css.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)?.[1];
if (!fontUrl) throw new Error(`Unexpected response from Google Fonts:\n${css.slice(0, 500)}`);

const res = await fetch(fontUrl);
if (!res.ok) throw new Error(`Font download failed: ${res.status}`);
const bytes = Buffer.from(await res.arrayBuffer());
await writeFile(OUT, bytes);
console.log(`Wrote ${bytes.length} bytes (${ICONS.length} icons) → ${OUT}`);
