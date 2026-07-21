import VME from "../components/VME";
import Footer from "../components/Footer";
import SalesPage from "../components/SalesPage";
import Depoimentos from "../components/Depoimentos";

export default function AulasPage() {
  return (
    <main>
      <SalesPage />
      <Depoimentos />
      <VME />
      <Footer />
    </main>
  );
}
