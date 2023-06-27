import { styled } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.p`
  font-size: 70px;
  font-weight: 600;
  margin-top: 340px;
  margin-bottom: 0;
`;

const SubTitle = styled.p`
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 100px;
`;
const Text = styled.p`
  width: 800px;
  font-size: 20px;
`;
const Logo = styled.p`
  position: absolute;
  bottom: 0;
  font-size: 38px;
`;
const Navbar = styled.div`
  display: flex;
  width: 1170px;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;
const ItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-top: 6px;
`;
const NavLogo = styled.p`
  font-size: 30px;
  cursor: pointer;
  transition: all .1s ease-in-out;
  &:hover{
    color: coral;
  }
`;
const Account = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all .1s ease-in-out;
  &:hover{
    color: coral;
  }
`;
const Item= styled.a`
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.1s ease-in-out;
  text-decoration: none;
  color: #fff;
  &:hover{
    color: coral;
    transform: translateY(3px);
  }
`;
const Wrap = styled.div`
  margin-top: 30px;
`
const Button = styled.button` 
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  border: none;
  background: #2ee72e;
  color: #fff;
  padding: 8px 18px;
  margin: 0 10px;
  border-radius: 3px;
  transition: all .25s ease-in-out;

`;
export {Account, Container, SubTitle, Text, Title, Logo, Navbar, Item, ItemWrap, Button, Wrap, NavLogo}