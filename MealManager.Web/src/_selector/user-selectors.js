export function lookupUserDropDown(lookups) {
  if (lookups) {
    return lookups.map(lookup => {
      return {
        value: lookup.id,
        text: lookup.user.firstName + ' ' + lookup.user.lastName
      };
    });
  }
}
