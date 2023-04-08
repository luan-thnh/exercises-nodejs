function tellFortune(
  jobTitle: string,
  geoLocation: string,
  partnerName: string,
  numKids: number
) {
  let fortune = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numKids} kids.`;
  console.log(fortune);
}

tellFortune('Dev', 'LuanThnh', '???', 0);

function calculateAge(birthYear: number, futureYear: number) {
  let age = futureYear - birthYear;
  console.log(`I will be either ${age - 1} or ${age} in ${futureYear}.`);
}

calculateAge(2003, 2023);
