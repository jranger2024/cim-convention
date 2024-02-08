import { NextResponse } from 'next/server'
const client = require('@mailchimp/mailchimp_marketing')

const mailchimpApiKey = process.env.MAILCHIMP_API_KEY
const mailchimpServerPrefix = process.env.MAILCHIMP_SERVER_PREFIX
const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID

if (!mailchimpApiKey || !mailchimpServerPrefix || !mailchimpAudienceId) {
  throw new Error(
    'Please define `MAILCHIMP_API_KEY`, `MAILCHIMP_SERVER_PREFIX` and `MAILCHIMP_AUDIENCE_ID` in your `.env` file',
  )
}

client.setConfig({
  apiKey: mailchimpApiKey,
  server: mailchimpServerPrefix,
})

export async function POST(event: Request) {
  const { email } = await event.json()
  try {
    const response = await client.lists.addListMember(mailchimpAudienceId, {
      email_address: email,
      status: 'pending',
    })

    if (!response.id) {
      return NextResponse.json(
        { message: 'Error adding contact to Mailchimp' },
        {
          status: response.status,
        },
      )
    }

    return NextResponse.json({
      response: response,
      status: 200,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        message: 'Error adding contact to Mailchimp',
        error: error?.response?.body || error,
        status: error?.status,
        fields: event.body,
      },
      {
        status: error?.status || 400,
      },
    )
  }
}
