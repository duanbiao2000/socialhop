import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/api/clerk"]
});

// 导出一个配置对象
export const config = {
  // 定义路由匹配规则
  matcher: [
    // 匹配所有非文件和非_next路径的URL
    "/((?!.+\\.[\\w]+$|_next).*)",
    // 默认路径匹配规则
    "/",
    // 匹配API和trpc相关路径
    "/(api|trpc)(.*)",
  ],
};