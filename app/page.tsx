'use client';

import { useState } from "react";
import Header from "@/app/components/Header";
import { przykladoweSzkody, Szkoda } from "@/app/data/claims";
import SzkodaCard from "@/app/components/SzkodaCard";
import AddSzkodaModal from "@/app/components/AddSzkodaModal";
import SzkodaDetailsModal from "@/app/components/SzkodaDetailsModal";

export default function HomePage() {
  const [claims, setClaims] = useState<Szkoda[]>(przykladoweSzkody);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState<Szkoda | null>(null);

  const handleAddSzkoda = (newSzkodaData: Omit<Szkoda, 'id'>) => {
    const newSzkoda: Szkoda = {
      id: (claims.length + 1).toString(),
      ...newSzkodaData,
    };
    setClaims(prevClaims => [newSzkoda, ...prevClaims]);
  };

  const handleSelectClaim = (claim: Szkoda) => {
    setSelectedClaim(claim);
  };

  const handleCloseModals = () => {
    setAddModalOpen(false);
    setSelectedClaim(null);
  };

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
            <button 
              onClick={() => setAddModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              + Dodaj nową szkodę
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {claims.map((szkoda) => (
            <SzkodaCard 
              key={szkoda.id} 
              claim={szkoda}
              onDetailsClick={() => handleSelectClaim(szkoda)}
            />
          ))}
        </div>

        {isAddModalOpen && (
          <AddSzkodaModal 
            onClose={handleCloseModals}
            onAdd={handleAddSzkoda}
          />
        )}

        {selectedClaim && (
          <SzkodaDetailsModal
            claim={selectedClaim}
            onClose={handleCloseModals}
          />
        )}
      </div>
    </main>
  );
}
