
export function makeHTTPRequest(url, request, success, failure) {
  fetch(url, request)
    .then(res => res.json())
    .then(res => success(res))
    .catch(err => failure(err.message))
    ;
}

/*
  makeHTTPRequest is a generic function that can make every fetch request you desire
  while outputting the error and success messages.
  Due to that its use is fairly simple even though it is confusing to comprehend
  its surrounding structure at first (context)

  First an action is requested, and it initiates the HTTP request with the url and request given.
  After that request the fetch is either a success or failure, sending out the respective message and data.
  While the fetch is doing the HTTP Req the action loads the reducer data to show that it's loading.
  After its done it does the same with the success and failure message showing to the user (further details on the console)

  Its quite simple after analysing it, but It's still a bit of a shore to set it up for every request and specially every default state
 */
