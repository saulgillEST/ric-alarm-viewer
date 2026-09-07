# RIC Alarm Viewer

A small demo Express service that exposes alarms reported by RAN nodes over a
minimal REST API, alongside a dependency-free dashboard page. It is styled
loosely after a Non-RT RIC operations view: alarms carry a node id, cell id,
severity, and type so operators can triage what is happening across the radio
access network.

## Run

```bash
npm install
npm start
```

Then visit http://localhost:3000

## API

- `GET /api/alarms` — list all alarms.
- `GET /api/alarms/:id` — fetch a single alarm by id (404 if not found).
- `GET /api/alarms/unacknowledged` — list alarms that have not been acknowledged.
- `GET /api/alarms?severity=CRITICAL` — intended to filter by severity.
  **NOT YET IMPLEMENTED:** the severity filter is currently a stub, so this
  request returns all alarms regardless of the `severity` value.
- `GET /health` — liveness check, returns `{ "status": "ok" }`.
