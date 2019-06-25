import React from "react";
import "rc-collapse/assets/index.css";
import Collapse, { Panel } from "rc-collapse";
import styled from "styled-components";
import Global from "../../Global";
import FlipCard from "./FlipCard";

const CollapseContainer = styled.div`
  .rc-collapse {
    border: none;
  }
  .rc-collapse-header {
    background: ${Global.color.lightBackground};
    color: ${Global.color.primary} !important;
    font-size: 1.3rem;
    padding: 32px 0px 16px 10px !important;
  }
  .rc-collapse-header__description {
    text-align: center;
    width: 100%;
    padding-bottom: 1rem;
  }
`;

class CollapseCategories extends React.Component {
  state = {
    accordion: false,
    activeKey: this.getActiveKeys()
  };
  getActiveKeys() {
    const { categories } = this.props;
    console.info("getActiveKeys categories", categories);
    const activeKey = [];
    categories.forEach((category, index) => {
      activeKey.push(`${index}`);
    });
    return activeKey;
  }

  onChange = activeKey => {
    this.setState({
      activeKey
    });
  };

  getItems(categories) {
    const { votes } = this.props;
    if (categories.length >= 1) {
      const collapseItems = categories.map((category, index) => {
        const items = [];
        const key = index;
        items.push(
          <Panel className="panel" header={`${category.name}`} key={key}>
            <p className="rc-collapse-header__description">
              {category.description || ""}
              {votes.map(vote => {
                console.info("Collapse vote ID", vote._id);
                console.info("Collapse category ID", category._id);
              })}
            </p>
          </Panel>
        );
        return items;
      });
      return collapseItems;
    }
  }

  toggle = () => {
    this.setState({
      accordion: !this.state.accordion
    });
  };

  render() {
    const { accordion, activeKey } = this.state;
    const { categories } = this.props;
    console.info("activeKey", activeKey);
    return (
      <CollapseContainer style={{ width: "100%" }}>
        <Collapse
          accordion={accordion}
          onChange={this.onChange}
          activeKey={activeKey}
        >
          {this.getItems(categories)}
        </Collapse>
      </CollapseContainer>
    );
  }
}

export default CollapseCategories;
