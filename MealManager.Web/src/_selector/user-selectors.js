export function lookupUserDropDown(lookups) {
  if (lookups) {
    return lookups.map(lookup => {
      console.log(lookup)
      return {
        value: lookup.id,
        text: lookup.user.firstName + ' ' + lookup.user.lastName
      };
    });
  }
}
