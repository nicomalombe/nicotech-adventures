import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer
      style={{
        background: "#0d1b2a",
        color: "white",
        padding: "25px 20px",
        textAlign: "center"
      }}
    >

      <p>© {new Date().getFullYear()} Nicotech Adventures</p>

      <p style={{ marginTop: "10px" }}>
        Software Development | AI Systems | Mobile Apps | Data Science
      </p>

      {/* 🔥 SOCIAL ICONS */}
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "center",
          gap: "20px"
        }}
      >

        {/* GITHUB */}
        <a
          href="https://github.com/nicomalombe"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            fontSize: "28px",
            transition: "0.3s"
          }}
        >
          <FaGithub />
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/nicodemus-malombe-644b37293/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            fontSize: "28px",
            transition: "0.3s"
          }}
        >
          <FaLinkedin />
        </a>

      </div>

    </footer>
  )
}

export default Footer