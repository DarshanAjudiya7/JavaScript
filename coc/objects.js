// singleton object to manage application settings. when we make as literal, it is not singleton.

// object literal

const mySymbol = Symbol('uniqueIdentifier');

const AppSettings = {
    theme: 'dark',  
    XMLDocument: 'enabled', 
    "backup frequency": 24,
    [mySymbol]: 'This is a unique value',
    version: '1.0.0',  
    autosave : true,
    lastlogin : ['monday', 'wednesday'] 
}

// console.log(AppSettings.theme);
// console.log(AppSettings['version']);
// console.log(AppSettings['backup frequency']);
// console.log(AppSettings[mySymbol]);

// AppSettings.version = '1.0.1';
// Object.freeze(AppSettings); // to make object immutable
// AppSettings.version = '1.0.2';  // will not change due to freeze
// console.log(AppSettings);

AppSettings.greeting = function() {
    console.log("Welcome to the Application!");
}

AppSettings.greetingTwo = function() {
    console.log(`Hello! The current theme is ${this.theme} and autosave is ${this.autosave ? 'enabled' : 'disabled'}.`);
}

console.log(AppSettings.greeting()); // function invoked    
console.log(AppSettings.greeting); // only function reference, not invoked
console.log(AppSettings.greetingTwo());
