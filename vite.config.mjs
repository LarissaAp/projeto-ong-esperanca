import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig(({ command }) => ({
    base: "./",

    build: {
        rollupOptions: {
            input: {
                principal: resolve(process.cwd(), "index.html"),
                inicio: resolve(process.cwd(), "html/index.html"),
                projetos: resolve(process.cwd(), "html/projetos.html"),
                cadastro: resolve(process.cwd(), "html/cadastro.html")
            }
        }
    }
}));