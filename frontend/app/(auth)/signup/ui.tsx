"use client";

import { signUp } from "@/app/actions/auth-actions";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Mail, Lock, UserPlus, BookOpen } from "lucide-react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const result = await signUp({ email, password });

    if (result?.status === "ok") {
      redirect("/signin");
    }

    if (result?.message) {
      alert(result.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md">
        {/* 아이콘 */}
        <div className="flex justify-center mb-4">
          <BookOpen className="w-10 h-10 text-green-500" />
        </div>

        {/* 타이틀 */}
        <h1 className="text-3xl font-bold text-center">회원가입</h1>
        <p className="text-gray-500 text-center mb-6 mt-2">
          인프런 계정을 만들어보세요
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

          {/* 비밀번호 확인 */}
          <div>
            <label className="text-sm font-medium">비밀번호 확인</label>
            <div className="flex items-center border rounded-xl px-3 py-3 mt-1 focus-within:ring-2 focus-within:ring-green-500">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* 버튼 */}
          <button
            type="submit"
            className="cursor-pointer flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition mt-2"
          >
            <UserPlus className="w-5 h-5" />
            회원가입
          </button>
        </form>

        {/* 로그인 이동 */}
        <p className="text-center text-sm text-gray-500 mt-6">
          이미 회원이신가요?{" "}
          <Link href="/signin" className="text-green-500 font-medium">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}
