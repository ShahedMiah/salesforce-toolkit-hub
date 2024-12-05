import { SiteHeader } from '@/components/site-header'
import { ToolsGrid } from '@/components/tools-grid'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container space-y-6 py-8 md:py-12 lg:py-24 lg:pb-8">
          <div className="mx-auto flex flex-col items-center space-y-4 text-center">
            <h1 className="h1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Salesforce Toolkit Hub
            </h1>
            <p className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
              Modern tools to streamline your Salesforce development workflow. Build, deploy, 
              and manage your org faster than ever.
            </p>
            <div className="space-x-4">
              <a 
                href="/login"
                className="button button-default button-lg"
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex flex-col items-center space-y-4 text-center">
            <h2 className="h2">Available Tools</h2>
            <p className="text-muted-foreground max-w-[85%] leading-normal sm:text-lg sm:leading-7">
              Choose from our collection of specialized tools designed to enhance your Salesforce development experience.
            </p>
          </div>
          <div className="mx-auto mt-8">
            <ToolsGrid />
          </div>
        </section>
      </main>
    </div>
  )
}