export default function createIteratorObject(report) {
  const array = [];
  for (const employee in report.allEmployees) {
    array.push(...employee);
  }
  return array;
}
