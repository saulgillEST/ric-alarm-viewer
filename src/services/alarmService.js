/**
 * Alarm service.
 *
 * Encapsulates all access to the alarm data set so the routes stay thin. In a
 * real Non-RT RIC this would talk to a database or the alarm collector; here it
 * operates over the static in-memory sample data.
 */
const alarms = require('../data/alarms');

/**
 * Return every known alarm.
 * @returns {Array<object>} all alarms.
 */
function getAllAlarms() {
  return alarms;
}

/**
 * Look up a single alarm by its numeric id.
 * @param {number|string} id - the alarm id (coerced to a number).
 * @returns {object|null} the matching alarm, or null if none matches.
 */
function getAlarmById(id) {
  const numericId = Number(id);
  const match = alarms.find((alarm) => alarm.id === numericId);
  return match || null;
}

/**
 * Return alarms that have not yet been acknowledged by an operator.
 * @returns {Array<object>} unacknowledged alarms.
 */
function getUnacknowledgedAlarms() {
  return alarms.filter((alarm) => alarm.acknowledged === false);
}

/**
 * Filter alarms by severity (e.g. "CRITICAL", "MAJOR", "MINOR", "WARNING").
 *
 * INTENTIONAL GAP: this is a stub. It should return only the alarms whose
 * severity matches the argument, but it does not filter yet.
 *
 * @param {string} severity - the severity to filter by.
 * @returns {Array<object>} alarms matching the given severity.
 */
function filterBySeverity(severity) {
  // TODO(demo): implement severity filtering — currently returns all alarms regardless of severity
  return alarms;
}

module.exports = {
  getAllAlarms,
  getAlarmById,
  getUnacknowledgedAlarms,
  filterBySeverity,
};
