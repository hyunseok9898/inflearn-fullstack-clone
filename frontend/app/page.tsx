import { Metadata } from "next";

export const metadata: Metadata = {
  title: "인프런 - 라이프타임 커리어 플랫폼",
  description: "인프런은 라이프타임 커리어 플랫폼입니다.",
};

export default async function Home() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center bg-white">
      <span className="text-6xl mb-4" style={{ color: "#00C471" }}>
        🎉
      </span>
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#00C471" }}>
        Part 2 강좌를 기대해주세요!
      </h1>
    </div>
  );
}
