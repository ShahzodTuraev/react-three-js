import React from 'react'
import { Account, Button, Container, Item, ItemWrap, Logo, NavLogo, Navbar, SubTitle, Text, Title, Wrap } from './style'

const MainText = () => {
  const onOpen = () => {
    window.location.href ='https://mever.me/main/login'
  }
  return (
    <Container>
      <Navbar>
        <NavLogo>meVer</NavLogo>
        <ItemWrap>
          <Item href='https://mever.me/main/page'>오늘의 3분뉴스</Item>
          <Item href='https://mever.me/main/story'>메버 스토리</Item>
          <Item href='https://mever.me/main/form'>SW HW 상품·서비스</Item>
          <Item href='https://mever.me/kpop1'>3D홈페이지 레퍼런스</Item>
        </ItemWrap>
        <Account href='https://mever.me/main/login'>Log In</Account>
      </Navbar>
      <Title>WE ARE HERE FOR YOU</Title>
      <SubTitle>Lorem ipsum dolor sit amet.</SubTitle>
      <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptate inventore, qui quaerat eaque magnam reprehenderit consequuntur saepe ratione rem quia accusantium aliquid corporis ipsam culpa ab explicabo consequatur eius?</Text>
      <Wrap>
        <Button onClick={onOpen}>Sign In</Button>
      </Wrap>
      <Logo>meVer</Logo>
    </Container>
  )
}

export default MainText
