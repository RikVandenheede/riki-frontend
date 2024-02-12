import { ReactSVG } from "react-svg";

import { EditSvg, TrashSvg } from "./Svg";

type IconProps = {
  icon: Icon;
};

export const Icon = ({ icon }: IconProps) => {
  console.log(icon);

  return (
    <div className="svg-wrapper">
      {/* <span className="svg-wrapper__delete">
        <TrashSvg />
      </span> */}
      <ReactSVG
        src={`data:image/svg+xml;utf8,${encodeURIComponent(icon?.svg_code)}`}
      />
    </div>
  );
};
