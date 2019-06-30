const GetGrade = (deputyId, votes, categories, laws) => {
  console.info("GetGRADE categories", categories);
  console.info("GetGRADE votes", votes);
  console.info("GetGRADE laws", laws);
  const scale = 100;
  let points = 0;
  let numberOfVotes = 0;
  for (let i = 0; i < categories.length; i++) {
    for (let j = 0; j < laws.length; j++) {
      if (categories[i]._id === laws[j].category) {
        console.info("Texte et Amendement MATCH !!");
        console.info("              Texte", categories[i].name);
        console.info("         Amendement", laws[j].name);
        for (let k = 0; k < votes.length; k++) {
          if (votes[k].deputy._id === deputyId) {
            if (
              (votes[k].decision === "for" && votes[k].law.protect === true) ||
              (votes[k].decision === "against" &&
                votes[k].law.protect === false)
            ) {
              points += 3;
              numberOfVotes += 1;
            }
            if (
              (votes[k].decision === "for" && votes[k].law.protect === false) ||
              (votes[k].decision === "against" && votes[k].law.protect === true)
            ) {
              points += 0;
              numberOfVotes += 1;
            }
            if (votes[k].decision === "absence") {
              points += 0.5;
              numberOfVotes += 1;
            }
            if (votes[k].decision === "abstention") {
              points += 1;
              numberOfVotes += 1;
            }
          }
        }
      }
    }
  }
  // for (let i = 0; i < votes.length; i++) {
  //   if (votes[i].deputy._id === deputyId) {
  //     if (
  //       (votes[i].decision === "for" && votes[i].law.protect === true) ||
  //       (votes[i].decision === "against" && votes[i].law.protect === false)
  //     ) {
  //       points += 3;
  //       numberOfVotes += 1;
  //     }
  //     if (
  //       (votes[i].decision === "for" && votes[i].law.protect === false) ||
  //       (votes[i].decision === "against" && votes[i].law.protect === true)
  //     ) {
  //       points += 0;
  //       numberOfVotes += 1;
  //     }
  //     if (votes[i].decision === "absence") {
  //       points += 0.5;
  //       numberOfVotes += 1;
  //     }
  //     if (votes[i].decision === "abstention") {
  //       points += 1;
  //       numberOfVotes += 1;
  //     }
  //   }
  // }
  const finalNote = Number(((points / (numberOfVotes * 3)) * scale).toFixed(0));
  return finalNote;
};

export default GetGrade;
