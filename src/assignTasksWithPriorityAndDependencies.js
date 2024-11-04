

const GraphUtil = require('./utils/GraphUtil');
const sortTasksByPriority = require('./helpers/sortTasksByPriority');
const assignTaskRecursively = require('./helpers/assignTaskRecursively');

/**
 * Assigns tasks to developers based on task priority and dependencies.
 *
 * @param {Array} developers - The list of developers available for task assignment.
 * @param {Array} tasks - The list of tasks to be assigned.
 * @returns {Object} - An object containing assigned tasks per developer and unassigned tasks.
 */
function assignTasksWithPriorityAndDependencies(developers, tasks) {
    const taskAssignments = {};
    const unassignedTasks = [];
    const assignedTasks = new Set();

    developers.forEach(dev => {
        taskAssignments[dev.name] = { tasks: [], totalHours: 0 };
    });

    const sortedTasks = sortTasksByPriority(tasks);
    const graphUtil = new GraphUtil(sortedTasks);

    // Separate tasks with and without dependencies
    const tasksWithoutDependencies = sortedTasks.filter((_, index) => graphUtil.hasNoDependencies(index));
    const tasksWithDependencies = sortedTasks.filter((_, index) => !graphUtil.hasNoDependencies(index));

    const allTasksSorted = [...tasksWithoutDependencies, ...tasksWithDependencies];

    // Attempt to assign each task
    allTasksSorted.forEach(task => {
        if (!assignTaskRecursively(task, sortedTasks, developers, taskAssignments, assignedTasks)) {
            unassignedTasks.push(task.taskName);
        }
    });
// Transform task assignments for output
    const formattedAssignments = {};
    for (const [devName, { tasks, totalHours }] of Object.entries(taskAssignments)) {
        formattedAssignments[devName] = {
            tasks: tasks.join(', '), // Join task names with a comma
            totalHours
        };
    }

    // console.log("developers:", formattedAssignments);

    return { developers: formattedAssignments, unassignedTasks };
}

module.exports = assignTasksWithPriorityAndDependencies;
