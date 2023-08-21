import { useRouteError } from "react-router-dom"
import { Link } from 'react-router-dom'
import './error-page.css'
import HomePage from '../HomePage'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div class="container">
      <h1>:(</h1>
      <br />
      <h2>A <span>404</span> error occured, Page not found, check the URL and try again.</h2>
      <br /><br />
      <h3><Link to={'/'}>Return Home</Link></h3>
    </div>
  )
}