const GetGrade = (deputyId, votes, categories, laws) => {
  // console.info("GetGRADE TEXTES", categories);
  // categories.map(category => {
  //   console.info("     ", "nom du Texte : ", category.name);
  //   console.info("     ", "ID du Texte : ", category._id);
  //   console.info("     ");
  // });

  // console.info("GetGRADE AMENDEMENTS", laws);
  // laws.map(law => {
  //   console.info("     ", "nom de l'amendement : ", law.name);
  //   console.info("     ", "ID de l'amendement : ", law._id);
  //   console.info("     ", "ID du Texte qui lui est lié : ", law.category);
  //   console.info("     ");
  // });

  // console.info("GetGRADE votes", votes);
  // votes.map(vote => {
  //   console.info("     ", "nom du député qui a voté : ", vote.deputy.name);
  //   console.info("     ", "nom de l'amendement lié au vote : ", vote.law.name);
  //   console.info("     ", "ID de l'amendement lié au vote : ", vote.law._id);
  //   console.info("     ");
  // });

  const scale = 100;
  const numberOfCategories = categories.length;
  const numberOfLaws = laws.length;
  let points = 0;
  console.log("<<< numberOfCategories", numberOfCategories);
  console.log("<<< categories", categories);

  for (let i = 0; i < categories.length; i++) {
    console.log("i", i);
    console.log("laws", laws);
    for (let j = 0; j < laws.length; j++) {
      console.log("j", j);
      votes.forEach(function(votes) {
        if ((categories[i]._id === laws[j].category) === votes[j]) {
          console.info("NEW CATEGORY Texte et Amendement MATCH !!");
          // console.info("              Texte", categories[i]._id);
          // console.info("         Amendement", laws[j].category);
          // console.info("");
          console.log("votes", votes);

          //   console.log("votes.length", votes.length);
          //   let numberOfPointsMax = 0;
          //   for (let k = 0; k < votes.length; k++) {
          //     console.log("k", k);
          //     if (votes[k].law.category === laws[j].category) {
          //       console.log("votes[i]", votes[i]);

          //       // if (votes[k].deputy._id === deputyId) {
          //       //   console.info("député et vote MATCH !!");
          //       //   console.log("votes[k].deputy._id", votes[k].deputy._id);
          //       //   console.log("deputyId", deputyId);

          //       if (
          //         (votes[k].decision === "for" && votes[k].law.protect === true) ||
          //         (votes[k].decision === "against" &&
          //           votes[k].law.protect === false)
          //       ) {
          //         points += 3;
          //         console.info("    GET GRADE 3 points", points);
          //         numberOfPointsMax += 3;
          //         console.log("numberOfPointsMax", numberOfPointsMax);
          //       }
          //       if (
          //         (votes[k].decision === "for" && votes[k].law.protect === false) ||
          //         (votes[k].decision === "against" && votes[k].law.protect === true)
          //       ) {
          //         points += 0;
          //         console.info("    GET GRADE 0 point", points);
          //         numberOfPointsMax += 3;
          //         console.log("numberOfPointsMax", numberOfPointsMax);
          //       }
          //       if (votes[k].decision === "absence") {
          //         points += 0.5;
          //         console.info("    GET GRADE 0.5 points", points);
          //         numberOfPointsMax += 3;
          //         console.log("numberOfPointsMax", numberOfPointsMax);
          //       }
          //       if (votes[k].decision === "abstention") {
          //         points += 1;
          //         console.info("    GET GRADE 1 points", points);
          //         numberOfPointsMax += 3;
          //         console.log("numberOfPointsMax", numberOfPointsMax);
          //       }
          //       console.log("numberOfPointsMax", numberOfPointsMax);
          //       let averageGradePerText = points / numberOfPointsMax;
          //       console.log("averageGradePerText", averageGradePerText);
          //     }
          //   }
        }
      });
    }
  } // const finalNote = Number(((points / (numberOfVotes * 3)) * scale).toFixed(0));
  console.info("GET GRADE points after algo", points);
  console.info("GET GRADE maximum points", (3 * 3 + 5 * 3) / 2);
  const finalNote = Number((points / numberOfCategories).toFixed(0));
  return finalNote;
};

// };

export default GetGrade;
