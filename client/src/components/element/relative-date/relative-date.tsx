type RelativeDateProps = {
  date: string | Date;
  type: "birthday" | "entered";
  timeZone?: string;
};

export const RelativeDate = ({
  date,
  type,
  timeZone = "Asia/Tokyo",
}: RelativeDateProps) => {
  const now = new Date();
  const actualDate = new Date(date);

  const nowInTimeZone = new Date(now.toLocaleString("en-US", { timeZone }));
  const actualDateInTimeZone = new Date(
    actualDate.toLocaleString("en-US", { timeZone }),
  );

  const diffYears =
    nowInTimeZone.getFullYear() - actualDateInTimeZone.getFullYear();

  switch (type) {
    case "birthday":
      if (nowInTimeZone.getMonth() < actualDateInTimeZone.getMonth()) {
        return diffYears - 1;
      }

      if (nowInTimeZone.getMonth() === actualDateInTimeZone.getMonth()) {
        if (nowInTimeZone.getDate() < actualDateInTimeZone.getDate()) {
          return diffYears - 1;
        }
      }

      return diffYears;
    case "entered":
      if (nowInTimeZone.getMonth() + 1 < 4) {
        return diffYears;
      }

      return diffYears + 1;
  }
};
