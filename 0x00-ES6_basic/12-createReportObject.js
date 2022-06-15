#!/usr/bin/node

export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(list) {
      return list.length;
    },
  };
}
