import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MainContent() {
  return (
    <main className="flex-1 overflow-auto bg-background p-12">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-sm font-medium text-muted-foreground">Factorial Finance</h2>

        <h1 className="mb-8 text-4xl font-bold leading-tight text-balance">A bank account built into your business</h1>

        <div className="space-y-4 mb-8">
          <div className="flex gap-3">
            <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <p className="text-base leading-relaxed">Access your payments earnings the moment you make a sale</p>
          </div>

          <div className="flex gap-3">
            <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <p className="text-base leading-relaxed">
              Have a clear view of your business cash flow with earnings and spending in one place
            </p>
          </div>

          <div className="flex gap-3">
            <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <p className="text-base leading-relaxed">Securely spend anywhere with your Visa business debit card</p>
          </div>

          <div className="flex gap-3">
            <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <p className="text-base leading-relaxed">
              No monthly fees. No transfer fees. No minimum balance. FDIC insured
            </p>
          </div>

          <div className="flex gap-3">
            <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <p className="text-base leading-relaxed">Seamlessly connect your account to QuickBooks</p>
          </div>
        </div>

        <div className="flex gap-4 mb-12">
          <Button size="lg" className="bg-[#FF5A5F] hover:bg-[#E54A4F] text-white">
            Open Account
          </Button>
          <Button variant="link" size="lg" className="text-[#FF5A5F]">
            Explore Advantages
          </Button>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          Factorial is not a bank. Banking products and services are provided by Lincoln Savings Bank, Member FDIC. The
          Debit Card is issued by Lincoln Savings Bank pursuant to a license from Visa U.S.A. Inc. and may be used
          everywhere Visa debit cards are accepted. Factorial is not FDIC insured. FDIC insurance only covers the failure of a
          covered bank.
        </p>
      </div>
    </main>
  )
}
