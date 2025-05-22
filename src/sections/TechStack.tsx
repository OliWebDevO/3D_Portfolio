import { useGSAP } from "@gsap/react"
import TitleHeader from "../components/HeroModels/TitleHeader"
import TechIcon from "../components/models/techlogos/TechIcon"
import { techStackIcons } from "../constants"
import { gsap }from "gsap"


const TechStack = () => {

    useGSAP(() => {
        gsap.fromTo('.tech-card',
            { y: 50, opacity: 0 },
            {   y: 0, 
                opacity: 1, 
                duration: 1,
                stagger: 0.2, 
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top center',
                     toggleActions: "play none none reset",
                }
             }
        )
    }, [])

  return (
    <div id="skills" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title='Tech Stack' sub='🛠️  My Toolbox'/>
            <div className="tech-grid">
                {techStackIcons.map((icon)=> (
                    <div key={icon.name} className="card-border tech-card overflow-hidden group rounded-xl relative">
                        <div className="tech-card-animated-bg" />
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper">
                                <TechIcon model={icon}/>
                            </div>
                            <div className="padding-x w-full">
                                <p>{icon.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TechStack