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
} from "@/components/ui/dropdown-menu";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Account, AccountMenu } from "@/components/ui/account-menu";
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockBody,
  CodeBlockCopy,
} from "@/components/ui/code-block";
import Image from "next/image";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyInlineCode,
  TypographyLead,
  TypographyMuted,
} from "@/components/ui/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ChevronDownIcon, HeartIcon, StarIcon, ZapIcon } from "lucide-react";

const codeExample = `npx shadcn@latest add "https://ui.monkees.vip/r/button.json"`;

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

import React from "react";

function CollapsibleDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-wide">Recent activity</h3>
        <CollapsibleTrigger className="border-0 bg-transparent px-2 py-1 text-xs shadow-none hover:bg-muted hover:shadow-none hover:translate-x-0 hover:translate-y-0 active:translate-x-0 active:translate-y-0">
          {open ? "Show less" : "Show more"}{" "}
          <ChevronDownIcon
            className={`ml-1 inline size-3 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </CollapsibleTrigger>
      </div>
      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-3 rounded-lg border-2 border-black bg-muted/30 px-3 py-2">
          <Badge variant="accent" className="text-xs">
            Sale
          </Badge>
          <span className="text-sm">
            Monkees #733 sold for <span className="font-bold">0.42 ETH</span>
          </span>
          <span className="ml-auto text-xs text-muted-foreground">2m ago</span>
        </div>
      </div>
      <CollapsibleContent>
        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-3 rounded-lg border-2 border-black bg-muted/30 px-3 py-2">
            <Badge className="text-xs">List</Badge>
            <span className="text-sm">
              Monkees #857 listed at <span className="font-bold">0.65 ETH</span>
            </span>
            <span className="ml-auto text-xs text-muted-foreground">15m ago</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg border-2 border-black bg-muted/30 px-3 py-2">
            <Badge variant="secondary" className="text-xs">
              Offer
            </Badge>
            <span className="text-sm">
              Offer on #1758 for <span className="font-bold">0.25 ETH</span>
            </span>
            <span className="ml-auto text-xs text-muted-foreground">1h ago</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg border-2 border-black bg-muted/30 px-3 py-2">
            <Badge variant="accent" className="text-xs">
              Sale
            </Badge>
            <span className="text-sm">
              Monkees #420 sold for <span className="font-bold">1.2 ETH</span>
            </span>
            <span className="ml-auto text-xs text-muted-foreground">3h ago</span>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section id={slugify(title)} className="scroll-mt-28 space-y-4">
      <Separator />
      <h2 className="text-xl font-bold uppercase tracking-wide">{title}</h2>
      {children}
    </section>
  );
}

const navGroups = [
  {
    label: "Actions",
    items: ["Button — Variants", "Button — Sizes", "Badge", "Dropdown Menu"],
  },
  {
    label: "Form Inputs",
    items: [
      "Input + Label",
      "Textarea",
      "Select",
      "Checkbox",
      "Switch",
      "Radio Group",
      "Slider",
    ],
  },
  {
    label: "Data Display",
    items: [
      "Avatar",
      "Account",
      "Account Menu",
      "Card",
      "Image Card",
      "Skeleton",
      "Progress",
    ],
  },
  {
    label: "Navigation",
    items: ["Breadcrumb", "Tabs", "Carousel", "Collapsible"],
  },
  {
    label: "Overlays & Feedback",
    items: ["Dialog", "Sheet", "Toast (Sonner)", "Tooltip", "Popover"],
  },
  {
    label: "Layout",
    items: ["Separator", "Code Block"],
  },
  {
    label: "Typography",
    items: ["Typography"],
  },
];

function HomeNavbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-[100] border-b-[3px] border-black bg-accent/95 py-3 shadow-[0_4px_0_0_rgba(0,0,0,1)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4">
        <a href="#top" aria-label="Monkees UI home" className="block no-underline">
          <Image
            src="/monkees-logo-crop.png"
            alt="Monkees UI"
            width={946}
            height={346}
            sizes="(min-width: 768px) 145px, 95px"
            className="h-8 w-auto object-contain md:h-12"
            priority
          />
        </a>
        <a
          href="https://github.com/MonkeesAreKey/monkees-ui"
          target="_blank"
          rel="noreferrer"
          aria-label="View Monkees UI on GitHub"
          className="inline-flex size-10 items-center justify-center rounded-lg border-2 border-black bg-background text-foreground shadow-[3px_3px_0_0_#000] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
        >
          <svg
            className="size-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.18 1.18A11.1 11.1 0 0 1 12 6c.98 0 1.96.13 2.88.4 2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.79.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
        </a>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <>
      <HomeNavbar />
      <div className="mx-auto flex min-h-screen w-full max-w-7xl px-4 pt-20">
      <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-56 shrink-0 overflow-y-auto border-r-2 border-black py-8 pl-6 pr-4 lg:block">
        <nav className="space-y-5">
          {navGroups.map((group) => (
            <div key={group.label} className="space-y-1">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {group.label}
              </h3>
              <ul className="space-y-0.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${slugify(item)}`}
                      className="block rounded-md px-2 py-1 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      <main className="mx-auto min-w-0 max-w-5xl flex-1 px-6 py-12 space-y-12">
        <Toaster />
        <header id="top" className="space-y-6 scroll-mt-28">
          <div className="space-y-2">
            <h1 className="text-4xl font-black uppercase tracking-tight">Monkees UI</h1>
            <p className="text-muted-foreground">UI components styled for the Monkees.</p>
          </div>
          <div className="space-y-3 rounded-xl border-2 border-black bg-card p-4 shadow-[4px_4px_0_0_#000]">
            <div className="space-y-1">
              <h2 className="text-xl font-bold uppercase tracking-wide">Install a component</h2>
              <p className="text-sm text-muted-foreground">
                Use the shadcn CLI to pull components directly from the Monkees UI registry.
                Components install into your app and keep using your configured aliases.
              </p>
            </div>
            <CodeBlock>
              <CodeBlockHeader>
                <span>Terminal</span>
                <CodeBlockCopy value={codeExample} />
              </CodeBlockHeader>
              <CodeBlockBody>
                <code>{codeExample}</code>
              </CodeBlockBody>
            </CodeBlock>
            <div className="grid gap-3 text-sm md:grid-cols-3">
              <div className="rounded-lg border-2 border-black bg-background p-3">
                <span className="font-bold uppercase tracking-wide">1. Choose</span>
                <p className="mt-1 text-muted-foreground">Pick a component from the sidebar or examples below.</p>
              </div>
              <div className="rounded-lg border-2 border-black bg-background p-3">
                <span className="font-bold uppercase tracking-wide">2. Install</span>
                <p className="mt-1 text-muted-foreground">Run the command and let shadcn add the files to your project.</p>
              </div>
              <div className="rounded-lg border-2 border-black bg-background p-3">
                <span className="font-bold uppercase tracking-wide">3. Import</span>
                <p className="mt-1 text-muted-foreground">Use components from your local <TypographyInlineCode>@/components/ui</TypographyInlineCode> path.</p>
              </div>
            </div>
          </div>
        </header>

        {/* ── Actions ── */}

        <Section title="Button — Variants">
          <div className="flex flex-wrap gap-4">
            {buttonVariants.map((v) => (
              <Button key={v} variant={v}>
                {v}
              </Button>
            ))}
          </div>
        </Section>

        <Section title="Button — Sizes">
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

        {/* ── Form Inputs ── */}

        <Section title="Input + Label">
          <div className="grid max-w-sm gap-2">
            <Label htmlFor="wallet">Wallet address</Label>
            <Input id="wallet" placeholder="0xMonkee..." />
          </div>
        </Section>

        <Section title="Textarea">
          <div className="max-w-md space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Tell us about your Monkee journey..." />
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
                  <SelectItem value="goerli" disabled>
                    Goerli (deprecated)
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </Section>

        <Section title="Checkbox">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="terms" defaultChecked />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="newsletter" />
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="disabled" disabled />
              <Label htmlFor="disabled" className="opacity-50">
                Disabled option
              </Label>
            </div>
          </div>
        </Section>

        <Section title="Switch">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Switch id="dark-mode" defaultChecked />
              <Label htmlFor="dark-mode">Dark mode</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Email notifications</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="disabled-switch" disabled />
              <Label htmlFor="disabled-switch" className="opacity-50">
                Disabled
              </Label>
            </div>
          </div>
        </Section>

        <Section title="Radio Group">
          <RadioGroup defaultValue="ethereum">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="ethereum" id="r-eth" />
              <Label htmlFor="r-eth">Ethereum</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="polygon" id="r-poly" />
              <Label htmlFor="r-poly">Polygon</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="arbitrum" id="r-arb" />
              <Label htmlFor="r-arb">Arbitrum</Label>
            </div>
          </RadioGroup>
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

        {/* ── Data Display ── */}

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

        <Section title="Account">
          <div className="flex flex-wrap items-center gap-4">
            <Account address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" />
            <Account address="0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B" />
            <Account
              address="0x617480cBf64419C86F2b8333a1D7FE43Bc1C5E53"
              avatarUrl="https://euoahz3m66j5mevn6rgocuje3xgsnemeh6z6zmwu43f6yx36pjea.arweave.net/JRwD52z3k9YSrfRM4VEk3c0mkYQ_s-yy1ObL7F9-ekg/1758.png"
            />
          </div>
        </Section>

        <Section title="Account Menu">
          <div className="flex flex-wrap items-center gap-4">
            <AccountMenu address="0x1234567890abcdef1234567890abcdef12345678" />
            <AccountMenu
              address="0x617480cBf64419C86F2b8333a1D7FE43Bc1C5E53"
              avatarUrl="https://euoahz3m66j5mevn6rgocuje3xgsnemeh6z6zmwu43f6yx36pjea.arweave.net/JRwD52z3k9YSrfRM4VEk3c0mkYQ_s-yy1ObL7F9-ekg/1758.png"
            />
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

        <Section title="Skeleton">
          <div className="space-y-3">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-64" />
            <Skeleton className="h-24 w-full" />
          </div>
        </Section>

        <Section title="Progress">
          <div className="max-w-md space-y-4">
            <div className="space-y-2">
              <Label>Minting progress — 73%</Label>
              <Progress value={73} />
            </div>
            <div className="space-y-2">
              <Label>Upload — 25%</Label>
              <Progress value={25} />
            </div>
            <div className="space-y-2">
              <Label>Complete</Label>
              <Progress value={100} />
            </div>
          </div>
        </Section>

        {/* ── Navigation ── */}

        <Section title="Breadcrumb">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Collection</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Monkees #733</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Section>

        <Section title="Tabs">
          <Tabs defaultValue="collection">
            <TabsList>
              <TabsTrigger value="collection">Collection</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="offers">Offers</TabsTrigger>
            </TabsList>
            <TabsContent value="collection">
              <p className="text-sm text-muted-foreground">
                Your Monkees collection will appear here.
              </p>
            </TabsContent>
            <TabsContent value="activity">
              <p className="text-sm text-muted-foreground">
                Recent transfers and sales activity.
              </p>
            </TabsContent>
            <TabsContent value="offers">
              <p className="text-sm text-muted-foreground">
                Incoming and outgoing offers.
              </p>
            </TabsContent>
          </Tabs>
        </Section>

        <Section title="Carousel">
          <div className="mx-auto px-12">
            <Carousel opts={{ align: "start" }}>
              <CarouselContent>
                {[
                  {
                    id: 733,
                    img: "https://euoahz3m66j5mevn6rgocuje3xgsnemeh6z6zmwu43f6yx36pjea.arweave.net/JRwD52z3k9YSrfRM4VEk3c0mkYQ_s-yy1ObL7F9-ekg/733.png",
                  },
                  {
                    id: 857,
                    img: "https://euoahz3m66j5mevn6rgocuje3xgsnemeh6z6zmwu43f6yx36pjea.arweave.net/JRwD52z3k9YSrfRM4VEk3c0mkYQ_s-yy1ObL7F9-ekg/857.png",
                  },
                  {
                    id: 1758,
                    img: "https://euoahz3m66j5mevn6rgocuje3xgsnemeh6z6zmwu43f6yx36pjea.arweave.net/JRwD52z3k9YSrfRM4VEk3c0mkYQ_s-yy1ObL7F9-ekg/1758.png",
                  },
                  {
                    id: 420,
                    img: "https://euoahz3m66j5mevn6rgocuje3xgsnemeh6z6zmwu43f6yx36pjea.arweave.net/JRwD52z3k9YSrfRM4VEk3c0mkYQ_s-yy1ObL7F9-ekg/420.png",
                  },
                  {
                    id: 111,
                    img: "https://euoahz3m66j5mevn6rgocuje3xgsnemeh6z6zmwu43f6yx36pjea.arweave.net/JRwD52z3k9YSrfRM4VEk3c0mkYQ_s-yy1ObL7F9-ekg/111.png",
                  },
                  {
                    id: 999,
                    img: "https://euoahz3m66j5mevn6rgocuje3xgsnemeh6z6zmwu43f6yx36pjea.arweave.net/JRwD52z3k9YSrfRM4VEk3c0mkYQ_s-yy1ObL7F9-ekg/999.png",
                  },
                ].map((monkee) => (
                  <CarouselItem key={monkee.id} className="basis-1/3">
                    <div className="overflow-hidden rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000]">
                      <img
                        src={monkee.img}
                        alt={`Monkees #${monkee.id}`}
                        className="aspect-square w-full object-cover"
                      />
                      <div className="border-t-2 border-black bg-background px-3 py-2 text-center text-sm font-bold uppercase tracking-wide">
                        Monkees #{monkee.id}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </Section>

        <Section title="Collapsible">
          <CollapsibleDemo />
        </Section>

        {/* ── Overlays & Feedback ── */}

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

        <Section title="Sheet">
          <div className="flex gap-3">
            <Sheet>
              <SheetTrigger render={<Button variant="outline">Open left</Button>} />
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>Browse the Monkees ecosystem.</SheetDescription>
                </SheetHeader>
                <div className="space-y-2 py-4">
                  <Button variant="ghost" className="w-full justify-start">
                    Home
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Collection
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Marketplace
                  </Button>
                </div>
                <SheetFooter>
                  <Button variant="outline" className="w-full">
                    Close
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger render={<Button>Open right</Button>} />
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>Narrow down your search.</SheetDescription>
                </SheetHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Min price (ETH)</Label>
                    <Input placeholder="0.01" />
                  </div>
                  <div className="space-y-2">
                    <Label>Max price (ETH)</Label>
                    <Input placeholder="10" />
                  </div>
                </div>
                <SheetFooter>
                  <Button className="w-full">Apply</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </Section>

        <Section title="Toast (Sonner)">
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => toast("Monkee minted!")}>Default</Button>
            <Button variant="accent" onClick={() => toast.success("Tx confirmed")}>
              Success
            </Button>
            <Button variant="destructive" onClick={() => toast.error("Tx reverted")}>
              Error
            </Button>
          </div>
        </Section>

        <Section title="Tooltip">
          <TooltipProvider>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger className="inline-flex size-8 items-center justify-center rounded-lg border-2 border-black bg-background shadow-[4px_4px_0_0_#000] transition-[transform,box-shadow] duration-150 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                  <HeartIcon className="size-4" />
                </TooltipTrigger>
                <TooltipContent>Favorite</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger className="inline-flex size-8 items-center justify-center rounded-lg border-2 border-black bg-background shadow-[4px_4px_0_0_#000] transition-[transform,box-shadow] duration-150 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                  <StarIcon className="size-4" />
                </TooltipTrigger>
                <TooltipContent>Wishlist</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger className="inline-flex size-8 items-center justify-center rounded-lg border-2 border-black bg-background shadow-[4px_4px_0_0_#000] transition-[transform,box-shadow] duration-150 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                  <ZapIcon className="size-4" />
                </TooltipTrigger>
                <TooltipContent side="bottom">Quick buy</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </Section>

        <Section title="Popover">
          <Popover>
            <PopoverTrigger render={<Button variant="outline">Token info</Button>} />
            <PopoverContent>
              <div className="space-y-2">
                <h4 className="font-bold uppercase tracking-wide">Monkees #733</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-muted-foreground">Floor</span>
                  <span className="font-bold">0.015 ETH</span>
                  <span className="text-muted-foreground">Rank</span>
                  <span className="font-bold">#1,345</span>
                  <span className="text-muted-foreground">Traits</span>
                  <span className="font-bold">7</span>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </Section>

        {/* ── Typography ── */}

        <Section title="Typography">
          <div className="space-y-6">
            <TypographyH1>Monkees UI</TypographyH1>
            <TypographyH2>Component Library</TypographyH2>
            <TypographyH3>Playful Design</TypographyH3>
            <TypographyH4>Expressive Type</TypographyH4>
            <TypographyLead>A shadcn registry for bold Monkees interfaces.</TypographyLead>
            <TypographyP>
              Every component ships with strong visual defaults, readable spacing, and
              playful typography. Install via <TypographyInlineCode>shadcn add</TypographyInlineCode>{" "}
              and start building Monkees-flavored interfaces.
            </TypographyP>
            <TypographyBlockquote>
              &ldquo;Monkees UI keeps product screens loud, clear, and fun.&rdquo;
            </TypographyBlockquote>
            <TypographyMuted>Last updated: April 2026</TypographyMuted>
          </div>
        </Section>

        {/* ── Layout ── */}

        <Section title="Separator">
          <div className="space-y-4">
            <p className="text-sm">Content above the separator</p>
            <Separator />
            <p className="text-sm">Content below the separator</p>
            <div className="flex h-8 items-center gap-4">
              <span className="text-sm">Home</span>
              <Separator orientation="vertical" />
              <span className="text-sm">Collection</span>
              <Separator orientation="vertical" />
              <span className="text-sm">Profile</span>
            </div>
          </div>
        </Section>

        <Section title="Code Block">
          <CodeBlock>
            <CodeBlockHeader>
              <span>Terminal</span>
              <CodeBlockCopy value={codeExample} />
            </CodeBlockHeader>
            <CodeBlockBody>
              <code>{codeExample}</code>
            </CodeBlockBody>
          </CodeBlock>
        </Section>
      </main>
      </div>
    </>
  );
}
