/**
 * Represents a utility for creating a graph from
 * a list of tasks.
 */

class GraphUtil {
    /**
     * Initiallizes the GraphUtil with the provided tasks.
     * @param {Array} tasks - the list of tasks to create a graph from.
     */
    constructor(tasks) {
        this.tasks = tasks;
        this.MATRIX_SIZE = tasks.length;
        this.graphMatrix = this.createGraph();
    }

    /**
     * Creates an adjacency matrix representing the dependencies between tasks.
     * @returns {Array} - The generated graph matrix
     */
    createGraph() {
        const graphMatrix = Array.from({ length: this.MATRIX_SIZE }, () => Array(this.MATRIX_SIZE).fill(false));
        const sortedTasks = this.tasks;

        sortedTasks.forEach((task, i) => {
            task.dependencies.forEach(dependency => {
                const dependencyIndex = this.getTaskIndexByName(dependency);
                if (dependencyIndex !== -1) {
                    graphMatrix[i][dependencyIndex] = true;
                }
            });
        });
        return graphMatrix;
    }

    /**
     * Gets the index of a task by its name.
     *
     * @param {string} taskName - The name of the task to find.
     * @returns {number} - The index of the task if found, otherwise -1.
     */
    getTaskIndexByName(taskName) {
        return this.tasks.findIndex(task => task.taskName === taskName);
    }

    /**
     * Checks if the task at the specified column index has no dependencies.
     *
     * @param {number} colIndex - The column index of the task to check.
     * @returns {boolean} - Returns true if the task has no dependencies, false otherwise.
     */
    hasNoDependencies(colIndex) {
        return this.graphMatrix.every(row => !row[colIndex]);
    }
}

module.exports = GraphUtil;
