# Get Started

You can embed our Javascript SDK into any website or web application through NPM. 

## 1. Install node package via npm

Run the below command in terminal in your app’s directory: 

```jsx
npm install javascript-1flow-sdk
```

## 2. Initialize 1Flow SDK

Place the below code inside your web app: 

```jsx
import { oneflow } from 'javascript-1flow-sdk';

oneflow.oneFlowInit('<your-project-api-key>')
```

<aside>
💡 Note: you need to replace `"your-project-api-key"` with your actual project API key. Click [here](https://dashboard.1flow.app/setting) and navigate to **Project Settings** to get your key in the **API keys** section.

</aside>

## 3. Track events

You need to track events in order to use these events as triggers of 1Flow in-app surveys. 

- You can give an event contextual info by placing any key-value pairs inside the `{}`:

```jsx
import { oneflow } from 'javascript-1flow-sdk';

oneflow.logEvent("event_name",{item_id:"123",type:"legos"}); 
```

- You can also log events without any parameters:

```jsx
 import { oneflow } from 'javascript-1flow-sdk';

oneflow.logEvent("event_name");
```

### Example usage

Let’s say you want to trigger an event on a button click. You just need to log that button click event, and then that event can be used to trigger a survey:

```jsx
import { oneflow } from 'javascript-1flow-sdk';

myFunction() {    
  ...
	oneflow.logEvent("event_name");
}
```

## 3. Log user (optional)

If your app requires the user to register an account and sign in, you can call a method to bind the user with 1Flow. This way, you'll be able to connect the data with your internal records.

Whenever the user has signed in, you can call `oneflow.logUser()` to pass the user identifier, along with any other parameters you'd like to store with us, to 1Flow. 

```jsx
import { oneflow } from 'javascript-1flow-sdk';

const parameter={'firstName': 'steve', 'lastName': 'jobs', 'number': 123456 };  //parameters are optional.
oneflow.logUser(userId, parameter); // parameters are optional, if no parameters, then only pass in userId
```

# Show your first survey

Now that you've successfully integrated 1Flow into your SDK, it's time to [create your first survey](https://www.notion.so/3-Create-your-first-survey-de5e48d3d12a4f24b9dda0344d2638e6). 

If you've already created a survey and published it (survey shows up in the "In Progress" section of the [dashboard](https://dashboard.1flow.app)), run the app and trigger the event to happen, you should see the survey show up when the event is fired.
