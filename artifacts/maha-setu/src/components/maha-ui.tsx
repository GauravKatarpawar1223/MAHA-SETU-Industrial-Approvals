import { Link, useLocation } from 'wouter';
import { type ReactNode, useState } from 'react';
import {
  ArrowRight,
  Bell,
  BookOpen,
  Building2,
  Check,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  FileText,
  Gauge,
  LayoutDashboard,
  ListChecks,
  Menu,
  MessageSquareText,
  PanelLeftClose,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react';
import type { ApplicationStatus, BusinessProfile } from '@/lib/mock-data';

export function MahaMark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="focus-ring flex items-center gap-3" data-testid="link-logo">
      <span className={`relative flex h-10 w-10 items-center justify-center rounded-xl ${light ? 'bg-[#e58b3d]' : 'bg-[#e58b3d]'}`}>
        <svg viewBox="0 0 40 40" className="h-8 w-8" aria-label="Bridge motif" role="img">
          <path d="M7 28h26M10 25c1.7-8 5-12 10-12s8.3 4 10 12M14 25v3M20 16v12M26 25v3" fill="none" stroke={light ? '#f8f1df' : '#153b43'} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="10" cy="10" r="2.2" fill={light ? '#f8f1df' : '#153b43'} />
          <circle cx="30" cy="10" r="2.2" fill={light ? '#f8f1df' : '#153b43'} />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`display-font block text-[1.08rem] font-bold tracking-[.16em] ${light ? 'text-[#f8f1df]' : 'text-[#153b43]'}`}>MAHA-SETU</span>
        <span className={`mt-1 block text-[10px] font-medium tracking-[.14em] ${light ? 'text-[#cbded7]' : 'text-[#56706e]'}`}>INDUSTRIAL ACCESS DESK</span>
      </span>
    </Link>
  );
}

export function StatusBadge({ status }: { status: ApplicationStatus | 'Ready' | 'Not uploaded' }) {
  const styles: Record<string, string> = {
    Approved: 'bg-[#dcebe0] text-[#246044] border-[#bad7c3]',
    'In review': 'bg-[#e5edf0] text-[#235e68] border-[#c5dade]',
    Submitted: 'bg-[#e7e4f0] text-[#5a4b82] border-[#d3cbe5]',
    'Action required': 'bg-[#fae4cf] text-[#9a4c1c] border-[#efc79f]',
    Processing: 'bg-[#e5edf0] text-[#235e68] border-[#c5dade]',
    'Inspection scheduled': 'bg-[#fae4cf] text-[#9a4c1c] border-[#efc79f]',
    'Query raised': 'bg-[#fae4cf] text-[#9a4c1c] border-[#efc79f]',
    Verified: 'bg-[#dcebe0] text-[#246044] border-[#bad7c3]',
    Draft: 'bg-[#e8e6df] text-[#626158] border-[#d5d2c9]',
    Ready: 'bg-[#dcebe0] text-[#246044] border-[#bad7c3]',
    'Not uploaded': 'bg-[#fae4cf] text-[#9a4c1c] border-[#efc79f]',
  };
  return <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${styles[status] ?? styles.Draft}`} data-testid={`status-${status.toLowerCase().replaceAll(' ', '-')}`}><span className="h-1.5 w-1.5 rounded-full bg-current" />{status}</span>;
}

export function ProgressBar({ value, tone = 'primary' }: { value: number; tone?: 'primary' | 'accent' }) {
  return <div className="h-2 overflow-hidden rounded-full bg-[#e6e1d4]" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} data-testid={`progress-${value}`}><div className={`h-full rounded-full transition-all duration-500 ${tone === 'accent' ? 'bg-[#e58b3d]' : 'bg-[#286774]'}`} style={{ width: `${value}%` }} /></div>;
}

export function SectionKicker({ children }: { children: string }) {
  return <p className="mono-label mb-3 text-[10px] font-bold text-[#bd6426]">{children}</p>;
}

export function PageHeader({ eyebrow, title, description, action }: { eyebrow: string; title: string; description?: string; action?: ReactNode }) {
  return <header className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
    <div><SectionKicker>{eyebrow}</SectionKicker><h1 className="display-font text-3xl font-semibold tracking-[-.04em] text-[#163d45] md:text-[2.55rem]">{title}</h1>{description && <p className="mt-2 max-w-2xl text-[15px] leading-6 text-[#68726e]">{description}</p>}</div>
    {action}
  </header>;
}

type NavItem = { href: string; label: string; icon: typeof LayoutDashboard };
const navItems: NavItem[] = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/business-profile', label: 'Business profile', icon: Building2 },
  { href: '/approvals', label: 'Approval plan', icon: ClipboardCheck },
  { href: '/checklist', label: 'Document checklist', icon: ListChecks },
  { href: '/dashboard', label: 'Applications', icon: FileCheck2 },
  { href: '/compliance', label: 'Compliance', icon: ShieldCheck },
  { href: '/schemes', label: 'Schemes & support', icon: BookOpen },
  { href: '/assistant', label: 'Guidance desk', icon: MessageSquareText },
  { href: '/profile', label: 'Profile', icon: UserRound },
];

export function AppShell({ children, business = { businessName: 'Maharashtra Food Processing Pvt Ltd' } as BusinessProfile }: { children: ReactNode; business?: BusinessProfile }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const isActive = (href: string) => location === href || (href === '/dashboard' && location.startsWith('/application/'));
  return <div className="min-h-[100dvh] bg-[#f6f1e7]">
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[258px] flex-col bg-[#153f47] px-5 py-6 text-[#eef3e8] lg:flex">
      <MahaMark light />
      <div className="mt-12 flex-1">
        <p className="mono-label mb-4 px-3 text-[9px] text-[#91b4ac]">Workspace</p>
        <nav className="space-y-1" aria-label="Primary navigation">
           {navItems.map(({ href, label, icon: Icon }) => <Link key={label} href={href} data-testid={`link-nav-${label.toLowerCase().replaceAll(' ', '-')}`} className={`group flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors ${isActive(href) ? 'bg-[#286774] text-[#fff8eb]' : 'text-[#bdcfca] hover:bg-[#1d515a] hover:text-[#fff8eb]'}`}><Icon size={17} strokeWidth={1.8} /><span>{label}</span>{href === '/assistant' && <span className="ml-auto rounded bg-[#e58b3d] px-1.5 py-0.5 text-[9px] font-bold text-[#153f47]">DAY 2</span>}</Link>)}
        </nav>
      </div>
      <div className="border-t border-[#36636a] pt-5">
        <Link href="/business-profile" className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-[#1d515a]" data-testid="link-business-profile">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e58b3d] text-sm font-bold text-[#153f47]">MF</span>
           <span className="min-w-0"><span className="block truncate text-sm font-semibold text-[#f4f0e5]">Maharashtra Food</span><span className="block text-xs text-[#91b4ac]">Nagpur · entrepreneur</span></span>
          <ChevronRight size={15} className="ml-auto text-[#91b4ac]" />
        </Link>
        <div className="mt-5 flex items-start gap-2 rounded-lg bg-[#1b4d55] p-3 text-[11px] leading-4 text-[#bcd0ca]"><CircleHelp size={15} className="mt-0.5 shrink-0 text-[#e58b3d]" /><span>Prototype workspace. Verify every requirement with the relevant department.</span></div>
      </div>
    </aside>
    <div className="lg:pl-[258px]">
      <header className="sticky top-0 z-30 flex h-[70px] items-center justify-between border-b border-[#e2dbcd] bg-[#f6f1e7]/95 px-5 backdrop-blur md:px-8">
        <div className="lg:hidden"><MahaMark /></div>
        <div className="hidden items-center gap-2 text-sm text-[#68726e] lg:flex"><span className="h-2 w-2 rounded-full bg-[#4f9b75]" /> Maharashtra · prototype workspace</div>
        <div className="ml-auto flex items-center gap-3">
          <div className="relative">
            <button onClick={() => setNotificationsOpen(!notificationsOpen)} className="focus-ring relative rounded-lg p-2 text-[#62726f] transition-colors hover:bg-[#ece5d8]" aria-label="Notifications" data-testid="button-notifications"><Bell size={19} /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#e58b3d]" /></button>
            {notificationsOpen && <div className="absolute right-0 top-11 z-50 w-64 rounded-xl border border-[#ddd5c7] bg-[#fbf8f1] p-4 shadow-[0_12px_35px_rgba(33,72,76,.13)]"><p className="mono-label text-[9px] text-[#bd6426]">Workspace note</p><p className="mt-2 text-sm font-bold text-[#2b555c]">One action needs attention</p><p className="mt-1 text-xs leading-5 text-[#87918b]">Fire Safety Plan is still missing from your checklist.</p><Link href="/checklist" onClick={() => setNotificationsOpen(false)} className="mt-3 inline-flex text-xs font-bold text-[#286774]" data-testid="link-notification-checklist">Open checklist <ChevronRight size={14} /></Link></div>}
          </div>
          <span className="hidden h-6 w-px bg-[#ded6c8] sm:block" />
          <span className="hidden max-w-[170px] truncate text-right sm:block"><span className="block truncate text-xs font-semibold text-[#2c4b50]">{business.businessName}</span><span className="block text-[10px] text-[#87918b]">Entrepreneur</span></span>
          <button onClick={() => setOpen(!open)} className="focus-ring rounded-lg p-2 text-[#2c4b50] lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">{open ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </header>
      {open && <div className="fixed inset-x-0 top-[70px] z-20 border-b border-[#ddd4c3] bg-[#f6f1e7] p-4 shadow-lg lg:hidden"><nav className="space-y-1">{navItems.map(({ href, label, icon: Icon }) => <Link onClick={() => setOpen(false)} key={href} href={href} className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm ${isActive(href) ? 'bg-[#dbe8e3] font-semibold text-[#1b5d66]' : 'text-[#4d615f]'}`} data-testid={`mobile-link-${label.toLowerCase().replaceAll(' ', '-')}`}><Icon size={17} />{label}{href === '/assistant' && <span className="ml-auto text-[9px] font-bold text-[#bd6426]">DAY 2</span>}</Link>)}</nav></div>}
      <main className="mx-auto max-w-[1370px] px-5 py-8 md:px-8 md:py-10">{children}</main>
    </div>
  </div>;
}

export function ButtonLink({ href, children, variant = 'primary', className = '', onClick }: { href?: string; children: ReactNode; variant?: 'primary' | 'secondary' | 'quiet'; className?: string; onClick?: () => void }) {
  const styles = variant === 'primary' ? 'bg-[#e58b3d] text-[#173e45] hover:bg-[#f09b4b]' : variant === 'secondary' ? 'border border-[#c9d7d2] bg-[#eef3ed] text-[#1e5962] hover:bg-[#e0ebe5]' : 'text-[#2d676e] hover:bg-[#e9e3d7]';
  const content = <span className={`focus-ring inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors ${styles} ${className}`} onClick={onClick}>{children}</span>;
  return href ? <Link href={href} data-testid={`link-action-${href.replaceAll('/', '').replaceAll(':', '-')}`}>{content}</Link> : <button type="button" onClick={onClick} data-testid="button-action">{content}</button>;
}

export function EmptyState({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return <div className="rounded-xl border border-dashed border-[#c9d1c9] bg-[#f9f6ef] p-10 text-center"><span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e4eee8] text-[#28707a]"><PanelLeftClose size={20} /></span><h3 className="display-font text-lg font-semibold text-[#244d54]">{title}</h3><p className="mx-auto mt-2 max-w-md text-sm leading-5 text-[#71807a]">{description}</p>{action && <div className="mt-5">{action}</div>}</div>;
}

export function LoadingCard({ label = 'Preparing your approval view' }: { label?: string }) {
  return <div className="rounded-xl border border-[#e0d8c9] bg-[#fbf8f1] p-8"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dceae6] text-[#286774]"><Sparkles size={17} className="animate-pulse-line" /></span><div><p className="text-sm font-bold text-[#244d54]">{label}</p><p className="mt-1 text-xs text-[#78847d]">Using your profile and Maharashtra approval patterns</p></div></div><div className="mt-7 space-y-3"><div className="h-3 w-[82%] animate-pulse rounded bg-[#e9e3d7]" /><div className="h-3 w-[64%] animate-pulse rounded bg-[#e9e3d7]" /><div className="h-3 w-[74%] animate-pulse rounded bg-[#e9e3d7]" /></div></div>;
}

export function StatCard({ label, value, detail, icon: Icon, tone = 'teal' }: { label: string; value: string; detail: string; icon: typeof Gauge; tone?: 'teal' | 'orange' | 'purple' }) {
  const color = tone === 'orange' ? 'bg-[#fae5d0] text-[#a6501f]' : tone === 'purple' ? 'bg-[#e8e4f1] text-[#655384]' : 'bg-[#dceae6] text-[#286774]';
  return <div className="rounded-xl border border-[#e0d8c9] bg-[#fbf8f1] p-5"><div className="flex items-start justify-between"><span className={`flex h-9 w-9 items-center justify-center rounded-lg ${color}`}><Icon size={18} /></span><span className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9aa099]">Live view</span></div><p className="mt-5 text-xs font-semibold uppercase tracking-[.09em] text-[#78847d]">{label}</p><p className="display-font mt-1 text-2xl font-semibold tracking-[-.04em] text-[#1d4c55]">{value}</p><p className="mt-1 text-xs text-[#87918b]">{detail}</p></div>;
}

export function NextAction({ title, description, href }: { title: string; description: string; href: string }) {
  return <Link href={href} className="group flex items-center gap-4 rounded-xl border border-[#efc79f] bg-[#fff3e5] p-4 transition-transform hover:-translate-y-0.5" data-testid={`link-next-${title.toLowerCase().replaceAll(' ', '-')}`}><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e58b3d] text-[#173e45]"><ArrowRight size={18} /></span><span className="min-w-0 flex-1"><span className="block text-sm font-bold text-[#7c421f]">{title}</span><span className="mt-0.5 block text-xs text-[#946b4f]">{description}</span></span><ChevronRight size={17} className="text-[#ad6b38] transition-transform group-hover:translate-x-1" /></Link>;
}