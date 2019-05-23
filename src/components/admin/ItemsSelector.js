import React from "react";

class ItemsSelector extends React.Component {
  render() {
    const { activeList } = this.props;
    return (
      <div>
        <ul className="list-group list-group-horizontal">
          <li
            className={
              activeList === "parties"
                ? "text-primary list-group-item"
                : "list-group-item"
            }
            onClick={() => activeList("parties")}
          >
            Partis
          </li>
          <li
            className={
              activeList === "groups"
                ? "text-primary list-group-item"
                : "list-group-item"
            }
            onClick={() => activeList("groups")}
          >
            Groupes
          </li>
          <li
            className={
              activeList === "categories"
                ? "text-primary list-group-item"
                : "list-group-item"
            }
            onClick={() => activeList("categories")}
          >
            Textes
          </li>

          <li
            className={
              activeList === "laws"
                ? "text-primary list-group-item"
                : "list-group-item"
            }
            onClick={() => activeList("laws")}
          >
            Amendements
          </li>
          <li
            className={
              activeList === "deputies"
                ? "text-primary list-group-item"
                : "list-group-item"
            }
            onClick={() => activeList("deputies")}
          >
            Députés
          </li>

          <li
            className={
              activeList === "votes"
                ? "text-primary list-group-item"
                : "list-group-item"
            }
            onClick={() => activeList("votes")}
          >
            Votes
          </li>
        </ul>
      </div>
    );
  }
}

export default ItemsSelector;
