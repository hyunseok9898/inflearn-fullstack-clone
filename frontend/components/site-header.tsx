"use client";

import { CourseCategory } from "@/generated/openapi-client";
import { Layers, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SiteHeader({
  categories,
}: {
  categories: CourseCategory[];
}) {
  const pathname = usePathname();
  const isCategoryNeeded = pathname == "/" || pathname.includes("/courses");

  return (
    <header className="site-header w-full border-b bg-white">
      {/* 상단 헤더 */}
      <div className="header-top flex items-center justify-between px-8 py-3 gap-4">
        {/* 로고 */}
        <div className="logo min-w-[120px]">
          <Link href="/">
            <Image
              src="/img/inflearn_logo_default.svg"
              className="w-28 h-auto"
              width={120}
              height={32}
              alt="inflearn"
            />
          </Link>
        </div>
        {/* 네비게이션 */}
        <nav className="main-nav flex gap-6 text-base font-bold text-gray-700">
          <Link href="#" className="hover:text-[#1dc078] transition-colors">
            강의
          </Link>
          <Link href="#" className="hover:text-[#1dc078] transition-colors">
            로드맵
          </Link>
          <Link href="#" className="hover:text-[#1dc078] transition-colors">
            멘토링
          </Link>
          <Link href="#" className="hover:text-[#1dc078] transition-colors">
            커뮤니티
          </Link>
        </nav>
        {/* 검색창 + 아이콘 */}
        <div className="flex-1 flex justify-center">
          <div className="relative flex w-full max-w-xl items-center">
            <Input
              type="text"
              placeholder="나의 진짜 성장을 도와줄 실무 강의를 찾아보세요"
              className="w-full bg-gray-50 border-gray-200 focus-visible:ring-[#1dc078] pr-10"
            />
            <button
              type="button"
              className="absolute right-2 p-1 text-gray-400 hover:text-[#1dc078] transition-colors"
              tabIndex={-1}
            >
              <Search size={20} />
            </button>
          </div>
        </div>
        {/* 지식공유자 버튼 */}
        <Link href="/instructor">
          <Button
            variant="outline"
            className="font-semibold border-gray-200 hover:border-[#1dc078] hover:text-[#1dc078]"
          >
            지식공유자
          </Button>
        </Link>
        {/* Avatar */}
        <Avatar className="ml-2">
          <AvatarFallback>
            <span role="img" aria-label="user">
              👤
            </span>
          </AvatarFallback>
        </Avatar>
      </div>
      {/* 하단 카테고리 */}
      <div className="header-bottom bg-white px-8">
        {isCategoryNeeded && (
          <nav className="category-nav flex gap-6 py-4 overflow-x-auto scrollbar-none">
            {categories.map((category) => (
              <Link key={category.id} href={`/courses/${category.slug}`}>
                <div className="category-item flex flex-col items-center min-w-[72px] text-gray-700 hover:text-[#1dc078] cursor-pointer transition-colors">
                  <Layers size={28} className="mb-1" />
                  <span className="text-xs font-medium whitespace-nowrap">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
