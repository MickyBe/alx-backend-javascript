export default function iterateThroughObject(reportWithIterator) {
  let s = '';
  for (const employee in reportWithIterator) {
    s += ` | ${employee}`;
  }
  return s;
}
