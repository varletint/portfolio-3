import { createCanvas, registerFont } from "canvas";
import sharp from "sharp";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateOGImage() {
  // Create canvas with OG image dimensions
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Set background color
  ctx.fillStyle = "#faf6f1";
  ctx.fillRect(0, 0, width, height);

  // Configure text rendering
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Draw "Varletint" title
  ctx.fillStyle = "#1a1a1a";
  ctx.font = "bold 84px sans-serif"; // Using sans-serif as fallback
  ctx.fillText("Varletint", width / 2, 280);

  // Draw tagline
  ctx.fillStyle = "#4a4a4a";
  ctx.font = "36px sans-serif";
  ctx.fillText("Backend & Full-Stack", width / 2, 360);
  ctx.fillText("Software Engineer", width / 2, 410);

  // Convert canvas to buffer
  const buffer = canvas.toBuffer("image/png");

  // Optimize with sharp
  const optimizedBuffer = await sharp(buffer)
    .png({
      quality: 90,
      compressionLevel: 9,
      adaptiveFiltering: true,
    })
    .toBuffer();

  // Save to public directory
  const outputPath = join(__dirname, "..", "public", "og-image.png");
  writeFileSync(outputPath, optimizedBuffer);

  // Get file size
  const fileSizeKB = (optimizedBuffer.length / 1024).toFixed(2);

  console.log("✅ OG image generated successfully!");
  console.log(`📁 Location: public/og-image.png`);
  console.log(`📏 Dimensions: ${width}x${height}px`);
  console.log(`💾 File size: ${fileSizeKB}KB`);

  if (optimizedBuffer.length > 512000) {
    console.warn("⚠️  Warning: File size exceeds 500KB");
  }
}

generateOGImage().catch(console.error);
