import { problemSolution } from "@/content.config";

export default function ProblemSolution() {
  const { problem, solution } = problemSolution;
  return (
    <div className="mx-auto max-w-layout px-4 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-3">{problem.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            {problem.title}
          </h2>
          <p className="mt-4 text-ink/60">{problem.body}</p>
        </div>
        <div>
          <p className="eyebrow mb-3">{solution.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            {solution.title}
          </h2>
          <p className="mt-4 text-ink/60">{solution.body}</p>
        </div>
      </div>
    </div>
  );
}
