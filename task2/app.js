function changeMe(arr) {

    if (arr.length === 0) {
        console.log("");
        return;
      }

    const currentYear = new Date().getFullYear();

    for (let i = 0; i< arr.length; i++) {
      const person = arr[i];

      
      const firstName = person[0];
      const lastName = person[1];
      const gender = person[2];
      const birthYear = person[3];

      let age = "Invalid Birth Year";
      if (birthYear && birthYear <= currentYear) {
        age = currentYear - birthYear;
      }

      const personObj = {
        firstname: firstName,
        lastname: lastName ,
        gender: gender,
        age: age
      }

      console.log(`${i + 1}. ${firstName} ${lastName}:`, personObj);

    }

}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);