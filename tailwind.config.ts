import type {Config} from "tailwindcss"
import { shadcnPreset } from "./lib/shadcn-preset";

const config = {
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  presets:[shadcnPreset],
} satisfies Config

export default config;