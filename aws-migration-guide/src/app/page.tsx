export default function Home() {
  const phases = [
    {
      title: "Assess & Discover",
      id: "phase-1",
      duration: "Weeks 1-2",
      description:
        "Establish scope, understand current workloads, and define the business case for migrating to AWS.",
      outcomes: [
        "Executive sponsorship with clear success criteria",
        "Inventory of applications, dependencies, and compliance requirements",
        "Total Cost of Ownership (TCO) baseline and migration budget guardrails",
      ],
      actions: [
        "Run AWS Application Discovery Service or CloudEndure to map infrastructure and dependencies.",
        "Segment workloads by business criticality and migration complexity.",
        "Draft the Migration Business Case using AWS Cloud Economics tools.",
        "Identify skill gaps; schedule AWS Training and certification paths.",
      ],
      owner: "Cloud Program Manager",
    },
    {
      title: "Mobilize & Plan",
      id: "phase-2",
      duration: "Weeks 3-6",
      description:
        "Create the landing zone, set up governance, and design the migration factory that will execute the move.",
      outcomes: [
        "AWS Organization account hierarchy, networking, and guardrails in place",
        "Migration backlog prioritized by wave and sprint",
        "Operational readiness plan covering monitoring, incident response, and FinOps",
      ],
      actions: [
        "Provision the AWS Landing Zone with Control Tower or Terraform.",
        "Define IAM roles, SCP policies, and guardrails for security and compliance.",
        "Stand up CI/CD pipelines and IaC repositories for repeatable provisioning.",
        "Create migration runbooks, success metrics, and rollback procedures per workload.",
      ],
      owner: "Cloud Architect",
    },
    {
      title: "Migrate & Modernize",
      id: "phase-3",
      duration: "Weeks 7+",
      description:
        "Execute migration waves, validate cutovers, and iterate on modernization opportunities.",
      outcomes: [
        "Wave-by-wave production cutovers with stakeholder sign-off",
        "Workloads instrumented for observability, cost, and performance",
        "Modernization backlog of managed services and refactoring candidates",
      ],
      actions: [
        "Pilot migration wave using CloudEndure, AWS SMS, or database migration tools.",
        "Run game days and failover drills ahead of each production cutover.",
        "Enable CloudWatch, X-Ray, and AWS Backup policies immediately post-cutover.",
        "Launch modernization epics (containers, serverless, data analytics) once stable.",
      ],
      owner: "Migration Factory Lead",
    },
  ];

  const workstreams = [
    {
      title: "Landing Zone",
      lead: "Cloud Platform Team",
      checklist: [
        "VPC topology: hub-spoke with Transit Gateway connectivity",
        "GuardDuty, Security Hub, and Config enabled across accounts",
        "Centralized logging to S3 + OpenSearch; retention policies applied",
        "Cost allocation tags and AWS Budgets alerts configured",
      ],
    },
    {
      title: "Application Readiness",
      lead: "Product Engineering",
      checklist: [
        "Dependency mapping and data gravity assessed per workload",
        "Performance baselines captured for post-migration comparison",
        "Cutover runbooks reviewed and approved by business owners",
        "Rollback & DR plans validated with test restores",
      ],
    },
    {
      title: "Operations & Support",
      lead: "SRE / Operations",
      checklist: [
        "24/7 monitoring coverage and alert routing defined",
        "Runbooks stored in centralized knowledge base",
        "Incident management tooling integrated with AWS events",
        "Post-migration hypercare schedule and staffing finalized",
      ],
    },
  ];

  const waves = [
    {
      name: "Wave 0 · Pilot",
      workloads: 5,
      objectives: [
        "Validate tooling, cutover runbooks, and rollback strategy",
        "Capture migration metrics (throughput, defect rate, duration)",
      ],
      timeline: "Weeks 7-8",
    },
    {
      name: "Wave 1 · Foundation",
      workloads: 12,
      objectives: [
        "Move low-complexity, stateless services to establish cadence",
        "Onboard operations teams to new monitoring and support model",
      ],
      timeline: "Weeks 9-12",
    },
    {
      name: "Wave 2+ · Scale",
      workloads: 30,
      objectives: [
        "Execute parallel migration pods for complex and data-heavy systems",
        "Initiate modernization epics aligned to product roadmaps",
      ],
      timeline: "Weeks 13+",
    },
  ];

  const resources = [
    {
      title: "AWS Migration Acceleration Program (MAP)",
      description:
        "Funding, training, and partner support to accelerate enterprise migrations.",
      link: "https://aws.amazon.com/migration-acceleration-program/",
    },
    {
      title: "Cloud Adoption Framework (CAF) Workshops",
      description:
        "Structured discovery sessions covering business, people, governance, platform, security, and operations.",
      link: "https://aws.amazon.com/professional-services/CAF/",
    },
    {
      title: "Migration Evaluator",
      description:
        "Detailed cost modeling and insights to refine TCO and sizing assumptions.",
      link: "https://aws.amazon.com/migration-evaluator/",
    },
    {
      title: "Well-Architected Reviews",
      description:
        "Post-migration assessments to validate security, reliability, performance, cost, and sustainability pillars.",
      link: "https://aws.amazon.com/well-architected/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 sm:px-10 lg:px-16">
        <header className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
            AWS Migration Playbook
          </span>
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              End-to-end guide for migrating enterprise workloads to AWS
            </h1>
            <p className="text-lg leading-8 text-slate-300 sm:text-xl">
              Use this playbook to orchestrate discovery, planning, migration waves, and
              modernization. It aligns with the AWS Migration Acceleration Program (MAP)
              while keeping execution pragmatic for hybrid environments.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Target Outcomes
              </p>
              <p className="mt-2 text-base text-white">
                Faster time-to-value, measurable cost savings, and a modernized delivery
                platform.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-400">Scope</p>
              <p className="mt-2 text-base text-white">
                Infrastructure, applications, databases, and operational processes.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Success Metrics
              </p>
              <p className="mt-2 text-base text-white">
                Budget adherence, cutover stability, modernization velocity, and AWS
                experience uplift.
              </p>
            </div>
          </div>
        </header>

        <section className="space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Migration Phases
            </h2>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
              Plan → Execute → Optimize
            </span>
          </div>
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <article
                key={phase.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-400/60 hover:bg-emerald-400/10"
              >
                <div className="absolute left-0 top-0 hidden h-full w-1 bg-emerald-400 opacity-0 transition group-hover:opacity-100 sm:block" />
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-emerald-300">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-base font-semibold">
                        {index + 1}
                      </span>
                      <span>{phase.duration}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{phase.title}</h3>
                    <p className="max-w-3xl text-base leading-7 text-slate-300">
                      {phase.description}
                    </p>
                    <ul className="grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
                      {phase.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 leading-6"
                        >
                          <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-emerald-400" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex w-full max-w-xs flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Execution Focus
                    </p>
                    <ul className="space-y-3 text-sm text-slate-200">
                      {phase.actions.map((action) => (
                        <li key={action} className="leading-6">
                          {action}
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-slate-300">
                      <span className="font-semibold text-white">Phase Owner:</span>{" "}
                      {phase.owner}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Critical Workstreams
            </h2>
            <p className="text-base leading-7 text-slate-300">
              Coordinate parallel tracks to keep security, operations, and engineering
              aligned. Review these checklists weekly during the migration standup.
            </p>
            <div className="space-y-6">
              {workstreams.map((workstream) => (
                <div
                  key={workstream.title}
                  className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/60 p-5"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Workstream
                    </p>
                    <h3 className="text-xl font-semibold text-white">
                      {workstream.title}
                    </h3>
                    <p className="text-sm text-slate-300">
                      Lead: <span className="text-white">{workstream.lead}</span>
                    </p>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-200">
                    {workstream.checklist.map((item) => (
                      <li key={item} className="flex gap-3 leading-6">
                        <span className="mt-1 h-2 w-8 flex-none rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-3xl border border-emerald-400/40 bg-emerald-400/10 p-7 text-slate-100 shadow-xl">
              <p className="text-sm uppercase tracking-wider text-emerald-200">
                Execution Rhythm
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Weekly migration steering cadence
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6">
                <li>
                  Monday: Wave planning review, dependency burn-down, and risk updates.
                </li>
                <li>
                  Wednesday: Technical deep dive with migration factory pods; unblockers.
                </li>
                <li>
                  Friday: Executive readout, budget tracking, and modernization intake.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm uppercase tracking-wider text-slate-400">
                Tooling Checklist
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
                <li>AWS Control Tower, Service Catalog, Terraform modules</li>
                <li>Migration Hub with integrated runbooks and status reporting</li>
                <li>CloudEndure or Application Migration Service for lift-and-shift</li>
                <li>AWS DMS or Babelfish for database refactoring paths</li>
                <li>CloudWatch, X-Ray, and Cost Explorer dashboards post-cutover</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Migration Waves & Readiness Gates
            </h2>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
              Validate → Cutover → Hypercare
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {waves.map((wave) => (
              <div
                key={wave.name}
                className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Migration Wave
                  </p>
                  <h3 className="text-xl font-semibold text-white">{wave.name}</h3>
                  <p className="text-sm text-slate-300">{wave.timeline}</p>
                </div>
                <p className="text-sm text-slate-200">
                  Workloads: <span className="font-semibold text-white">{wave.workloads}</span>
                </p>
                <ul className="space-y-3 text-sm text-slate-200">
                  {wave.objectives.map((objective) => (
                    <li key={objective} className="flex gap-2 leading-6">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-emerald-400" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-xs text-emerald-100">
                  Readiness Gate: cutover rehearsal complete, cloud monitoring validated,
                  rollback artifacts staged.
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            60-Day Outcome Tracker
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-white/10 bg-slate-950/60 p-6 text-sm leading-6 text-slate-200">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Day 0-30 Milestones
              </p>
              <ul className="space-y-2">
                <li>Executive sponsor kickoff; MAP funding request submitted.</li>
                <li>Landing zone baseline deployed with security guardrails.</li>
                <li>Migration backlog prioritized; tooling integrated with Jira.</li>
                <li>Pilot workloads selected with agreed rollback windows.</li>
              </ul>
            </div>
            <div className="space-y-3 rounded-2xl border border-white/10 bg-slate-950/60 p-6 text-sm leading-6 text-slate-200">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Day 31-60 Milestones
              </p>
              <ul className="space-y-2">
                <li>Wave 0 cutover completed with post-mortem improvements captured.</li>
                <li>Operations runbooks revised; observability dashboards live.</li>
                <li>Modernization backlog approved with dedicated funding streams.</li>
                <li>KPIs baselined: cost per workload, defect escape rate, MTTR.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Strategic Resources
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block space-y-3 rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-emerald-400/40 hover:bg-emerald-400/10"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    AWS Program
                  </p>
                  <h3 className="text-xl font-semibold text-white">{resource.title}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-200">{resource.description}</p>
                <span className="text-sm font-medium text-emerald-300">Open resource →</span>
              </a>
            ))}
          </div>
        </section>

        <footer className="pb-10 text-center text-xs text-slate-500">
          Built for cloud transformation leaders driving AWS adoption at scale.
        </footer>
      </main>
    </div>
  );
}
