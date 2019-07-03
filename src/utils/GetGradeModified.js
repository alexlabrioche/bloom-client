const GetGrade = (deputyId, votes, categories, laws) => {
  const scale = 100;
  const doGoodVote = 3;
  const doBadVote = 0;
  const doAbsenceVote = 0.5;
  const doNotVote = 1;
  const votesFromCurrentDeputy = votes.filter(vote => {
    console.info("      allVotes : ", vote);
    return vote.deputy._id === deputyId && vote;
  });
  console.info("Votes du député en cours :", votesFromCurrentDeputy);
  categories.map(categ => console.info(categ));

  let deputyPoints = 0;
  let numberOfVotes = 0;
  let totalOfVotes = 0;
  let actionOfVote = 0;
  let arrayOfSubTotals = [];

  categories.forEach(category => {
    console.info("CATEGORY :", category.name);
    laws.forEach(law => {
      totalOfVotes++;
      numberOfVotes++;
      if (category._id === law.category) {
        console.info("  LAW :", law.name);
        votesFromCurrentDeputy.forEach(vote => {
          if (law._id === vote.law._id) {
            console.info("    VOTE :", vote.law.name);
            console.info("      DECISION", vote.decision);
            console.info("      DID PROTECT ?", vote.law.protect);
            if (
              (vote.decision === "for" && vote.law.protect === true) ||
              (vote.decision === "against" && vote.law.protect === false)
            ) {
              console.info("  J'ai bien voté !!");
              deputyPoints += doGoodVote;
              actionOfVote++;
              console.info("    deputyPoints", deputyPoints);
            }
            if (
              (vote.decision === "for" && vote.law.protect === false) ||
              (vote.decision === "against" && vote.law.protect === true)
            ) {
              console.info("  J'ai mal voté !!");
              deputyPoints += doBadVote;
              actionOfVote++;

              console.info("    deputyPoints", deputyPoints);
            }
            if (vote.decision === "abstention") {
              console.info("  J'ai pas voté !!");
              deputyPoints += doNotVote;
              actionOfVote++;

              console.info("    deputyPoints", deputyPoints);
            }
          }
        });
      }
    });

    const lawsFromCurrentCategory = laws.filter(law => {
      return category._id === law.category && law;
    });
    const nbOfCurrentLaws = lawsFromCurrentCategory.length;
    console.info("NB OF CURRENT LAWS", nbOfCurrentLaws);
    const maxNote = nbOfCurrentLaws * 3;
    console.info("maxNote", maxNote);
    if (actionOfVote === 0) {
      console.info("ICI !!!");
      deputyPoints += doAbsenceVote * nbOfCurrentLaws;
    }
    let coefficient = scale / maxNote;
    if (coefficient === Infinity) {
      coefficient = 0;
    }
    console.info("    actionOfVote", actionOfVote);
    console.info("    deputyPoints", deputyPoints);
    console.info("    numberOfVotes", numberOfVotes);
    console.info("    totalOfVotes", totalOfVotes);
    console.info("    Coefficient du Texte en cours :", coefficient);

    const subTotal = deputyPoints * coefficient;
    console.info("subTotal :", subTotal);
    if (nbOfCurrentLaws !== 0) {
      arrayOfSubTotals.push(subTotal);
    }
    console.info("arrayOfSubTotals :", arrayOfSubTotals);

    deputyPoints = 0;
    numberOfVotes = 0;
    actionOfVote = 0;
  });
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const finalNote = Number(
    (arrayOfSubTotals.reduce(reducer) / arrayOfSubTotals.length).toFixed(0)
  );
  console.info("Nombres de votes du député", totalOfVotes);
  console.info("Note finale :", finalNote);
  return finalNote;
};

export default GetGrade;
