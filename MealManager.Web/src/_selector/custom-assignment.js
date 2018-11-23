export function lookupAssignmentDropDown(lookups) {
  if (lookups) {
    return lookups.map(lookup => {
      return {
        value: lookup.id,
        text: lookup.mealEntitled
      };
    });
  }
}
