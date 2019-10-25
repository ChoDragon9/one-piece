const highlight = (target, keyword, template = `<span>$1</span>`) => {
  const reg = new RegExp(`(${keyword})`, 'gi')
  return target.replace(reg, template)
}