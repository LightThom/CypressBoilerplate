//USER: EMAIL=
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

export const USER = {
    // User Details
    TEST: {
      //USER: EMAIL=
      TestGameIdUserName: `${email}`,
      TestGameIdPassword: `${password}`,
    
      //default User details
      TestTitle: '',
      TestFirstName: '',
      TestLastName: '',
      TestMobile: '',
      TestFirstAddressLine: '',
      TestTown: '',
      TestCounty: '',
      TestPostcode: '',
      TestDay: 1,
      TestMonth: 2,
      TestYear: 1234,
    },
  
    NEW_USER: {
      TestFirstName: '',
      TestLastName: '',
      TestMobile: '',
      TestFirstAddressLine: '',
      TestTown: '',
      TestCounty: '',
      TestPostcode: '',
    }
};