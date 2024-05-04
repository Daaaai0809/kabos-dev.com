type Skill = {
  name: string;
  icon: string;
  description?: string;
};

type Skills = Skill[];

export const SKILLS: Skills = [
  {
    name: "Golang",
    icon: "/icons/skills/Golang.svg",
    description:
      "バックエンドでよく使います。このポートフォリオサイトもバックはGolangで作っています。そろそろGoで実務経験積みたい。",
  },
  {
    name: "TypeScript",
    icon: "/icons/skills/TypeScript.svg",
    description:
      "フロントエンドでよく使いますが最近はバックにも使い始めてます。Hono様様。",
  },
  {
    name: "JavaScript",
    icon: "/icons/skills/JavaScript.svg",
    description:
      "これもなんだかんだ使えます。どちらかというと最近はTypeScriptがメインです。",
  },
  {
    name: "Next.js",
    icon: "/icons/skills/Nextjs.svg",
    description:
      "業務でフロントエンドの開発を行うときに使うことが多いです。このポートフォリオサイトもNext.jsで作っています。",
  },
  {
    name: "React",
    icon: "/icons/skills/React.svg",
    description:
      "Reactもよく使います。Web Speed Hackathonなどの大会でも使用しました。",
  },
  {
    name: "Docker",
    icon: "/icons/skills/Docker.svg",
    description: "個人開発、業務どちらでも使っています。人並みには書けるはず。",
  },
  {
    name: "Python",
    icon: "/icons/skills/Python.svg",
    description:
      "機械学習やデータ分析など研究で使っています。プログラミングを始めて一番最初に触った言語です。",
  },
  {
    name: "Django",
    icon: "/icons/skills/Django.svg",
    description:
      "Pythonでプログラミングを勉強し始めた時に1年ほど触りました。Web開発に足を踏み入れたきっかけの言語です。",
  },
  {
    name: "PHP",
    icon: "/icons/skills/PHP.svg",
    description: "普段の業務で使用しています。",
  },
  {
    name: "Laravel",
    icon: "/icons/skills/Laravel.svg",
    description: "業務で使用しています。便利だよね。",
  },
  {
    name: "Rust",
    icon: "/icons/skills/Rust.svg",
    description:
      "最近興味を持ち始めました。AtCoderのコンテストに出場するときは基本Rustです。Wasmとかも手出したい。",
  },
  {
    name: "Cloudflare",
    icon: "/icons/skills/Cloudflare.svg",
    description:
      "個人開発のプロダクトで最近よくお世話になっています。マジで安すぎる。",
  },
  {
    name: "CSS",
    icon: "/icons/skills/CSS.svg",
  },
  {
    name: "HTML",
    icon: "/icons/skills/HTML.svg",
  },
  {
    name: "Linux",
    icon: "/icons/skills/Linux.svg",
    description: "普段の開発環境です。ubuntuを使ってます。",
  },
];
