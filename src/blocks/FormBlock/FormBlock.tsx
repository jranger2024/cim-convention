'use client'

import { FormBlockRecord } from '@/types/generated'
import { Image as DatoImage } from 'react-datocms'
import Image from 'next/image'
import { useRef, useState } from 'react'
// @ts-ignore - Type error: Could not find a declaration file for module 'react-signature-canvas'
import SignatureCanvas from 'react-signature-canvas' // https://www.npmjs.com/package/react-signature-canvas
import { GridContainer } from '@/components/GridContainer'
import IconSelector from '@/components/IconSelector/IconSelector'

type FieldError = {
  field: string
  error: string
}

type PostSubmit = {
  posted: boolean
  success: boolean
}

export function FormBlock(props: FormBlockRecord) {
  let { form, anchorId, title, description, image } = props

  const [formErrors, setFormErrors] = useState<FieldError[]>([])
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)
  const [postSubmit, setPostSubmit] = useState<PostSubmit>({
    posted: false,
    success: false,
  })

  const sigCanvas = useRef(null)
  const formRef = useRef(null)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setFormSubmitted(true)
    const formObject = getFormObject()
    if (validateForm(formObject)) {
      fetch('https://formspree.io/f/mgegepae', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      })
        .then((response) => {
          if (response.status === 200) {
            setPostSubmit({ posted: true, success: true })
          } else {
            setPostSubmit({ posted: true, success: false })
          }
          return response.json()
        })
        .catch((error) => {
          console.error('Error:', error)
          setPostSubmit({ posted: true, success: false })
        })
    }
  }

  const handleChange = (e: any) => {
    const formObject = getFormObject()
    if (formSubmitted) {
      validateForm(formObject)
    }
  }

  const handleTextInputChange = (e: any) => {
    e.target.value = e.target.value.replace(/[^0-9()+-\s]/g, '')
  }

  const getFormObject = () => {
    const formData = new FormData(formRef.current as any)
    const formObject = {} as any
    // Set initial Form Object
    form.fieldset.forEach((field) => {
      formObject[field.fieldId] = null
    })

    // Set Current Form Values
    formData.forEach((value, key) => {
      formObject[key] = value
    })

    // Add Signature to Form Object if required
    if (form.requireSignature) {
      let signature = sigCanvas.current as any
      formObject.signature = signature?.getSignaturePad()?.points?.length
        ? signature?.toDataURL()
        : null
    }

    return formObject
  }

  const validateForm = (formObject: any) => {
    const errors: FieldError[] = []

    Object.keys(formObject).forEach((key) => {
      const fieldData = form.fieldset.find(
        (field) => field.fieldId === key,
      ) as any
      // Required Field Errors (required)
      if (
        !formObject[key] &&
        (fieldData?.required || (key === 'signature' && form.requireSignature))
      ) {
        errors.push({ field: key, error: 'required' })
      }

      // Field Type Errors (pattern): Phone
      if (fieldData?._modelApiKey === 'form_text_input') {
        const phonePattern = /^[0-9()+-]{6,18}$/g
        if (
          fieldData?.fieldType === 'tel' &&
          !phonePattern.test(formObject[key])
        ) {
          const existingError = errors.find((error) => error.field === key)
          if (!existingError) {
            errors.push({ field: key, error: 'pattern' })
          }
        }

        // Field Type Errors (pattern): Email
        const emailPattern = /^[^@]+@[^@]+\.[^@]+$/g
        if (
          fieldData?.fieldType === 'email' &&
          !emailPattern.test(formObject[key])
        ) {
          const existingError = errors.find((error) => error.field === key)
          if (!existingError) {
            errors.push({ field: key, error: 'pattern' })
          }
        }
      }
    })

    setFormErrors(errors)
    return errors.length === 0
  }

  const fieldHasError = (fieldId: string) => {
    return formErrors.find((error) => error.field === fieldId)
  }

  const clearSignature = () => {
    let signature = sigCanvas.current as any
    signature?.clear()
  }

  const arrangedOptions = (options: any[]) => {
    const arrangedOptions = []
    const rows = Math.ceil(options.length / 2)
    for (let i = 0; i < rows; i++) {
      arrangedOptions.push(options[i])
      if (options[i + rows]) {
        arrangedOptions.push(options[i + rows])
      }
    }
    return arrangedOptions
  }

  const halfWidthFields: number[] = []
  let consecutiveTextFields = 0

  form.fieldset.forEach((field: any, index: number) => {
    const isTextInput = field._modelApiKey === 'form_text_input'
    consecutiveTextFields = isTextInput ? consecutiveTextFields + 1 : 0
    if (
      isTextInput &&
      !(
        !(form.fieldset[index + 1]?._modelApiKey === 'form_text_input') &&
        consecutiveTextFields % 2 !== 0
      )
    ) {
      halfWidthFields.push(index)
    }
  })

  const checkmarkBg =
    'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC42NjY2IDEuNUw0LjI0OTkyIDcuOTE2NjdMMS4zMzMyNSA1IiBzdHJva2U9IiMwMEE1NTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=")] checked:bg-no-repeat checked:bg-center checked:bg-[background-size: 75%] checked:p-1'

  return (
    <section
      className="flex flex-col gap-8 bg-brand-gradient-form py-10 md:gap-16 md:py-20"
      id={anchorId ?? undefined}
    >
      <div className="container flex max-w-[100%] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-20/[140%] font-semibold md:text-32/[125%]">
          {title}
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: description || '' }}
          className="max-w-[800px] text-14/[150%] md:text-16/[150%]"
        ></div>
      </div>
      <GridContainer className="gap-y-8">
        <div className="col-span-6">
          {image &&
            (image?.responsiveImage ? (
              <DatoImage
                data={image.responsiveImage}
                className="h-auto w-[100%] object-contain"
                pictureClassName="object-contain"
              />
            ) : (
              <Image
                src={image?.url || ''}
                alt={image?.alt || ''}
                fill
                className="object-contain"
              />
            ))}
        </div>
        <div className="col-span-6">
          <form
            onSubmit={(e) => handleSubmit(e)}
            onChange={(e) => handleChange(e)}
            className="grid grid-cols-2 gap-4 md:gap-6"
            noValidate
            ref={formRef}
          >
            {form.fieldset.map((field: any, i: number) => {
              return (
                <div
                  key={field.id}
                  className={`col-span-2 flex flex-col ${
                    formSubmitted ? 'justify-start' : 'justify-between'
                  } ${
                    halfWidthFields.includes(i)
                      ? 'md:col-span-1'
                      : 'md:col-span-2'
                  }`}
                >
                  {/* Label */}
                  <label
                    htmlFor={field.fieldId}
                    className="mb-2 text-12/[140%] text-brand-grey-600 md:text-14/[150%]"
                  >
                    {field.label}
                    {field.required && (
                      <span className="text-brand-red">*</span>
                    )}
                  </label>
                  {/* Text Input */}
                  {field._modelApiKey === 'form_text_input' && (
                    <input
                      {...(field?.fieldType === 'tel' && { maxLength: 18 })}
                      onChange={(e) =>
                        field?.fieldType === 'tel' && handleTextInputChange(e)
                      }
                      type={field.fieldType || 'text'}
                      id={field.fieldId}
                      name={field.fieldId}
                      required={field.required}
                      disabled={postSubmit.posted && postSubmit.success}
                      className="rounded border-[1px] border-brand-grey-300 px-[14px] py-3 text-14/[150%] focus:shadow-skyblue focus:outline-none md:text-16/[150%]"
                    />
                  )}
                  {/* Checkbox Group */}
                  {/* @todo Only one checkbox should be chosen (refactor to radio??) */}
                  {field._modelApiKey === 'form_checkbox_group' && (
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                      {arrangedOptions(field.checkboxOptions).map(
                        (option: any, index: number) => {
                          return (
                            <div
                              key={`${option.id}-${index}`}
                              className="col-span-2 row-span-1 flex w-[100%] items-center md:col-span-1"
                            >
                              <input
                                type="radio"
                                id={`${field.fieldId}_${option.value}`}
                                name={field.fieldId}
                                value={option.value}
                                disabled={
                                  postSubmit.posted && postSubmit.success
                                }
                                className={`h-[20px] w-[20px] cursor-pointer appearance-none rounded border-[1px] border-brand-grey-300 bg-white checked:border-brand-green focus:shadow-skyblue focus:outline-none ${checkmarkBg}`}
                              />
                              <label
                                htmlFor={`${field.fieldId}_${option.value}`}
                                className="ml-3 cursor-pointer text-12/[140%] md:text-14/[150%]"
                              >
                                {option.label}
                              </label>
                            </div>
                          )
                        },
                      )}
                    </div>
                  )}
                  {/* Textarea */}
                  {field._modelApiKey === 'form_textarea' && (
                    <textarea
                      id={field.fieldId}
                      name={field.fieldId}
                      className="h-[150px] resize-none rounded border-[1px] border-brand-grey-300 px-[14px] py-3 text-14/[150%] focus:shadow-skyblue focus:outline-none md:text-16/[150%]"
                      placeholder={field.placeholder || ''}
                      required={field.required}
                      disabled={postSubmit.posted && postSubmit.success}
                    />
                  )}
                  {/* Field Error Message */}
                  {fieldHasError(field.fieldId) && (
                    <span className="mt-2 text-12/[140%] text-brand-red md:text-14/[150%]">
                      {fieldHasError(field.fieldId)?.error === 'pattern'
                        ? form.fieldTypeErrorMsg
                        : form.fieldErrorMsg}
                    </span>
                  )}
                </div>
              )
            })}
            {/* Signature */}
            {form.requireSignature && (
              // @todo: Label and Button to come from Dato (w/ error messages)
              <div className="col-span-2">
                <label className="mb-2 text-14/[150%] text-brand-grey-600">
                  {form.signatureLabel}
                </label>
                <div className="mt-2 overflow-hidden rounded border-[1px] border-brand-grey-300">
                  <SignatureCanvas
                    ref={sigCanvas}
                    penColor="black"
                    canvasProps={{
                      height: 250,
                      className: 'bg-white w-[100%] cursor-crosshair',
                    }}
                    onEnd={() => handleChange(null)}
                  />
                  {fieldHasError('signature') && (
                    <div className="w-[100%] bg-brand-red py-2 text-center text-12 text-white">
                      {form.signatureErrorMsg}
                    </div>
                  )}
                  <button
                    className="w-[100%] overflow-hidden bg-gray-400 px-6 py-[10px] text-14/[125%] font-[500] text-white shadow-xs lg:text-16"
                    onClick={clearSignature}
                    type="button"
                  >
                    {form.signatureClear}
                  </button>
                </div>
              </div>
            )}
            {/* Form Error Message */}
            {formErrors.length > 0 && (
              <div className="pointer-events-none col-span-2 flex items-center gap-3 rounded border-none bg-brand-red-translucent px-4 py-2 text-brand-red">
                <IconSelector
                  selectorId="alert_icon"
                  className="text-brand-red"
                />
                {form.formErrorMsg}
              </div>
            )}
            <div className="col-span-2">
              <button
                disabled={postSubmit.posted && postSubmit.success}
                type="submit"
                className="w-[50%] rounded bg-brand-gradient px-6 py-[10px] text-14/[125%] font-[500] text-white shadow-xs transition-all focus:shadow-skyblue focus:outline-none disabled:bg-brand-gradient-light lg:text-16"
              >
                {form.submitBtnLabel}
              </button>
              {/* Submit Success */}
              {postSubmit.posted &&
                postSubmit.success &&
                form.submitSuccessMessage && (
                  <p className="col-span-full mt-2 text-12/[140%] text-brand-green md:text-14/[150%]">
                    {form.submitSuccessMessage}
                  </p>
                )}
              {/* Submit Error */}
              {postSubmit.posted &&
                !postSubmit.success &&
                form.submitErrorMessage && (
                  <p className="col-span-full mt-2 text-12/[140%] text-brand-red md:text-14/[150%]">
                    {form.submitErrorMessage}
                  </p>
                )}
            </div>
          </form>
        </div>
      </GridContainer>
    </section>
  )
}
