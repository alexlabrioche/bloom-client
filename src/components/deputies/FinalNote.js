import React from "react";
import Api from "../../utils/Api";

class FinalNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const categories = await Api.getCategories();
    // console.log("categories", categories);
    // const numberOfCategories = categories.length;
    // console.log(numberOfCategories);

    // const votes = await Api.getVotes();

    // for (var i = 0; i < votes.length; i++) {
    //   console.log(i);
    //   let points = 0;
    //   if (votes[i].decision === "for" && votes[i].law.protect === true) {
    //     points = 3;
    //     console.log("points", points);
    //   }
    //   if (
    //     (votes[i].decision === "for" && votes[i].law.protect === false) ||
    //     (votes[i].decision === "against" && votes[i].law.protect === true)
    //   ) {
    //     points = 0;
    //     console.log("points", points);
    //   }
    //   if (votes[i].decision === "absence") {
    //     points = 0.5;
    //     console.log("points", points);
    //   }
    //   if (votes[i].decision === "abstention") {
    //     points = 1;
    //     console.log("points", points);
    //   }
    //   console.log("----");
    // }

    const votes = await Api.getVotes();
    let points = 0;
    // console.log("votes", votes);
    for (var i = 0; i < votes.length; i++) {
      if (votes[i].deputy._id === this.props._id) {
        // console.log(i);
        if (
          (votes[i].decision === "for" && votes[i].law.protect === true) ||
          (votes[i].decision === "against" && votes[i].law.protect === false)
        ) {
          points += 3;
          // console.log("<< PROTEGE points", points);
        }
        if (
          (votes[i].decision === "for" && votes[i].law.protect === false) ||
          (votes[i].decision === "against" && votes[i].law.protect === true)
        ) {
          points += 0;
          // console.log("<< DETRUIT points", points);
        }
        if (votes[i].decision === "absence") {
          points += 0.5;
          // console.log("<< ABCENCE points", points);
        }
        if (votes[i].decision === "abstention") {
          points += 1;
          // console.log("<< ABTENTION points", points);
        }
        // }
      }
    }
    console.log("---");
    console.log(`deputy with id : ${this.props._id} has ${points} points`);

    // Calculer le nombre d'amendements par Texte
    const lawArr = [];
    for (let i = 0; i < votes.length; i++) {
      lawArr.push(votes[i].law._id);
    }
    // console.log(lawArr);
    let text = {};
    lawArr.forEach(function(v, i) {
      if (!text[v]) {
        text[v] = [i];
      } else {
        text[v].push(i);
      }
    });
    Object.keys(text).forEach(function(v) {
      text[v] = { index: text[v], length: text[v].length };
    });
    // console.log("text", text);

    // Calculer le nombre de vote par Député
    const deputyVotes = [];
    for (var j = 0; j < votes.length; j++) {
      deputyVotes.push(votes[j].deputy._id);
    }
    console.log(deputyVotes);
    let numberOfVotes = {};
    deputyVotes.forEach(function(v, j) {
      if (!numberOfVotes[v]) {
        numberOfVotes[v] = [j];
      } else {
        numberOfVotes[v].push(j);
      }
    });
    Object.keys(numberOfVotes).forEach(function(v) {
      numberOfVotes[v] = {
        index: numberOfVotes[v],
        length: numberOfVotes[v].length
      };
    });
    console.log("numberOfVotes", numberOfVotes);
  }

  render() {
    console.log("this.props._id", this.props._id);
    return <div>ok</div>;
  }
}

export default FinalNote;
