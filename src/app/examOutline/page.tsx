import ExamOutlineClient from "./ExamOutlineClient";
import flattenedTopics from "../flattenedTopics.json";

export default function ExamOutline() {
  // SSR: fetch data at the top level
  const topics = flattenedTopics;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Exam Outline</h1>
      <ExamOutlineClient topics={topics} />
    </div>
  );
}
