import Header from "@/components/Header";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata = {
  title: "Koleksiyon - Premium Tekstil Ürünleri",
  description: "Celvo premium tekstil koleksiyonu. Özenle seçilmiş kaliteli ve şık ürünler.",
};

export default function KoleksiyonPage() {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <Collection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

