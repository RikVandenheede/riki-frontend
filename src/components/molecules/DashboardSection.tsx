import { useState } from "react";

import { Icon } from "../atoms/Icon";

import { AddSvg, EditSvg, TrashSvg } from "../atoms/Svg";

type DashboardSectionProps = {
  title: string;
  description: string;
  data: Array<unknown>;
  type: "icon" | "link" | "article";
};

type ActionsProps = "Add" | "Edit" | "Delete" | null;

export const DashboardSection = ({
  title,
  description,
  data,
  type,
}: DashboardSectionProps) => {
  const [activeAction, setActiveAction] = useState<ActionsProps>(null);

  const handleActiveAction = (action: ActionsProps): void => {
    setActiveAction((previous) => (previous === action ? null : action));
  };

  return (
    <section className="dashboard-section">
      <h3
        className={`dashboard-section__title ${activeAction ? "active" : ""}`}
      >
        {title}
        <span className="dashboard-section__action add-item">
          <AddSvg />
        </span>
        <span
          onClick={() => handleActiveAction("Edit")}
          className={`dashboard-section__action edit-item ${
            activeAction === "Edit" ? "active" : ""
          }`}
        >
          <EditSvg />
        </span>
        <span
          onClick={() => handleActiveAction("Delete")}
          className={`dashboard-section__action delete-item ${
            activeAction === "Delete" ? "active" : ""
          }`}
        >
          <TrashSvg />
        </span>
      </h3>
      <p className="dashboard-section__description">{description}</p>
      <ul className={`dashboard-section__items ${type}-container`}>
        {data?.map((item, index) => {
          return (
            <li key={`svg-${index}`} className={type}>
              {type === "icon" && <Icon icon={item as Icon} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
