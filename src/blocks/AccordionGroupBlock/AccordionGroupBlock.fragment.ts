import { gql } from 'graphql-request'

export const ACCORDION_GROUP_BLOCK_FRAGMENT = gql`
  fragment AccordionGroupBlockFragment on AccordionGroupBlockRecord {
    id
    _modelApiKey
    title
    displayAnchorLinks
    sections {
      ...AccordionBlockFragment
    }
    supportText
    centeredLayout
  }
`
