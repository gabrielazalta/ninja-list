import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
const NotFound = () => {
    const router = useRouter();
    //empty array means to only fire function once when the component first mounts
    //after 3 seconds, re-direct user
    useEffect(() => {
        setTimeout(() => {
            // router.go(1) would be like pressing the back button
            //.push will redirect to link
            router.push('/')
        }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;