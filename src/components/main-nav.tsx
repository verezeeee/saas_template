'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    title: 'Settings',
    href: '/settings',
  },
  {
    title: 'Profile',
    href: '/profile',
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400',
            pathname === item.href
              ? 'text-primary-600 dark:text-primary-400'
              : 'text-muted-foreground'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
