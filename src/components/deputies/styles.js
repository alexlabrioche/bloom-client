import styled from "styled-components";
import Global from "../../Global";

export const ProfileContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  background: white;
  border-radius: 4px;
  border: 1px solid rgba(230, 230, 230, 1);
  .legend {
    margin-top: 1.2rem;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
  }
  .legend-title {
    margin-left: 20px;
  }
  .legend-content {
    margin-top: 4px;
  }
  .protect {
    color: ${Global.color.protect};
  }
  .absence {
    color: ${Global.color.absence};
  }
  .destruct {
    color: ${Global.color.destruct};
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

export const CollapseContainer = styled.div`
  .rc-collapse {
    border: none;
  }
  .rc-collapse-header {
    background: ${Global.color.lightBackground};
    color: ${Global.color.primary} !important;
    font-size: 1.6rem;
    padding: 32px 0px 0px 10px !important;
  }
  .rc-collapse-header__description {
    text-align: center;
    width: 100%;
    padding-bottom: 1rem;
  }
`;

export const MobileDeputyCardContainer = styled.div`
  border: none;
  height: 7rem;
  .link {
    color: ${Global.color.body};
    &:hover {
      text-decoration: none;
    }
  }
  .card-title {
    padding-top: 0.5rem;
    align-self: center;
  }
  .card-img {
    border-radius: 10px;
    padding: 0.5rem;
    object-fit: cover;

    height: 7rem;
  }
  .card-img-container {
  }
  .card-text {
    color: ${Global.color.primary};
    /* text-align: center; */
    font-size: 0.8rem;
  }
  .note-container {
    align-self: center;
    font-size: 20px;
  }
`;
