import React from "react";
import bareme from "../../img/bareme-note.png";

class Methode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header class="container-fluid mt-1">
          <div class="row">
            <div class="col-6 col-lg-2">
              <a
                href="https://www.bloomassociation.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="logo"
                  src="./img/logo-bloom-crop.jpg"
                  alt="logo de bloom"
                />
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-6 col-lg-4">
              <a href="index.html"> &larr; Retour à l'accueil</a>
            </div>
          </div>
        </header>
        <section class="container">
          <div class="row">
            <div class="col-12 title">
              <h1>Notre Méthodologie</h1>
            </div>
            <div class="col-12 explication">
              <h4>1- LE CHOIX DES TEXTES ET DES AMENDEMENTS</h4>
              <h5>a- le choix des textes</h5>
              <p>
                Une sélection de textes en matière de pêche — adoptés par le
                Parlement européen — a été effectuée par l'équipe de BLOOM. Il
                ne s’agit ni d'une liste exhaustive ni d’un échantillon
                représentatif (c'est-à-dire aléatoire) de tous les textes
                adoptés autour de la pêche pendant cette législature, mais
                plutôt des textes qui nous semblent être les plus importants du
                point de vue de leur impact sur les écosystèmes marins et les
                pêcheurs. En outre, cette sélection porte principalement sur les
                textes adoptés depuis 2017, pour une raison d'accessibilité des
                données (nous n'avons pas trouvé toutes les données nécessaires
                pour couvrir toute la législature).{" "}
              </p>

              <h5>b- le choix des amendements</h5>
              <p>
                Un certain nombre d'amendements a ensuite été sélectionné au
                sein de chacun des textes choisis ci-dessus, selon deux critères
                cumulatifs :
              </p>
              <p>
                - Les amendements dont le détail des votes était disponible{" "}
              </p>
              <p>
                - Les amendements pour lesquels les ONG ont émis des
                recommandations de vote.{" "}
              </p>
              <p>
                Ces deux critères nous ont permis de nous assurer que les
                amendements choisis étaient décisifs, car seuls les amendements
                ayant une certaine importance sont votés par "appel nominal",
                c'est-à-dire qu'un groupe de députés demande la publication du
                détail du vote. Par ailleurs, le deuxième critère nous a
                également permis de nous assurer que les députés ne pouvaient
                ignorer, par le biais des recommandations transmises par les
                ONG, quel vote allait protéger l'océan et quel vote allait le
                détruire.{" "}
              </p>
              <p>
                Ici encore, cette sélection d'amendements ne doit pas être
                regardée comme exhaustive ou représentative, mais bien comme une
                sélection restreinte selon 1) les critères décrits ci-dessus et
                2) la vision et la mission de BLOOM.{" "}
              </p>
              <p>
                NB : cette méthodologie n'a pas pu être appliquée in extenso sur
                trois textes :{" "}
              </p>
              <p>
                - Le Règlement Mesures Techniques : des recommandations
                existaient pour tous les amendements demandés en vote par appel
                nominal. Ainsi, nous avons sélectionné les amendements pour
                lesquels les ONG avaient particulièrement insisté en indiquant
                un double "+" (voter absolument pour) ou un double "-" (voter
                contre absolument){" "}
              </p>
              <p>
                - Le Fonds européen pour les Affaires Maritimes et la Pêche :
                tout comme pour le Règlement Mesures Techniques, des
                recommandations existaient pour tous les amendements demandés en
                vote par appel nominal et beaucoup d'entre eux étaient
                "doublement marqués". Une sélection a donc été opérée par
                l'équipe de BLOOM pour ne prendre en compte que ceux qui nous
                semblaient les plus importants, parmi ceux déjà doublement
                marqués ;{" "}
              </p>
              <p>
                - L'accord Japon-Union européenne : seuls les amendements 16 et
                39 sur le thon rouge et la chasse à la baleine ont été
                sélectionnés. Très peu d'autres amendements traitaient des
                problématiques de pêche.{" "}
              </p>
              <p>
                Enfin, seuls quelques "votes finaux", c'est-à-dire ceux portant
                sur le texte entier et dans sa version définitive ont été pris
                en considération. En effet, ces textes finaux contiennent
                beaucoup de dispositions différentes, donc lorsque l'opinion des
                ONG étaient partagée quant à leur contenu, nous n'avons pas
                inclus ces votes dans notre classement.
              </p>
            </div>
            <div class="col-12 explication">
              <h4>2- LE CALCUL DE LA NOTE </h4>
              <h5>a- le barème</h5>
              <p>Le barème est le suivant : </p>
              <img
                src={bareme}
                class="img-fluid"
                alt="tableau du barème de points"
              />
              <p>Légende : </p>
              <p>
                Vote "destructeur" : allant à l’encontre des recommandations des
                ONG de protection de l'océan (par exemple Greenpeace, Seas at
                Risk et Oceana)
              </p>
              <p>
                Vote "protecteur" : en accord avec les recommandations des ONG
              </p>
              <p>
                Abstention : Abstention : le député s'est abstenu. Il a donc
                voté mais ne s'est prononcé ni en faveur, ni en défaveur de
                l'objet du vote{" "}
              </p>
              <p>
                Absence : le député n'a voté pour aucun amendement ou texte tout
                le long de la séance de vote. Nous avons donc considéré qu'une
                absence était "plus mauvaise" (car la présence est obligatoire)
                qu'une abstention ("neutre" car n'influence pas l'adoption ou
                non d'un amendement/texte), mais meilleure qu'un vote
                destructeur
              </p>
              <p>
                Présent mais n'a pas voté : le député n'a pas voté pour
                l'amendement que nous avons sélectionné. En revanche, il a voté
                pour d'autres amendements ou textes au sein de la même séance de
                vote. Il était donc présent mais pour une raison inconnue il n'a
                pas voté pour cet amendement en particulier. La note est la même
                que pour une absence
              </p>

              <p>
                NB 1 : La note la plus basse de ce barème est l’attribution de 0
                point aux votes "destructeurs" (pour voir à quoi peuvent
                ressembler des recommandations de vote, : > cliquez sur «{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://seas-at-risk.org/images/pdf/publications/2018-01-15TechnicalMeasuresPlenaryvote-NGOvotingRecommendationFinal.pdf"
                >
                  Source
                </a>{" "}
                » . Notre échelle s'étale de 0 à 3 et comprend un écart plus
                grand entre "abstention" et "vote protecteur" (1 -> 3) qu'entre
                "abstention" et "vote destructeur" (1 -> 0) car nous avons voulu
                valoriser les votes protecteurs et leur avons donc alloué un
                poids supérieur.
              </p>

              <p>
                NB 2 : les corrections d'intention de vote ont été prises en
                considération car - même si ces dernières ne modifient pas le
                vote final - les corrections sont rares et relèvent donc
                vraisemblablement plus de l'erreur que d'une véritable
                stratégie. En outre, au regard de la méthode de vote - très
                rapide - il est compréhensible que des erreurs surviennent.
              </p>
              <h4>b- la méthode de calcul : une moyenne pondérée</h4>
              <p>
                À partir des notations portant sur chaque vote, nous avons
                calculé une moyenne pondérée, c'est-à-dire que chaque règlement
                a reçu le même poids dans la note finale, quel que soit le
                nombre d'amendements considérés.{" "}
              </p>

              <p>
                Pour cela, les points de chaque député ont été additionnés pour
                chaque règlement, puis le total a été divisé par le maximum de
                points possible par règlement. Par exemple, pour le Règlement
                Mesures Techniques, six votes ont été pris en compte, le total
                par député pour le Règlement Mesures Techniques a donc été
                divisé par 18 (6 votes x 3 points pour chaque vote
                "protecteur"). Dans le cas de Michèle Alliot-Marie, qui a eu
                deux votes protecteurs et quatre votes destructeurs au sein de
                ce règlement, sa note est donc de (2x3 + 4x0)/18 = 0,3.
              </p>

              <p>
                Les notes de chaque règlement ont ensuite été additionnées pour
                chaque député et calibrées sur 20 points, comme à l'école.{" "}
              </p>

              <p>
                NB : Cette règle a été appliquée à tous les députés, à
                l’exception de ceux qui ont été inactifs pendant une période,
                qu'il s'agisse de ceux partis avant la fin de la législature ou
                de ceux qui les ont remplacés. Le nombre par lequel leur note
                totale est divisée varie donc en fonction du nombre de texte
                pour lesquels chaque député a pu voter. Par exemple, Louis Aliot
                a quitté sa fonction de député en juillet 2017 et, pour les
                textes que nous avons pris en compte, n'a été actif que pour
                deux d’entre eux. Ainsi sa note totale a été divisée par 10
                (=20/2) et les textes pour lesquels il n'a pas pu voter n'ont
                pas été comptabilisés dans sa moyenne. Il entre alors dans la
                catégorie des "inactifs", qui regroupe les députés ayant quitté
                leurs fonctions et n'ayant donc pas une moyenne représentative
                car trop peu de votes ont pu être pris en compte.
              </p>

              <h4>c- le code couleur</h4>
              <p>
                Un code couleur a finalement été attribué à chaque député :{" "}
              </p>
              <p>
                - "vert" pour les députés ayant une note allant de 14/20 à 20/20
                : + de 70% de leurs votes sont PROTECTEURS de l'océan{" "}
              </p>
              <p>
                - "orange" pour les députés ayant une note allant de 10/20 à
                14/20 : entre 50% et 70% de leurs votes sont PROTECTEURS de
                l'océan
              </p>
              <p>
                - "rouge" pour les députés ayant une note allant de 0/20 à 10/20
                : + de 50% de leurs votes sont DESTRUCTEURS de l'océan
              </p>

              <h4>3- LES SOURCES</h4>
              <p>
                Tous les textes, amendements et votes, ont été collectés sur le
                site du{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.europarl.europa.eu/portal/fr"
                >
                  Parlement européen
                </a>
                . Les recommandations de vote sont celles des différentes
                coalitions d'ONG de protection de l'océan (par exemple
                Greenpeace, Seas at Risk et Oceana) travaillant sur les textes
                sélectionnés.
                <p />
                <p>
                  Pour toute demande supplémentaire, envoyer un mail à l'adresse
                  suivante : contact@bloomassociation.org
                </p>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Methode;
