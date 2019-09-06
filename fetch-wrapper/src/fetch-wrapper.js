const DOMAIN = 'http://localhost:3000'
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
  return fetch(`${DOMAIN}${url}`, {
    method,
    body: convertToHttpBody(body),
    headers: convertToHttpHeader({body, headers})
  })
    .then(async response => {
      const {status, statusText} = response
      const body = await extractHttpBody(response)
      return {status, statusText, body}
    })
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

const extractHttpBody = response => {
  const contentType = response.headers.get('Content-Type')

  switch (true) {
    case contentType.startsWith('application/json'):
      return response.json()
    case contentType.startsWith('image'):
      return response.blob()
  }
  return response.text()
}

const convertToHttpBody = body => {
  return (body instanceof FormData) ? body : JSON.stringify(body)
}

const convertToHttpHeader = ({body, headers}) => {
  return (body instanceof FormData) ? undefined : Object.assign(DEFAULT_HEADER, headers)
}

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
