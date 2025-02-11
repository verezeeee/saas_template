import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex flex-col items-center justify-center gap-4 py-20 text-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Modern SaaS Template for{' '}
          <span className="text-primary-600">Next.js</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Build your SaaS product faster with our production-ready template.
          Includes authentication, dashboard, dark mode, and more.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
