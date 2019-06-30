const GetGrade = (deputyId, votes, categories, laws) => {
  console.info("GetGRADE TEXTES", categories);
  categories.map(category => {
    console.info("     ", "nom du Texte : ", category.name);
    console.info("     ", "ID du Texte : ", category._id);
    console.info("     ");
  });

  console.info("GetGRADE AMENDEMENTS", laws);
  laws.map(law => {
    console.info("     ", "nom de l'amendement : ", law.name);
    console.info("     ", "ID de l'amendement : ", law._id);
    console.info("     ", "ID du Texte qui lui est lié : ", law.category);
    console.info("     ");
  });

  console.info("GetGRADE votes", votes);
  votes.map(vote => {
    console.info("     ", "nom du député qui a voté : ", vote.deputy.name);
    console.info("     ", "nom de l'amendement lié au vote : ", vote.law.name);
    console.info("     ", "ID de l'amendement lié au vote : ", vote.law._id);
    console.info("     ");
  });

  const scale = 100;
  const numberOfCategories = categories.length;
  const numberOfLaws = laws.length;
  let points = 0;
  let numberOfVotes = 0;
  for (let i = 0; i < categories.length; i++) {
    for (let j = 0; j < laws.length; j++) {
      if (categories[i]._id === laws[j].category) {
        console.info("Texte et Amendement MATCH !!");
        console.info("              Texte", categories[i]._id);
        console.info("         Amendement", laws[j].category);
        console.info("");
        for (let k = 0; k < votes.length; k++) {
          if (votes[k].deputy._id === deputyId) {
            console.info("député et vote MATCH !!");
            if (
              (votes[k].decision === "for" && votes[k].law.protect === true) ||
              (votes[k].decision === "against" &&
                votes[k].law.protect === false)
            ) {
              points += 3;
              console.info("    GET GRADE 3 points", points);
              numberOfVotes += 1;
            }
            if (
              (votes[k].decision === "for" && votes[k].law.protect === false) ||
              (votes[k].decision === "against" && votes[k].law.protect === true)
            ) {
              points += 0;
              console.info("    GET GRADE 1 points", points);
              numberOfVotes += 1;
            }
            if (votes[k].decision === "absence") {
              points += 0.5;
              console.info("    GET GRADE 0.5 points", points);
              numberOfVotes += 1;
            }
            if (votes[k].decision === "abstention") {
              points += 1;
              console.info("    GET GRADE 1 points", points);
              numberOfVotes += 1;
            }
          }
        }
      }
    }
  }
  // const finalNote = Number(((points / (numberOfVotes * 3)) * scale).toFixed(0));
  console.info("GET GRADE points after algo", points);
  console.info("GET GRADE maximum points", (3 * 3 + 5 * 3) / 2);
  const finalNote = Number((points / numberOfCategories).toFixed(0));
  return finalNote;
};

export default GetGrade;
