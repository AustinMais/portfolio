import {
  problemSolution,
  whatIBuild,
  whyThisWorks,
  socialProof,
  processSteps,
} from "~/data/resume";

/** Consulting positioning and landing copy for monk-bot (how I help, what I build, process). */
export async function GET() {
  return Response.json({
    problemSolution: {
      title: problemSolution.title,
      copy: problemSolution.copy,
    },
    whatIBuild: [...whatIBuild],
    whyThisWorks: {
      title: whyThisWorks.title,
      copy: whyThisWorks.copy,
    },
    socialProof,
    process: [...processSteps],
  });
}
