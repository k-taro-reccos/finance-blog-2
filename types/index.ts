import { MicroCMSImage } from "microcms-js-sdk"

export type Section = {
  fieldId: "section"
  content: string
  title: string
}

export type Balloon = {
  fieldId: "balloon"
  name: string
  image: MicroCMSImage
  isLeft: boolean
  text: string
}

export type Intro = {
  fieldId: "intro"
  intro: string
}

export type Post = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedat: string
  title: string
  description: string
  eyecatch: MicroCMSImage
  category: {
    id: string
    createAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    name: string
  }
  intro: (Intro | Balloon)[]
  body: (Section | Balloon)[]
}

export type Category = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
}

// 見出し３
export type TocH3 = {
  id: string
  text: string // 見出しテキストs
}

// 見出し２
export type TocH2 = {
  id: string
  text: string // 見出しテキスト
  h3: TocH3[] // 見出し３の配列
}
