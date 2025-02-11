import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard page',
}

export default function DashboardPage() {
  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome to your Dashboard
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          This is a modern SaaS template built with Next.js 14, TypeScript, and
          TailwindCSS. Start customizing it for your needs!
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Add dashboard cards/widgets here */}
      </div>
    </div>
  )
}
