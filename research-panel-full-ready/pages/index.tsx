
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2">리서치패널</h1>
          <p className="text-lg text-gray-600">설문조사 참여하고 포인트 받아가세요!</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">회원가입</h2>
          <input className="border p-2 w-full mb-2" placeholder="이메일" />
          <input className="border p-2 w-full mb-2" placeholder="비밀번호" type="password" />
          <input className="border p-2 w-full mb-4" placeholder="비밀번호 확인" type="password" />
          <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">가입하기</button>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">설문 참여</h2>
          <div className="bg-white p-4 rounded shadow mb-4">
            <h3 className="font-semibold">📱 스마트폰 사용 습관 조사</h3>
            <p className="text-sm text-gray-600">약 3분 소요 / 300포인트</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">참여하기</button>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-10">
          © 2025 ResearchPanel. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
