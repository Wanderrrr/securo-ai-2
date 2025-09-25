import Header from "@/app/components/Header";
import { przykladoweSzkody } from "@/app/data/claims";
import SzkodaCard from "@/app/components/SzkodaCard";

export default function HomePage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              Ewidencja Szkód
            </h1>
            <p className="text-gray-500">
              Dashboard do zarządzania sprawami
            </p>
          </div>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              + Dodaj nową szkodę
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {przykladoweSzkody.map((szkoda) => (
            <SzkodaCard key={szkoda.id} claim={szkoda} />
          ))}
        </div>
      </div>
    </main>
  );
}
