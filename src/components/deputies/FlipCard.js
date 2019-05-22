import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const CardStyle = styled.div`
  height: 26rem;

  .card {
    border: 0px solid;
    position: absolute;
    height: 25rem;
    cursor: pointer;
    will-change: transform, opacity;
  }
  .card-default-bg {
    background: white;
  }
  .card-content {
    border-radius: 4px;
    height: 100%;
    margin: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h5 {
      color: #444;
      font-size: 2rem;
      height: 8rem;
      text-align: center;
    }
    padding: 20px;
    color: #222;
  }
  .protect-color {
    background-image: linear-gradient(
      to right top,
      #299126,
      #359f2a,
      #42ad2e,
      #4ebb32,
      #5bc935,
      #5fca36,
      #62cb37,
      #66cc38,
      #61c036,
      #5cb435,
      #57a933,
      #529d31
    );
  }
  .destruct-color {
    background-image: linear-gradient(
      to left bottom,
      #f94949,
      #fa5046,
      #fb5743,
      #fc5e41,
      #fd653e,
      #fd6240,
      #fe6041,
      #fe5d43,
      #fe4f4a,
      #fd4051,
      #fb2f59,
      #f81861
    );
  }
  .absence-color {
    background-image: linear-gradient(
      to right top,
      #767676,
      #787878,
      #797979,
      #7b7b7b,
      #7d7d7d,
      #7b7b7b,
      #787878,
      #767676,
      #6f6f6f,
      #686868,
      #626262,
      #5b5b5b
    );
  }
  .back-card-color {
    background-image: linear-gradient(
      to left bottom,
      #e0e0f0,
      #e4e5f3,
      #e8ebf6,
      #edf0f8,
      #f2f5fb,
      #f2f5fa,
      #f1f4fa,
      #f1f4f9,
      #ebeff6,
      #e6eaf3,
      #e0e5ef,
      #dbe0ec
    );
  }
`;

function Card(props) {
  const protect = props.law.protect;
  const decision = props.decision;
  // console.info("    ");
  // console.info("    protect", protect);
  // console.info("    decision", decision);
  let noteColor = "";
  if (protect === true && decision === "for") {
    noteColor = "protect-color";
  }
  if (protect === false && decision === "against") {
    noteColor = "protect-color";
  }
  if (protect === true && decision === "against") {
    noteColor = "destruct-color";
  }
  if (protect === false && decision === "for") {
    noteColor = "destruct-color";
  }
  if (decision === "abstention" || decision === "absence") {
    noteColor = "absence-color";
  }
  // console.info("    noteColor", noteColor);
  console.info("FlipCard props", props);
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 8, tension: 700, friction: 90 }
  });
  return (
    <CardStyle onClick={() => set(state => !state)}>
      <animated.div
        className={`card ${noteColor}`}
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <div className="card-content card-default-bg">
          <h5>{props.law.slug}</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            voluptatem ex repellendus, culpa optio nisi expedita facere,
            eligendi quo dicta dolores adipisci numquam accusamus a voluptas
            voluptatum error? Laborum, quos.
          </p>
        </div>
      </animated.div>
      <animated.div
        className="card back-card-color"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      >
        <div className="card-content">
          <h2>Back</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            voluptatem ex repellendus, culpa optio nisi expedita facere,
            eligendi quo dicta dolores adipisci numquam accusamus a voluptas
            voluptatum error? Laborum, quos.
          </p>
        </div>
      </animated.div>
    </CardStyle>
  );
}

export default Card;