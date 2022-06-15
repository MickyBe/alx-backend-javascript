export default function iterateThroughObject(reportWithIterator) {
  let s = '';
  for (const employee in reportWithIterator) {
    if (s.length === 0) {
      s += `${employee}`;
    } else {
      s += ` | ${employee}`;
    }
  }
  return s;
}
