'use client' // Error components must be Client Components
 
import { redirect } from 'next/navigation'

export default function Error(){
  redirect('/error')  
}