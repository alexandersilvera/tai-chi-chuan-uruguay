/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ENV_VARIABLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


interface Window {
    Alpine: import('alpinejs').Alpine;
  }