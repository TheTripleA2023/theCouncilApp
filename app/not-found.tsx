'use client' // Error components must be Client Components
 
import { redirect } from 'next/navigation'

export default function NotFound(){
  redirect('/error')  
}