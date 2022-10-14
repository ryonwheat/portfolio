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

const Orbit2 = (props) => {
  const ref = useRef()

  const mercuryRadius = 65
  const earthRadius = 150
  const duration = 4
  const earthOrbitalPeriod = 365.2
  const earthDuration = (earthOrbitalPeriod / earthOrbitalPeriod) * duration
  const mercuryDuration = (88 / earthOrbitalPeriod) * duration

  useEffect(() => {
    console.log("Orbit2: ", ref)
    gsap.set(".container", { transformOrigin: "center center" })
    gsap.set(".mercury", {
        xPercent: 0,
        yPercent: 0,
        x: "-75px",
        y: 0,
        transformOrigin: "80px center",
      })
      gsap.to(".mercury", { rotation: -360, ease: "none", repeat: -1, duration: 1.8 })

      gsap.set(".venus", {
        xPercent: 0,
        yPercent: 0,
        x: "-103px",
        y: 0,
        transformOrigin: "110px center",
      })
      gsap.to(".venus", { rotation: -360, ease: "none", repeat: -1, duration: 2.3 })

      gsap.set(".earth", {
      xPercent: 0,
      yPercent: 0,
      x: "-141px",
      y: 0,
      transformOrigin: "150px center",
    })
    gsap.to(".earth", { rotation: -360, ease: "none", repeat: -1, duration: 3 })
  })

  function startAnimation() {}

  const Circle = forwardRef((props, ref) => {
    console.log("Circle: ", props)

    if (props.style) {
      props.style.borderRadius = "100%"
    }

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

    .sun, .mercury, .venus, .earth {
        position: absolute;
        border-radius: 100%;
    }

    .sun {
      position: relative;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background-color: #ff3300;
      opacity: 0.9;
      box-shadow: 0px 0px 40px 15px #ffffff;
    }

    .mercury {
        background-color: #555555;
        width: 10px;
        height: 10px;
    }

    .venus {
        background-color: #ffffb1;
        width: 14px;
        height: 14px;
    }

    .earth {
      background-color: #0049ad;
      width: 18px;
      height: 18px;
    }

    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      border: 1px solid green;
      width: 300px;
      height: 300px;
      top: 25%;
      left: 25%;
      /*   transform: translate(-50%, -50%); */
    }
  `

  return (
    <Styled sunDiameter={50} sunToEarthRatio={4}>
      <div className="container">
        <div className="sun"></div>
        <div className="mercury"></div>
        <div className="venus"></div>
        <div className="earth"></div>
      </div>
    </Styled>
  )
}

export default Orbit2
