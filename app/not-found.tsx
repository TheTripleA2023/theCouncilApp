'use client' // Error components must be Client Components
 
import { Link } from '@chakra-ui/next-js'
 
export default function NotFound(){
  return (
    <div>
      <center>
      <h2>404 - Not Found</h2>
      <p>Please Turn Back Now!</p>
      <img src="/img/gru.jpg" />
      <Link href="/">Return Home</Link>
      </center>
    </div>
  )
  
}