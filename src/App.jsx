import React, { Suspense } from 'react';
import './App.css';
import { styled } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Earth } from './components/earth';
import MainText from './components/MainText';


const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const App = () => {
  return(
    <CanvasContainer>
      <MainText/>
      <Canvas>
        <Suspense fallback={null}>
          <Earth/>
        </Suspense>
      </Canvas>
    </CanvasContainer>
  )
}


export default App;
