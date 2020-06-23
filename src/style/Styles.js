import styled from "styled-components"
import { Button, Divider, Grid, GridListTileBar, TextField, Typography, Card } from "@material-ui/core"
import { Link } from "react-router-dom"
import InfiniteScroll from "react-infinite-scroll-component"

export const StyledCard = styled(Card)`
height: 45vh;
width: 22vh;
`

export const StyledButton = styled(Button).attrs({
  variant: "raised", 
  color: "primary",
  marginleft: props => props.px
})`
  && {
    margin-left: ${props => props.marginleft};
    margin-top: 5px;
  }
`

export const StyledGridItem = styled(Grid).attrs({
  item: true
})`
  && {
    margin-top: 8px;
    overflow: hidden;
  }
`

export const StyledGridContainer = styled(Grid).attrs({
  container: true,
  spacing: 8,
  justify: "center"
})`
  && {
    margin-bottom: 3px;
  }
`

export const StyledGridListTileBar = styled(GridListTileBar).attrs({
  titlePosition: "bottom",
  actionPosition: "left"
})``

export const StyledTextField = styled(TextField).attrs({
  type: "search",
  label: "Search the movie"
})`
  && {
    width: 500px;
    margin-bottom: 8px;
    margin-top: 2px;
  }
`

export const StyledTypography = styled(Typography).attrs({
  component: props => props.component || "p",
  variant: props => props.variant || "subheading"
})`
 && {
   margin-top: 8px;
 } 
`

export const StyledDivider = styled(Divider).attrs({
  light: true
})` 
  && {
    margin-top: 8px;
  }
`
export const StyledLinkLight = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
`
export const StyledLinkDark = styled(Link)`
  text-decoration: none;
  color: #2d3436;
`

export const StyledInfiniteScroll= styled(InfiniteScroll)`
  display: grid;
`