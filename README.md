# `ts-boilerplate`
This is just a repo that facilitates the initialization of a Node project in TS.

Out of the box, the only advantages are that it already includes a basic ESLint rules file and a couple of aliases that will save you like 20 minutes of that precious dev time, so you can focus on starting a project that you'll never finish.

## Usage

`mkdir {YourProjectName}`

`cd {YourProjectName}`

`git clone https://github.com/Beatlz/ts-boilerplate.git .` ==> The dot is important

`npm install`

After this, you should update your remote repo address, AKA, you should tell git where your repo is hosted.

`git remote remove origin`

`git remote add origin {YourRepoAddress}`

## Includes
### ESLint rules
These are the rules that I like, change them as you please.
### Module aliasing
You can call the `src/` folder by simply `~/SomeFolderName`. You can also call the root folder with `.../assets/Cat.png`
### `start` script
`npm start` will run `ESLint`, compile the src folder and then run `index.ts`.
