"use client"

import * as React from "react"
import { useEnsName } from "wagmi"
import type { Address } from "viem"

import { AccountAvatar } from "@/components/ui/account-avatar"
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
        className={cn(
          "inline-flex cursor-pointer items-center gap-2 rounded-lg border-2 border-black bg-background px-2.5 py-1.5 shadow-[4px_4px_0_0_#000] transition-[transform,box-shadow] duration-150 select-none",
          "hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0_0_#000]",
          "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
          className
        )}
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
