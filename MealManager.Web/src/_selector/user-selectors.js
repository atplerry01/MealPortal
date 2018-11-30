export function lookupUserDropDown(lookups) {
  if (lookups) {
    return lookups.map(lookup => {
      return {
        value: lookup.user.id,
        text: lookup.user.firstName + ' ' + lookup.user.lastName
      };
    });
  }
}
