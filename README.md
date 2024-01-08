# ReactNativeDocuments
Here is the Key concept of react navive 

```
const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    // return new Intl.DateTimeFormat('en-US').format(date);
    return new Intl.DateTimeFormat('en-US').format(date);
};

const postedDate = (postedDate) => {
    const currDate = new Date();
    const timeDifference = currDate - postedDate;

    if(timeDifference < 24 * 60 * 60 * 1000) return "Today";
    if(timeDifference <= 7 * 24 * 60 * 60 * 1000) return new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(postedDate);
    return formatDate(postedDate);
}

console.log(postedDate((new Date()) - (28 * 24 * 60 * 60 * 1000)))
```
