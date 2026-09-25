// Control Center layout — Phase 2 will add the auth guard here.
// For Phase 0 this is a passthrough; the middleware/cookie check is wired in Phase 2.
export default function ControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Control Center shell — nav + auth guard added in Phase 2 */}
      {children}
    </div>
  );
}
