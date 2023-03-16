import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main>
    <h1>Main App Page</h1>

    <ul>
      <li> <Link href="/posts">posts</Link></li>
      <li> <Link href="/blog/gggg">blog</Link></li>
      <li> <Link href="/products">products</Link></li>
      <li> <Link href="/users">users</Link></li>
    </ul>
    
  </main>;
}
