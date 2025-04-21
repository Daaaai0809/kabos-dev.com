export type Career = {
  name: string;
  startedAt: string;
  isQualification?: boolean;
  endedAt?: string;
  icon?: string;
  description?: string;
};

type Careers = Career[];

const careers: Careers = [
  {
    name: "埼玉大学",
    startedAt: "2021/04",
    icon: "/icons/careers/su.svg",
  },
  {
    name: "株式会社80&Company",
    startedAt: "2023/04",
    icon: "/icons/careers/80&co.svg",
    description:
      "2023年4月より長期インターンとして働いています。\nこれまでドレスレンタルのECサイトや、オンラインアートスクール、工芸品サブスクサービスなどの開発プロジェクトに携わってきました。",
  },
  {
    name: "応用情報技術者",
    startedAt: "2023/06",
    isQualification: true,
    description: "2023年4月に行われた応用情報技術者試験を受験し合格しました。",
  },
  {
    name: "LINEヤフー株式会社",
    startedAt: "2024/08",
    icon: "/icons/careers/work.svg",
    description:
      "2024年8月中旬よりLINEヤフー株式会社にてサマーインターンシップに参加しました。 \nインターンではヤフーアプリにおける広告配信基盤のKubernetesアーキテクチャの改修タスクを主に担当し、Daemon SetやHome Pathを利用した静的ファイルの配置や取得用Cronスクリプトの改修によって、静的ファイルの占有領域を1/10以下にすることに成功しました。\nまた、既存のShell ScriptプログラムのGolangへの移行タスクも担当しました。",
  },
];

export const CAREERS = careers.reverse();
