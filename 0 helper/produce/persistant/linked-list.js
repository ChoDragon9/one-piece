const isObject = obj => typeof obj === 'object'

/*
base: 오리지날 데이터
state: linkedList 아이템
list: state[]
 */

const toLinkedList = (base, parent = null, propName = null, list = []) => {
  const state = {
    base,
    parent,
    propName,
    copy: null,
  }
  list.push(state)

  for (const propName in base) {
    if (isObject(base[propName])) {
      toLinkedList(base[propName], state, propName, list)
    }
  }

  if (parent) {
    return state
  } else {
    return list
  }
}

/*
첫번째 아이템이 copy가 있으면 변경된 것을 의미함
 */
const toBase = (list) => {
  return list[0].copy ? list[0].copy : list[0].base
}

const changeLinkedList = (state, propName, value) => {
  if (state.copy) {
    state.copy[propName] = value
  } else {
    state.copy = Object.assign({}, state.base, {[propName]: value})
  }

  if (state.parent) {
    changeLinkedList(state.parent, state.propName, state.copy)
  }
}
