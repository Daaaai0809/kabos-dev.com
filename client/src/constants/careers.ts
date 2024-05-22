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
];

export const CAREERS = careers.reverse();
