import { defineConfig } from "vite";
import unocss from "unocss/vite";
import mdx from "@mdx-js/rollup";
import rehypeHighlight from "rehype-highlight";
import solid from "solid-start/vite";

import unocssPlugin from "unocss/vite"
import remarkGfm from 'remark-gfm';

export default defineConfig({
  plugins: [
    // mdx({
    //   jsxImportSource: "solid-js",
    //   providerImportSource: "solid-mdx",
    // }),

    unocssPlugin(),
    unocss(),
    {
      ...(
          mdx({
            jsxImportSource: "solid-js",
            jsx: true,
            providerImportSource: "solid-mdx",
            rehypePlugins: [rehypeHighlight, remarkGfm],
          })
//
      ),
      enforce: "pre",
    },
    solid({
      adapter: (await import("solid-start-static")).default(),
      extensions: [".mdx", ".md"],
      ssr: true,
    }),
  ],
});
