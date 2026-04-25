---
sidebar_position: 3
---

# Error messages

The Taskflow API uses standard HTTP response codes to indicate 
the success or failure of an API request. Errors are returned 
in JSON format.

## Error response structure

Every error response contains the following fields:

| Field | Type | Description |
|---|---|---|
| `code` | Integer | HTTP status code |
| `error` | String | Error type identifier |
| `message` | String | Human-readable description |
| `details` | Object | Additional context where available |

## Example error response

```json
{
  "code": 404,
  "error": "NOT_FOUND",
  "message": "The requested task does not exist.",
  "details": {
    "task_id": "tk_9823"
  }
}
```

## Error codes

### 4xx — Client errors

| Code | Error | Message | Resolution |
|---|---|---|---|
| 400 | BAD_REQUEST | The request is malformed or missing required fields. | Check your request body and parameters. |
| 401 | UNAUTHORIZED | Authentication credentials are missing or invalid. | Verify your API key. |
| 403 | FORBIDDEN | You do not have permission to perform this action. | Check your account permissions. |
| 404 | NOT_FOUND | The requested resource does not exist. | Verify the resource ID. |
| 409 | CONFLICT | The request conflicts with the current state of the resource. | Review the resource before retrying. |
| 422 | UNPROCESSABLE_ENTITY | The request is valid but contains semantic errors. | Review the field values in your request. |
| 429 | TOO_MANY_REQUESTS | You have exceeded the rate limit. | Wait before retrying. See rate limits. |

### 5xx — Server errors

| Code | Error | Message | Resolution |
|---|---|---|---|
| 500 | INTERNAL_SERVER_ERROR | An unexpected error occurred on the server. | Retry the request. Contact support if the issue persists. |
| 503 | SERVICE_UNAVAILABLE | The service is temporarily unavailable. | Check the Taskflow status page and retry. |

## Save hook errors

Save hook errors occur when a request passes validation but 
fails during the save operation.

| Error | Message | Resolution |
|---|---|---|
| SAVE_CONFLICT | The record was modified by another user. | Refresh and resubmit your changes. |
| SAVE_VALIDATION_FAILED | One or more field values are invalid. | Review the `details` object for specific fields. |
| SAVE_LIMIT_EXCEEDED | You have reached the maximum number of records. | Archive unused records or upgrade your plan. |

## Rate limits

Taskflow enforces the following rate limits per API key:

| Plan | Requests per minute |
|---|---|
| Free | 60 |
| Pro | 300 |
| Enterprise | 1000 |

:::warning
If you exceed the rate limit, the API returns a `429` error. 
Wait for the duration specified in the `Retry-After` response 
header before making another request.
:::