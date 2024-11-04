/**
 * Sorts tasks based on their priority in descending order.
 *
 * @param {Array} tasks - The list of tasks to sort.
 * @returns {Array} - The sorted array of tasks based on priority.
 */

function sortTasksByPriority(tasks) {
    return tasks.sort((a, b) => b.priority - a.priority);
}

module.exports = sortTasksByPriority;
