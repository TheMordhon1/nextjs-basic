import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Page404() {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push('/')
		}, 5000)
	}, [])
	return (
		<>
			<h1>Oooops, halaman tidak ditemukan</h1>
			<p>Anda akan kembali ke halaman homepage sesaat lagi...</p>
		</>
	)
}
