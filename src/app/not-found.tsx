import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh]">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
        <p className="text-muted mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-2.5 bg-accent text-accent-foreground rounded-md font-medium hover:scale-105 hover:opacity-90 transition-all duration-200"
          >
            Go Home
          </Link>
          <Link
            href="/blog"
            className="px-6 py-2.5 border border-border text-foreground rounded-md font-medium hover:scale-105 hover:border-accent transition-all duration-200"
          >
            Browse Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
