<div align="center">
    <br />
        <p>
            <a href="https://www.npmjs.com/package/host-checker"><img src="https://nodei.co/npm/host-checker.png?downloads=true&downloadRank=true&stars=true" /></a>
        </p>
    <br />
    <p>
        <a href="https://www.npmjs.com/package/host-checker"><img src="https://img.shields.io/npm/v/host-checker.svg?maxAge=3600" alt="npm version" /></a>
        <a href="https://github.com/Scoooolzs/host-checker"><img src="https://img.shields.io/github/license/Scoooolzs/host-checker.svg?maxAge=3600" alt="npm downloads" /></a>
    </p>
</div>

# Host checker

You can check the user what the host he use!

## Installations

```npm
npm install host-checker@latest
```

## Screenshot
Note: The code of this Screenshot is [this](https://github.com/Scoooolzs/host-checker/tree/main/example.js)

Glitch:
![Glitch](https://scoooolzs.github.io/raw/host-checker/media/Glitch.gif)

Replit:
![Replit](https://scoooolzs.github.io/raw/host-checker/media/Replit.gif)

## Examples

```js
// Check host
if (IsHosting("replit")) {
	console.log("This user is using Replit.");
} else {
	console.log("This user is NOT using Replit.");
}

if (IsHosting("github")) {
	console.log("This user is using GitHub.");
} else {
	console.log("This user is NOT using Github");
}

if (IsHosting("glitch")) {
	console.log("This user is using Glitch.");
} else {
	console.log("This user is NOT using Glitch.");
}

// See Host
console.log(UsingHosting()) // if user is not using a hosting. it return null.
```

## Contribution

Feel free to pull request for fix something or add more host.

\(Optional but recommended\) Please add [Prettier](https://prettier.io/) code formatter for neatness of this code!

## More
license : [MIT](https://github.com/Scoooolzs/host-checker/tree/main/LICENSE.md)
