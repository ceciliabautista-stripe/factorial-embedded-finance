import { ChevronDown, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface SidebarProps {
  onNavigateToCapital?: () => void
  onNavigateToChecking?: () => void
  onNavigateToFinancialAccount?: () => void
  onNavigateToCards?: () => void
  currentView?: string
}

export function Sidebar({ onNavigateToCapital, onNavigateToChecking, onNavigateToFinancialAccount, onNavigateToCards, currentView }: SidebarProps) {
  return (
    <aside className="w-[260px] border-r bg-white">
      <nav className="flex h-full flex-col p-4">
        <div className="flex-1 space-y-1">
          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Booking Services
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Booking Calendar
            <ChevronDown className="ml-auto h-4 w-4" />
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Inbox
            <Badge className="ml-auto bg-gray-200 text-gray-700">1</Badge>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Contacts
            <ChevronDown className="ml-auto h-4 w-4" />
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Marketing & SEO
            <ChevronDown className="ml-auto h-4 w-4" />
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Analytics & Reports
            <ChevronDown className="ml-auto h-4 w-4" />
          </Button>

          <div className="space-y-1 pt-1">
            <Button variant="ghost" className="w-full justify-start text-gray-900 hover:bg-gray-100">
              Finances
              <ChevronDown className="ml-auto h-4 w-4" />
            </Button>

            <div className="ml-4 space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Overview
              </Button>
              <Button
                variant="ghost"
                onClick={onNavigateToChecking}
                className={`w-full justify-start text-sm ${
                  currentView === 'checking'
                    ? 'bg-[#FF5A5F]/10 text-[#FF5A5F] hover:bg-[#FF5A5F]/20'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                Business Checking
                <Badge className="ml-auto bg-[#FF5A5F] text-white text-xs px-2">NEW</Badge>
              </Button>
              <Button
                variant="ghost"
                onClick={onNavigateToCapital}
                className={`w-full justify-start text-sm ${
                  currentView === 'capital'
                    ? 'bg-[#FF5A5F]/10 text-[#FF5A5F] hover:bg-[#FF5A5F]/20'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                Capital
              </Button>
              <Button
                variant="ghost"
                onClick={onNavigateToFinancialAccount}
                className={`w-full justify-start text-sm ${
                  currentView === 'financial-account'
                    ? 'bg-[#FF5A5F]/10 text-[#FF5A5F] hover:bg-[#FF5A5F]/20'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                Financial Account
              </Button>
              <Button
                variant="ghost"
                onClick={onNavigateToCards}
                className={`w-full justify-start text-sm ${
                  currentView === 'cards'
                    ? 'bg-[#FF5A5F]/10 text-[#FF5A5F] hover:bg-[#FF5A5F]/20'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                Cards
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Payments
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Price Quotes
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Invoices
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Recurring Invoices
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Financial Integrations
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Payouts History
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Documents & Reports
              </Button>
            </div>
          </div>

          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Settings
          </Button>
        </div>

        <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-gray-900">
          <Zap className="mr-2 h-4 w-4" />
          Quick Actions
        </Button>
      </nav>
    </aside>
  )
}
