
export default function Signup() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>회원가입 페이지</h1>
      <form>
        <input type="text" placeholder="이름" /><br />
        <input type="email" placeholder="이메일" /><br />
        <input type="password" placeholder="비밀번호" /><br />
        <button>가입하기</button>
      </form>
    </main>
  );
}
