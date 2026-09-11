// =========================================
// Promise Example
// =========================================

function getBalance() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(500);
        }, 3000);
    });
}

getBalance().then((data) => {
    console.log("Balance:", data);
});


// =========================================
// Promise States Example
// 1. Pending
// 2. Fulfilled (resolve)
// 3. Rejected (reject)
// =========================================

let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Op Success");
    } else {
        reject("Op Failed");
    }
});

promise
    .then((data) => console.log(data))
    .catch((error) => console.log(error));


// =========================================
// Without Promise
// =========================================

function getBalanceWithoutPromise() {
    setTimeout(() => {
        console.log("Without Promise Balance:", 500);
    }, 3000);
}

getBalanceWithoutPromise();


// =========================================
// Problem Solving Using Promise
// =========================================

function getBalance1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(500);
        }, 3000);
    });
}

getBalance1()
    .then((balance1) => {
        console.log("Balance1:", balance1);
    });


// =========================================
// User Example
// =========================================

const users = [
    { id: 1, name: "Ravi" },
    { id: 2, name: "Sita" },
    { id: 3, name: "Ram" }
];

function getUser(id) {
    return Promise.resolve(
        users.find((user) => user.id === id)
    );
}

function updateUser(user) {
    return Promise.resolve({
        ...user,
        name: "Ravi Kumar"
    });
}


// =========================================
// Promise Chaining
// =========================================

getUser(1)
    .then((user) => {
        console.log("Original User:", user);
        return updateUser(user);
    })
    .then((updatedUser) => {
        console.log("Updated User:", updatedUser);
    })
    .catch((error) => {
        console.log(error);
    });


// =========================================
// Async/Await Version
// =========================================

async function processUser() {
    try {
        const user = await getUser(1);
        console.log("User:", user);

        const updatedUser = await updateUser(user);
        console.log("Updated User:", updatedUser);
    } catch (error) {
        console.log(error);
    }
}

processUser();