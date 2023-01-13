/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GH_REPOSITORY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
