import React, { useEffect, useRef, forwardRef } from "react"
import styled from "styled-components"
import gsap, { Linear, Sine } from "gsap"

const defaultCircleStyles = {
  backgroundColor: "#777777",
  borderRadius: "100%",
  width: "2em",
  height: "2em",
  position: "absolute",
}

const Orbit = (props) => {
  const ref = useRef()
  //   let tl = gsap.timeline({
  //     defaults: { duration: 5, rotation: 360, repeat: -1 },
  //   })

  const mercuryRadius = 65
  const earthRadius = 150
  const duration = 4
  const earthOrbitalPeriod = 365.2
  const earthDuration = (earthOrbitalPeriod / earthOrbitalPeriod) * duration
  const mercuryDuration = (88 / earthOrbitalPeriod) * duration

  useEffect(() => {
    console.log("Orbit: ", ref)
    gsap.set(".container", { transformOrigin: "center center" })
    // tl.set("#sun", { x: "0px" })
    // gsap.set("#mercury", { x: "50px" })
    gsap.set("#mercury", {
      x: mercuryRadius,
      y: mercuryRadius,
    })
    gsap.to("#mercury", {
      y: -mercuryRadius,
      ease: Sine.easeInOut,
      repeat: -1,
      yoyo: true,
      duration: mercuryDuration,
    })
    gsap
      .to("#mercury", {
        x: -mercuryRadius,
        ease: Sine.easeInOut,
        repeat: -1,
        yoyo: true,
        duration: mercuryDuration,
      })
      .progress(0.5)

    // tl.set("#earth", { x: "140px" })
    //   tl.set("#earth", { x: "150px" })
    gsap.set("#earth", {
      xPercent: -50,
      yPercent: -50,
      x: -earthRadius,
      y: -earthRadius,
    })
    gsap.to("#earth", {
      y: earthRadius,
      ease: Sine.easeInOut,
      // rotationZ: -360,
      repeat: -1,
      yoyo: true,
      duration: earthDuration,
    })
    gsap
      .to("#earth", {
        x: earthRadius,
        ease: Sine.easeInOut,
        rotationZ: -360,
        repeat: -1,
        yoyo: true,
        duration: earthDuration,
      })
      .progress(0.5)

    //   tl.to(".container", {})
    //   tl.to(".container #earth", {
    //     rotation: -360,
    //     scale: 5,
    //     duration: 10,
    //     transformOrigin: "center center",
    //   }, 0)
    //   startAnimation()
  })

  function startAnimation() {}

  const Circle = forwardRef((props, ref) => {
    console.log("Circle: ", props)

    // useEffect(() => {
    //     console.log("Orbit: ", ref)
    //     gsap.set(".container", { transformOrigin: "center center" })
    //     // tl.set("#sun", { x: "0px" })
    //     // gsap.set("#mercury", { x: "50px" })
    //     gsap.set("#mercury", {
    //       x: -mercuryRadius,
    //       y: -mercuryRadius,
    //     })
    //     gsap.to("#mercury", {
    //       y: mercuryRadius,
    //       ease: Sine.easeInOut,
    //       repeat: -1,
    //       yoyo: true,
    //       duration: mercuryDuration,
    //     })
    //     gsap
    //       .to("#mercury", {
    //         x: mercuryRadius,
    //         ease: Sine.easeInOut,
    //         repeat: -1,
    //         yoyo: true,
    //         duration: mercuryDuration,
    //       })
    //       .progress(-0.5)

    //       gsap.set("#earth", {
    //         // xPercent: -50,
    //         // yPercent: -50,
    //         x: earthRadius,
    //         y: earthRadius,
    //       })
    //       gsap.to("#earth", {
    //         y: -earthRadius,
    //         ease: Sine.easeInOut,
    //         rotationZ: -360,
    //         repeat: -1,
    //         yoyo: true,
    //         duration: earthDuration,
    //       })
    //       gsap
    //         .to("#earth", {
    //           x: -earthRadius,
    //           ease: Sine.easeInOut,
    //           rotationZ: -360,
    //           repeat: -1,
    //           yoyo: true,
    //           duration: earthDuration,
    //         })
    //         .progress(-0.5)
    //   })

    // let style = props.backgroundColor
    //   ? `background-color: ${props.backgroundColor};`
    //   : `background-color: #555555;`
    // style += props.diameter ? `width: ${props.diameter};` : `width: 2em;`
    if (props.style) {
      props.style.borderRadius = "100%"
    }

    // let styles = {
    //   backgroundColor: props.backgroundColor
    //     ? props.backgroundColor
    //     : defaultCircleStyles.backgroundColor,
    //   borderRadius: props.borderRadius
    //     ? props.borderRadius
    //     : defaultCircleStyles.borderRadius,
    //   width: props.diameter ? props.diameter : defaultCircleStyles.width,
    //   height: props.diameter ? props.diameter : defaultCircleStyles.height,
    //   position: props.position ? props.position : defaultCircleStyles.position,
    // }

    return (
      <div
        id={props.id}
        className={props.className}
        style={props.style ? props.style : {}}
        ref={ref}
      ></div>
    )
  })

  const Styled = styled.div<{ sunDiameter: number; sunToEarthRatio: number }>`
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 400px;
      border-radius: 12px;
      background-color: #777777;
      z-index: 100;
    }

    .sun {
      width: ${(props) => props.sunDiameter}px;
      height: ${(props) => props.sunDiameter}px;
      border-radius: 100%;
      background-color: #ffffb1;
    }

    .earth {
      width: ${(props) => props.sunDiameter / props.sunToEarthRatio}px;
      height: ${(props) => props.sunDiameter / props.sunToEarthRatio}px;
      border-radius: 100%;
      background-color: #0049ad;
    }
  `

  return (
    <Styled sunDiameter={50} sunToEarthRatio={4}>
      <div className="container">
        <Circle
          id="sun"
          style={{
            backgroundColor: "white",
            // borderRadius: "100%",
            width: "3.2rem",
            height: "3.2rem",
            opacity: "0.9",
            boxShadow: "0px 0px 40px 15px white",
          }}
        />
        <Circle
          id="mercury"
          style={{
            backgroundColor: "#222222",
            width: ".7rem",
            height: ".7rem",
            position: "absolute",
          }}
        />
        {/* <Circle id="mercury" backgroundColor="#ff5533" diameter=".7rem" /> */}
        <Circle
          id="earth"
          style={{
            backgroundColor: "#333333",
            width: "1rem",
            height: "1rem",
            position: "absolute",
          }}
          ref={ref}
        />
      </div>
    </Styled>
  )
}

export default Orbit
