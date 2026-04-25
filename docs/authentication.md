---
sidebar_position: 2
---

# Authentication

The Taskflow API uses API keys to authenticate requests. 
Include your API key in the header of every request.

## Getting your API key

1. Log in to your Taskflow account.
2. Navigate to **Settings** → **API Keys**.
3. Click **Generate New Key**.
4. Copy and store your key securely. It will not be shown again.

## Sending authenticated requests

Include your API key in the request header as follows: Authorization: Bearer YOUR_API_KEY
## Example request
curl -X GET https://api.taskflow.io/v1/tasks 
-H "Authorization: Bearer YOUR_API_KEY" 
-H "Content-Type: application/json"
## Authentication errors

If your API key is missing or invalid, the API returns the 
following error:

| Error code | Message | Resolution |
|---|---|---|
| 401 | Unauthorized | Check your API key is correct |
| 403 | Forbidden | Your key lacks permission for this action |

:::tip
Never share your API key publicly or commit it to version control.
Store it as an environment variable instead.
:::