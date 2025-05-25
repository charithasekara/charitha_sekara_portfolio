import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import AnimatedBackground from "@/components/animated-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Charitha Weerasekara | Portfolio",
  description: "Personal portfolio website of Charitha Weerasekara, a UIX engineer with 3+ years of experience",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AnimatedBackground />
          <Navbar />
          <main className="container mx-auto px-4 pb-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
