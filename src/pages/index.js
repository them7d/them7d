import { Inter } from 'next/font/google'
import { SparklesCore } from "../components/ui/sparkles.tsx";
import Page from './home.jsx'
const inter = Inter({ subsets: ['latin'] })
import "../styles/main.module.css";
export default function Home() {
  return (
    <>
      <Page />
    { /* <!-- Cloudflare Web Analytics --> */}
    <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "c40acaefcaf74b54a1785e9222c08ae2"}'></script>
  { /* <!-- End Cloudflare Web Analytics --> */}
    </>
  )
}
