import Link from 'next/link'

export default function FirstPost() {
    return <>
    <h>First Post</h>
    <h2>
        <Link href="/">
            <a>Back to home</a>
        </Link>
    </h2>
    </>

}