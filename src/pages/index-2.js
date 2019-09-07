import React from "react"

import { Grommet, Box } from "grommet"

import LinksBar from "../components/links"

const IndexPage = () => (
  <Grommet>
    <Box direction="row" justify="evenly" background="light-2">
      <LinksBar />
    </Box>

    <Box justify="evenly" direction="row">
      <h1>This is an empty project</h1>
    </Box>
  </Grommet>
)

export default IndexPage
