import { gql } from 'graphql-request'

export const ACCORDION_BLOCK_FRAGMENT = gql`
  fragment AccordionBlockFragment on AccordionBlockRecord {
    id
    _modelApiKey
    anchorId
    accordionType
    title
    items {
      id
      triggerText
      content {
        value
      }
    }
  }
`
