import React from "react";
import Api from "../../utils/Api";
import GetGrade from "../../utils/GetGrade";

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deputiesGrade: []
    };
  }
  async componentDidMount() {
    const deputies = await Api.getDeputies();
    const votes = await Api.getVotes();
    const deputiesGrade = [];
    deputies.forEach(deputy => {
      const deputyGrade = GetGrade(deputy._id, votes, 100);
      const deputyAndHisGrade = {
        name: deputy.name,
        id: deputy._id,
        grade: deputyGrade
      };
      deputiesGrade.push(deputyAndHisGrade);
    });
    this.setState({
      deputiesGrade
    });
  }

  render() {
    const { deputiesGrade } = this.state;
    // console.info("state", deputiesGrade);
    return (
      <div>
        GRADE
        {deputiesGrade.map((deputy, index) => (
          <div>
            {index} {deputy.name} {deputy.grade}
          </div>
        ))}
        {/* <button onClick={this.sortbyHighNote(deputiesGrade)}>Best grade</button> */}
      </div>
    );
  }
}

export default Grade;
