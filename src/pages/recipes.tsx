import React, { Suspense } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import RotatingBox from "../components/gsap/rotatingBox"
// import Orbit from "../components/gsap/orbit"
// import Orbit2 from "../components/gsap/orbit2"
import { graphql } from "gatsby"

const RECIPES = {
  // rotatingBox: RotatingBox,
  // orbit: Orbit,
  // orbit2: Orbit2,
}

const RecipesPage = (props) => {
  console.log("RecipesPage: ", props)

  //   const tempFI = icon.prefix === "fi" ? require(`react-icons/${icon.prefix}`).default : null

  const recipes = props.data && props.data.site.siteMetadata.recipes
  //   const View2 = React.lazy(() => import("../components/gsap/orbit"))

  const recipesEl =
    recipes &&
    recipes.map((recipe) => {
    //   console.log("...recipe: ", recipe)
      const View = React.lazy(() => import(`../components/gsap/${recipe.name}`))
      return (
        <div className="card">
          <h3>{recipe.title}</h3>
          <div className="row">
            <View />
          </div>
        </div>
      )
      //   View = temp // RECIPES[recipe.name]
    })
//   console.log("recipesEl: ", recipesEl)

  const StyledRecipes = styled.div`
    .card {
      border: 1px solid #cecece;
      border-radius: 6px;
      background-color: #D0FF94; //#efefef;
      box-shadow: 1px 1px 5px 1px #cecece;
      color: #000;
      margin: 80px 0;
      padding: 60px;
      height: auto;
      overflow: hidden;
    }

    .title {
      font-weight: 700;
    }
  `

  return (
    <StyledRecipes>
      <Layout location={props.location}>
        <SEO title="Recipes" />
        <div>
          <h1 className="center upper">Recipes</h1>

          {/* TODO: make this portion a generic/reusable component */}
          <Suspense fallback={<h1>Still Loading…</h1>}>
            {recipesEl}
            {/* <View /> */}
          </Suspense>

          {/* <div className="card">
            <h3>Rotating Sequence</h3>
            <div className="row">
              <RotatingBox className="flex-item" />
            </div>
          </div>

          <div className="card">
            <h3>Planets</h3>
            <div className="row">
              <Orbit2 className="flex-item" />
            </div>
          </div>

          <div className="card">
            <h3>Planets</h3>
            <div className="row">
              <Orbit className="flex-item" />
            </div>
          </div> */}
        </div>
      </Layout>
    </StyledRecipes>
  )
}

export default RecipesPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        recipes {
          name
          title
        }
      }
    }
  }
`
