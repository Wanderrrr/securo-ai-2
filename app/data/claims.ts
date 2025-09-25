// Definicje typów
export type TypUbezpieczenia = 'OC' | 'AC' | 'Majątek' | 'NNW' | 'Życie';

export interface Szkoda {
  id: string;
  numerSprawy: string;
  klient: string;
  telefon: string;
  pesel: string;
  towarzystwoUbezpieczeniowe: string;
  typUbezpieczenia: TypUbezpieczenia;
  typSzkody: 'Komunikacyjna' | 'Nieruchomość' | 'Ubezpieczenie';
  status: 'Nowa' | 'W toku' | 'Zakończona';
  wartosc: number;
  dataZgloszenia: string;
}

// Przykładowe dane
export const przykladoweSzkody: Szkoda[] = [
  {
    id: '1',
    numerSprawy: 'SC/2024/001',
    klient: 'Jan Kowalski',
    telefon: '501 123 456',
    pesel: '85011512345',
    towarzystwoUbezpieczeniowe: 'PZU SA',
    typUbezpieczenia: 'OC',
    typSzkody: 'Komunikacyjna',
    status: 'W toku',
    wartosc: 15000,
    dataZgloszenia: '2025-09-24',
  },
  {
    id: '2',
    numerSprawy: 'SC/2024/002',
    klient: 'Anna Nowak / Firma XYZ',
    telefon: '602 234 567',
    pesel: '92032054321',
    towarzystwoUbezpieczeniowe: 'Warta S.A.',
    typUbezpieczenia: 'Majątek',
    typSzkody: 'Nieruchomość',
    status: 'Nowa',
    wartosc: 25000,
    dataZgloszenia: '2025-09-23',
  },
  {
    id: '3',
    numerSprawy: 'SC/2024/003',
    klient: 'Piotr Wiśniewski',
    telefon: '703 345 678',
    pesel: '78110587654',
    towarzystwoUbezpieczeniowe: 'Allianz',
    typUbezpieczenia: 'Życie',
    typSzkody: 'Ubezpieczenie',
    status: 'Zakończona',
    wartosc: 8000,
    dataZgloszenia: '2025-09-22',
  },
];
