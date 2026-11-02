# JS Recap 3–5 – DOM, Events and AJAX

JavaScript assignments on the DOM and BOM, event handling and AJAX with the Fetch API. Each assignment has its own folder with an HTML and a JS file. The assignments are also published on the Metropolia server so they can be tested in the browser (links below).

Server base address: https://users.metropolia.fi/~kimtun/Javascript-ohtu/week2/

## Assignments

### Recap 3 – DOM and BOM

| #   | Folder         | Topic                                                    | Points | Live page                                                                                 |
| --- | -------------- | -------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------- |
| 1   | `JS-Recap3/t1` | Todo list with `insertAdjacentHTML`                      | 4p     | [t1.html](https://users.metropolia.fi/~kimtun/Javascript-ohtu/week2/JS-Recap3/t1/t1.html) |
| 2   | `JS-Recap3/t2` | Todo list with DOM methods (`createElement`, `htmlFor`)  | 4p     | [t2.html](https://users.metropolia.fi/~kimtun/Javascript-ohtu/week2/JS-Recap3/t2/t2.html) |
| 3   | `JS-Recap3/t3` | Browser and device information with the BOM              | 5p     | [t3.html](https://users.metropolia.fi/~kimtun/Javascript-ohtu/week2/JS-Recap3/t3/t3.html) |
| 4   | `JS-Recap3/t4` | Nearest restaurants sorted by distance (Geolocation API) | 5p     | [t4.html](https://users.metropolia.fi/~kimtun/Javascript-ohtu/week2/JS-Recap3/t4/t4.html) |
| 5   | `JS-Recap3/t5` | Restaurant markers on a Leaflet map                      | 4p     | [t5.html](https://users.metropolia.fi/~kimtun/Javascript-ohtu/week2/JS-Recap3/t5/t5.html) |

### Recap 4 – Event handling

| #   | Folder         | Topic                                                                                                | Points | Live page                                                                                 |
| --- | -------------- | ---------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------- |
| 1   | `JS-Recap4/t1` | Interactive todo list: checkbox updates the array, delete button, add item with a modal form         | 12p    | [t1.html](https://users.metropolia.fi/~kimtun/Javascript-ohtu/week2/JS-Recap4/t1/t1.html) |
| 2   | `JS-Recap4/t2` | Restaurant list in alphabetical order, row highlight with `classList`, modal with restaurant details | 12p    | [t2.html](https://users.metropolia.fi/~kimtun/Javascript-ohtu/week2/JS-Recap4/t2/t2.html) |

### Recap 5 – AJAX

| #   | Folder         | Topic                                                   | Points | Live page                                                                                 |
| --- | -------------- | ------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------- |
| 1   | `JS-Recap5/t1` | GET request with Fetch API and `async/await`            | 2p     | [t1.html](https://users.metropolia.fi/~kimtun/Javascript-ohtu/week2/JS-Recap5/t1/t1.html) |
| 2   | `JS-Recap5/t2` | POST request with a JSON body                           | 3p     | [t2.html](https://users.metropolia.fi/~kimtun/Javascript-ohtu/week2/JS-Recap5/t2/t2.html) |
| 3   | `JS-Recap5/t3` | Error handling with `try/catch` and `response.ok`       | 4p     | [t3.html](https://users.metropolia.fi/~kimtun/Javascript-ohtu/week2/JS-Recap5/t3/t3.html) |
| 4   | `JS-Recap5/t4` | Reusable `fetchData` function                           | 5p     | [t4.html](https://users.metropolia.fi/~kimtun/Javascript-ohtu/week2/JS-Recap5/t4/t4.html) |
| 5   | `JS-Recap5/t5` | Restaurant app with daily menus from the Restaurant API | 10p    | [t5.html](https://users.metropolia.fi/~kimtun/Javascript-ohtu/week2/JS-Recap5/t5/t5.html) |

## How to run

1. Open an assignment's live page (links above), or open its HTML file locally, e.g. `JS-Recap3/t1/t1.html`, or use the VS Code Live Server extension.
2. Open the developer tools console (F12) to see the `console.log()` output.
3. The AJAX assignments `JS-Recap5/t1`–`t4` only print their results to the console.

## Notes

- **Recap 3, task 4:** the browser asks for permission to use your location.
- **Recap 3, task 5:** Leaflet and the OpenStreetMap tiles are loaded from the internet.
- **Recap 5, tasks 1–4:** the requests go to the Reqres test API (`https://reqres.in/api/...`) and need the `x-api-key` header.
- **Recap 5, task 5:** the Restaurant API works only inside the Metropolia network or over a VPN connection. The browser may ask for permission to access the local network. Allow it, otherwise the restaurants cannot be loaded and an error message is shown instead.

## Setup

Run `npm install` once after cloning to install ESLint and Prettier. Run `npx eslint .` to lint the files.
