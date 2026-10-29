export default function BrandLogo({ className = '' }) {
  return (
    <span className={`block ${className}`}>
      <img
        src="/brand/logo-horizontal.svg"
        alt="Look Code Tecnologia"
        width="1788"
        height="282"
        decoding="async"
        className="block h-auto w-full"
      />
    </span>
  )
}
