'use client';

import React, { useState } from 'react';
import { Szkoda, TypUbezpieczenia } from '@/app/data/claims';

interface AddSzkodaModalProps {
  onClose: () => void;
  onAdd: (newSzkoda: Omit<Szkoda, 'id'>) => void;
}

const AddSzkodaModal = ({ onClose, onAdd }: AddSzkodaModalProps) => {
  const [formData, setFormData] = useState({
    numerSprawy: '',
    klient: '',
    telefon: '',
    pesel: '',
    towarzystwoUbezpieczeniowe: '',
    typUbezpieczenia: 'OC' as TypUbezpieczenia,
    wartosc: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSzkoda: Omit<Szkoda, 'id'> = {
      ...formData,
      status: 'Nowa',
      dataZgloszenia: new Date().toISOString().split('T')[0], // YYYY-MM-DD
      typSzkody: 'Komunikacyjna', // Placeholder
      wartosc: Number(formData.wartosc),
    };
    onAdd(newSzkoda);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Dodaj nową szkodę</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="numerSprawy" value={formData.numerSprawy} onChange={handleChange} placeholder="Numer Sprawy" className="p-2 border rounded" required />
            <input name="klient" value={formData.klient} onChange={handleChange} placeholder="Klient" className="p-2 border rounded" required />
            <input name="telefon" value={formData.telefon} onChange={handleChange} placeholder="Telefon" className="p-2 border rounded" />
            <input name="pesel" value={formData.pesel} onChange={handleChange} placeholder="PESEL" className="p-2 border rounded" />
            <input name="towarzystwoUbezpieczeniowe" value={formData.towarzystwoUbezpieczeniowe} onChange={handleChange} placeholder="Ubezpieczyciel" className="p-2 border rounded" />
            <select name="typUbezpieczenia" value={formData.typUbezpieczenia} onChange={handleChange} className="p-2 border rounded">
              <option value="OC">OC</option>
              <option value="AC">AC</option>
              <option value="Majątek">Majątek</option>
              <option value="NNW">NNW</option>
              <option value="Życie">Życie</option>
            </select>
            <input type="number" name="wartosc" value={formData.wartosc} onChange={handleChange} placeholder="Wartość szkody" className="p-2 border rounded col-span-2" required />
          </div>
          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Anuluj</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Dodaj</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSzkodaModal;
