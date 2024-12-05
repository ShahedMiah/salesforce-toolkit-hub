'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { CloudIcon } from '@heroicons/react/24/outline'

export function SiteHeader() {
  const { data: session } = useSession()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-2">
          <CloudIcon className="h-6 w-6" />
          <Link href="/" className="font-bold">Toolkit</Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {session ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                {session.user?.email}
              </span>
              <button
                onClick={() => signOut()}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Sign Out
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}