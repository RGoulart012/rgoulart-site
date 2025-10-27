import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function RGoulartSite() {
  const products = [
    { id: 1, name: "RG01", description: "Design clássico com toque moderno. Lentes com proteção UV400 e armação em acetato premium.", image: "/images/rg01.jpg" },
    { id: 2, name: "RG02", description: "Elegância atemporal em cada detalhe. Armação leve e confortável, ideal para o dia a dia.", image: "/images/rg02.jpg" },
    { id: 3, name: "RG03", description: "Estilo ousado e sofisticado. Perfeito para quem busca um visual marcante e exclusivo.", image: "/images/rg03.jpg" },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center font-sans">
      <header className="text-center mt-10">
        <motion.img src="/images/logo-rgoulart.png" alt="RGoulart Logo" className="w-56 mx-auto" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} />
        <motion.h2 className="text-xl italic mt-4 tracking-wide" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>Estilo que reflete sua essência.</motion.h2>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          <Button className="mt-6 bg-white text-black hover:bg-gray-200 text-lg rounded-full px-8 py-6">Ver Coleção</Button>
        </motion.div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 px-6 md:px-20 w-full max-w-6xl">
        {products.map((product) => (
          <Card key={product.id} className="bg-neutral-900 border border-neutral-700 rounded-2xl overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <img src={product.image} alt={product.name} className="rounded-xl w-full h-60 object-cover" />
              <h3 className="text-2xl font-bold mt-4">{product.name}</h3>
              <p className="text-gray-400 mt-2 text-sm">{product.description}</p>
              <Button className="mt-6 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-4">Em breve</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center mt-24 px-10 max-w-3xl">
        <h2 className="text-3xl font-semibold mb-4">Sobre a RGoulart</h2>
        <p className="text-gray-400 leading-relaxed">
          A RGoulart nasceu com o propósito de transformar o olhar em atitude. Unindo design, conforto e exclusividade, nossos óculos são feitos para quem busca mais do que estilo — busca identidade.
        </p>
      </section>

      <footer className="mt-24 mb-10 text-center text-gray-400">
        <div className="flex justify-center items-center gap-3 mb-3">
          <Instagram size={20} />
          <a href="https://www.instagram.com/rodrigogoulart_/" target="_blank" rel="noopener noreferrer" className="hover:text-white">@rodrigogoulart_</a>
        </div>
        <p>© {new Date().getFullYear()} RGoulart. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
