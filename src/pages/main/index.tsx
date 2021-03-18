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

const Home: React.FC = () => {
  return (
    <Container>
      {/* Header */}
      <Header>
        <Logo>
          <FontAwesomeIcon icon={faYoutube} color="#ff0000" />
          <Title>Youtube</Title>
        </Logo>
        <Icon>
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faEllipsisV} />
        </Icon>
      </Header>

      {/* Video Player */}
      <Player>
        <Video controls src="./components/Cat.mp4" />
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
              <Title>유리는 고양이를 좋아합니다.</Title>
              <MoreBtn>
                <FontAwesomeIcon icon={faCaretDown} />
              </MoreBtn>
            </TitleAndButton>
            <Views>1M views 1 day ago</Views>
          </Metadata>

          {/* Actions */}
          <Actions>
            <li>
              <button>
                <FontAwesomeIcon icon={faThumbsUp} />
                <span>1K</span>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faThumbsDown} />
                <span>0</span>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faShare} />
                <span>Share</span>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faPlus} />
                <span>Save</span>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faFontAwesomeFlag} />
                <span>Report</span>
              </button>
            </li>
          </Actions>

          {/* Channel Description */}
          <Channel>
            <Metadata>
              <img src="components/snoopy.jpg" alt="" />
              <Info>
                <Name>유리</Name>
                <Subscribers>1M subscribers</Subscribers>
              </Info>
            </Metadata>
            <Subscribe>subscribe</Subscribe>
          </Channel>
        </Info>

        {/* Up Next */}
        <UpNext>
          <Title>Up Next</Title>
          <ul>
            <Item>
              <Img>
                <img src="/components/snoopy.jpg" alt="" />
              </Img>
              <ItemInfo>
                <Title>유리는 강아지도 좋아한다.</Title>
                <Name>유리</Name>
                <Views>82K views</Views>
              </ItemInfo>
              <MoreBtn>
                <FontAwesomeIcon icon={faEllipsisV} />
              </MoreBtn>
            </Item>
            <Item>
              <Img>
                <img src="/components/snoopy.jpg" alt="" />
              </Img>
              <ItemInfo>
                <Title>유리는 동물을 좋아한다.</Title>
                <Name>유리</Name>
                <Views>82K views</Views>
              </ItemInfo>
              <MoreBtn>
                <FontAwesomeIcon icon={faEllipsisV} />
              </MoreBtn>
            </Item>
            <Item>
              <Img>
                <img src="/components/snoopy.jpg" alt="" />
              </Img>
              <ItemInfo>
                <Title>유리는 귀여운걸 좋아한다.</Title>
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
  color: ${(props: any) => props.theme.whiteColor};
`;

const Logo = styled.div`
  font-size: ${(props: any) => props.theme.fontLarge};
  color: ${(props: any) => props.theme.redColor};
`;

const Icon = styled.div`
  margin-right: ${(props: any) => props.theme.spacing};
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
`;

const TitleAndButton = styled.div``;

const MoreBtn = styled.button``;

const Views = styled.span``;

const Actions = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: ${(props: any) => props.theme.spacing} 0;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${(props: any) => props.theme.grayLightColor};
  border-bottom: 1px solid ${(props: any) => props.theme.grayLightColor};
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
`;

const Item = styled.li``;

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
