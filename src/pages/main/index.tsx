import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { generateMedia } from "styled-media-query";
import loadable from "@loadable/component";
import {
  faYoutube,
  faFontAwesomeFlag,
} from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faEllipsisV,
  faCaretDown,
  faShare,
  faPlus,
  faTableTennis,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import snoopy from "components/image/snoopy.jpg";
import cat from "components/video/Cat2.mp4";

const Home: React.FC = () => {
  const [state, setState] = useState(0);
  return (
    <Container>
      {/* Header */}
      <Header>
        <div className="logo">
          <FontAwesomeIcon icon={faYoutube} color="#ff0000" />
          <span className="title">Youtube</span>
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faSearch} margin-right="12px" />
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </Header>

      {/* Video Player */}
      <Player>
        <video controls>
          <source src={cat} type="video/mp4" />
        </video>
      </Player>

      <InfoAndUpNext>
        {/* Video Info */}
        <section className="info">
          {/* Meta Data */}
          <div className="metadata">
            <ul className="hashtags">
              <li>#Yuri</li>
              <li>#Cat</li>
              <li>#Cute</li>
            </ul>
            <div className="titleAndButton">
              <span className="title">유리는 고양이를 좋아합니다.</span>
              <button className="moreBtn">
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </div>
            <span className="views">1M views 1 day ago</span>
          </div>

          {/* Actions */}
          <Actions>
            <li>
              <button>
                <FontAwesomeIcon icon={faThumbsUp} size="2x" />
                <span>1K</span>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faThumbsDown} size="2x" />
                <span>0</span>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faShare} size="2x" />
                <span>Share</span>
              </button>
            </li>
            <li>
              <button>
                <a href="components/video/Cat.mp4" download>
                  <FontAwesomeIcon icon={faPlus} size="2x" />
                </a>
                <span>Save</span>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faFontAwesomeFlag} size="2x" />
                <span>Report</span>
              </button>
            </li>
          </Actions>

          {/* Channel Description */}
          <Channel>
            <div className="metadata">
              <img src={snoopy} alt="" />
              <div className="info">
                <span className="name">유리</span>
                <span className="subscribers">1M subscribers</span>
              </div>
            </div>
            <button className="subscribe">subscribe</button>
          </Channel>
        </section>

        {/* Up Next */}
        <UpNext>
          <span className="title">Up Next</span>
          <ul>
            <li className="item">
              <div className="image">
                <img src={snoopy} alt="" />
              </div>
              <div className="itemInfo">
                <span className="title">유리는 강아지도 좋아한다.</span>
                <span className="name">유리</span>
                <span className="views">82K views</span>
              </div>
              <button className="moreBtn">
                <FontAwesomeIcon icon={faEllipsisV} />
              </button>
            </li>
            <li className="item">
              <div className="image">
                <img src={snoopy} alt="" />
              </div>
              <div className="itemInfo">
                <span className="title">유리는 동물을 좋아한다.</span>
                <span className="name">유리</span>
                <span className="views">82K views</span>
              </div>
              <button className="moreBtn">
                <FontAwesomeIcon icon={faEllipsisV} />
              </button>
            </li>
            <li className="item">
              <div className="image">
                <img src={snoopy} alt="" />
              </div>
              <div className="itemInfo">
                <span className="title">유리는 귀여운걸 좋아한다.</span>
                <span className="name">유리</span>
                <span className="views">82K views</span>
              </div>
              <button className="moreBtn">
                <FontAwesomeIcon icon={faEllipsisV} />
              </button>
            </li>
          </ul>
        </UpNext>
      </InfoAndUpNext>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props: any) => props.theme.spacing};
  background-color: ${(props: any) => props.theme.blackColor};
  color: ${(props: any) => props.theme.whiteColor};
  font-family: roboto;

  .logo {
    font-size: ${(props: any) => props.theme.fontLarge};

    svg {
      color: ${(props: any) => props.theme.redColor};
      margin-right: ${(props: any) => props.theme.spacingSmall};
    }
  }

  .icons {
    color: ${(props: any) => props.theme.whiteColor};

    svg {
      margin-right: ${(props: any) => props.theme.spacing};
    }
  }
`;

const Player = styled.section`
  position: sticky;
  top: 0;
  text-align: center;
  background-color: ${(props: any) => props.theme.blackColor};

  video {
    width: 100%;
    height: 100%;
    max-width: 600px;
  }
`;

const InfoAndUpNext = styled.div`
  display: flex;
  flex-direction: column;

  .info {
    padding: ${(props: any) => props.theme.spacing};

    .metadata {
      .hashtags {
        display: flex;
        font-size: ${(props: any) => props.theme.fontSmall};
        color: ${(props: any) => props.theme.blueColor};

        li {
          margin-right: ${(props: any) => props.theme.spacing};
        }
      }

      .titleAndButton {
        display: flex;

        .title {
          font-size: ${(props: any) => props.theme.fontMedium};
          margin-right: ${(props: any) => props.theme.spacing};

          &:focus {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
        }

        .moreBtn {
          height: 100%;
          transition: transform 300ms ease-in-out;

          &:focus {
            transform: rotate(180deg);
          }
        }
      }

      .views {
        font-size: ${(props: any) => props.theme.fontSmall};
        color: ${(props: any) => props.theme.grayDarkColor};
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Actions = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: ${(props: any) => props.theme.spacing} 0;

  button {
    display: flex;
    flex-direction: column;
    font-size: ${(props: any) => props.theme.fontSmall};
    color: ${(props: any) => props.theme.grayDarkColor};

    svg,
    a {
      margin: 0 auto;
      margin-bottom: ${(props: any) => props.theme.spacingSmall} 0;
      font-size: ${(props: any) => props.theme.fontRegular};
    }

    &:active,
    &:focus {
      svg {
        color: ${(props: any) => props.theme.blueColor};
      }
    }
  }
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${(props: any) => props.theme.grayLightColor};
  border-bottom: 1px solid ${(props: any) => props.theme.grayLightColor};

  .metadata {
    display: flex;
    align-items: center;
    padding: ${(props: any) => props.theme.spacingSmall} 0;

    img {
      width: ${(props: any) => props.theme.avatarSize};
      height: ${(props: any) => props.theme.avatarSize};
      border-radius: 50%;
      margin-right: ${(props: any) => props.theme.spacing};
    }

    .info {
      display: flex;
      flex-direction: column;

      .name {
        font-size: ${(props: any) => props.theme.fontMedium};
      }
      .subscribers {
        font-size: ${(props: any) => props.theme.fontSmall};
        color: ${(props: any) => props.theme.grayDarkColor};
      }
    }
  }

  button {
    text-transform: uppercase;
    color: ${(props: any) => props.theme.redColor};
    font-size: ${(props: any) => props.theme.fontMedium};

    /* &:focus,
    &:hover {
      color: ${(props: any) => props.theme.whiteColor};
      background-color: ${(props: any) => props.theme.redColor};
    } */
  }
`;

const UpNext = styled.section`
  padding: 0 ${(props: any) => props.theme.spacing};

  .title {
    font-size: ${(props: any) => props.theme.fontMedium};
    color: ${(props: any) => props.theme.grayDarkColor};
    margin-bottom: ${(props: any) => props.theme.spacingSmall};
  }

  .item {
    display: flex;
    margin-top: ${(props: any) => props.theme.spacing};

    .moreBtn {
      flex-basis: 5%;
      height: 100%;
    }
  }

  .image {
    flex-basis: 35%;
    margin-right: ${(props: any) => props.theme.spacing};

    img {
      width: 100%;
    }
  }

  .itemInfo {
    flex-basis: 60%;
    display: flex;
    flex-direction: column;

    .name,
    .views {
      font-size: ${(props: any) => props.theme.fontMicro};
      color: ${(props: any) => props.theme.grayDarkColor};
    }
  }

  @media (min-width: 768px) {
    padding: ${(props: any) => props.theme.spacing};
  }
`;

export default Home;
