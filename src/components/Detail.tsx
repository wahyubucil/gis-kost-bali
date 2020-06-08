import * as React from "react";
import { useKost } from "../context/kost";

export function Detail() {
  const { kost } = useKost();

  return (
    <div className="detail">
      <h2>Kost Information</h2>
      <div className="detail__list-info">
        <span>Owner Name</span>
        <p>{kost?.nameOwnerKost}</p>
      </div>
      <div className="detail__list-info">
        <span>Kost Address</span>
        <p>{kost?.addressOfKost}</p>
      </div>
      <div className="detail__list-info">
        <span>Owner Address</span>
        <p>{kost?.addressOfOwner}</p>
      </div>
      <div className="detail__list-info">
        <span>Room Facilities</span>
        <p>{kost?.facilitiesRoom[0].facilities}</p>
      </div>
      <div className="detail__list-info">
        <span>Building Facilities</span>
        <p>{kost?.buildingFacilities[0].facilities}</p>
      </div>
    </div>
  );
}
