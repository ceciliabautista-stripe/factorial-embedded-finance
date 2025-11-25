'use client'

import { useEffect, useState } from 'react'
import {
  ConnectIssuingCardsList,
  ConnectComponentsProvider,
} from '@stripe/react-connect-js'
import { loadConnectAndInitialize } from '@stripe/connect-js'

interface EmbeddedIssuingCardsListProps {
  connectedAccountId: string
}

export function EmbeddedIssuingCardsList({
  connectedAccountId,
}: EmbeddedIssuingCardsListProps) {
  const [stripeConnectInstance, setStripeConnectInstance] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const initializeConnect = async () => {
      try {
        // Initialize Stripe Connect with fetchClientSecret function
        const instance = await loadConnectAndInitialize({
          publishableKey: process.env.NEXT_PUBLIC_STRIPE_FINANCIAL_PUBLISHABLE_KEY || '',
          fetchClientSecret: async () => {
            const response = await fetch('/api/stripe/create-issuing-cards-session', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                account: connectedAccountId,
              }),
            })

            if (!response.ok) {
              const error = await response.json()
              console.error('Failed to create account session:', error)
              throw new Error(error.error || 'Failed to create account session')
            }

            const { client_secret: clientSecret } = await response.json()
            return clientSecret
          },
          appearance: {
            overlays: 'dialog',
            variables: {
              colorPrimary: '#FF5A5F',
              colorBackground: '#ffffff',
              colorText: '#1a1a1a',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontSizeBase: '16px',
              spacingUnit: '8px',
              borderRadius: '8px',
              buttonPrimaryColorText: "#ffffff",
            },
          },
        })

        setStripeConnectInstance(instance)
      } catch (error) {
        console.error('Error initializing Stripe Connect:', error)
        setError(error instanceof Error ? error.message : 'Failed to initialize')
      }
    }

    initializeConnect()
  }, [connectedAccountId])

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-red-800">Error loading cards: {error}</p>
        </div>
      </div>
    )
  }

  if (!stripeConnectInstance) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-sm text-muted-foreground">Loading cards...</p>
        </div>
      </div>
    )
  }

  return (
    <ConnectComponentsProvider connectInstance={stripeConnectInstance}>
      <ConnectIssuingCardsList showSpendControls />
    </ConnectComponentsProvider>
  )
}
