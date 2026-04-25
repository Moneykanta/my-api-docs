---
sidebar_position: 1
---

# Tasks

The Tasks endpoint allows you to create, retrieve, update, 
and delete tasks in Taskflow.

## Base endpoint
https://api.taskflow.io/v1/tasks
## Task object

| Field | Type | Description |
|---|---|---|
| `id` | String | Unique identifier for the task |
| `title` | String | Title of the task |
| `description` | String | Detailed description of the task |
| `status` | String | Current status: `open`, `in_progress`, `completed` |
| `assignee_id` | String | ID of the user assigned to the task |
| `due_date` | String | Due date in ISO 8601 format |
| `created_at` | String | Timestamp when the task was created |
| `updated_at` | String | Timestamp when the task was last updated |

## Endpoints

### GET /tasks

Retrieves a list of all tasks in your organisation.

**Request**
GET https://api.taskflow.io/v1/tasks
Authorization: Bearer YOUR_API_KEY
**Query parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `status` | String | No | Filter by status: `open`, `in_progress`, `completed` |
| `assignee_id` | String | No | Filter by assigned user ID |
| `limit` | Integer | No | Number of results to return. Default: 20. Maximum: 100 |
| `offset` | Integer | No | Number of results to skip for pagination. Default: 0 |

**Response**

```json
{
  "data": [
    {
      "id": "tk_1234",
      "title": "Update API documentation",
      "description": "Review and update all endpoint descriptions.",
      "status": "in_progress",
      "assignee_id": "usr_5678",
      "due_date": "2026-05-01",
      "created_at": "2026-04-01T10:00:00Z",
      "updated_at": "2026-04-20T14:30:00Z"
    }
  ],
  "total": 1,
  "limit": 20,
  "offset": 0
}
```

---

### GET /tasks/:id

Retrieves a single task by its ID.

**Request**
GET https://api.taskflow.io/v1/tasks/:id
Authorization: Bearer YOUR_API_KEY
**Path parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | String | Yes | The unique identifier of the task |

**Response**

```json
{
  "id": "tk_1234",
  "title": "Update API documentation",
  "description": "Review and update all endpoint descriptions.",
  "status": "in_progress",
  "assignee_id": "usr_5678",
  "due_date": "2026-05-01",
  "created_at": "2026-04-01T10:00:00Z",
  "updated_at": "2026-04-20T14:30:00Z"
}
```

**Error responses**

| Code | Error | Message |
|---|---|---|
| 404 | NOT_FOUND | The requested task does not exist. |

---

### POST /tasks

Creates a new task.

**Request**
POST https://api.taskflow.io/v1/tasks
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
**Request body**

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | String | Yes | Title of the task. Maximum 255 characters. |
| `description` | String | No | Detailed description of the task. |
| `assignee_id` | String | No | ID of the user to assign the task to. |
| `due_date` | String | No | Due date in ISO 8601 format. |

**Example request body**

```json
{
  "title": "Update API documentation",
  "description": "Review and update all endpoint descriptions.",
  "assignee_id": "usr_5678",
  "due_date": "2026-05-01"
}
```

**Response**

```json
{
  "id": "tk_1234",
  "title": "Update API documentation",
  "description": "Review and update all endpoint descriptions.",
  "status": "open",
  "assignee_id": "usr_5678",
  "due_date": "2026-05-01",
  "created_at": "2026-04-24T10:00:00Z",
  "updated_at": "2026-04-24T10:00:00Z"
}
```

**Error responses**

| Code | Error | Message |
|---|---|---|
| 400 | BAD_REQUEST | The request is missing required fields. |
| 422 | UNPROCESSABLE_ENTITY | One or more field values are invalid. |

---

### PATCH /tasks/:id

Updates an existing task.

**Request**
PATCH https://api.taskflow.io/v1/tasks/:id
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
**Path parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | String | Yes | The unique identifier of the task |

**Request body**

Include only the fields you want to update.

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | String | No | Updated title of the task. |
| `description` | String | No | Updated description of the task. |
| `status` | String | No | Updated status: `open`, `in_progress`, `completed` |
| `assignee_id` | String | No | ID of the user to reassign the task to. |
| `due_date` | String | No | Updated due date in ISO 8601 format. |

**Error responses**

| Code | Error | Message |
|---|---|---|
| 404 | NOT_FOUND | The requested task does not exist. |
| 409 | CONFLICT | The record was modified by another user. |

---

### DELETE /tasks/:id

Deletes a task permanently.

**Request**
DELETE https://api.taskflow.io/v1/tasks/:id
Authorization: Bearer YOUR_API_KEY
**Path parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | String | Yes | The unique identifier of the task |

**Response**

Returns an empty response with status code `204` on success.

**Error responses**

| Code | Error | Message |
|---|---|---|
| 404 | NOT_FOUND | The requested task does not exist. |
| 403 | FORBIDDEN | You do not have permission to delete this task. |

:::warning
Deleted tasks cannot be recovered. This action is permanent.
:::
