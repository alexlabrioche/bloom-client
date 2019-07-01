import React from "react";
import styled, { css } from "styled-components";
import Select, { components } from "react-select";
import Global from "../../Global";

const Container = styled.div`
  margin-left: 3rem;
  border-left: 1px solid ${Global.color.light};
  border-right: 1px solid ${Global.color.light};
  ${props =>
    props.mobileView &&
    css`
      padding: 0.5rem;
      border-top: 1px solid ${Global.color.light};
      margin-left: 0rem;
      border-left: none;
      border-right: none;
    `}
  .deputies-select {
    width: 35rem;
    ${props =>
      props.mobileView &&
      css`
        width: 100vw;
      `}
  }
  .darken-app {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: black;
    opacity: 0;
    transition: 0.4s;
    ${props =>
      props.onMenuOpen &&
      css`
        position: absolute;
        height: 100vh;
        width: 100vw;
        opacity: 0.2;
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
  indicatorSeparator: base => ({
    ...base,
    display: "none"
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
    fontWeight: Global.font.weight.header
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
const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <i
          className={
            props.selectProps.menuIsOpen
              ? "fas fa-search-minus"
              : "fas fa-search-plus"
          }
        />
      </components.DropdownIndicator>
    )
  );
};
class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onMenuOpen: false,
      placeholder: "Rechercher un groupe, un parti, ou un député..."
    };
    this.onMenuOpen = this.onMenuOpen.bind(this);
    this.onMenuClose = this.onMenuClose.bind(this);
  }

  onMenuOpen() {
    this.setState({
      onMenuOpen: true,
      placeholder: ""
    });
  }
  onMenuClose() {
    this.setState({
      onMenuOpen: false,
      placeholder: "Rechercher un groupe, un parti, ou un député..."
    });
  }

  render() {
    const { selectedOption, options, handleChange, mobileView } = this.props;
    const { onMenuOpen, placeholder } = this.state;
    return (
      <Container onMenuOpen={onMenuOpen} mobileView={mobileView}>
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
          components={{ SingleValue, NoOptionsMessage, DropdownIndicator }}
          theme={customTheme}
          placeholder={placeholder}
          // onFocus={() => this.setState({ placeholder: "" })}
        />
      </Container>
    );
  }
}

export default SearchField;
