import Link from 'next/link'
import React from 'react'
import style from './style.module.css'

export default function Header() {
	return (
		<header className={style.container}>
			<ul className={style.list}>
				<li><Link href="/">Home</Link></li>
				<li><Link href="/blog">blog</Link></li>
				<li><Link href="/users">users</Link></li>
			</ul>
		</header>
	)
}
