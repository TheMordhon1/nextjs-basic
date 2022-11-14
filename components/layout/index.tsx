import Head from 'next/head';
import React, { ReactNode } from 'react'
import Footer from '../footer';
import Header from '../header'
import style from './style.module.css'


interface layoutProps {
	children: ReactNode,
	pageTitle: string,
}

export default function Layout(props: layoutProps) {
	const { children, pageTitle } = props;
	return (
		<div className={style.container}>
			<Head>
				<title>Next JS Basic | {pageTitle}</title>
				<meta name="description" content="Next JS Basic" />
			</Head>
			<Header />
			<div className={style.content}>{children}</div>
			<Footer />
		</div>
	)
}
