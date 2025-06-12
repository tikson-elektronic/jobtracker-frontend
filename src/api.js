// This will be replaced by real API calls!
const jobs = [
  { id: 1, title: "Electrical Panel Upgrade", status: "pending" },
  { id: 2, title: "Install Generator", status: "approved" },
];

export function getJobs() {
  return Promise.resolve(jobs);
}

export function getJob(id) {
  return Promise.resolve(jobs.find(job => job.id === Number(id)));
}

export function createJob(data) {
  jobs.push({ id: jobs.length + 1, ...data });
  return Promise.resolve();
}
