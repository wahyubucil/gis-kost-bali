import * as React from "react";
import { ChildComponentProps } from "google-map-react";
import markerIcon from "../icons/marker-icon.svg";

export function Marker(
  props: ChildComponentProps & { onClick: React.MouseEventHandler }
) {
  return (
    <div className="marker" onClick={props.onClick}>
      <img src={markerIcon} alt="marker" />
      <span>Click for more info</span>
    </div>
  );
}
