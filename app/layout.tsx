import '@/global.css'
import { Layout } from '@/components/dom/Layout'
import { Providers } from '@/components/dom/Providers'
import Background from '@/components/canvas/Background'
import Navbar from '@/components/pages/navbar/Navbar';
import Head from './head';

export const metadata = {
	title: "The Council",
	description: "Give the Council your problem, and you can get a bunch of (imaginary AI-generated) friends to weigh in on your dilemmas, even if you're all alone!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="antialiased">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head>
        <Head/>
			</head>
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>   
          <Providers>
            <Navbar/>      
            {children}
          </Providers>
        </Layout>
        <Background />
      </body>
    </html>
  )
}
