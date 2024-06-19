/**
 * @copyright: (C)2016-2022 Kibble Online Inc., in cooperation with Vancouver Film School
 * @author: Scott Henshaw {@link mailto:shenshaw@vfs.com}
 * @author: Vincent van Haaff {@link mailto:vhaaf@vfs.com}
 */
'use strict';

// function calls
function firstFunction() {
    console.log('entering firstFunction');
    secondFunction();
    console.log('Exiting firstFunction');
}

function secondFunction() {
    console.log('Entering secondFunction');
    thirdFunction();
    console.log('Exiting secondFunction');
}

function thirdFunction() {
    console.log('entering thirdFunction');
    console.log('exiting thirdFunction');
}

// firstFunction();

// stack overflow
function recursiveFunction() {
    console.log('Entering recursiveFunction');
    recursiveFunction();
}

/* try {
    recursiveFunction();
} catch (e) {
    console.log('Stack Overflow!');
} */

// async calls
// function first() {
//     console.log('first');
// }

// function second() {
//     console.log('second');
// }

// function third() {
//     console.log('third');
// }

// console.log('start');

// setTimeout(first, 1000);
// setTimeout(second, 0);
// third();

// console.log('end');

// error handling
function functionA() {
    try {
        functionB();
    } catch (e) {
        console.log('caught an error! ' + e);
    }
}

function functionB() {
    functionC();
}

function functionC() {
    throw new Error('Something went wrong!');
}

// functionA();

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', (event) => {
        // ------Prevents refreshing------
        event.preventDefault();
        // -------------------------------
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(JSON.stringify(data));
    });
});

const fetchDataButton = document.getElementById('fetchDataButton');
fetchDataButton.addEventListener('click', () => {
    fetch('http://jsfiddle.net/echo/jsonp/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('dataDisplay').textContent = JSON.stringify(data);
        })
        .catch(error => console.error('Error:', error));
});


export default class App {

    // THE ES2022 method to say "hey this is private, hands off"
    // prefix with #

    constructor(opt1 = {}) {
        // constructor for new App's, note use of initializer in constructor parameters

        // using an internal init methods makes it easier to re-start the app
        this.#init();
    }

    // Static preperties of the class
    // Usage:   const fps = App.CONST.FPS;
    //
    static get CONST() {
        // Cute trick to tie constants to the class, access App.CONST.FPS
        return {
            FPS: 1000 / 60,
        }
    }

    // Add your methods here
    run() {
    }

    // Typically wwe add private methods at the bottom
    #init() {
        // Define the Event handlers for the app
    }
}

/**
 * @license:
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
