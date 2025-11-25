import { Search, MessageSquare, Bell, Megaphone, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b bg-[#FF5A5F] px-4">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 font-bold text-xl text-white">
          <Image 
            src="/factorial logo.png" 
            alt="Factorial" 
            width={24} 
            height={24}
            className="w-6 h-6 object-contain"
          />
          <span>Factorial</span>
        </div>

        <Button variant="ghost" className="gap-1 text-sm text-white hover:bg-white/10 hover:text-white">
          Supreme Inc.
          <ChevronDown className="h-4 w-4" />
        </Button>

        <nav className="flex items-center gap-1">
          <Button variant="ghost" className="gap-1 text-sm text-white hover:bg-white/10 hover:text-white">
            Explore
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="gap-1 text-sm text-white hover:bg-white/10 hover:text-white">
            Help
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="text-sm text-white hover:bg-white/10 hover:text-white">
            Hire a Professional
          </Button>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
          <Input 
            placeholder="Search" 
            className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
          />
        </div>

        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
          <MessageSquare className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
          <Megaphone className="h-5 w-5" />
        </Button>

        <Button variant="ghost" className="gap-2 text-white hover:bg-white/10 hover:text-white">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>JJ</AvatarFallback>
          </Avatar>
          <span className="text-sm">James Jebbia</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}
