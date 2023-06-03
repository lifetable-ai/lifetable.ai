export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
      <p className="text-gray-500">
        Currently powered by&nbsp;
        <a
          className="font-medium text-gray-800 underline transition-colors"
          href="https://precedent.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Precedent
        </a>
        ,&nbsp;
        <a
          className="font-medium text-gray-800 underline transition-colors"
          href="https://ui.shadcn.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shadcn UI
        </a>
        ,&nbsp;
        <a
          className="font-medium text-gray-800 underline transition-colors"
          href="https://tx.shadcn.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Taxonomy
        </a>
        &nbsp;and&nbsp;
        <a
          className="font-medium text-gray-800 underline transition-colors"
          href="https://preline.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Preline UI
        </a>
      </p>
    </div>
  )
}
