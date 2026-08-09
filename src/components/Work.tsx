import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "BHARAT CLIMATETWIN",
    category: "ISRO Hackathon • AI Climate Digital Twin",
    tools:
      "Next.js, TypeScript, FastAPI, Python, NASA POWER API, Open-Meteo, OpenAQ, AI Risk Engine, Digital Twin",
    link: "https://bharat-climate-twin-one.vercel.app/",
    image: "/images/Bharat.png",
    featured: true,
  },
  {
    title: "CERTIFYAI 360",
    category: "Enterprise Multi-Agent Certification Intelligence",
    tools:
      "React, FastAPI, PostgreSQL, Groq API, Llama 3.3 70B, Multi-Agent AI, Recharts",
    link: "YOUR_LINK",
    image: "/images/certify.png",
    featured: true,
  },
  {
    title: "HAVEN",
    category: "AI Emergency Response Platform",
    tools:
      "Next.js, FastAPI, MongoDB, Gemini AI, LLaMA, LSB Steganography",
    link: "https://haven-your-own-voice.vercel.app/",
    image: "/images/haven.png",
  },
  {
    title: "VEDA AI",
    category: "Multimodal AI Assistant",
    tools:
      "React, FastAPI, Gemini AI, Voice Recognition, NLP",
    link: "YOUR_LINK",
    image: "/images/veda.png",
  },
  
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${translateX}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        id: "work",
        onRefresh: setTranslateX,
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
