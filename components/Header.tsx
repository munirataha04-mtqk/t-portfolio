export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#02170f",
        borderBottom: "1px solid #285641",
        padding: "8px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "cursive",
          fontSize: "17px",
          color: "#f3ead7",
        }}
      >
        Scarlet Tucker
        
             </span>

      <nav
        style={{
          display: "flex",
          gap: "20px",
          fontSize: "17px",
          color: "#f3ead7",
        }}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
        href="#contact"
        style={{
          border: "1px solid white",
          borderRadius: "30px",
          padding: "6px 12px",
          fontSize: "15px",
          color: "#f3ead7",
        }}
      >
        Let's Create ✦
      </a>
    </header>
  );
}