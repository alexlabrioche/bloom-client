import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";

import Global from "../../../Global";

const Button = styled.div`
  #dropdown-basic {
    color: ${Global.color.primary};
    transition: 0.2s ease;
    &:hover {
      text-decoration: none;
      color: ${Global.color.accent};
    }
    &:focus {
      text-decoration: none;
    }
  }
  .dropdown-item {
    color: ${Global.color.primary};
  }
`;

class DropDownCore extends React.Component {
  render() {
    const { text, list, uriLink } = this.props;
    return (
      <Dropdown>
        <Button>
          <Dropdown.Toggle variant="link" id="dropdown-basic">
            {text}
          </Dropdown.Toggle>
        </Button>

        <Dropdown.Menu>
          {list.map((item, index) => {
            return (
              <Dropdown.Item key={index}>
                <Link to={`${uriLink}/${item._id}`} className="dropdown-item">
                  {item.name}
                </Link>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default DropDownCore;

// import React from "react";
// import styled from "styled-components";

// import DropDownOptions from "./DropDownOptions";

// const Container = styled.div`
//   .select {
//     border: 1px solid #ececec;
//     padding: 10px 20px;
//     display: inline-block;
//     cursor: pointer;
//     position: relative;
//     top: 0;
//     margin: 0;
//   }

//   ul {
//     list-style: none;
//     padding: 10px 20px;
//     margin: 0;
//     position: absolute;
//     border: 1px solid #ececec;
//     left: -1px;
//     top: 38px;
//     width: 100%;
//   }

//   .show {
//     display: inline-block;
//   }

//   .hide {
//     display: none;
//   }
// `;
// class Select extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onOpen = this.onOpen.bind(this);
//     this.onSelect = this.onSelect.bind(this);
//     this.state = {
//       selected: null,
//       opened: false
//     };
//   }

//   onOpen() {
//     this.setState({
//       opened: !this.state.opened
//     });
//   }

//   onSelect(option) {
//     this.setState(
//       {
//         selected: option,
//         opened: false
//       },
//       () => {
//         console.info(this.state);
//       }
//     );
//   }

//   getOptions() {
//     return this.props.options.map(o => {
//       console.info(o);
//       return (
//         <DropDownOptions
//           key={o.key}
//           option={o}
//           onSelect={this.onSelect}
//           urilink={this.props.urilink}
//         />
//       );
//     });
//   }

//   render() {
//     let items = this.getOptions();
//     let selected = this.state.selected ? this.state.selected.value : "Select";
//     let cssClass = this.state.opened ? "show" : "hide";

//     return (
//       <Container>
//         <div className="select" onClick={this.onOpen}>
//           <span>{selected}</span>
//           <ul className={cssClass}>{items}</ul>
//         </div>
//       </Container>
//     );
//   }
// }

// export default Select;
