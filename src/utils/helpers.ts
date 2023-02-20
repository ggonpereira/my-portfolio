const clickElementOnEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
  if (e.key === 'Enter') e.currentTarget.click()
}

export const makeElementTabSelectable = {
  tabIndex: 0,
  onKeyUp: clickElementOnEnter,
}
