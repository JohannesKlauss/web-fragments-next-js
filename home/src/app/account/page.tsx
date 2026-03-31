import Image from "next/image";

export default function Account() {
  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 px-3 py-1.5 bg-slate-200 text-slate-700 text-xs font-mono rounded inline-block">
          Rendered by: Home Shell (port 3000)
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Account Page
        </h1>
        <p className="text-slate-600 mb-8 text-lg">
          Some content of the account page
        </p>
      </div>
    </div>
  );
}
