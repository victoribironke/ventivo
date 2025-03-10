export const getFishyDomains = async () => {
  try {
    const res = await (
      await fetch(
        "https://gist.githubusercontent.com/SimonHoiberg/f5a23b1fa3762330c8af1e9090918b63/raw/53963d0dbdd93c594fbc067cee95966156ee066b/temp-email-list.txt"
      )
    ).text();

    return { data: res, error: null };
  } catch (e) {
    return { data: null, error: "A server error occured." };
  }
};
