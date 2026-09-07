/**
 * Alarm routes.
 *
 * Exposes the alarm collection over a small REST API. Mounted at
 * "/api/alarms" by the server.
 */
const express = require('express');
const alarmService = require('../services/alarmService');

const router = express.Router();

/**
 * GET /
 * List alarms. If a `severity` query parameter is present, delegate to the
 * severity filter; otherwise return the full list.
 *
 * NOTE: the severity filter is currently a stub in the service layer, so
 * supplying `?severity=...` has no effect yet — this is the visible symptom of
 * the unimplemented feature.
 */
router.get('/', (req, res) => {
  if (req.query.severity) {
    return res.json(alarmService.filterBySeverity(req.query.severity));
  }
  return res.json(alarmService.getAllAlarms());
});

/**
 * GET /unacknowledged
 * List alarms that have not been acknowledged by an operator.
 *
 * Declared before "/:id" so "unacknowledged" is not captured as an id.
 */
router.get('/unacknowledged', (req, res) => {
  res.json(alarmService.getUnacknowledgedAlarms());
});

/**
 * GET /:id
 * Fetch a single alarm by id. Responds 404 with a JSON error if not found.
 */
router.get('/:id', (req, res) => {
  const alarm = alarmService.getAlarmById(req.params.id);
  if (!alarm) {
    return res.status(404).json({ error: 'alarm not found' });
  }
  return res.json(alarm);
});

module.exports = router;
