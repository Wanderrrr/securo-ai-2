import Header from "@/app/components/Header";
import DamageList from "@/app/components/DamageList";
import { przykladoweSzkody } from "@/app/data/claims";

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

        <DamageList claims={przykladoweSzkody} />
      </div>
    </main>
  );
}
