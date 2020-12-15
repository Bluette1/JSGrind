/**
 * https://www.hackerrank.com/challenges/encryption/problem
 * 
 * @param {String} str 
 */
const encrypt = (str) => {
  const { length } = str;

  // Calculate rows and columns
  // These are the rules:
  // Math.floor(sqrt(L)) <= rows <= columns <= Math.ceil(sqrt(L))
  // rows x columns >= L
  // One can easily deduce that since rows and columns have to be whole numbers,
  // rows will always be equal or greater than Math.floor(sqrt(L))
  // columns will always be equal to Math.ceil(sqrt(L))
  // rows can be equal to rows
  // while ensuring we also stick to other constraint rows x columns >= L,
  // since (rows x columns) squared >= L squared
  const cols = Math.ceil(Math.sqrt(length));

  // Create our 2D array
  const grid = [];
  for (let i = 0; i < length; i += cols) {
    // Break up the string into rows
    const row = str.slice(i, i + cols);
    grid.push(row.split(''));
  }

  // instead of the usual row by col traversal we now do the reverse,
  // a col by row traversal
  const encryptResult = [];
  for (let j = 0; j < cols; j += 1) {
    let encrypted = '';
    for (let i = 0; i < grid.length; i += 1) {
      if (grid[i][j]) {
        encrypted += grid[i][j];
      }
    }
    encryptResult.push(encrypted);
  }
  return encryptResult.join(' ');
};

// encrypt('haveaniceday');

// encrypt('ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots');

encrypt('chillout');
