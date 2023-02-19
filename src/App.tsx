import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef, useState } from "react";
import TextHeader from "./components/TextHeader";
import HeaderBody from "./components/Header";
import ArtNoiteEstralada from "./components/ArtNoiteEstralada";
import ArtGirl from "./components/ArtGirl";
import ArtToque from "./components/ArtToque";

function App() {
  const containerRef = useRef(null)
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <section data-scroll-section   data-scroll-speed="2">
          <TextHeader />
          <HeaderBody />
        </section>
        <ArtNoiteEstralada data-scroll-section data-scroll-speed="2"/>
        <ArtGirl data-scroll-section data-scroll-speed="3" />
        <ArtToque data-scroll-section data-scroll-speed="2" />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
