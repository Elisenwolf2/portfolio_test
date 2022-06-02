import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
// import { loadFull } from 'tsparticles'
import { useCallback, useMemo } from 'react'

const ParticlesComponent = (props) => {

  const options = useMemo(() => {
     return {
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push"
            },
            onHover: {
              enable: true,
              mode: "repulse"
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 100,
            }
          }
        },
        fulScreen: {
          enable: true,
          zIndex: 0,
        },
        particles: {
          links: {
              color: "#a3cdef",
              enable: true,
              distance: 70,
              opacity: 0.5,
              size: 4,
          },
          collision: {
            enable: true
          },
          move: {
              enable: true,
              speed: { min: 0, max: 3},
          },
          opacity: {
            value: { min: 0, max: 0.7},
          },
          size: {
            value: { min: 1, max: 2 },
          },
          shape: {
            type: "circle"
          }
        }
      }
     }, [])

  const particlesInit = useCallback((engine) => {
    loadSlim(engine)
  })
 

  return (
    <Particles init={particlesInit} id={props.id} options={options}/> 
  )
  };

export default ParticlesComponent