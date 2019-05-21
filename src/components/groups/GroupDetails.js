import React from "react";
import styled from "styled-components";

import Api from "../../utils/Api";
import Config from "../../Config";

const Container = styled.div`
  .card-img {
    object-fit: cover;
    height: 12rem;
    border-radius: 3px 3px 0 0;
  }
  .card-body {
    height: 10rem;
    overflow: auto;
  }
`;
class GroupDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group: {}
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.name;
    const group = await Api.getGroup(id);
    const deputies = await Api.getDeputies();
    console.info(deputies.deputies);
    const deputiesArray = deputies.deputies;
    const deputiesInThisGroup = deputiesArray.find(deputy => {
      return deputy.group._id === id;
    });
    console.info(deputiesInThisGroup);
    this.setState({
      group
    });
  }
  render() {
    const { group } = this.state;
    return (
      <Container className="pt-5 container">
        <div className="card text-center">
          <img
            className="card-img"
            src={`${Config.server}/${group.picture}`}
            alt={group.slug}
          />
          <div className="card-body">
            <h3 className="card-title">{group.name}</h3>
            <p className="card-text">{group.description}</p>
          </div>
        </div>
      </Container>
    );
  }
}

export default GroupDetails;
