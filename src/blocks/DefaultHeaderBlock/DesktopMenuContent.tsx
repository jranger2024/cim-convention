import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuRecord } from '@/types/generated'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from '@/navigation'

export const DesktopMenuContent = ({ menu }: { menu: MenuRecord }) => {
  return (
    <Popover.Group className="hidden shrink-0 lg:flex lg:gap-x-4 xl:gap-x-7">
      {menu?.menuItems.map((item) => {
        const { subMenuItems } = item
        if (subMenuItems.length > 0) {
          return (
            <Popover key={item.id} className="relative">
              <Popover.Button className="flex items-center gap-x-1 font-medium leading-6 text-gray-900">
                {item.name}
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-brand-grey-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  static
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                >
                  <div className="p-4">
                    {subMenuItems.map((subMenu) => {
                      return (
                        subMenu.linkTo && (
                          <div
                            key={subMenu.id}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 leading-6 hover:bg-gray-50"
                          >
                            <div className="flex-auto">
                              <Link
                                href={{
                                  pathname: '/[...slug]',
                                  params: {
                                    slug: [subMenu.linkTo.slug],
                                  },
                                }}
                                className="block font-medium text-gray-900"
                              >
                                {subMenu.name}
                                <span className="absolute inset-0" />
                              </Link>
                            </div>
                          </div>
                        )
                      )
                    })}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          )
        } else {
          return item.linkTo ? (
            <Link
              key={item.id}
              href={{
                pathname: '/[...slug]',
                params: { slug: [item.linkTo.slug] },
              }}
              className="font-medium leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ) : (
            <span key={item.id} className="font-medium leading-6 text-gray-900">
              {item.name}
            </span>
          )
        }
      })}
    </Popover.Group>
  )
}
