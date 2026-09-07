/**
 * Static sample alarm data for the RIC Alarm Viewer demo.
 *
 * Each alarm represents a fault reported by a RAN node (gNB) and, where
 * relevant, a specific cell. The data is intentionally small and varied so the
 * demo shows a realistic spread of severities, nodes, and fault types.
 *
 * Alarm shape:
 *   {
 *     id:           number   - unique alarm identifier
 *     nodeId:       string   - reporting RAN node, e.g. "gNB-001"
 *     cellId:       string   - affected cell, e.g. "cell-12"
 *     severity:     string   - one of "CRITICAL", "MAJOR", "MINOR", "WARNING"
 *     type:         string   - fault type, e.g. "LinkDown"
 *     timestamp:    string   - ISO 8601 time the alarm was raised
 *     acknowledged: boolean  - whether an operator has acknowledged it
 *   }
 */
const alarms = [
  {
    id: 1,
    nodeId: 'gNB-001',
    cellId: 'cell-12',
    severity: 'CRITICAL',
    type: 'LinkDown',
    timestamp: '2026-03-01T08:14:22Z',
    acknowledged: false,
  },
  {
    id: 2,
    nodeId: 'gNB-001',
    cellId: 'cell-07',
    severity: 'MAJOR',
    type: 'HighErrorRate',
    timestamp: '2026-03-01T08:16:05Z',
    acknowledged: false,
  },
  {
    id: 3,
    nodeId: 'gNB-002',
    cellId: 'cell-03',
    severity: 'MINOR',
    type: 'PacketLoss',
    timestamp: '2026-03-01T08:20:41Z',
    acknowledged: true,
  },
  {
    id: 4,
    nodeId: 'gNB-002',
    cellId: 'cell-19',
    severity: 'WARNING',
    type: 'TemperatureHigh',
    timestamp: '2026-03-01T08:25:10Z',
    acknowledged: false,
  },
  {
    id: 5,
    nodeId: 'gNB-003',
    cellId: 'cell-01',
    severity: 'CRITICAL',
    type: 'TemperatureHigh',
    timestamp: '2026-03-01T08:31:58Z',
    acknowledged: false,
  },
  {
    id: 6,
    nodeId: 'gNB-003',
    cellId: 'cell-22',
    severity: 'MAJOR',
    type: 'LinkDown',
    timestamp: '2026-03-01T08:37:33Z',
    acknowledged: true,
  },
  {
    id: 7,
    nodeId: 'gNB-004',
    cellId: 'cell-15',
    severity: 'MINOR',
    type: 'HighErrorRate',
    timestamp: '2026-03-01T08:42:12Z',
    acknowledged: false,
  },
  {
    id: 8,
    nodeId: 'gNB-004',
    cellId: 'cell-08',
    severity: 'WARNING',
    type: 'PacketLoss',
    timestamp: '2026-03-01T08:49:47Z',
    acknowledged: true,
  },
];

module.exports = alarms;
