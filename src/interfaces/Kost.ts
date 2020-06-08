export interface Kost {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deleteAt: Date | null;
  nameOwnerKost: string;
  addressOfOwner: string;
  addressOfKost: string;
  facilitiesRoom: {
    idFacilityRoom: number;
    facilities: string;
  }[];
  buildingFacilities: {
    idFacilityBuilding: number;
    facilities: string;
  }[];
  locations: {
    idLocation: number;
    latitude: number;
    longitude: number;
  }[];
}
