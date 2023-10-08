import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import { Providers } from '@/components/dom/Providers'
import Background from '@/components/canvas/Background'
import Navbar from '@/components/Navbar/Navbar';
import Head from './head';

export const metadata = {
	title: "The Council",
	description: "",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="antialiased">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
					rel="stylesheet"
				/>
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
