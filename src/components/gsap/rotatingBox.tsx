import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import gsap from "gsap"

const RotatingBox = (props) => {
  const ref = useRef()
  let tl = gsap.timeline()

  useEffect(() => {
    if (ref) {
      //   console.log("RotatingBox: ", ref)
      //   let tl = gsap.timeline()
      //   gsap.from(".box", {x: "-200px"})
      startAnimation()
    }
  })

  function startAnimation() {
    tl.from(
        ".box",
        {
          opacity: 0,
          duration: 2,
        },
        1
      )
        .to(ref.current, {
          rotation: 360,
          scale: 1.3,
          translateX: "0px",
          duration: 1,
        })
        .to(ref.current, {
          rotation: -385,
          scale: 1,
          translateX: "0px",
          duration: 1,
        })
        .to(ref.current, {
          xPercent: 800,
          // translateX: "500px",
          opacity: 0,
          duration: 1,
        })
        .set(ref.current, { xPercent: -800, y: 0 })
        .to(ref.current, {
          xPercent: 0,
          // translateX: "500px",
          opacity: 1,
          rotation: 0,
          duration: 1,
        })
  }

  function scaleUp() {
    gsap.to(ref.current, { scale: 1.2, duration: 1 })
    // tl.to(".box", { scale: 1.2 })
  }

  function scaleDown() {
    gsap.to(ref.current, { scale: 1, duration: 1 })
    // tl.to(".box", { scale: 1.2 })
  }

  const Styled = styled.div`
    height: auto;

    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100px;
      border-radius: 12px;
      background-color: green;
    }
  `

  return (
    <Styled>
      <div className="box" onMouseEnter={scaleUp} onMouseOut={scaleDown} onClick={startAnimation} ref={ref}>
        Brand
      </div>
    </Styled>
  )
}

export default RotatingBox
