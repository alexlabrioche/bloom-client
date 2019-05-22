import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  .content-container {
    margin: 0 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: 0.1s ease-in;
    p {
      margin-top: 0.4rem;
    }
  }
  .fas {
    font-size: 2rem;
  }
  .add:hover {
    color: cornflowerblue;
  }
  .edit:hover {
    color: #ccc;
  }
  .delete:hover {
    color: indianred;
  }
`;

class AddOrEdit extends React.Component {
  render() {
    const { activeSelector } = this.props;
    return (
      <Container>
        <div
          className="add content-container"
          onClick={() =>
            activeSelector({ add: true, edit: false, delete: false })
          }
        >
          <i class="fas fa-user-plus" />
          <p>Ajouter</p>
        </div>
        <div
          className="edit content-container"
          onClick={() =>
            activeSelector({ add: false, edit: true, delete: false })
          }
        >
          <i class="fas fa-edit" />
          <p>modifier</p>
        </div>
        <div
          className="delete content-container"
          onClick={() =>
            activeSelector({ add: false, edit: false, delete: true })
          }
        >
          <i class="fas fa-trash" />
          <p>supprimer</p>
        </div>
      </Container>
    );
  }
}

export default AddOrEdit;
