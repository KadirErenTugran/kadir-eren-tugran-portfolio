import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo,  } from "react";
import { loadSlim } from "@tsparticles/slim"; 



const ParticlesComponent = (props) => {

  useEffect(() => {
    initParticlesEngine(async (engine) => {
    await loadSlim(engine);
    }).then(() => {
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      fullScreen:false,
      fpsLimit: 120,
     
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 200,
          enable: true,
          opacity: 0.3,
          width: 2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 250,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "triangle",
        },
        size: {
          value: { min: 2, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );


  return <Particles id={props.id} init={particlesLoaded} options={options} />;  
};

export default ParticlesComponent;