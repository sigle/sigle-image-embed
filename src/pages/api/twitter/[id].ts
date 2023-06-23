// import { chromium as playwright } from "playwright-core";
import chromium from "@sparticuz/chromium";
import type { NextApiHandler } from "next";

/**
 * Generate a screenshot of a tweet using Playwright
 */

// Cache for 1 day
export const revalidate = 86400;

const twitterEmbedEndpoint: NextApiHandler = async (req, res) => {
  const { id } = req.query;

  // const browser = await playwright.launch({
  //   args: chromium.args,
  //   executablePath:
  //     process.env.NODE_ENV === "production"
  //       ? await chromium.executablePath
  //       : undefined,
  //   headless: true,
  // });

  // const context = await browser.newContext();
  // const page = await context.newPage();

  // await page.goto(`${process.env.APP_URL}/twitter-embed/${id}`);
  // const buffer = await page
  //   .locator(".react-tweet-theme")
  //   .screenshot({ timeout: 5000 });
  // await browser.close();

  res.setHeader("Content-Type", "image/png");
  res.end("t");
};

export default twitterEmbedEndpoint;
