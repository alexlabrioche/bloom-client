import styled from "styled-components";
import Global from "../../Global";

export const ProfileContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  background: white;
  border-radius: 4px;
  border: 1px solid rgba(230, 230, 230, 1);
  .main-content {
    padding-bottom: 15rem;
  }
  .legend {
    margin-top: 20px;
    margin-bottom: -15px;
  }
  .legend-title {
    margin-left: 20px;
  }
  .legend-content {
    margin-top: 4px;
    /* margin-right: 15px; */
  }
  .protect {
    color: #42ad2e;
  }
  .absence {
    color: grey;
  }
  .destruct {
    color: #fe4f4a;
  }
`;

export const DeputyHeaderContainer = styled.div`
  .header {
    background: white;
    padding: 1rem;
    border-bottom: 1px solid rgba(230, 230, 230, 1);
    z-index: 10;
  }
  .header-img-container {
    height: 14rem;
    width: 16rem;
    padding: 1rem;
    overflow: auto;
  }
  .header-img {
    border-radius: 2px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .header-title {
    font-size: 2.6rem;
    font-weight: 300;
    text-align: center;
    color: ${Global.color.accent};
    transition: 0.3s ease;
  }
  .header-gauge-legend {
    font-size: 14px;
    text-align: center;
    margin-top: -20px;
  }
`;

export const DeputyCardContainer = styled.div`
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.01);
    box-shadow: 2px 2px 4px 0px rgba(230, 230, 230, 1);
  }
  .link {
    color: ${Global.color.body};
    &:hover {
      text-decoration: none;
    }
  }
  .card-img-top {
    height: 10rem;
    object-fit: cover;
  }
  .card-body {
    height: 8rem;
    overflow: auto;
  }
  .card-title {
    height: 3rem;
    font-size: 1.3rem;
    text-align: center;
  }
  .card-text {
    color: ${Global.color.primary};
    text-align: center;
    font-size: 0.8rem;
  }
  .card-note {
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
  }
  .footer {
    text-align: right;
    background: white;
    padding: 0.6rem;
    color: ${Global.color.disabled};
    transition: 0.2s ease;
    .footer-icon {
      margin-left: 0.5rem;
    }
    &:hover {
      color: ${Global.color.accent};
    }
  }
`;
