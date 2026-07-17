import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-24 pt-24 pb-60">
      <div className="flex flex-col gap-4">
        <p className="text-sm leading-[25.2px] opacity-80 text-black dark:text-white">
          ソフトウェアエンジニアの大学3年生（22歳）
        </p>
        <p className="text-sm leading-[25.2px] opacity-80 text-black dark:text-white">
          文系大学を経てコンピュータサイエンスを学ぶため理系大学へ編入
        </p>
        <p className="text-sm leading-[25.2px] opacity-80 text-black dark:text-white">
          編入したタイミングでプログラミングを始め、医療系スタートアップでフルスタックエンジニアとして実務経験を積んできました
        </p>
      </div>
      <Link
        href="/career"
        className="w-fit text-sm uppercase tracking-[1.4px] text-black underline underline-offset-4 dark:text-white"
      >
        SHUICHI についてもっと知る
      </Link>
    </div>
  );
}
