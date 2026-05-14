"use client"

import { useEnsAvatar, useEnsName } from "wagmi"
import { normalize } from "viem/ens"
import type { Address } from "viem"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function addressToGradient(address: string) {
  const hex = address.slice(2, 14)
  const c1 = `#${hex.slice(0, 6)}`
  const c2 = `#${hex.slice(6, 12)}`
  return `linear-gradient(135deg, ${c1}, ${c2})`
}

function AccountAvatar({
  address,
  avatarUrl,
  alt,
  size = "sm",
  className,
}: {
  address: Address
  avatarUrl?: string
  alt?: string
  size?: "default" | "sm" | "lg"
  className?: string
}) {
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({
    name: ensName ? normalize(ensName) : undefined,
  })

  const resolvedAvatar = avatarUrl ?? ensAvatar

  return (
    <Avatar size={size} className={className}>
      {resolvedAvatar ? (
        <AvatarImage src={resolvedAvatar} alt={alt ?? ensName ?? address} />
      ) : null}
      <AvatarFallback
        style={{ background: addressToGradient(address) }}
        className="text-transparent"
      />
    </Avatar>
  )
}

export { AccountAvatar }
