<template>
  <div>
    <div>{{ title }}</div>
    <div>
      <button @click="onClickPrev" type="button">Prev</button>
      <button @click="onClickNext" type="button">Next</button>
    </div>
    <div v-for="(week, weekIndex) of days" :key="weekIndex">
      <span
        v-for="(day, dayIndex) of week"
        :key="dayIndex"
        @click="onClick(day)"
      >
        {{ day || '[]' }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  toRefs
} from '@vue/composition-api'

interface CalendarProps {
  value: Date
}
interface CalendarOption {
  year: number
  month: number
}
type LastDay = 28 | 29 | 30 | 31
type DayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6

const cloneDate = (date: Date): Date => {
  return new Date(date.getTime())
}
const addMonth = (date: Date, count: number): Date => {
  const clonedDate = cloneDate(date)
  clonedDate.setMonth(clonedDate.getMonth() + count)
  return clonedDate
}
const toNextMonth = (date: Date): Date => {
  return addMonth(date, 1)
}
const toPrevMonth = (date: Date): Date => {
  return addMonth(date, -1)
}
const setDay = (date: Date, day: number): Date => {
  const clonedDate = cloneDate(date)
  clonedDate.setDate(day)
  return clonedDate
}
const toDayIndex = (date: Date): DayIndex => date.getDay() as DayIndex

const toCalendarOption = (date: Date): CalendarOption => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  return { year, month }
}
const isLeapMonth = (date: Date): boolean => {
  const LEAP_YEAR = 2000
  const LEAP_YEAR_PERIOD = 4
  const MONTH_FEBRUARY = 2
  const { year, month } = toCalendarOption(date)
  const diffYear = Math.abs(year - LEAP_YEAR)

  return diffYear % LEAP_YEAR_PERIOD === 0 && month === MONTH_FEBRUARY
}
const toLastDay = (date: Date): LastDay => {
  const { month } = toCalendarOption(date)
  const LAST_DAYS: LastDay[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const LEAP_YEAR_LAST_DATE: LastDay = 29
  return isLeapMonth(date) ? LEAP_YEAR_LAST_DATE : LAST_DAYS[month - 1]
}
const range = (length: number): number[] => Array.from({ length }, (_, i) => i)
const chunk = (arr: number[], size: number): number[][] => {
  if (!size) {
    return [arr]
  }
  const length = Math.ceil(arr.length / size)
  const newArr = Array.from({ length }, () => [])
  arr.forEach((value: number, index) => {
    const newArrIndex = Math.floor(index / size)
    newArr[newArrIndex].push(value)
  })
  return newArr
}
const toMonthDays = (date: Date): number[][] => {
  const WEEK_LENGTH = 7
  const firstDay = setDay(date, 1)
  const dayIndex = toDayIndex(firstDay)
  const lastDate = toLastDay(date)
  const restDay = (dayIndex + lastDate) % WEEK_LENGTH
  const nextMonthLength = restDay ? WEEK_LENGTH - restDay : restDay

  const prevMonthDays = range(dayIndex).map(() => '')
  const currentMonthDays = range(lastDate).map((_, i) => i + 1) // [1, 2, ...]
  const nextMonthDays = range(nextMonthLength).map(() => '')

  return chunk(
    [].concat(prevMonthDays, currentMonthDays, nextMonthDays),
    WEEK_LENGTH
  )
}

export default defineComponent({
  props: {
    value: Date
  },
  setup(props: CalendarProps, context) {
    const state = reactive({
      current: props.value,
      days: computed(() => toMonthDays(state.current)),
      title: computed(() => {
        const { year, month } = toCalendarOption(state.current)
        return `${year}/${month}`
      })
    })
    const onClickNext = () => {
      state.current = toNextMonth(state.current)
    }
    const onClickPrev = () => {
      state.current = toPrevMonth(state.current)
    }
    const onClick = (day: number) => {
      state.current = setDay(state.current, day)
      context.emit('change', cloneDate(state.current))
    }

    return {
      ...toRefs(state),
      onClickNext,
      onClickPrev,
      onClick
    }
  }
})
</script>
