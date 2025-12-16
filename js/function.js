function introMe (username = 'Harin',language='html',age=25) {
    // console.log(username);
    console.log("Hello!!");
    console.log(`My Name is ${username}`);
    console.log(`I am learning ${language} Functions`);
    console.log(`My age is ${age}`);
    return 7;
}

introMe('Darshan','JavaScript',22);
introMe('Aju','python',24);
introMe('Heer','C++',27);
introMe(); //default parameter value will be assigned