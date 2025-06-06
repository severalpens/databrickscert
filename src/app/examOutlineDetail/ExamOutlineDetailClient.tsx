"use client";

interface Topic {
  id: number;
  section: string;
  topic: string;
  answer: string;
}

export default function ExamOutlineDetailClient({ topic }: { topic: Topic }) {
  if (!topic) return <div>No topic found.</div>;
  return (
    <div className="mx-auto p-4 border rounded bg-gray-50">
      <div className="mb-2 text-gray-500">ID: {topic.id}</div>
      <div className="mb-2 text-gray-500">Section: {topic.section}</div>
      <h2 className="text-xl font-semibold mb-2">{topic.topic}</h2>
      <div className="text-gray-700 whitespace-pre-line">{topic.answer}</div>
    </div>
  );
}
