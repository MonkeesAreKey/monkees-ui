"use client"

import * as React from "react"
import { useEnsName } from "wagmi"
import type { Address } from "viem"

import { AccountAvatar } from "@/components/ui/account-avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"

function truncateAddress(address: string) {
  return `${address.slice(0, 6)}…${address.slice(-4)}`
}

function Account({
  address,
  avatarUrl,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  address: Address
  avatarUrl?: string
}) {
  const { data: ensName } = useEnsName({ address })

  return (
    <div
      data-slot="account"
      className={cn("inline-flex items-center gap-2", className)}
      {...props}
    >
      <AccountAvatar address={address} avatarUrl={avatarUrl} alt={ensName ?? address} />
      <span className="text-sm font-bold tracking-wide">
        {ensName ? (
          <span className="uppercase">{ensName}</span>
        ) : (
          <span>{truncateAddress(address)}</span>
        )}
      </span>
    </div>
  )
}

function AccountMenu({
  address,
  avatarUrl,
  className,
  children,
}: {
  address: Address
  avatarUrl?: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            className={cn("h-auto px-2.5 py-1.5 hover:bg-background", className)}
          />
        }
      >
        <Account address={address} avatarUrl={avatarUrl} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {children ?? (
          <>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuItem>Copy Address</DropdownMenuItem>
              <DropdownMenuItem>View on Explorer</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Disconnect</DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { Account, AccountMenu }
