import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-xl font-bold hover:text-blue-600 transition-colors">Practice Exam</Link>
          <Link href="/examOutline" className="text-lg font-medium hover:text-blue-600 transition-colors">Exam Outline</Link>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://databricks.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">Databricks</a>
        </div>
      </div>
    </nav>
  );
}
