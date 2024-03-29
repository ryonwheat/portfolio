import React, { FocusEvent, MouseEvent, SyntheticEvent } from "react"

interface Props {
  title: string,
  className?: string,
  animate?: boolean
}

const PageTitle = ({title, className, animate}: Props) => {
  let arr = Array.from(title)

  const handleHover = (event: SyntheticEvent) => {
    let el = event.target as Element
    if (el && animate === true) {
      console.log("hover: " + el.classList)
      el.classList.add("elastic-animation")
  
      setTimeout(() => {
        el.classList.remove("elastic-animation")
      }, 1000)
    }
  }
  
  return (
    <div>
      {arr.map(function (item, index) {
        let temp = className ? className : "page-header elastic"
        if (item === " ") {
          temp += " space"
        }
        return (
          <div key={index} className={temp} onMouseOver={handleHover} onFocus={handleHover} aria-hidden="true">
            {item}
          </div>
        )
      })}
    </div>
  )
}

export default PageTitle
