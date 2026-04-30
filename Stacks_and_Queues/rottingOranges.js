// Leetcode: 994. Rotting Oranges
// Given a grid of integers where each integer can be 0, 1, or 2, representing an empty cell, 
// a fresh orange, or a rotten orange respectively, 
// determine the minimum number of minutes that must elapse until no cell has a fresh orange. 
// If this is impossible, return -1.

// Time Complexity: O(m * n) where m is the number of rows and n is the number of columns in the grid.
// Space Complexity: O(m * n) in the worst case when all the oranges are rotten and we have to push all the rotten oranges to the queue.
const rottingOranges = (grid) => {

    let m = grid.length;
    let n = grid[0].length;

    let queue = [];

    // Pushing all the rotten mangoes to the queue
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 2){
                queue.push([i, j, 0]);
            }
        }
    }


    // Now we will start the BFS and find the minimum time required to rot all the oranges and 
    // if there is any fresh orange left then we will return -1 otherwise 
    // we will return the maximum time required to rot all the oranges.
    let maxMin = 0;
    while(queue.length){
        let [x, y, min] = queue.shift();

        // Right side 
        if(y < n - 1 && grid[x][y + 1] === 1){
            grid[x][y + 1] = 2;
            queue.push([x, y + 1, min + 1]);
        }
        
        // Left side 
        if(y > 0 && grid[x][y - 1] === 1){
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, min + 1]);
        }

        // Top side
        if(x > 0 && grid[x - 1][y] === 1){
            grid[x - 1][y] = 2;
            queue.push([x - 1, y, min + 1]);
        }

        // Bottom side 
        if(x < m - 1 && grid[x + 1][y] === 1){
            grid[x + 1][y] = 2;
            queue.push([x + 1, y, min + 1]);
        }

        maxMin = Math.max(maxMin, min);
    }

    // Checking if there is any fresh orange left. 
    // If there is any fresh orange left then we will return -1 otherwise
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 1){
                return -1;
            }
        }
    }
    return maxMin;
}

console.log(rottingOranges([[2,1,1],[1,1,0],[0,1,1]]));
console.log(rottingOranges([[2,1,1],[0,1,1],[1,0,1]]));
console.log(rottingOranges([[0,2]]));