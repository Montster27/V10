// A simple script to make merge-branches.sh executable
const fs = require('fs');
const path = '/Users/montysharma/Documents/V10/simplified/merge-branches.sh';

try {
  // Get current file permissions
  const stats = fs.statSync(path);
  
  // Add execute permissions for user, group, and others
  const mode = stats.mode | 0o111;
  
  // Set new permissions
  fs.chmodSync(path, mode);
  
  console.log('Successfully made merge-branches.sh executable');
} catch (error) {
  console.error('Error making file executable:', error);
}
