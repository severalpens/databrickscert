import Link from "next/link";

export default function ExamOutlineDetail() {
  // SSR: fetch data at the top level
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Exam Outline Detail</h1>
      <p>
        Start at 0 <Link href="/examOutlineDetail/0" className="text-blue-600 underline">Exam Outline</Link> page.
      </p>
    </div>
  );
}
