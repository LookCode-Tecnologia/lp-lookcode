import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'

export function render(pathname) {
  return renderToString(<React.StrictMode><StaticRouter location={pathname}><App /></StaticRouter></React.StrictMode>)
}
