import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function RGoulartSite() {
  const products = [
    {
      id: 1,
      name: "RG01",
      description:
        "Design clássico com toque moderno. Lentes com proteção UV400 e armação em acetato premium.",
      image: "/images/rg01.jpg",
      link: "https://mercadolivre.com/link-modelo-1",
    },
    {
      id: 2,
      name: "RG02",
      description:
        "Elegância atemporal em cada detalhe. Armação leve e confortável, ideal para o dia a dia.",
      image: "/images/rg02.jpg",
      link: "https://mercadolivre.com/link-modelo-2",
    },
    {
      id: 3,
      name: "RG03",
      description:
        "Estilo ousado e sofisticado. Perfeito para quem busca um visual marcante e exclusivo.",
      image: "/images/rg03.jpg",
      link: "https://mercadolivre.com/link-modelo-3",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      {/* Header */}
      <header style={{ marginTop: "50px" }}>
        <motion.img
          src="/images/logo-rgoulart.png"
          alt="RGoulart Logo"
          style={{ width: "200px", margin: "0 auto" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.h2
          style={{ fontStyle: "italic", marginTop: "20px", letterSpacing: "1px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Estilo que reflete sua essência.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="#produtos"
            style={{
              display: "inline-block",
              marginTop: "30px",
              backgroundColor: "white",
              color: "black",
              padding: "15px 30px",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Ver Coleção
          </a>
        </motion.div>
      </header>

      {/* Produtos */}
      <section
        id="produtos"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          marginTop: "80px",
          padding: "0 30px",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#111",
              border: "1px solid #333",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
            <h3 style={{ fontSize: "24px", marginTop: "15px" }}>{product.name}</h3>
            <p style={{ color: "#aaa", marginTop: "10px", fontSize: "14px" }}>
              {product.description}
            </p>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "20px",
                backgroundColor: "white",
                color: "black",
                padding: "10px 20px",
                borderRadius: "30px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Comprar no Mercado Livre
            </a>
          </div>
        ))}
      </section>

      {/* Sobre */}
      <section style={{ marginTop: "100px", padding: "0 20px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>Sobre a RGoulart</h2>
        <p style={{ color: "#aaa", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
          A RGoulart nasceu com o propósito de transformar o olhar em atitude. Unindo design,
          conforto e exclusividade, nossos óculos são feitos para quem busca mais do que estilo —
          busca identidade.
        </p>
      </section>

      {/* Rodapé */}
      <footer style={{ marginTop: "80px", marginBottom: "30px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            color: "#aaa",
          }}
        >
          <Instagram size={20} />
          <a
            href="https://www.instagram.com/rodrigogoulart_/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            @rodrigogoulart_
          </a>
        </div>
        <p style={{ color: "#777", marginTop: "10px" }}>
          © {new Date().getFullYear()} RGoulart. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
