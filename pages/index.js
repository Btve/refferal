import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useRouter} from "next/router";
import React from "react"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  React.useEffect(() => {
    router.push("https://onlyfans.com/cherry-xx")
  })
  return (
    <>
    </>
  )
}
