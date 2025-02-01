// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware({publicRoutes:[
//         "/",
//         "/evwnts/:id",
//         "/api/webhook/clerk",
//         "/api/webhook/stripe",
//         "/api/uploadthing"
//     ],
// ignoredRoutes:[
//     "/api/webhook/clerk",
//         "/api/webhook/stripe",
//         "/api/uploadthing"
// ]
// });

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/(.*)", "/(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

// const isPublicRoute = createRouteMatcher([
//   "/",
//   "/events/:id",
//   "/api/webhook/clerk",
//   "/api/webhook/stripe",
//   "/api/uploadthing",
// ]);

// export default clerkMiddleware(async (auth, request) => {
//   if (!isPublicRoute(request)) {
//     await auth.protect();
//   }
// });

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
