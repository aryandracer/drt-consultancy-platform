export default function Home() {
  return (
    <main style={{ maxWidth: "900px", margin: "40px auto", fontFamily: "Arial" }}>
      <h1>DRT Consultancy & Legal Advisory</h1>

      <p>
        Strategic consultancy and legal advisory services for matters before
        Debt Recovery Tribunals, delivered by experienced professionals and
        associated advocates.
      </p>

      <a
        href="/intake"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 20px",
          background: "black",
          color: "white",
          textDecoration: "none"
        }}
      >
        Submit Your Case
      </a>
    </main>
  );
}
