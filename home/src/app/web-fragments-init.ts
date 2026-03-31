'use client'

import { useEffect } from 'react'

let initialized = false

export default function WebFragmentsInit() {
  useEffect(() => {
    if (!initialized) {
      console.log('runs effect')

      initialized = true
      import('web-fragments').then(({ initializeWebFragments }) => {
        initializeWebFragments()
      })
    }
  }, [])

  return null
}
