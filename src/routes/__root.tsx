import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

// Create a client
const queryClient = new QueryClient();
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@black-ui/react";

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultMode="light">
          <div>Hello "__root"!</div>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={false} />
          <TanStackRouterDevtools />
        </ThemeProvider>
      </QueryClientProvider>
    </React.Fragment>
  ),
});
