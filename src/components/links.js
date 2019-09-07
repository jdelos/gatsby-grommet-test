import React from "react"

import { Anchor } from "grommet"

const linksList = [
  {
    to: "/",
    label: "<Grommet>",
  },
  {
    to: "/grommet_full",
    label: "<Grommet full>",
  },
  {
    to: "/grommet_full_plain",
    label: "<Grommet plain full>",
  },
  {
    to: "/index-2",
    label: "<Grommet> Clean project",
  },
  {
    to: "/empty-plain",
    label: "<Grommet plain> Clean project",
  },
  {
    to: "/empty-plain-full",
    label: "<Grommet plain full> Clean project",
  },
]

const links = () => (
  <>
    {linksList.map((link, idx) => (
      <Anchor key={idx} href={link.to} label={link.label} />
    ))}
  </>
)

export default links
