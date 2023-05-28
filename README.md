# ✅ Local storage and session storage are two different ways of storing data in a user's web browser. **Here are the main differences between the two**:

1. **Scope**: Session storage data is only available during the current browsing session, whereas local storage data persists even after the browser is closed and reopened.
2. **Capacity**: Session storage typically has a smaller capacity than local storage, ranging from a few kilobytes to several megabytes, depending on the browser. Local storage can typically store several megabytes to several gigabytes of data.
3. **Accessibility**: Session storage data can only be accessed by the window/tab that created it. Local storage data can be accessed across different tabs/windows in the same browser as long as they belong to the same domain.
4. **Expiration**: Session storage data is deleted when the user closes the browser or the tab/window that created it. Local storage data can have an expiration time, but it can also be persistent, meaning it stays until it is manually deleted or cleared.
5. **Usage**: Session storage is often used to store temporary data that is only needed during the current browsing session, such as a user's shopping cart in an e-commerce website. Local storage is often used to store long-term data, such as user preferences, settings, or cached data for offline use.

Overall, the choice between session storage and local storage depends on the type and lifespan of the data you need to store.

# Practice Task for Local Storage: Level 1

1. How to clear local storage ?

>> localStorage.clear();

2. Set a local storage item: key: name, value: Sakib Khan

>> localStorage.setItem('name', 'Sakib Khan');

3. Set a local storage item: key: age, value: 40

>> localStorage.setItem('age', 40);

4. Get the local storage item you have set.

>> localStorage.getItem('name', 'age');

5. Remove the local storage item: key 'name' & key 'age'

>> localStorage.removeItem('name');
>> localStorage.removeItem('age');

6. Set a object as a local storage item. The object is {
    firstName: 'John', lastName: 'Doe'
}

>> const user = {
  firstName: 'John',
  lastName: 'Doe'
};

   localStorage.setItem('user', JSON.stringify(user));

// To get those values:

>> const storedUser = localStorage.getItem('user');
   const userObj = JSON.parse(storedUser);

   console.log(userObj); 


# Practice task for local storage: Level 2

Step 1: Html file will have a p tag and a button

Setp 2: The p tag will show 'the count ' which is initially 0(initially the value of the local storage is 0)

Step 3: Every time, after click on the button , the number will be increased by 1 & the result will be shown in the p tag.

Step 4: With every click on the button, the result will be stored in the local storage also.

Step 5: Now the result is stored in the local storage , so if you reload the page or close the tab & open again , the result of the  "the count " is not 0 .Rather it will show the value from local storage without reset.

# Practice task for local storage: Level 3

Step 1: Create a form like the picture.

Step 2: Take the inputs

Step 3: If you click on the "Send name" button then the name will be set on the local storage .Do the same for other button.

Step 4: If you click on the "Delete name" button the name key and the value will be deleted from the local storage.Do the same for other button.

Step 5: If you click on the "Reset " button then the key & value will be reset from the local storage.

# Practice task for local storage: Level 4

Step 1: All the task are same as above.

Step 2: Add a new button before reset button called " Send".

Step 3: If you click on the "Send " button , all of the inputs (name, email and message) will be sent to the local storage at the same time.



