import LogoSection from "./components/HeroModels/LogoSection"
import NavBar from "./components/HeroModels/NavBar"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"


const App = () => {
  return (
    <>
        <NavBar/>
        <Hero/>
        <ShowcaseSection/>
        <LogoSection/>
    </>
  )
}

export default App