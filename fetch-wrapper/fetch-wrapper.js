const queryToString = obj => {
  if (!obj) {
    return ''
  }

  const query = Object
    .entries(obj)
    .map(item => item.join('='))
    .join('&')
  return `?${query}`
}

const DEFAULT_HEADER = {
  'Content-Type': 'application/json'
}

const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

const fetchData = ({url, method, body, headers}) => {
  return fetch(url, {
    method,
    body,
    headers: Object.assign(DEFAULT_HEADER, headers)
  })
    .then(async response => {
      const {status, statusText} = response
      const body = await extractHttpBody(response)
      return {status, statusText, body}
    })
}

const extractHttpBody = response => {
  const contentType = response.headers.get('Content-Type')

  switch (true) {
    case contentType.startsWith('application/json'):
      return response.json()
  }
  return response.text()
}

const fetchGetData = (url, queryObj) => {
  return fetchData({
    url: `${url}${queryToString(queryObj)}`,
    method: HTTP_METHOD.GET
  })
}

const fetchPostData = (url, body) => {
  return fetchData({
    url,
    body,
    method: HTTP_METHOD.POST,
  })
}

const fetchPutData = (url, body) => {
  return fetchData({
    url,
    body,
    method: HTTP_METHOD.PUT,
  })
}

const fetchDeleteData = (url, body) => {
  return fetchData({
    url,
    body,
    method: HTTP_METHOD.DELETE,
  })
}
