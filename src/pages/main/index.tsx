import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
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
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import snoopy from "components/snoopy.jpg";

const Home: React.FC = () => {
  return (
    <Container>
      {/* Header */}
      <Header>
        <div>
          <FontAwesomeIcon icon={faYoutube} color="#ff0000" />
          <span>Youtube</span>
        </div>
        <Icon>
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faEllipsisV} />
        </Icon>
      </Header>

      {/* Video Player */}
      <Player>
        <Video controls src={require("components/Cat.mp4")} />
      </Player>

      <InfoAndUpNext>
        {/* Video Info */}
        <Info>
          {/* Meta Data */}
          <Metadata>
            <Hashtags>
              <li>#Yuri</li>
              <li>#Cat</li>
              <li>#Cute</li>
            </Hashtags>
            <TitleAndButton>
              <span>유리는 고양이를 좋아합니다.</span>
              <MoreBtn>
                <FontAwesomeIcon icon={faCaretDown} size="2x" />
              </MoreBtn>
            </TitleAndButton>
            <Views>1M views 1 day ago</Views>
          </Metadata>

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
                <FontAwesomeIcon icon={faPlus} size="2x" />
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
            <Metadata>
              <img src={snoopy} alt="" />
              <div>
                <Name>유리</Name>
                <Subscribers>1M subscribers</Subscribers>
              </div>
            </Metadata>
            <Subscribe>subscribe</Subscribe>
          </Channel>
        </Info>

        {/* Up Next */}
        <UpNext>
          <title>Up Next</title>
          <ul>
            <Item>
              <Img>
                <img src={snoopy} alt="" />
              </Img>
              <ItemInfo>
                <title>유리는 강아지도 좋아한다.</title>
                <Name>유리</Name>
                <Views>82K views</Views>
              </ItemInfo>
              <MoreBtn>
                <FontAwesomeIcon icon={faEllipsisV} />
              </MoreBtn>
            </Item>
            <Item>
              <Img>
                <img src={snoopy} alt="" />
              </Img>
              <ItemInfo>
                <title>유리는 동물을 좋아한다.</title>
                <Name>유리</Name>
                <Views>82K views</Views>
              </ItemInfo>
              <MoreBtn>
                <FontAwesomeIcon icon={faEllipsisV} />
              </MoreBtn>
            </Item>
            <Item>
              <Img>
                <img src={snoopy} alt="" />
              </Img>
              <ItemInfo>
                <title>유리는 귀여운걸 좋아한다.</title>
                <Name>유리</Name>
                <Views>82K views</Views>
              </ItemInfo>
              <MoreBtn>
                <FontAwesomeIcon icon={faEllipsisV} />
              </MoreBtn>
            </Item>
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

const Title = styled.span`
  font-size: ${(props: any) => props.theme.fontLarge};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props: any) => props.theme.spacing};
  background-color: ${(props: any) => props.theme.blackColor};

  div {
    font-size: ${(props: any) => props.theme.fontLarge};

    FontAwesomeIcon {
      color: ${(props: any) => props.theme.redColor};
    }

    span {
      color: ${(props: any) => props.theme.whiteColor};
    }
  }
`;

const Icon = styled.div`
  FontAwesomeIcon {
    margin-right: ${(props: any) => props.theme.spacing};
  }
`;

const Player = styled.section`
  position: sticky;
  top: 0;
  text-align: center;
  background-color: ${(props: any) => props.theme.blackColor};
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  max-width: 600px;
`;

const InfoAndUpNext = styled.div``;

const Info = styled.section``;

const Metadata = styled.div``;

const Hashtags = styled.ul`
  display: flex;
  font-size: ${(props: any) => props.theme.fontSmall};
  color: ${(props: any) => props.theme.blueColor};

  li {
    margin-right: ${(props: any) => props.theme.spacing};
  }
`;

const TitleAndButton = styled.div`
  display: flex;

  span {
    font-size: ${(props: any) => props.theme.fontMedium};
    margin-right: ${(props: any) => props.theme.spacing};
  }
`;

const MoreBtn = styled.button`
  height: 100%;
  transition: transform 300ms ease-in-out;
  clicked {
    transform: rotate(180deg);
  }
`;

const Views = styled.span`
  font-size: ${(props: any) => props.theme.fontSmall};
  color: ${(props: any) => props.theme.grayDarkColor};
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

    FontAwesomeIcon {
      margin: 0 auto;
      margin-bottom: ${(props: any) => props.theme.spacingSmall} 0;
      font-size: ${(props: any) => props.theme.fontRegular};
    }
  }
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${(props: any) => props.theme.grayLightColor};
  border-bottom: 1px solid ${(props: any) => props.theme.grayLightColor};

  Metadata {
    display: flex;
    align-items: center;
    padding: ${(props: any) => props.theme.spacingSmall} 0;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: ${(props: any) => props.theme.avatarSize};
    height: ${(props: any) => props.theme.avatarSize};
    border-radius: 50%;
    margin-right: ${(props: any) => props.theme.spacing};
  }
`;

const Name = styled.span`
  font-size: ${(props: any) => props.theme.fontMedium};
`;

const Subscribers = styled.span`
  font-size: ${(props: any) => props.theme.fontSmall};
  color: ${(props: any) => props.theme.grayDarkColor};
`;

const Subscribe = styled.button`
  text-transform: uppercase;
  color: ${(props: any) => props.theme.redColor};
  font-size: ${(props: any) => props.theme.fontMedium};
`;

const UpNext = styled.section`
  padding: 0 ${(props: any) => props.theme.spacing};

  .title {
    font-size: ${(props: any) => props.theme.fontMedium};
    color: ${(props: any) => props.theme.grayDarkColor};
    margin-bottom: ${(props: any) => props.theme.spacingSmall};
  }
`;

const Item = styled.li`
  display: flex;
  margin-top: ${(props: any) => props.theme.spacing};
`;

const Img = styled.div`
  flex-basis: 35%;
  margin-right: ${(props: any) => props.theme.spacing};
  width: 100%;
`;

const ItemInfo = styled.div`
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
`;

export default Home;
