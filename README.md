## Team Combo Maker

## Overview
This repository contains the source code for an application designed to assist businesses in forming teams of three developers within a specified budget. Developers are required to build a connection with the server, establish routes, and implement a function (`makeCombos`) that takes an array of people and a budget as parameters, returning an array of combinations that match the specified budget. The combinations are then displayed in a list on the front end.

## Goals
1. Establish a connection with the server.
2. Implement routes on the server.
3. Complete the `makeCombos` function in the utils file to generate combinations based on the given array of people and budget.
4. Display the combinations in a list on the front end.

## Specifications
- Run the server on any desired port.
- Fix/add code missing in the backend to ensure proper functionality.
- Establish a connection between the frontend and backend.
- Complete the `makeCombos` function in the utils file.

## Example
The `makeCombos` function should return the following results based on different budget inputs:

1. Budget: 0
   - Return: []

2. Budget: 1000
   - Return: []

3. Budget: 21000
   - Return: 
     ```
     [
       [ {salary: 7000, ...}, {salary: 7000, ...}, {salary: 7000, ...} ]
     ]
     ```

4. Budget: 2200
   - Return: 
     ```
     [
       [ {salary: 7000, ...}, {salary: 7000, ...}, {salary: 8000, ...} ],
       [ {salary: 7000, ...}, {salary: 7200, ...}, {salary: 7800, ...} ],
       [ {salary: 7200, ...}, {salary: 7800, ...}, {salary: 7000, ...} ],
       ...
     ]
     ```

## Instructions
1. Run the server on your desired port.
2. Ensure all necessary backend code is fixed or added.
3. Establish a connection between the frontend and backend.
4. Complete the `makeCombos` function in the utils file.
5. Utilize the `makeCombos` function to display a list of all the combinations on the ComboList component.

Feel free to contribute, report issues, or suggest improvements!
