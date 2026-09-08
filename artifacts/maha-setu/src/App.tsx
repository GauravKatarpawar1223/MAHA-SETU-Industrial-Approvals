import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { BookOpen, MessageSquareText, ShieldCheck, UserRound } from 'lucide-react';
import {
  ApprovalsPage,
  ApplicationDetailPage,
  BusinessProfilePage,
  ChecklistPage,
  DashboardPage,
  LandingPage,
  LoginPage,
  PlaceholderPage,
} from '@/pages/maha-pages';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/business-profile" component={BusinessProfilePage} />
        <Route path="/approvals" component={ApprovalsPage} />
        <Route path="/checklist" component={ChecklistPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/application/:id" component={ApplicationDetailPage} />
        <Route path="/compliance">
          <PlaceholderPage kind="compliance" title="Compliance, made visible." description="A dedicated view for recurring filings, operating conditions and the obligations that continue after approval." icon={ShieldCheck} />
        </Route>
        <Route path="/schemes">
          <PlaceholderPage kind="schemes and support" title="Find the support around your unit." description="A curated view of Maharashtra schemes, incentives and support programmes matched to your business profile." icon={BookOpen} />
        </Route>
        <Route path="/assistant">
          <PlaceholderPage kind="guided conversations" title="A guidance desk for difficult moments." description="A future space for clear, source-aware guidance when an application, document or department response needs unpacking." icon={MessageSquareText} />
        </Route>
        <Route path="/profile">
          <PlaceholderPage kind="profile" title="Your profile" description="Profile settings and team roles are mapped for the next build day." icon={UserRound} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
