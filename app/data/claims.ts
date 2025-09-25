// Definicje typów
export interface DamageClaim {
  id: string;
  clientName: string;
  serviceType: string;
  phoneNumber: string;
  registrationNumber: string;
  date: string;
}

// Przykładowe dane
export const sampleClaims: DamageClaim[] = [
  {
    id: '1',
    clientName: 'Jan Kowalski',
    serviceType: 'Rejestracja pojazdu z zagranicy',
    phoneNumber: '501 123 456',
    registrationNumber: 'WX 12345',
    date: '2025-09-24',
  },
  {
    id: '2',
    clientName: 'Anna Nowak / Firma XYZ',
    serviceType: 'Przerejestrowanie pojazdu krajowego',
    phoneNumber: '602 234 567',
    registrationNumber: 'KRA 54321',
    date: '2025-09-23',
  },
  {
    id: '3',
    clientName: 'Piotr Wiśniewski',
    serviceType: 'Odbiór twardego dowodu rejestracyjnego',
    phoneNumber: '703 345 678',
    registrationNumber: 'GD 67890',
    date: '2025-09-22',
  },
];
