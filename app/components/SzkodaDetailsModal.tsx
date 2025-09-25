'use client';

import React from 'react';
import { Szkoda } from '@/app/data/claims';

interface SzkodaDetailsModalProps {
  claim: Szkoda;
  onClose: () => void;
}

const SzkodaDetailsModal = ({ claim, onClose }: SzkodaDetailsModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Szczegóły szkody: {claim.numerSprawy}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        </div>
        
        <div className="space-y-4">
          <DetailRow label="Klient" value={claim.klient} />
          <DetailRow label="PESEL" value={claim.pesel} />
          <DetailRow label="Telefon" value={claim.telefon} />
          <hr />
          <DetailRow label="Ubezpieczyciel" value={claim.towarzystwoUbezpieczeniowe} />
          <DetailRow label="Typ polisy" value={claim.typUbezpieczenia} />
          <DetailRow label="Status" value={claim.status} isStatus={true} />
          <DetailRow label="Wartość szkody" value={`${claim.wartosc.toLocaleString('pl-PL')} zł`} isHighlighted={true} />
          <DetailRow label="Data zgłoszenia" value={new Date(claim.dataZgloszenia).toLocaleDateString('pl-PL')} />
        </div>

        <div className="flex justify-end mt-8">
           <button type="button" onClick={onClose} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Zamknij</button>
        </div>
      </div>
    </div>
  );
};

interface DetailRowProps {
  label: string;
  value: string;
  isStatus?: boolean;
  isHighlighted?: boolean;
}

const statusColors: { [key: string]: string } = {
  'Nowa': 'bg-blue-100 text-blue-800',
  'W toku': 'bg-yellow-100 text-yellow-800',
  'Zakończona': 'bg-green-100 text-green-800',
};

const DetailRow = ({ label, value, isStatus, isHighlighted }: DetailRowProps) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-600">{label}:</span>
    {isStatus ? (
      <span className={`px-3 py-1 text-sm font-semibold rounded-full ${statusColors[value]}`}>
        {value}
      </span>
    ) : (
      <span className={`font-semibold ${isHighlighted ? 'text-blue-600 text-lg' : 'text-gray-800'}`}>
        {value}
      </span>
    )}
  </div>
);

export default SzkodaDetailsModal;
