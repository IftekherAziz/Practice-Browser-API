# Module 42.5

ব্রাউজার এবং ডিবাগ রিলেটেড জিনিসগুলা প্রাকটিস করে ফেলো।  



# prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 

const getNumber = () => {
    // Get a number from the user
    let numberStr = prompt("Please enter a number:");

    // Convert the number string to a number and add 200
    let number = parseFloat(numberStr) + 200;

    // Display the result using an alert
    alert("The result is: " + number);


};

# ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 

const confirmHere = () => {
    // Display a confirm dialog
    confirm("Are you sure to know the location of your website?");

    // Assign the website address
    let website = "http://127.0.0.1:5500/1.html";

    // Display the result using an alert
    alert("Your website location is: " + website);
};

# Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো। 

Cookies are small text files that websites place on your computer or mobile device when you visit them. They are used to remember your preferences, keep you logged in, and track your browsing activity for marketing and analytics purposes.

Cookies can be either first-party, set by the website you are visiting, or third-party, set by a domain other than the one you are visiting.

Although cookies are generally harmless, they can be used for tracking and profiling, raising privacy concerns. However, you can choose to manage or delete cookies through your browser settings.

Overall, cookies are an important tool for website functionality and personalization, but they should be used ethically and transparently to respect users' privacy.

# local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )

✅ Local storage and session storage are two different ways of storing data in a user's web browser. **Here are the main differences between the two**:

1. **Scope**: Session storage data is only available during the current browsing session, whereas local storage data persists even after the browser is closed and reopened.
2. **Capacity**: Session storage typically has a smaller capacity than local storage, ranging from a few kilobytes to several megabytes, depending on the browser. Local storage can typically store several megabytes to several gigabytes of data.
3. **Accessibility**: Session storage data can only be accessed by the window/tab that created it. Local storage data can be accessed across different tabs/windows in the same browser as long as they belong to the same domain.
4. **Expiration**: Session storage data is deleted when the user closes the browser or the tab/window that created it. Local storage data can have an expiration time, but it can also be persistent, meaning it stays until it is manually deleted or cleared.
5. **Usage**: Session storage is often used to store temporary data that is only needed during the current browsing session, such as a user's shopping cart in an e-commerce website. Local storage is often used to store long-term data, such as user preferences, settings, or cached data for offline use.

Overall, the choice between session storage and local storage depends on the type and lifespan of the data you need to store.


# ভিডিওতে চারটা লেভেল এর লোকাল স্টোরেজ রিলেটেড কাজ দেয়া হয়েছে। সেগুলা একটু ভালো করে করো। 

# আমাদের গিটহাব এ issue-tracker নামে একটা রিপোজিটরি আছে।সেখানে কোন একটা issue যোগ করার পর সেটাকে close করা যায়না। আবার ডিলিট ও করা যায় না। তো তোমার কাজ হচ্ছে সেই সাইটের বাগ ফিক্স করা। এই ছাড়া আরো ইস্যু আছে কি নাই। সেটা আমি বলে দিচ্ছি না। তোমার কাজ হচ্ছে ওয়েবসাইট ঘেঁটেঘুটে দেখা। কি কি কাজ করার কথা সেটা ঠিক মতো কাজ করতেছে কিনা। এতে অপরিচিত ওয়েবসাইট ঘাটতে তোমার কিছু অভিজ্ঞতা হবে। তারপর দেখো সেখানে কোন ইস্যু থাকতে পারে কিনা। থাকলে সেগুলা ফিক্স করার চেষ্টা করো। 


# Practice Task for Local Storage: Level 1

1. How to clear local storage ?
// localStorage.clear();

2. Set a local storage item: key: name, value: Sakib Khan

3. Set a local storage item: key: age, value: 40

4. Get the local storage item you have set.

5. Remove the local storage item: key 'name' & key 'age'

6. Set a object as a local storage item. The object is {
    firstName: 'John', lastName: 'Doe'
}

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



