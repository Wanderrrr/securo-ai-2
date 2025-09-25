import React from 'react';
import { Szkoda } from '@/app/data/claims';

interface SzkodaCardProps {
  claim: Szkoda;
}

const statusColors: { [key: string]: string } = {
  'Nowa': 'bg-blue-100 text-blue-800',
  'W toku': 'bg-yellow-100 text-yellow-800',
  'Zakończona': 'bg-green-100 text-green-800',
};

const SzkodaCard = ({ claim }: SzkodaCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      {/* Card Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{claim.numerSprawy}</h3>
          <p className="text-sm text-gray-600">{claim.klient}</p>
        </div>
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColors[claim.status]}`}>
          {claim.status}
        </span>
      </div>

      {/* Card Body */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Telefon:</span>
          <span className="font-medium text-gray-800">{claim.telefon}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">PESEL:</span>
          <span className="font-medium text-gray-800">{claim.pesel}</span>
        </div>
        
        <hr className="my-3"/>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Ubezpieczyciel:</span>
          <span className="font-medium text-gray-800">{claim.towarzystwoUbezpieczeniowe}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Typ polisy:</span>
          <span className="font-medium text-gray-800">{claim.typUbezpieczenia}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Wartość szkody:</span>
          <span className="font-bold text-blue-600">{claim.wartosc.toLocaleString('pl-PL')} zł</span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-6 text-right">
        <a href="#" className="font-medium text-blue-600 hover:text-blue-800">
          Zobacz szczegóły →
        </a>
      </div>
    </div>
  );
};

export default SzkodaCard;
