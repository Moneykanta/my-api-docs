---
sidebar_position: 2
---

# Users

The Users endpoint allows you to retrieve and manage users 
in your Taskflow organisation.

## Base endpoint
https://api.taskflow.io/v1/users
## User object

| Field | Type | Description |
|---|---|---|
| `id` | String | Unique identifier for the user |
| `name` | String | Full name of the user |
| `email` | String | Email address of the user |
| `role` | String | User role: `admin`, `member`, `viewer` |
| `status` | String | Account status: `active`, `inactive` |
| `created_at` | String | Timestamp when the user was created |

## Endpoints

### GET /users

Retrieves a list of all users in your organisation.

**Request**
GET https://api.taskflow.io/v1/users
Authorization: Bearer YOUR_API_KEY
**Query parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `role` | String | No | Filter by role: `admin`, `member`, `viewer` |
| `status` | String | No | Filter by status: `active`, `inactive` |
| `limit` | Integer | No | Number of results to return. Default: 20. Maximum: 100 |
| `offset` | Integer | No | Number of results to skip. Default: 0 |

**Response**

```json
{
  "data": [
    {
      "id": "usr_5678",
      "name": "Manikanta Govindhan",
      "email": "mani@taskflow.io",
      "role": "admin",
      "status": "active",
      "created_at": "2026-01-01T10:00:00Z"
    }
  ],
  "total": 1,
  "limit": 20,
  "offset": 0
}
```

---

### GET /users/:id

Retrieves a single user by their ID.

**Request**
GET https://api.taskflow.io/v1/users/:id
Authorization: Bearer YOUR_API_KEY
**Path parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | String | Yes | The unique identifier of the user |

**Response**

```json
{
  "id": "usr_5678",
  "name": "Manikanta Govindhan",
  "email": "mani@taskflow.io",
  "role": "admin",
  "status": "active",
  "created_at": "2026-01-01T10:00:00Z"
}
```

**Error responses**

| Code | Error | Message |
|---|---|---|
| 404 | NOT_FOUND | The requested user does not exist. |

---

### PATCH /users/:id

Updates an existing user's details.

**Request**
PATCH https://api.taskflow.io/v1/users/:id
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
**Path parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | String | Yes | The unique identifier of the user |

**Request body**

Include only the fields you want to update.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | String | No | Updated full name of the user |
| `role` | String | No | Updated role: `admin`, `member`, `viewer` |
| `status` | String | No | Updated status: `active`, `inactive` |

**Error responses**

| Code | Error | Message |
|---|---|---|
| 404 | NOT_FOUND | The requested user does not exist. |
| 403 | FORBIDDEN | You do not have permission to update this user. |

---

### DELETE /users/:id

Removes a user from your organisation.

**Request**
DELETE https://api.taskflow.io/v1/users/:id
Authorization: Bearer YOUR_API_KEY
**Path parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | String | Yes | The unique identifier of the user |

**Response**

Returns an empty response with status code `204` on success.

**Error responses**

| Code | Error | Message |
|---|---|---|
| 404 | NOT_FOUND | The requested user does not exist. |
| 403 | FORBIDDEN | You do not have permission to remove this user. |

:::warning
Removing a user permanently revokes their access to Taskflow. 
All tasks assigned to them will remain in the system.
:::
