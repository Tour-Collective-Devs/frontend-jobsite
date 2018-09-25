# Tour Collective Careers

Tour Collective is a place to find the best of the best the touring community has to offer. By aiming to let crew members reccommend crew members, you can now hire quickly and confidently.

### MVP*
##### Be able to:

1. post jobs
1. see jobs & search jobs on a message board
1. apply with profile that sends an email to employer with the top 5 highest rated applicants
1. let employers see crew member profiles

### Stretch Goals

1. Private messaging between crew member and employer
1. Handling monetary transactions


###### *vis-à-vis email


# Developer Guidelines

# style guides

## folders/files

1. make sure react components files have the same name as the class they export
1. directory names lowercase kabob case
1. file names camel case
1. if the file is a react component capital first word camel case


## developer environment
Make sure you have npm installed on your machine.

If your pulling down this repo for the first time run
```
npm i
```
from the root directory to pull down any dependencies

## technologies to be aware of
The following packages are used in the development of this project.

1. jQuery

## Using Context Provider
This app uses react context provider to hold data at a level which can be passed over components to exactly where it is needed.
To use the context provider follow this example code in the component you need to use context data in.

```
<Context.Consumer>
    {context => (
        <div>
            // grabbing things from context state
            <h1>{context.state.current_user.first_name}</h1>
            // calling a function defined in context
            {context.playUserWelcome()}
        </div>
    )}
</Context.Consumer>
```