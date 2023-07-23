import React from 'react'
import { Button } from './components/ui/button'
import Layout from './components/layout/Layout'
import Dashboard from './components/dashboard/Dashboard'
import Detail from './components/details.tsx/Detail'

export default function () {
  return (
    <Layout>
      {/* <Dashboard/> */}
      <Detail/>
    </Layout>
  )
}
