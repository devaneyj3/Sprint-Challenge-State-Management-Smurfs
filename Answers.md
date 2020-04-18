1. What problem does the context API help solve?

    the Context API avoids prop drilling and abstract away redux

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - the actions you want to take, they are action types, action creators and actions. Redux's store is the single source of truth in the redux application because it is the only place where data is centralized.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Aplication state manages all the data everywhere in the application and is handled through Redux or Context API. Component state just manages state is the component.

You would use component state when no other components need access to that components state, for example a form. Application state is valuable when multiple components need access to the application state. This is why Redux and Context API is valuable.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunks allows us to make asynchronous calls to a server api or other api on the web and it is called in the action creator. This gives the action creator the abillity to make it so we can set up the action creator to tell the UI that we are waiting, when we got it, and any errors from the api.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like Context API for building applications because it does not have as much boilerplate in react, it avoid prop driling, and make it easy to pass state and actions to update state down to components.

But just remember if you want to change application state from the child component remember to pass an setter to update state to that component or you'll pull your hair out.