import Header from "@/app/components/Header";
import DamageList from "@/app/components/DamageList";
import { sampleClaims } from "@/app/data/claims";

export default function HomePage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              Formularz Opłat za Rejestrację Pojazdu
            </h1>
            <p className="text-gray-500">
              Kalkulacja i rozliczenie opłat urzędowych
            </p>
          </div>
          <div>
            {/* Action buttons can go here */}
          </div>
        </div>

        {/* The list of claims will now be rendered here */}
        <DamageList claims={sampleClaims} />
      </div>
    </main>
  );
}
