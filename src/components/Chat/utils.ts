interface IFullName {
  firstname: string;
  lastname: string;
}

export const getFullNameFromTitleAsObject = (title: string): IFullName => {
  const preparedTitle = title.trim().split(" ");
  const firstname = preparedTitle[0];
  if (preparedTitle.length > 1) {
    return {
      firstname,
      lastname: preparedTitle[1],
    };
  }
  return { firstname, lastname: firstname };
};
