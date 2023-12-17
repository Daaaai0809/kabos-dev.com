package config

import "time"

const (
	DATE_FORMAT = "2006-01-02"
	TIME_FORMAT = "15:04:05"
	DATE_TIME_FORMAT = "2006-01-02 15:04:05"
)

func FormatDateFromTime(t time.Time) string {
	return t.Format(DATE_FORMAT)
}

func FormatTimeFromTime(t time.Time) string {
	return t.Format(TIME_FORMAT)
}

func FormatDateTimeFromTime(t time.Time) string {
	return t.Format(DATE_TIME_FORMAT)
}

func FormatDateFromString(s string) (time.Time, error) {
	return time.Parse(DATE_FORMAT, s)
}

func FormatTimeFromString(s string) (time.Time, error) {
	return time.Parse(TIME_FORMAT, s)
}

func FormatDateTimeFromString(s string) (time.Time, error) {
	return time.Parse(DATE_TIME_FORMAT, s)
}

func FormatDateFromUnix(unix int64) string {
	return time.Unix(unix, 0).Format(DATE_FORMAT)
}

func FormatTimeFromUnix(unix int64) string {
	return time.Unix(unix, 0).Format(TIME_FORMAT)
}

func FormatDateTimeFromUnix(unix int64) string {
	return time.Unix(unix, 0).Format(DATE_TIME_FORMAT)
}
