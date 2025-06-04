import sections from "./examOutline";
import ExamOutlineClient from "./ExamOutlineClient";

export default function ExamOutline() {
  // SSR: fetch data at the top level
  const outlines = sections;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Exam Outline</h1>
      <ExamOutlineClient outlines={outlines} />
    </div>
  );
}
