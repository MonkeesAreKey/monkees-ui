"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { AccountMenu } from "@/components/ui/account-menu";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectGroupLabel,
  SelectSeparator,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  ImageCard,
  ImageCardImage,
  ImageCardContent,
  ImageCardHeader,
  ImageCardTitle,
  ImageCardBadge,
  ImageCardSubtitle,
  ImageCardFooter,
} from "@/components/ui/image-card";

const buttonVariants = [
  "default",
  "outline",
  "secondary",
  "accent",
  "ghost",
  "destructive",
  "link",
] as const;

const buttonSizes = ["xs", "sm", "default", "lg"] as const;

const badgeVariants = [
  "default",
  "secondary",
  "accent",
  "outline",
  "destructive",
] as const;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold uppercase tracking-wide">{title}</h2>
      <div className="rounded-xl border-2 border-black bg-card p-6 shadow-[4px_4px_0_0_#000]">
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-10">
      <Toaster />
      <header className="space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tight">Monkees UI</h1>
        <p className="text-muted-foreground">
          Brutalist component showcase. Yellow, black borders, hard shadows.
        </p>
      </header>

      <Section title="Button — variants">
        <div className="flex flex-wrap gap-4">
          {buttonVariants.map((v) => (
            <Button key={v} variant={v}>
              {v}
            </Button>
          ))}
        </div>
      </Section>

      <Section title="Button — sizes">
        <div className="flex flex-wrap items-center gap-4">
          {buttonSizes.map((s) => (
            <Button key={s} size={s}>
              {s}
            </Button>
          ))}
        </div>
      </Section>

      <Section title="Badge">
        <div className="flex flex-wrap gap-3">
          {badgeVariants.map((v) => (
            <Badge key={v} variant={v}>
              {v}
            </Badge>
          ))}
        </div>
      </Section>

      <Section title="Input + Label">
        <div className="grid max-w-sm gap-2">
          <Label htmlFor="wallet">Wallet address</Label>
          <Input id="wallet" placeholder="0xMonkee..." />
        </div>
      </Section>

      <Section title="Card">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>King Monkee #001</CardTitle>
              <CardDescription>Legendary trait set</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Badge>rare</Badge>
                <Badge variant="accent">crown</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm">View</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Beach Monkee #042</CardTitle>
              <CardDescription>Common trait set</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              No description provided.
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Avatar">
        <div className="flex items-center gap-4">
          <Avatar size="sm">
            <AvatarImage
              src="https://euoahz3m66j5mevn6rgocuje3xgsnemeh6z6zmwu43f6yx36pjea.arweave.net/JRwD52z3k9YSrfRM4VEk3c0mkYQ_s-yy1ObL7F9-ekg/857.png"
              alt=""
            />
            <AvatarFallback>M1</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://euoahz3m66j5mevn6rgocuje3xgsnemeh6z6zmwu43f6yx36pjea.arweave.net/JRwD52z3k9YSrfRM4VEk3c0mkYQ_s-yy1ObL7F9-ekg/857.png"
              alt=""
            />
            <AvatarFallback>M2</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage
              src="https://euoahz3m66j5mevn6rgocuje3xgsnemeh6z6zmwu43f6yx36pjea.arweave.net/JRwD52z3k9YSrfRM4VEk3c0mkYQ_s-yy1ObL7F9-ekg/857.png"
              alt=""
            />
            <AvatarFallback>M3</AvatarFallback>
          </Avatar>
        </div>
      </Section>

      <Section title="Dialog">
        <Dialog>
          <DialogTrigger render={<Button>Open dialog</Button>} />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm mint</DialogTitle>
              <DialogDescription>
                You are about to mint 1 Monkee for 0.05 ETH.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter showCloseButton>
              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Section>

      <Section title="Dropdown Menu">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline">Account</Button>} />
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Section>

      <Section title="Toast (Sonner)">
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => toast("Monkee minted!")}>Default</Button>
          <Button variant="accent" onClick={() => toast.success("Tx confirmed")}>
            Success
          </Button>
          <Button variant="destructive" onClick={() => toast.error("Tx reverted")}>
            Error
          </Button>{" "}
        </div>
      </Section>

      <Section title="Slider">
        <div className="grid max-w-sm gap-6">
          <div className="space-y-2">
            <Label>Price (ETH)</Label>
            <Slider defaultValue={50} />
          </div>
          <div className="space-y-2">
            <Label>Rarity rank</Label>
            <Slider defaultValue={25} min={0} max={100} step={5} />
          </div>
        </div>
      </Section>

      <Section title="Select">
        <div className="grid max-w-xs gap-4">
          <Select defaultValue="mainnet">
            <SelectTrigger>
              <SelectValue placeholder="Select network" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectGroupLabel>Mainnets</SelectGroupLabel>
                <SelectItem value="mainnet">Ethereum</SelectItem>
                <SelectItem value="polygon">Polygon</SelectItem>
                <SelectItem value="arbitrum">Arbitrum</SelectItem>
                <SelectItem value="optimism">Optimism</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectGroupLabel>Testnets</SelectGroupLabel>
                <SelectItem value="sepolia">Sepolia</SelectItem>
                <SelectItem value="goerli" disabled>Goerli (deprecated)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </Section>

      <Section title="Image Card">
        <div className="grid gap-4 sm:grid-cols-3">
          <ImageCard>
            <ImageCardImage
              src="https://euoahz3m66j5mevn6rgocuje3xgsnemeh6z6zmwu43f6yx36pjea.arweave.net/JRwD52z3k9YSrfRM4VEk3c0mkYQ_s-yy1ObL7F9-ekg/733.png"
              alt="Monkees #733"
            />
            <ImageCardContent>
              <ImageCardHeader>
                <ImageCardTitle>Monkees #733</ImageCardTitle>
                <ImageCardBadge>◆ #1,345</ImageCardBadge>
              </ImageCardHeader>
              <ImageCardSubtitle>Monkees</ImageCardSubtitle>
            </ImageCardContent>
            <ImageCardFooter>
              Top offer <span className="font-bold text-foreground">0.0146 WETH</span>
            </ImageCardFooter>
          </ImageCard>
          <ImageCard>
            <ImageCardImage
              src="https://euoahz3m66j5mevn6rgocuje3xgsnemeh6z6zmwu43f6yx36pjea.arweave.net/JRwD52z3k9YSrfRM4VEk3c0mkYQ_s-yy1ObL7F9-ekg/857.png"
              alt="Monkees #857"
            />
            <ImageCardContent>
              <ImageCardHeader>
                <ImageCardTitle>Monkees #857</ImageCardTitle>
                <ImageCardBadge>◆ #420</ImageCardBadge>
              </ImageCardHeader>
              <ImageCardSubtitle>Monkees</ImageCardSubtitle>
            </ImageCardContent>
            <ImageCardFooter>
              Top offer <span className="font-bold text-foreground">0.025 WETH</span>
            </ImageCardFooter>
          </ImageCard>
          <ImageCard>
            <ImageCardImage
              src="https://euoahz3m66j5mevn6rgocuje3xgsnemeh6z6zmwu43f6yx36pjea.arweave.net/JRwD52z3k9YSrfRM4VEk3c0mkYQ_s-yy1ObL7F9-ekg/1758.png"
              alt="Monkees #1758"
            />
            <ImageCardContent>
              <ImageCardHeader>
                <ImageCardTitle>Monkees #1758</ImageCardTitle>
                <ImageCardBadge>◆ #88</ImageCardBadge>
              </ImageCardHeader>
              <ImageCardSubtitle>Monkees</ImageCardSubtitle>
            </ImageCardContent>
            <ImageCardFooter>
              Top offer <span className="font-bold text-foreground">0.042 WETH</span>
            </ImageCardFooter>
          </ImageCard>
        </div>
      </Section>

      <Section title="Account Menu">
        <div className="flex flex-wrap items-center gap-4">
          <AccountMenu address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" />
          <AccountMenu address="0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B" />
          <AccountMenu address="0x1234567890abcdef1234567890abcdef12345678" />
          <AccountMenu
            address="0x617480cBf64419C86F2b8333a1D7FE43Bc1C5E53"
            avatarUrl="https://euoahz3m66j5mevn6rgocuje3xgsnemeh6z6zmwu43f6yx36pjea.arweave.net/JRwD52z3k9YSrfRM4VEk3c0mkYQ_s-yy1ObL7F9-ekg/1758.png"
          />
        </div>
      </Section>

      <Section title="Skeleton">
        <div className="space-y-3">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-64" />
          <Skeleton className="h-24 w-full" />
        </div>
      </Section>
    </main>
  );
}
