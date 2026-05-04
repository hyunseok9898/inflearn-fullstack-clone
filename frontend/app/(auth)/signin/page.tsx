"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Mail, Lock, BookOpen, LogIn } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md">
        {/* 아이콘 */}
        <div className="flex justify-center mb-4">
          <BookOpen className="w-10 h-10 text-green-500 text-3xl" />
        </div>

        {/* 타이틀 */}
        <h1 className="text-3xl font-bold text-center">로그인</h1>
        <p className="font-bold text-ml text-gray-500 text-center mb-6 mt-2">
          인프런 계정으로 로그인할 수 있어요
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* 이메일 */}
          <div>
            <label className="text-sm font-medium">이메일</label>
            <div className="flex items-center border rounded-xl px-3 py-3 mt-1 focus-within:ring-2 focus-within:ring-green-500">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="example@inflab.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* 비밀번호 */}
          <div>
            <label className="text-sm font-medium">비밀번호</label>
            <div className="flex items-center border rounded-xl px-3 py-3 mt-1 focus-within:ring-2 focus-within:ring-green-500">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* 버튼 */}
          <button
            type="submit"
            className="flex items-center justify-center cursor-pointer bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition mt-2"
          >
            <LogIn className="w-5 h-5 mr-2" />
            로그인
          </button>
        </form>

        {/* 회원가입 */}
        <p className="text-center text-sm text-gray-500 mt-6">
          아직 회원이 아니신가요?{" "}
          <Link href="/signup" className="text-green-500 font-medium">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}
