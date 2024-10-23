import React from 'react'
import { Search, Bell, Menu, ChevronDown, Heart, MessageSquare, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              <span className="hidden font-bold sm:inline-block">EduForAll</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground" href="/">Home</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/activities">Activities</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/adaptations">Adaptations</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/community">Community</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/resources">Resources</a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search activities, teachers, or adaptations" className="pl-8 md:w-[300px] lg:w-[400px]" />
              </div>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" alt="@username" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)_220px] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)_240px] lg:gap-10">
        {/* Left Sidebar */}
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <div className="py-6 pr-6 lg:py-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Profile</h2>
              <Button variant="ghost" size="sm">View</Button>
            </div>
            <div className="flex items-center space-x-3 mb-6">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-avatar.jpg" alt="@username" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Jane Doe</p>
                <p className="text-xs text-muted-foreground">Special Ed Teacher</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Categories</h3>
                <div className="space-y-1">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <span>Math</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <span>Science</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <span>Art</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <span>Physical Education</span>
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Special Needs Filters</h3>
                <div className="space-y-1">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <span>Autism</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <span>ADHD</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <span>Physical Disabilities</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex w-full flex-col overflow-hidden">
          <div className="py-6 lg:py-8">
            <h2 className="mb-4 text-2xl font-bold">Featured Activities</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {[...Array(3)].map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card>
                      <CardHeader>
                        <CardTitle>Featured Activity {index + 1}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>This is a brief description of the featured activity.</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <h2 className="mt-8 mb-4 text-2xl font-bold">Activity Feed</h2>
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={`/placeholder-avatar-${index + 1}.jpg`} alt="Teacher Avatar" />
                        <AvatarFallback>T{index + 1}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>Activity Title {index + 1}</CardTitle>
                        <p className="text-sm text-muted-foreground">by Teacher Name {index + 1}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>This is a brief description of the activity. It explains what the activity entails and its objectives.</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Button variant="secondary" size="sm">Math</Button>
                      <Button variant="secondary" size="sm">Problem Solving</Button>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm">
                        <Heart className="mr-2 h-4 w-4" />
                        Like
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Comment
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto md:sticky md:block">
          <div className="py-6 pl-6 lg:py-8">
            <div className="mb-6">
              <h3 className="mb-2 text-lg font-semibold">Upcoming Events</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:underline">Webinar: Inclusive Classroom Strategies</a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">Workshop: Adaptive Technologies in Education</a>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="mb-2 text-lg font-semibold">Top Contributors</h3>
              <ul className="space-y-2">
                {[...Array(3)].map((_, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={`/placeholder-avatar-${index + 4}.jpg`} alt={`Contributor ${index + 1}`} />
                      <AvatarFallback>C{index + 1}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">Contributor {index + 1}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Resource Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:underline">Special Education Resources</a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">Adaptive Learning Tools</a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 EduForAll. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-sm hover:underline">Contact</a>
            <a href="#" className="text-sm hover:underline">Terms</a>
            <a href="#" className="text-sm hover:underline">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}