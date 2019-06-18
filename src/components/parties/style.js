import styled from "styled-components";

export const PartyContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  background: white;
  border-radius: 4px;
  border: 1px solid rgba(230, 230, 230, 1);
  .header {
    padding-top: 1rem;
    overflow: auto;
    padding: 1rem;
    border-bottom: 1px solid rgba(230, 230, 230, 1);
  }
  .header-img {
    border-radius: 4px;
    height: auto;
    width: 100%;
  }
  .header-title {
    font-size: 3rem;
    text-align: center;
  }
  .header-description {
    margin-top: 2rem;
    max-height: 8rem;
    overflow: auto;
  }
  .header-gauge-legend {
    font-size: 14px;
    text-align: center;
    margin-top: -20px;
  }
`;
