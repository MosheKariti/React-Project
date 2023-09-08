import {toast} from "react-toastify";
export function HandleFailedEntries(userEmail) {
    const failedEntriesString = localStorage.getItem('failedEntries');
    const failedEntries = JSON.parse(failedEntriesString);
    if (!failedEntries || failedEntries.length === 0) {
        const failedEntries = [{user: userEmail,firstTry:new Date()}];
        localStorage.setItem('failedEntries',JSON.stringify(failedEntries));
        toast.error(`Wrong email or password`);
    } else {
        const failedEntriesOfCurrentUser = failedEntries.filter(entry => entry.user === userEmail);
        if (failedEntriesOfCurrentUser.length === 0) {
            failedEntries.push({user: userEmail,firstTry:new Date()});
            localStorage.setItem('failedEntries',JSON.stringify(failedEntries));
            toast.error(`Wrong email or password`);
        }
        if (failedEntriesOfCurrentUser.length === 1) {
            failedEntries.push({user: userEmail,secondTry: new Date()});
            localStorage.setItem('failedEntries',JSON.stringify(failedEntries));
            toast.error('Last try before you got blocked!')
        } else if (failedEntriesOfCurrentUser.length === 2){
            failedEntries.push({user: userEmail,thirdTry: new Date()});
            localStorage.setItem('failedEntries',JSON.stringify(failedEntries));
            toast.error('Your user is blocked for the next 24 hours');
        } else if (failedEntriesOfCurrentUser.length === 3) {
            const lastDateInUtcString = failedEntriesOfCurrentUser[2].thirdTry.toString();
            const lastDateInUtc = new Date(lastDateInUtcString);
            lastDateInUtc.setDate(lastDateInUtc.getDate() + 1);
            const lastDateInUtcPlusADay = lastDateInUtc;
            const currentUtcTime = new Date();
            if (currentUtcTime >= lastDateInUtcPlusADay) {
                const updatedEntries = failedEntries.filter(entry => entry.user !== userEmail);
                console.log(updatedEntries);
                updatedEntries.push({user: userEmail,thirdTry: new Date()});
                localStorage.setItem('failedEntries',JSON.stringify(updatedEntries));
            } else {
                console.log("Less than 24 hours have passed since the last date.");
                toast.error('24 hours have not passed yet, wait till ' + lastDateInUtcPlusADay);
            }
        }
    }
}
