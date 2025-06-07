"use client";

import { useEffect } from "react";

interface Topic {
  id: number;
  section: string;
  topic: string;
  answer: string;
}

interface ExamOutlineDetailClientProps {
  topic: Topic;
  prevId: number | null;
  nextId: number | null;
}

export default function ExamOutlineDetailClient({ topic, prevId, nextId }: ExamOutlineDetailClientProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && prevId !== null) {
        window.location.href = `/examOutlineDetail/${prevId}`;
      } else if (e.key === "ArrowRight" && nextId !== null) {
        window.location.href = `/examOutlineDetail/${nextId}`;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevId, nextId]);

  if (!topic) return <div>No topic found.</div>;
  return (
    <div className="mx-auto p-4 border rounded bg-gray-50">
      <div className="mb-2 text-gray-500">ID: {topic.id}</div>
      <div className="mb-2 text-gray-500">Section: {topic.section}</div>
      <h2 className="text-xl font-semibold mb-6">{topic.topic}</h2>
      <div className="text-gray-700 whitespace-pre-line">{topic.answer}</div>
    </div>
  );
}
