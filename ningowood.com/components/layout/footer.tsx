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
      </p>
    </div>
  )
}
