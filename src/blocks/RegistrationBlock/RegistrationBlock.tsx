import React from 'react'
import { GridContainer } from '@/components/GridContainer'
import { RegistrationBlockRecord } from '@/types/generated'
import { RegistrationTier } from '@/components/RegistrationTier'

export const RegistrationBlock = (props: RegistrationBlockRecord) => {
  const { lateLabel, earlyLabel, registrationPeriod, tiers } = props

  return (
    <section>
      <GridContainer className="gap-8 py-6">
        {tiers.map((tier, index) => {
          return (
            <div key={tier.id} className="col-span-full">
              <RegistrationTier
                {...{
                  ...tier,
                  registrationPeriod,
                  lateLabel,
                  earlyLabel,
                  blockIndex: index,
                }}
              />
            </div>
          )
        })}
      </GridContainer>
    </section>
  )
}
