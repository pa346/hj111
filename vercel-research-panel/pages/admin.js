
export default function Admin() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>관리자 설문 등록</h1>
      <form>
        <input type="text" placeholder="설문 제목" /><br />
        <textarea placeholder="설문 내용" /><br />
        <button>등록하기</button>
      </form>
    </main>
  );
}
