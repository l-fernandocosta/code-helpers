function zipcodeFormatter(zipcode: string): string {
  // remove non numeric characters
    const cleared_zipcode = zipcode?.replace(/\D/g, '') || "";
    if(cleared_zipcode.length == 8) {
      return cleared_zipcode?.slice(0, 5) + "-" + cleared_zipcode?.slice(5);
    }
    else return zipcode
}

export {
  zipcodeFormatter as formatZipcode
}