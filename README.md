# Task Assignment Management System

## Overview

The Task Assignment Management System is a tool designed to efficiently assign tasks to developers based on their skills, availability, and task dependencies. This system helps streamline the task assignment process in software development projects, ensuring that tasks are distributed optimally among team members.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)

## Features

- Assigns tasks to developers based on their skill levels and availability.
- Handles task dependencies to ensure that prerequisite tasks are completed first.
- Sorts tasks by priority for efficient assignment.
- Outputs a clear summary of task assignments and unassigned tasks.

## Technologies Used

- JavaScript
- Custom algorithms for task sorting and assignment
- Modular design with helper functions and utility classes

## File Structure

```angular2html
src/
│   ├── helpers/
│   │   ├── assignTaskRecursively.js # Recursive task assignment logic
│   │   └── sortTasksByPriority.js # Sorts tasks based on priority 
│   ├── utils/
│   │   └── GraphUtil.js # Utility class for handling task dependency graphs 
│   ├── assignTasksWithPriorityAndDependencies.js # Main file for assigning tasks
│   └── index.js # Entry point for the application
└── README.md
```

## Functions and Classes

### 1. `assignTasksWithPriorityAndDependencies(developers, tasks)`

- **Description:** Main function to assign tasks to developers based on priority and dependencies.
- **Parameters:**
    - `developers`: Array of developer objects with their details.
    - `tasks`: Array of task objects with their details.
- **Returns:** An object containing assigned tasks and unassigned tasks.

---

### 2. `assignTaskRecursively(task, tasks, developers, taskAssignments, assignedTasks)`

- **Description:** Recursively assigns tasks to developers.
- **Parameters:**
    - `task`: Task object.
    - `tasks`: Array of all tasks.
    - `developers`: Array of developers.
    - `taskAssignments`: Task assignments object.
    - `assignedTasks`: Set of assigned tasks.
- **Returns:** Boolean indicating if the task was assigned.

---

### 3. `hasNoDependencies(graphMatrix, colIndex)`

- **Description:** Checks if a task has no dependencies.
- **Parameters:**
    - `graphMatrix`: Graph matrix.
    - `colIndex`: Column index of the task.
- **Returns:** Boolean indicating if there are no dependencies.

---

### 4. `sortTasksByPriority(tasks)`

- **Description:** Sorts tasks based on priority.
- **Parameters:**
    - `tasks`: Array of task objects.
- **Returns:** Sorted array of tasks.

---

### 5. `GraphUtil`

- **Description:** Utility class for graph operations related to tasks and dependencies.
- **Methods:**
    - `createGraph()`: Creates an adjacency matrix for tasks.
    - `getTaskIndexByName(taskName)`: Retrieves the index of a task by its name.
    - `hasNoDependencies(colIndex)`: Checks if the task at the specified index has no dependencies.


## Getting Started

To get started with the Task Assignment Management System, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Badr-Annabi/TaskAssignmentManagementSystem.git
   cd TaskAssignmentManagementSystem
2. **Run index.js**
```
node index.js
```

