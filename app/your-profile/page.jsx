import React from 'react'
import Protected from '@/components/Protected'
import { useSelector } from 'react-redux'

export default function page() {

  return (
    <>
      <Protected>
            <h1>This is a kndkvh</h1>
      </Protected>
    </>
  )
}
