"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto mt-20 p-4 h-screen flex flex-col">
      <div id="headerdiv" className="">
        <div>
          <Link href="/examOutline" className="mb-4">
            Exam Outline
          </Link>
        </div>
        <div>
          <Link href="/practiceExam" className="mb-4">
            Practice Exam
          </Link>
        </div>
        <div>
          <Link href="/examOutlineDetail" className="mb-4">
            Exam Outline Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
