import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';

const Header = loadable(() => import('components/main/Header'));

const Home: React.FC = () => {
    const [isToggle, setIsToggle] = useState<boolean>(false);
    const [buttonColor, setButtonColor] = useState<string>('white');

    const onClickButton = () => {
        setIsToggle(!isToggle);
    };

    useEffect(() => {
        window.alert('유리바보');
    }, []);

    useEffect(() => {
        if (isToggle) {
            setButtonColor('yellow');
        } else {
            setButtonColor('white');
        }
    }, [isToggle]);

    return (
        <Container>
            <Header text={'헤더'} />
            <Main>
                <Button buttonColor={buttonColor} onClick={onClickButton}>
                    <p>{isToggle ? '유리 바보' : '콩이 귀여워'}</p>
                </Button>
            </Main>
            <Footer />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const Main = styled.div`
    width: 100%;
    flex: 1 1 auto;
    padding-top: 48px;
`;

const Button = styled.div<any>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 48px;
    background: ${(props: any) => props.buttonColor};
    border: 1px solid #dee1e6;
`;

const Footer = styled.div`
    width: 100%;
    height: 100px;
    background: blue;
`;

export default Home;
