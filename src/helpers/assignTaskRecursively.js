/**
 * Recursively assigns tasks to developers based on
 * their availability and task dependencies.
 *
 * @param {Object} task - task object contains task details.
 * @param {Array} tasks - List of all tasks available for assignment.
 * @param {Array} developers - List of developers available for task assignment.
 * @param {Object} taskAssignments - Object that keep tracking the assigned tasks per developer
 * @param {Set} assignedTasks - A set that contains names of already assigned tasks to avoid duplication.
 * @returns {boolean} - Returns true if the task is successfully assigned, false otherwise.
 */
function assignTaskRecursively(task, tasks, developers, taskAssignments, assignedTasks) {
    // if task is already assigned, we Skip
    if (assignedTasks.has(task.taskName)) return true;

    // Process dependencies first
    for (const dependencyName of task.dependencies) {
        const dependency = tasks.find(t => t.taskName === dependencyName);
        if (dependency && !assignTaskRecursively(dependency, tasks, developers, taskAssignments, assignedTasks)) {
            return false; // Dependency couldn't be assigned
        }
    }

    // Find suitable developers for the task
    const suitableDevelopers = developers.filter(dev =>
        dev.preferredTaskType === task.taskType &&
        dev.skillLevel >= task.difficulty &&
        dev.maxHours >= task.hoursRequired
    );

    suitableDevelopers.sort((a, b) => b.skillLevel - a.skillLevel);

    // Assign to the most suitable developer
    for (const developer of suitableDevelopers) {
        if (developer.maxHours >= task.hoursRequired) {
            taskAssignments[developer.name].tasks.push(task.taskName);
            taskAssignments[developer.name].totalHours += task.hoursRequired;
            developer.maxHours -= task.hoursRequired;
            assignedTasks.add(task.taskName);
            return true;
        }
    }

    return false; // No suitable developer found
}

module.exports = assignTaskRecursively;
