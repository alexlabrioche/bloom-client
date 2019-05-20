import React from "react";
import {
  Form,
  Text,
  Option,
  Select,
  TextArea,
  RadioGroup,
  Radio,
  asField
} from "informed";
import BackButton from "../../core/admin/BackButton";
import Input from "../../core/admin/Input";

class AddGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {}
    };
    this.handleChange = this.handleChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange({ name, value }) {
    // console.info(value);
    this.setState({
      [name]: value
    });
  }
  // onSubmit(event) {
  //   // console.info("onSubmit Clicked");
  //   event.preventDefault();
  //   const { name, description, picture } = this.state;
  //   const url = "http://localhost:4000/api/groups";
  //   const groups = new FormData();
  //   groups.append("name", name);
  //   groups.append("description", description);
  //   groups.append("picture", picture);
  //   axios.post(url, groups).then(res => {
  //     console.log("onSubmit upload OK res:", res);
  //   });
  // }

  render() {
    // const { name, description, picture } = this.state;
    // console.log("AddGroup state name: ", name);
    // console.log("AddGroup state description: ", description);
    // console.log("AddGroup state picture: ", picture);
    return (
      <Container>
        <Form onSubmit={formState => this.onSubmit(formState)}>
          <Label>
            Photo :
            <input
              type="file"
              onChange={event =>
                this.handleChange({
                  name: "image",
                  value: event.target.files[0]
                })
              }
            />
          </Label>
          <Label>
            Nom du Groupe :
            <Text field="name" type="text" />
          </Label>

          <Label>
            Description :
            <TextArea field="description" />
          </Label>

          <button type="submit" className="btn btn-outline-secondary">
            Ajouter
          </button>
        </Form>
      </Container>
    );
  }
}

export default AddGroup;
