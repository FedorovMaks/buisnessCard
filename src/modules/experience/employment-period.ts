export interface EmploymentPeriod {
  startDate: Date;
  endDate: Date | null;
  isCurrent: boolean;
  durationInMonths: number;
}

export function toEmploymentPeriod(
  startDate: Date,
  endDate: Date | null,
  now: Date = new Date(),
): EmploymentPeriod {
  const until = endDate ?? now;
  const months =
    (until.getUTCFullYear() - startDate.getUTCFullYear()) * 12 +
    (until.getUTCMonth() - startDate.getUTCMonth()) +
    1;

  return {
    startDate,
    endDate,
    isCurrent: endDate === null,
    durationInMonths: Math.max(months, 1),
  };
}
