import React from "react";

class Grade extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     deputiesGrade: []
  //   };
  // }
  // async componentDidMount() {
  //   const deputies = await Api.getDeputies();
  //   const votes = await Api.getVotes();
  //   const deputiesGrade = [];
  //   deputies.forEach(deputy => {
  //     const deputyGrade = GetGrade(deputy._id, votes, 100);
  //     const deputyAndHisGrade = {
  //       name: deputy.name,
  //       id: deputy._id,
  //       grade: deputyGrade
  //     };
  //     deputiesGrade.push(deputyAndHisGrade);
  //   });
  //   this.setState({
  //     deputiesGrade
  //   });
  // }
  sortAscending = () => {
    const { deputiesGrade } = this.state;
    deputiesGrade.sort((a, b) => a - b);
    this.setState({ deputiesGrade });
  };

  sortDescending = () => {
    const { deputiesGrade } = this.state;
    deputiesGrade.sort((a, b) => a - b).reverse();
    this.setState({ deputiesGrade });
  };

  render() {
    const { deputies } = this.props;
    console.info("grade", deputies);
    return (
      <div>
        {/* GRADE
        {deputiesGrade.map((deputy, index) => (
          <div>
            {index} {deputy.name} {deputy.grade}
          </div>
        ))}
        <button onClick={() => this.sortHighGrade(deputiesGrade)}>
          meilleures notes
        </button> */}
        <button onClick={this.sortAscending}>asc</button>
        <button onClick={this.sortDescending}>desc</button>
      </div>
    );
  }
}

export default Grade;
