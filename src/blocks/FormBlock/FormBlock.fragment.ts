import { gql } from 'graphql-request'

export const FORM_BLOCK_FRAGMENT = gql`
  fragment FormBlockFragment on FormBlockRecord {
    id
    _modelApiKey
    anchorId
    title
    description(markdown: true)
    image {
      url
      alt
      responsiveImage(imgixParams: { auto: format }) {
        ...ResponsiveImageFragment
      }
    }
    form {
      requireSignature
      signatureClear
      signatureErrorMsg
      signatureLabel
      submitBtnLabel
      formErrorMsg
      fieldErrorMsg
      fieldTypeErrorMsg
      submitSuccessMessage
      submitErrorMessage
      fieldset {
        ... on FormTextareaRecord {
          id
          _modelApiKey
          label
          placeholder
          fieldId
          required
        }
        ... on FormTextInputRecord {
          id
          _modelApiKey
          label
          fieldId
          fieldType
          required
        }
        ... on FormSignatureRecord {
          id
          _modelApiKey
          label
          fieldId
          required
        }
        ... on FormCheckboxGroupRecord {
          id
          _modelApiKey
          label
          fieldId
          required
          checkboxOptions {
            label
            value
          }
        }
      }
    }
  }
`
