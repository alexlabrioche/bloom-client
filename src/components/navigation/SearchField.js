import React from "react";
import styled, { css } from "styled-components";
import Select, { components } from "react-select";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Global from "../../Global";

const Container = styled.div`
  margin-left: 3rem;
  border-left: 1px solid ${Global.color.light};
  .deputies-select {
    width: 35rem;
  }
  .darken-app {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: black;
    opacity: 0;
    transition: 0.2s ease-in-out;
    ${props =>
      props.onMenuOpen &&
      css`
        position: absolute;
        height: 100vh;
        width: 100vw;
        opacity: 0.3;
      `}
  }
`;
const groupBadgeStyles = {
  backgroundColor: Global.color.tertiary,
  borderRadius: "2em",
  color: "white",
  display: "inline-block",
  fontSize: 14,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center"
};

const groupStyles = {
  color: Global.color.primary,
  fontSize: 20,
  borderBottom: `1px solid ${Global.color.light}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

const styles = {
  option: (provided, state) => ({
    ...provided,
    color: Global.color.body,
    fontWeight: 300,
    paddingLeft: 30,
    backgroundColor: state.isSelected ? Global.color.secondary : "white",
    padding: 10,
    ":hover": {
      backgroundColor: Global.color.tertiary,
      color: "white"
    }
  }),
  singleValue: base => ({
    ...base,
    color: Global.color.dark,
    display: "flex"
  }),
  placeholder: base => ({
    ...base,
    fontSize: "1.1rem",
    color: Global.color.secondary,
    fontWeight: 400
  }),
  control: base => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    border: "none",
    borderRadius: 5
  })
};

const formatGroupLabel = data => {
  return (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );
};

const customTheme = theme => ({
  ...theme,
  borderRadius: 0
});

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>{children}</components.SingleValue>
);
const NoOptionsMessage = ({ props }) => {
  return (
    <div {...props}>Aucun députés, groupes, ou partis n'a été trouvé...</div>
  );
};

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onMenuOpen: false
    };
    this.onMenuOpen = this.onMenuOpen.bind(this);
    this.onMenuClose = this.onMenuClose.bind(this);
  }

  onMenuOpen() {
    console.info("onMenuOpen");
    this.setState({
      onMenuOpen: true
    });
  }
  onMenuClose() {
    console.info("onMenuClose");
    this.setState({
      onMenuOpen: false
    });
  }

  render() {
    const { selectedOption, options, handleChange, placeholder } = this.props;
    const { onMenuOpen } = this.state;
    return (
      <Container onMenuOpen={onMenuOpen}>
        <div className="darken-app" />
        <Select
          className="deputies-select"
          styles={styles}
          formatGroupLabel={formatGroupLabel}
          value={selectedOption}
          onChange={handleChange}
          onMenuOpen={this.onMenuOpen}
          onMenuClose={this.onMenuClose}
          options={options}
          isSearchable
          isClearable
          components={{ SingleValue, NoOptionsMessage }}
          theme={customTheme}
          placeholder={placeholder}
        />
      </Container>
    );
  }
}

export default SearchField;
