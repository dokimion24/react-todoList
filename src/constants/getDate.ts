import { TodayDate } from '.'

export const getDateObj = (ClickedDate: Date): TodayDate => {
  const dateObj = {
    year: String(ClickedDate.getFullYear()),
    month: String(ClickedDate.getMonth() + 1).padStart(2, '0'),
    date: String(ClickedDate.getDate()).padStart(2, '0'),
    day: new Intl.DateTimeFormat('ko-KR', { weekday: 'long' }).format(ClickedDate),
  }

  return dateObj
}
