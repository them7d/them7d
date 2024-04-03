import { Inter } from '@next/font/google'
import { SparklesCore } from "../components/ui/sparkles.tsx";
import Page from './home.jsx'
const inter = Inter({ subsets: ['latin'] })
import "../styles/main.module.css";
export default function Home() {
  return (
    <>
      <Page />
    </>
  )
}
