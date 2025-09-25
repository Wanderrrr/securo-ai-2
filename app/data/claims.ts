// Definicje typów
export interface Szkoda {
  id: string;
  numerSprawy: string;
  klient: string;
  telefon: string;
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
    typSzkody: 'Ubezpieczenie',
    status: 'Zakończona',
    wartosc: 8000,
    dataZgloszenia: '2025-09-22',
  },
];
