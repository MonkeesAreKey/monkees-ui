"use client"

import * as React from "react"
import { useEnsName, useEnsAvatar } from "wagmi"
import { normalize } from "viem/ens"
import type { Address } from "viem"

import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
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

function addressToGradient(address: string) {
  const hex = address.slice(2, 14)
  const c1 = `#${hex.slice(0, 6)}`
  const c2 = `#${hex.slice(6, 12)}`
  return `linear-gradient(135deg, ${c1}, ${c2})`
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
  const { data: ensAvatar } = useEnsAvatar({
    name: ensName ? normalize(ensName) : undefined,
  })

  const resolvedAvatar = avatarUrl ?? ensAvatar

  return (
    <div
      data-slot="account"
      className={cn("inline-flex items-center gap-2", className)}
      {...props}
    >
      <Avatar size="sm">
        {resolvedAvatar ? (
          <AvatarImage src={resolvedAvatar} alt={ensName ?? address} />
        ) : null}
        <AvatarFallback
          style={{ background: addressToGradient(address) }}
          className="text-transparent"
        />
      </Avatar>
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
